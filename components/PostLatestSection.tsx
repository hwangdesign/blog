"use client";

import { useState, useEffect } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { CARD_GRID } from "@/lib/classes";
import type { Post } from "@/lib/data";

const ROWS = 2;
// CARD_GRID: 1 col(<sm), 2(sm), 3(lg), 4(2xl) → 2 rows = 2, 4, 6, 8
const getVisibleCount = () => {
  if (typeof window === "undefined") return 6; // SSR default (3 cols)
  if (window.innerWidth >= 1536) return 8; // 2xl
  if (window.innerWidth >= 1024) return 6; // lg
  if (window.innerWidth >= 640) return 4; // sm
  return 2; // default
};

type PostLatestSectionProps = {
  posts: Post[];
};

export function PostLatestSection({ posts }: PostLatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(2); // SSR: mobile default, useEffect updates on mount
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const initialVisible = expanded ? posts.length : Math.min(visibleCount, posts.length);
  const visible = posts.slice(0, initialVisible);
  const hasMore = posts.length > visible.length;

  return (
    <>
      <div className={CARD_GRID}>
        {visible.map((p) => (
          <ArticleCard key={p.id} post={p} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center sm:mt-16">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="inline-flex items-center gap-4 text-black font-medium hover:underline"
          >
            더보기
          </button>
        </div>
      )}
    </>
  );
}
