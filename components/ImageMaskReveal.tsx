"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageMaskRevealProps = {
  src: string;
  alt?: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
};

/** 뷰포트 진입 시 위→아래 마스크 리빌 적용 이미지 */
export function ImageMaskReveal({
  src,
  alt = "",
  fill = true,
  className = "",
  priority = false,
}: ImageMaskRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`img-reveal-wrapper absolute inset-0 ${inView ? "in-view" : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`card-img-mask-reveal object-cover ${className}`.trim()}
        priority={priority}
      />
    </div>
  );
}
