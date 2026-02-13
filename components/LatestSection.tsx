"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { CARD_MASONRY } from "@/lib/classes";
import type { Post } from "@/lib/data";

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 8;

type LatestSectionProps = {
  posts: Post[];
};

export function LatestSection({ posts }: LatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, posts.length));
  };

  return (
    <>
      <div className={CARD_MASONRY}>
        {visible.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
      {hasMore && (
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
      )}
    </>
  );
}
