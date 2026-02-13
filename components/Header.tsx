"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FillHoverLink } from "@/components/FillHoverLink";
import { CATEGORIES } from "@/lib/data";
import { TOPIC_FILL_HOVER_LIGHT } from "@/lib/classes";
import { Icon } from "@/components/Icon";
import { CONTAINER } from "@/lib/classes";
import { usePageBackground } from "@/contexts/PageBackgroundContext";

const TOPIC_LINKS = [
  "3D design",
  "Accessibility",
  "AI",
  "Design systems",
  "Collaboration",
  "Design",
  "Dev Mode",
  "Figma Design",
  "Hiring",
  "Research",
  "UI/UX",
  "Prototyping",
];

function toTopicSlug(t: string) {
  return t.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
}

function MenuContent({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="flex h-20 shrink-0 items-center justify-end px-6 border-b border-white/20">
        <button
          type="button"
          onClick={onClose}
          className="w-10 h-10 flex items-center justify-center text-white cursor-pointer"
          aria-label="Close menu"
        >
          <Icon name="close" size={32} className="text-white" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-6 space-y-0">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.id}`}
            onClick={onClose}
            className="block py-2 pl-0 pr-4 text-2xl font-medium text-white hover:underline"
          >
            {cat.label}
          </Link>
        ))}
        <div className="h-12" aria-hidden />
        <div className="-mx-6 pt-8 pb-6 border-t border-white/20">
          <div className="flex flex-wrap gap-2 pt-2 px-6">
            {TOPIC_LINKS.map((topic) => (
              <FillHoverLink
                key={topic}
                href={`/topic/${toTopicSlug(topic)}`}
                className={TOPIC_FILL_HOVER_LIGHT}
                onClick={onClose}
              >
                {topic}
              </FillHoverLink>
            ))}
          </div>
        </div>
        <Link
          href="#newsletter"
          onClick={onClose}
          className="block mt-6 bg-brand-green px-6 py-4 text-center font-medium text-white hover:underline"
        >
          Subscribe
        </Link>
      </nav>
    </>
  );
}

const SCROLL_THRESHOLD = 10;
const TOP_THRESHOLD = 20;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);
  const pageBg = usePageBackground();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current <= TOP_THRESHOLD) {
        setVisible(true);
      } else if (current > lastScrollY.current + SCROLL_THRESHOLD) {
        setVisible(false);
      } else if (current < lastScrollY.current - SCROLL_THRESHOLD) {
        setVisible(true);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const pageBgColor = pageBg?.backgroundColor;
  const hasPageBg =
    typeof pageBgColor === "string" && pageBgColor.length > 0;
  const headerBgClass = hasPageBg ? "" : "bg-[var(--background)]";
  const headerBgStyle = hasPageBg
    ? { backgroundColor: pageBgColor }
    : undefined;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/20 transition-transform duration-300 ease-out ${headerBgClass} ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={headerBgStyle}
    >
      <div className={CONTAINER}>
        <div className="flex h-20 sm:h-24 items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold text-black"
          >
            texttotext
          </Link>

          {/* 햄버거 버튼 - 모바일/PC 공통 (Material Symbols) */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex items-center justify-center w-10 h-10 text-black cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Icon
              name={menuOpen ? "close" : "menu"}
              size={32}
              className="text-black transition-transform"
            />
          </button>
        </div>
      </div>

      {/* 메뉴 레이어: Portal로 body에 렌더 (GNB transform 영향 방지) */}
      {mounted &&
        createPortal(
          <>
            {/* PC: 우측 고정 너비 드로어 + 백드롭 */}
            <div
              className={`hidden md:block fixed inset-0 z-[100] ${
                menuOpen ? "visible" : "invisible pointer-events-none"
              }`}
              aria-hidden={!menuOpen}
            >
              <button
                type="button"
                onClick={closeMenu}
                className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ${
                  menuOpen ? "opacity-100" : "opacity-0"
                }`}
                aria-label="Close menu"
              />
              <aside
                className={`absolute right-0 top-0 bottom-0 w-[400px] max-w-[85vw] bg-black flex flex-col shadow-2xl transition-transform duration-200 ease-out ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                role="dialog"
                aria-modal
                aria-label="Menu"
              >
                <MenuContent onClose={closeMenu} />
              </aside>
            </div>

            {/* 모바일: 전체 화면 슬라이드업 메뉴 */}
            <div
              className={`md:hidden fixed inset-0 z-[100] bg-black flex flex-col transition-transform duration-200 ease-out ${
                menuOpen ? "translate-y-0 visible" : "translate-y-full invisible pointer-events-none"
              }`}
              aria-modal
              aria-label="Menu"
            >
              <MenuContent onClose={closeMenu} />
            </div>
          </>,
          document.body
        )}
    </header>
  );
}
