"use client";

import { useEffect, useRef, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import type { Post } from "@/lib/data";

type LazyCardProps = {
  post: Post;
  index?: number;
};

export function LazyCard({ post, index }: LazyCardProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || loaded) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loaded]);

  if (!loaded) {
    return (
      <div
        ref={ref}
        className="min-h-[320px] w-full overflow-hidden rounded bg-slate-100"
        aria-hidden
      />
    );
  }

  return (
    <div ref={ref}>
      <ArticleCard post={post} index={index} />
    </div>
  );
}
