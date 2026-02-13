"use client";

import { useEffect, useRef, useState } from "react";
import { LazyCard } from "@/components/LazyCard";
import { CARD_GRID } from "@/lib/classes";
import type { Post } from "@/lib/data";

type CardRevealGridProps = {
  posts: Post[];
  className?: string;
};

export function CardRevealGrid({ posts, className = "" }: CardRevealGridProps) {
  const [revealed, setRevealed] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

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
    <div ref={gridRef} className={`${CARD_GRID} ${className}`.trim()}>
      {posts.map((post, i) => (
        <div
          key={post.id}
          className={`card-reveal ${revealed ? "in-view" : ""}`}
          style={{ "--stagger": i } as React.CSSProperties}
        >
          <LazyCard post={post} index={i} />
        </div>
      ))}
    </div>
  );
}
