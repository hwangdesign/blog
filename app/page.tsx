import { ArticleCard } from "@/components/ArticleCard";
import { HeroCard } from "@/components/HeroCard";
import { LatestSection } from "@/components/LatestSection";
import { Newsletter } from "@/components/Newsletter";
import { getFeaturedPosts, getLatestPosts, POSTS } from "@/lib/data";
import { CONTAINER_SECTION, CARD_GRID, SECTION_TITLE } from "@/lib/classes";

export default function HomePage() {
  const latest = getLatestPosts(12);
  const insightsPosts = POSTS.filter((p) => p.category === "insights").slice(0, 3);
  const heroPost = getFeaturedPosts(1)[0];

  return (
    <div className={CONTAINER_SECTION}>
      {heroPost && (
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <HeroCard post={heroPost} />
        </section>
      )}

      <section className="mb-12 sm:mb-16 lg:mb-24">
        <h2 className={SECTION_TITLE}>인기글</h2>
        <div className={CARD_GRID}>
          {insightsPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {false && (
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <Newsletter />
        </section>
      )}

      <section>
        <h2 className={SECTION_TITLE}>최신글</h2>
        <LatestSection posts={latest} />
      </section>
    </div>
  );
}
