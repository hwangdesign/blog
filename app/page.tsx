import { LatestSection } from "@/components/LatestSection";
import { Newsletter } from "@/components/Newsletter";
import { getLatestPosts } from "@/lib/data";
import { CONTAINER_SECTION } from "@/lib/classes";

export default function HomePage() {
  const posts = getLatestPosts(50);

  return (
    <div className={CONTAINER_SECTION}>
      <section>
        <LatestSection posts={posts} />
      </section>

      {false && (
        <section className="mb-12 sm:mb-16 lg:mb-24">
          <Newsletter />
        </section>
      )}
    </div>
  );
}
