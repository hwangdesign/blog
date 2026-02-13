"use client";

import { useEffect } from "react";
import { useDominantColors } from "@/hooks/useDominantColor";
import { usePageBackground } from "@/contexts/PageBackgroundContext";

export function PostPageWithBackground({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  const pastelColors = useDominantColors(imageUrl);
  const { setBackgroundColor } = usePageBackground() ?? {};

  useEffect(() => {
    if (!pastelColors) {
      setBackgroundColor?.(null);
      return () => setBackgroundColor?.(null);
    }
    setBackgroundColor?.(pastelColors[0]);
    return () => setBackgroundColor?.(null);
  }, [pastelColors, setBackgroundColor]);

  const bgStyle = pastelColors
    ? { backgroundColor: pastelColors[0] }
    : { backgroundColor: "#ffffff" };

  return (
    <div
      className="min-h-[50vh] transition-[background,background-color] duration-500 ease-out"
      style={bgStyle}
    >
      {children}
    </div>
  );
}
