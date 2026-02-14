import { use } from "react";
import { notFound } from "next/navigation";
import { ImageMaskReveal } from "@/components/ImageMaskReveal";
import Link from "next/link";
import { getPostBySlug, getLatestPosts, getPrevNextPosts } from "@/lib/data";
import { formatDate } from "@/lib/dateUtils";
import { FillHoverLink } from "@/components/FillHoverLink";
import { PostLatestSection } from "@/components/PostLatestSection";
import { PostPageWithBackground } from "@/components/PostPageWithBackground";
import { CONTAINER, CONTAINER_SECTION, TOPIC_FILL_HOVER } from "@/lib/classes";

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const latest = getLatestPosts(12).filter((p) => p.id !== post.id);
  const { prev, next } = getPrevNextPosts(slug);

  return (
    <PostPageWithBackground imageUrl={post.image}>
    <article className={CONTAINER_SECTION}>
      <header>
        <p className="text-sm text-black">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-1 line-clamp-2 text-2xl font-bold tracking-[-2px] text-black sm:mt-2 sm:text-3xl md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.topics.map((topic) => (
            <FillHoverLink
              key={topic}
              href={`/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`}
              className={TOPIC_FILL_HOVER}
            >
              {topic}
            </FillHoverLink>
          ))}
        </div>
      </header>
      <div className="relative mt-8 aspect-video overflow-hidden bg-transparent sm:mt-12">
        <ImageMaskReveal
          src={post.image}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="prose prose-slate mt-12 max-w-none sm:mt-16">
        <p className="text-sm text-black sm:text-base">
          {post.excerpt}
        </p>
        <p className="mt-6 text-sm text-black sm:mt-8 sm:text-base">
          (Here you would render full post content — e.g. from MDX or CMS.)
        </p>
      </div>

      {/* ------------ 이전글 | 다음글 (구분선 풀 너비) ------------ */}
      <div className="mt-16 w-screen relative left-1/2 -translate-x-1/2 border-t border-black/20 pt-12 pb-16 sm:mt-24 sm:pt-16 sm:pb-24">
        <div className={CONTAINER}>
          <nav className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
          {/* 이전글: ← 고정, 제목은 별도 영역 */}
          <div className="min-w-0">
            {prev ? (
              <Link href={`/post/${prev.slug}`} className="group flex items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-lg font-black text-black sm:text-xl" aria-hidden>←</span>
                <div className="min-w-0 flex-1">
                  <span className="block text-sm text-black/60 sm:text-base">이전글</span>
                  <span className="mt-1 line-clamp-2 text-lg font-black text-black leading-tight group-hover:underline group-active:underline sm:text-xl">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-lg text-black/40 sm:text-xl" aria-hidden>←</span>
                <div>
                  <span className="block text-sm text-black/60 sm:text-base">이전글</span>
                  <span className="mt-1 text-black/40">—</span>
                </div>
              </div>
            )}
          </div>

          {/* 다음글: 제목 영역, → 고정 */}
          <div className="min-w-0 sm:text-right">
            {next ? (
              <Link href={`/post/${next.slug}`} className="group flex flex-row-reverse items-center gap-3 sm:gap-4" >
                <span className="shrink-0 text-lg font-black text-black sm:text-xl" aria-hidden>→</span>
                <div className="min-w-0 flex-1 text-left sm:text-right">
                  <span className="block text-sm text-black/60 sm:text-base">다음글</span>
                  <span className="mt-1 line-clamp-2 text-lg font-black text-black leading-tight group-hover:underline group-active:underline sm:text-xl">
                    {next.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex flex-row-reverse items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-lg text-black/40 sm:text-xl" aria-hidden>→</span>
                <div className="text-left sm:text-right">
                  <span className="block text-sm text-black/60 sm:text-base">다음글</span>
                  <span className="mt-1 text-black/40">—</span>
                </div>
              </div>
            )}
          </div>
        </nav>
        </div>
      </div>

      {/* ------------ 최근글 카드: 2줄까지 노출 + 더보기 ------------ */}
      {latest.length > 0 && (
        <section className="w-screen relative left-1/2 -translate-x-1/2 border-t border-black/20 pt-12 sm:pt-16">
          <div className={CONTAINER}>
            <PostLatestSection posts={latest} />
          </div>
        </section>
      )}
    </article>
    </PostPageWithBackground>
  );
}
