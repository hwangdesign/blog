"use client";

import { useState, useEffect } from "react";
import { rgbToPastel, rgbToPastelWithSaturation } from "@/lib/colorUtils";

const SAMPLE_SIZE = 50;
const BUCKET_SIZE = 32;

/** 버킷 키 → RGB 튜플 변환 */
function keyToRgb(key: string): [number, number, number] {
  const [br, bg, bb] = key.split("-").map(Number);
  const r = (br * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;
  const g = (bg * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;
  const b = (bb * BUCKET_SIZE + BUCKET_SIZE / 2) | 0;
  return [r, g, b];
}

/**
 * 이미지 URL에서 주조색 2개를 추출하고 파스텔 배경색으로 변환
 */
export function useDominantColors(imageUrl: string | null): [string, string] | null {
  const [pastelColors, setPastelColors] = useState<[string, string] | null>(null);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          setPastelColors(["rgb(245 245 245)", "rgb(235 235 235)"]);
          return;
        }

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

        // 버킷 없을 시 기본 중성 그라데이션 (무조건 2색 반환)
        if (buckets.size === 0) {
          setPastelColors(["rgb(245 245 245)", "rgb(235 235 235)"]);
          return;
        }

        // 상위 2개 버킷 추출 (빈도순) - 항상 2개
        const sorted = [...buckets.entries()].sort((a, b) => b[1] - a[1]);
        const [key1, key2] = [sorted[0]![0], sorted[1]?.[0] ?? sorted[0]![0]];

        const [r1, g1, b1] = keyToRgb(key1);
        const [r2, g2, b2] = keyToRgb(key2);

        const color1 = rgbToPastel(r1, g1, b1);
        const color2 = rgbToPastelWithSaturation(r2, g2, b2, 80);
        setPastelColors([color1, color2]);
      } catch {
        setPastelColors(["rgb(245 245 245)", "rgb(235 235 235)"]);
      }
    };

    img.onerror = () => {
      setPastelColors(["rgb(245 245 245)", "rgb(235 235 235)"]);
    };
    img.src = imageUrl;
  }, [imageUrl]);

  return pastelColors;
}
