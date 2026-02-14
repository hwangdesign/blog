import Link from "next/link";
import { FillHoverLink } from "@/components/FillHoverLink";
import { TOPIC_FILL_HOVER } from "@/lib/classes";
import type { Post } from "@/lib/data";

type ArticleCardProps = {
  post: Post;
  size?: "default" | "large";
};

export function ArticleCard({ post, size = "default" }: ArticleCardProps) {
  const isLarge = size === "large";

  const getTopicSlug = (topic: string) =>
    topic.toLowerCase().replace(/\s+/g, "-");

  return (
    <article>
      <Link href={`/post/${post.slug}`} className="group block min-h-[44px] min-w-[44px]">
        <div className="group/image relative w-full overflow-hidden bg-transparent">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="card-img-mask-reveal block w-full h-auto transition-transform duration-500 ease-out group-hover/image:scale-105 group-active/image:scale-105"
          />
          {/* 45도 대각선 (우상단→좌하단, 8px) - 이미지 영역 호버 시만 노출 */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden
          >
            <div
              className="absolute left-1/2 top-1/2 w-[8px] h-[300%] bg-page-same origin-center -translate-x-1/2 -translate-y-1/2 rotate-[45deg] opacity-0 transition-opacity duration-300 ease-out group-hover/image:opacity-100 group-active/image:opacity-100"
            />
          </div>
        </div>
        <div className={`group/title ${isLarge ? "mt-6 sm:mt-8" : "mt-4 sm:mt-6"}`}>
          <h2
            className={`max-w-fit font-black text-black leading-tight group-hover/title:underline group-active/title:underline ${
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

      {/* 토픽 박스: 커서 방사형 채우기 효과 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {post.topics.slice(0, 3).map((topic) => (
          <FillHoverLink
            key={topic}
            href={`/topic/${getTopicSlug(topic)}`}
            className={TOPIC_FILL_HOVER}
          >
            {topic}
          </FillHoverLink>
        ))}
      </div>
    </article>
  );
}
