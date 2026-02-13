"use client";

import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { CARD_GRID } from "@/lib/classes";
import type { Post } from "@/lib/data";

const INITIAL_COUNT = 8;

type LatestSectionProps = {
  posts: Post[];
};

export function LatestSection({ posts }: LatestSectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visible = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      <div className={CARD_GRID}>
        {visible.map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-12 text-center sm:mt-16">
          <button
            type="button"
            onClick={() => setVisibleCount(posts.length)}
            className="inline-flex items-center gap-4 text-black font-medium hover:underline"
          >
            더보기
          </button>
        </div>
      )}
    </>
  );
}
