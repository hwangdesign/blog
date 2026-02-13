import { use } from "react";
import { POSTS, sortByLatest } from "@/lib/data";
import { CardRevealGrid } from "@/components/CardRevealGrid";
import { CONTAINER_SECTION } from "@/lib/classes";

export default function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const topicLabel = slug
    .replace(/-/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
  const toTopicSlug = (t: string) =>
    t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
  const posts = sortByLatest(
    POSTS.filter((p) => p.topics.some((t) => toTopicSlug(t) === slug))
  );

  return (
    <div className={CONTAINER_SECTION}>
      <h1 className="text-3xl font-semibold text-black sm:text-4xl md:text-center">
        {topicLabel}
      </h1>
      {posts.length === 0 ? (
        <p className="mt-8 text-black sm:mt-12">No posts in this topic yet.</p>
      ) : (
        <CardRevealGrid posts={posts} className="mt-12 sm:mt-16" />
      )}
    </div>
  );
}
