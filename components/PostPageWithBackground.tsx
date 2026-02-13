"use client";

import { useEffect } from "react";
import { useDominantColor } from "@/hooks/useDominantColor";
import { usePageBackground } from "@/contexts/PageBackgroundContext";

export function PostPageWithBackground({
  imageUrl,
  children,
}: {
  imageUrl: string;
  children: React.ReactNode;
}) {
  const pastelColor = useDominantColor(imageUrl);
  const { setBackgroundColor } = usePageBackground() ?? {};

  useEffect(() => {
    setBackgroundColor?.(pastelColor ?? null);
    return () => setBackgroundColor?.(null);
  }, [pastelColor, setBackgroundColor]);

  return (
    <div
      className="min-h-[50vh] transition-colors duration-500 ease-out"
      style={{ backgroundColor: pastelColor ?? "#ffffff" }}
    >
      {children}
    </div>
  );
}
