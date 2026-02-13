import Link from "next/link";
import type { Post } from "@/lib/data";

type HeroCardProps = {
  post: Post;
};

export function HeroCard({ post }: HeroCardProps) {
  return (
    <article className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8 lg:gap-12">
      <div className="flex min-w-0 flex-1 basis-1/2 flex-col justify-center sm:order-1">
        <Link href={`/post/${post.slug}`} className="group block">
          <h2 className="max-w-fit font-black text-black leading-tight group-hover:underline text-xl sm:text-2xl md:text-3xl">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 text-sm text-black sm:mt-4 sm:text-base">
            {post.excerpt}
          </p>
        </Link>
      </div>
      <Link
        href={`/post/${post.slug}`}
        className="group flex min-w-0 shrink-0 basis-1/2 sm:order-2"
      >
        <div className="relative aspect-square overflow-hidden bg-slate-200 transition-shadow group-hover:ring-[16px] group-hover:ring-black">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            className="block h-full w-full object-cover"
          />
        </div>
      </Link>
    </article>
  );
}
