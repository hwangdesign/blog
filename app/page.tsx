import { ArticleCard } from "@/components/ArticleCard";
import { LatestSection } from "@/components/LatestSection";
import { Newsletter } from "@/components/Newsletter";
import { getLatestPosts, POSTS } from "@/lib/data";
import { CONTAINER_SECTION, CARD_GRID, SECTION_TITLE } from "@/lib/classes";

export default function HomePage() {
  const latest = getLatestPosts(12);
  const insightsPosts = POSTS.filter((p) => p.category === "insights").slice(0, 3);

  return (
    <div className={CONTAINER_SECTION}>
      <section className="mb-12 sm:mb-16 lg:mb-24">
        <h2 className={SECTION_TITLE}>Insights on software</h2>
        <div className={CARD_GRID}>
          {insightsPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="mb-12 sm:mb-16 lg:mb-24">
        <Newsletter />
      </section>

      <section>
        <h2 className={SECTION_TITLE}>The latest</h2>
        <LatestSection posts={latest} />
      </section>
    </div>
  );
}
