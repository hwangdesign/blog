"use client";

import { useEffect, useState } from "react";
import { FillHoverButton } from "@/components/FillHoverButton";
import { Icon } from "@/components/Icon";

/** 0.5뷰포트 스크롤 시 탑 버튼 표시 */
const SCROLL_THRESHOLD = 0.5;

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const threshold = window.innerHeight * SCROLL_THRESHOLD;
      setVisible(window.scrollY >= threshold);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8"
      aria-label="맨 위로"
    >
      <FillHoverButton
        onClick={scrollToTop}
        className="btn-fill-hover bg-page inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-black text-black shadow-lg"
      >
        <span className="relative z-[1]">
          <Icon name="expand_less" size={24} />
        </span>
      </FillHoverButton>
    </div>
  );
}
