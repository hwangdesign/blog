import { use } from "react";
import Link from "next/link";
import { getPostsByCategory, CATEGORIES } from "@/lib/data";
import { CardRevealGrid } from "@/components/CardRevealGrid";
import type { Category } from "@/lib/data";
import { CONTAINER, CONTAINER_SECTION } from "@/lib/classes";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const category = CATEGORIES.find((c) => c.id === id);
  const posts = getPostsByCategory(id as Category);

  if (!category) {
    return (
      <div className={`${CONTAINER} py-24 text-center`}>
        <p className="text-black">Category not found.</p>
        <Link href="/" className="mt-8 inline-block text-black hover:underline">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className={CONTAINER_SECTION}>
      <h1 className="text-2xl font-bold text-black sm:text-3xl md:text-center">
        {category.label}
      </h1>
      <CardRevealGrid posts={posts} className="mt-12 sm:mt-16" />
    </div>
  );
}
