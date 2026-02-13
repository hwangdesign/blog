"use client";

import { useEffect, useRef, useState } from "react";
import { FillHoverButton } from "@/components/FillHoverButton";
import { LazyCard } from "@/components/LazyCard";
import { CARD_GRID } from "@/lib/classes";
import type { Post } from "@/lib/data";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 6;

type PostLatestSectionProps = {
  posts: Post[];
};

export function PostLatestSection({ posts }: PostLatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, posts.length));
  };

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

  return (
    <>
      <div ref={gridRef} className={CARD_GRID}>
        {visible.map((p, i) => (
          <div
            key={p.id}
            className={`card-reveal ${revealed ? "in-view" : ""}`}
            style={{ "--stagger": i } as React.CSSProperties}
          >
            <LazyCard post={p} index={i} />
          </div>
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center sm:mt-16">
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
