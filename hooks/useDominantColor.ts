"use client";

import { useState, useEffect } from "react";
import { rgbToPastel } from "@/lib/colorUtils";

const SAMPLE_SIZE = 50;
const BUCKET_SIZE = 32;

/**
 * 이미지 URL에서 주조색을 추출하고 파스텔 배경색으로 변환
 */
export function useDominantColor(imageUrl: string | null): string | null {
  const [pastelColor, setPastelColor] = useState<string | null>(null);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const scale = Math.min(SAMPLE_SIZE / img.width, SAMPLE_SIZE / img.height);
        canvas.width = Math.max(1, img.width * scale);
        canvas.height = Math.max(1, img.height * scale);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        const buckets = new Map<string, number>();

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i]!;
          const g = data[i + 1]!;
          const b = data[i + 2]!;
          const a = data[i + 3]!;
          if (a < 128) continue;

          const key = `${Math.floor(r / BUCKET_SIZE)}-${Math.floor(g / BUCKET_SIZE)}-${Math.floor(b / BUCKET_SIZE)}`;
          buckets.set(key, (buckets.get(key) ?? 0) + 1);
        }

        if (buckets.size === 0) return;

        let maxCount = 0;
        let dominantKey = "";
        for (const [key, count] of buckets) {
          if (count > maxCount) {
            maxCount = count;
            dominantKey = key;
          }
        }

        const [br, bg, bb] = dominantKey.split("-").map(Number);
        const r = (br * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;
        const g = (bg * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;
        const b = (bb * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;

        const color = rgbToPastel(r, g, b);
        setPastelColor(color);
      } catch {
        // CORS 등으로 실패 시 무시
      }
    };

    img.onerror = () => {};
    img.src = imageUrl;
  }, [imageUrl]);

  return pastelColor;
}
