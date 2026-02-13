import Link from "next/link";

function toTopicSlug(t: string) {
  return t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

type PopularTopicCardProps = {
  topics: string[];
};

const TOPIC_BTN =
  "inline-flex items-center justify-center border-2 border-black bg-transparent px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white rounded-none cursor-pointer w-fit";

/** 인기토픽 12개를 태그 클라우드 스타일로 노출 */
export function PopularTopicCard({ topics }: PopularTopicCardProps) {
  return (
    <nav
      className="flex flex-wrap gap-2 sm:gap-3"
      aria-label="인기 토픽"
    >
      {topics.slice(0, 12).map((topic) => (
        <Link
          key={topic}
          href={`/topic/${toTopicSlug(topic)}`}
          className={TOPIC_BTN}
        >
          {topic}
        </Link>
      ))}
    </nav>
  );
}
