"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

type ShareButtonProps = {
  title: string;
  url: string;
  className?: string;
};

export function ShareButton({ title, url, className = "" }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (typeof navigator === "undefined") return;

    const shareUrl =
      typeof window !== "undefined" && !url.startsWith("http")
        ? `${window.location.origin}${url}`
        : url;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url: shareUrl,
          text: title,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          fallbackCopy(shareUrl);
        }
      }
    } else {
      fallbackCopy(shareUrl);
    }
  };

  const fallbackCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard failed
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center w-10 h-10 text-black transition-colors hover:opacity-70 active:opacity-70 rounded-none cursor-pointer ${className}`}
      aria-label={copied ? "링크 복사됨" : "공유하기"}
      title={copied ? "링크 복사됨" : "공유하기"}
    >
      {copied ? (
        <span className="text-sm font-medium text-black/80">복사됨</span>
      ) : (
        <Icon name="share" size={24} className="text-black" />
      )}
    </button>
  );
}
