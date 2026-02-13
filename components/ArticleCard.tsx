import Link from "next/link";
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
    <article className="group">
      <Link href={`/post/${post.slug}`} className="block min-h-[44px] min-w-[44px] group">
        <div className="relative w-full overflow-hidden bg-slate-200">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            loading="lazy"
            className="block w-full h-auto"
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
