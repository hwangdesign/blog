"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { CARD_MASONRY } from "@/lib/classes";
import type { Post } from "@/lib/data";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

type PostLatestSectionProps = {
  posts: Post[];
};

export function PostLatestSection({ posts }: PostLatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = useCallback(() => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, posts.length));
  }, [posts.length]);

  useEffect(() => {
    if (!hasMore) return;
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore();
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, loadMore]);

  return (
    <>
      <div className={CARD_MASONRY}>
        {visible.map((p) => (
          <ArticleCard key={p.id} post={p} />
        ))}
      </div>
      {hasMore && (
        <>
          <div ref={sentinelRef} className="h-1" aria-hidden />
          <div className="mt-12 text-center sm:mt-16">
          <button
            type="button"
            onClick={loadMore}
            className="inline-flex items-center justify-center gap-2 border-2 border-black bg-white px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white rounded-none"
          >
            더보기
            <span aria-hidden>↓</span>
          </button>
          </div>
        </>
      )}
    </>
  );
}
