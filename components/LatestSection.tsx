"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FillHoverButton } from "@/components/FillHoverButton";
import { LazyCard } from "@/components/LazyCard";
import { PopularTopicCard } from "@/components/PopularTopicCard";
import { CARD_GRID } from "@/lib/classes";
import { getTopicsSortedByPostCount } from "@/lib/data";
import type { Post } from "@/lib/data";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 8;
const POPULAR_TOPIC_COUNT = 12;

type LatestSectionProps = {
  posts: Post[];
};

export function LatestSection({ posts }: LatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  // 인기토픽: 인기순 (글 수 기준) 고정
  const popularTopics = useMemo(
    () => getTopicsSortedByPostCount().slice(0, POPULAR_TOPIC_COUNT),
    []
  );
  // 인기토픽 카드 위치: 진입 시마다 랜덤 (3~10, 0~2·마지막 제외)
  const [insertPosition, setInsertPosition] = useState(4);
  useEffect(() => {
    setInsertPosition(3 + Math.floor(Math.random() * 8));
  }, []);

  // 표시할 슬롯 수: 12개 중 1개는 인기토픽, 나머지는 글 카드
  const totalSlots = visibleCount;
  const postCount = Math.max(0, totalSlots - 1);
  const visiblePosts = posts.slice(0, postCount);
  const hasMore = postCount < posts.length;

  const items: Array<{ type: "post"; post: Post; postIndex: number } | { type: "popular" }> = [];
  let postIdx = 0;
  for (let i = 0; i < totalSlots; i++) {
    if (i === insertPosition) {
      items.push({ type: "popular" });
    } else if (postIdx < visiblePosts.length) {
      items.push({ type: "post", post: visiblePosts[postIdx]!, postIndex: postIdx });
      postIdx++;
    }
  }

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, posts.length + 1));
  };

  return (
    <>
      <div ref={gridRef} className={CARD_GRID}>
        {items.map((item, i) => (
          <div
            key={item.type === "popular" ? "popular-topic" : item.post.id}
            className={`card-reveal ${revealed ? "in-view" : ""} ${
              item.type === "popular" ? "relative py-6 sm:py-0" : ""
            }`}
            style={{ "--stagger": i } as React.CSSProperties}
          >
            {item.type === "popular" ? (
              <>
                {/* 모바일: 스크린 풀 너비 가로 구분선 */}
                <div
                  className="absolute left-1/2 top-0 w-screen -translate-x-1/2 border-t border-black/20 sm:hidden"
                  aria-hidden
                />
                <PopularTopicCard topics={popularTopics} />
                <div
                  className="absolute left-1/2 bottom-0 w-screen -translate-x-1/2 border-b border-black/20 sm:hidden"
                  aria-hidden
                />
              </>
            ) : (
              <LazyCard post={item.post} index={item.postIndex} />
            )}
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center sm:mt-16 isolate">
          <FillHoverButton
            onClick={loadMore}
            className="btn-fill-hover inline-flex items-center justify-center gap-2 border-2 border-black bg-transparent px-8 py-3 text-sm font-semibold text-black rounded-none cursor-pointer"
          >
            <span className="relative z-[1]">더보기</span>
            <span className="relative z-[1]" aria-hidden>↓</span>
          </FillHoverButton>
        </div>
      )}
    </>
  );
}
