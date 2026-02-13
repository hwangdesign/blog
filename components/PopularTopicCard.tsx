"use client";

import { FillHoverLink } from "@/components/FillHoverLink";
import { BTN_FILL_HOVER } from "@/lib/classes";

function toTopicSlug(t: string) {
  return t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

type PopularTopicCardProps = {
  topics: string[];
};

/** 인기토픽 12개를 태그 클라우드 스타일로 노출 */
export function PopularTopicCard({ topics }: PopularTopicCardProps) {
  return (
    <nav
      className="flex flex-wrap gap-2 sm:gap-3"
      aria-label="인기 토픽"
    >
      {topics.slice(0, 12).map((topic) => (
        <FillHoverLink
          key={topic}
          href={`/topic/${toTopicSlug(topic)}`}
          className={BTN_FILL_HOVER}
        >
          {topic}
        </FillHoverLink>
      ))}
    </nav>
  );
}
