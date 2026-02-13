import Link from "next/link";
import type { Post } from "@/lib/data";

type ArticleCardProps = {
  post: Post;
  size?: "default" | "large";
  /** 순서 확인용 넘버링 (0부터 시작, 지정 시 이미지 좌측 상단에 표시) */
  index?: number;
};

export function ArticleCard({ post, size = "default", index }: ArticleCardProps) {
  const isLarge = size === "large";

  const getTopicSlug = (topic: string) =>
    topic.toLowerCase().replace(/\s+/g, "-");

  return (
    <article>
      <Link href={`/post/${post.slug}`} className="group block min-h-[44px] min-w-[44px]">
        <div className="relative w-full overflow-hidden bg-slate-200">
          {index !== undefined && (
            <span
              className="absolute left-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded bg-black/70 text-sm font-bold text-white"
              aria-hidden
            >
              {index}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 backdrop-blur-md bg-white/20 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
            aria-hidden
          />
        </div>
        <div className={isLarge ? "mt-6 sm:mt-8" : "mt-4 sm:mt-6"}>
          <h2
            className={`max-w-fit font-black text-black leading-tight group-hover:underline ${
              isLarge ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
            }`}
          >
            {post.title}
          </h2>
          <p className="mt-4 text-sm text-black line-clamp-2 sm:mt-4 sm:text-sm">
            {post.excerpt}
          </p>
        </div>
      </Link>

      {/* 토픽 박스: 각각 개별 호버 (topic-box--dark) */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.topics.slice(0, 3).map((topic) => (
          <Link
            key={topic}
            href={`/topic/${getTopicSlug(topic)}`}
            className="topic-box topic-box--dark"
          >
            {topic}
          </Link>
        ))}
      </div>
    </article>
  );
}
