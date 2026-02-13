import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getLatestPosts } from "@/lib/data";
import { formatDate } from "@/lib/dateUtils";
import { ArticleCard } from "@/components/ArticleCard";
import { PostPageWithBackground } from "@/components/PostPageWithBackground";
import { CONTAINER_SECTION, CARD_GRID, SECTION_TITLE } from "@/lib/classes";

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const latest = getLatestPosts(12).filter((p) => p.id !== post.id);

  return (
    <PostPageWithBackground imageUrl={post.image}>
    <article className={CONTAINER_SECTION}>
      <header>
        <p className="text-sm text-black">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-4 text-2xl font-bold text-black sm:mt-6 sm:text-3xl md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.topics.map((topic) => (
            <Link
              key={topic}
              href={`/topic/${topic.toLowerCase().replace(/\s+/g, "-")}`}
              className="topic-box topic-box--dark topic-box--responsive"
            >
              {topic}
            </Link>
          ))}
        </div>
      </header>
      <div className="relative mt-8 aspect-video overflow-hidden bg-slate-200 sm:mt-12">
        <Image
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

      {latest.length > 0 && (
        <section className="mt-16 border-t border-black/20 pt-12 sm:mt-24 sm:pt-16">
          <h2 className={SECTION_TITLE}>The latest</h2>
          <div className={`mt-8 sm:mt-12 ${CARD_GRID}`}>
            {latest.map((p) => (
              <ArticleCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </article>
    </PostPageWithBackground>
  );
}
