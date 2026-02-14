/**
 * RGB를 HSL로 변환
 */
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  return [h * 360, s * 100, l * 100];
}

/**
 * HSL을 RGB로 변환
 */
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  s /= 100;
  l /= 100;
  let r: number;
  let g: number;
  let b: number;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

/**
 * 주조색(RGB)을 파스텔 톤의 연한 배경색으로 변환
 * - 밝기(L) 90%, 채도(S) 40%로 설정
 */
export function rgbToPastel(r: number, g: number, b: number): string {
  const [h] = rgbToHsl(r, g, b);
  const [pr, pg, pb] = hslToRgb(h, 40, 90);
  return `rgb(${pr}, ${pg}, ${pb})`;
}

/**
 * 주조색(RGB)을 지정 채도로 변환 (밝기 90% 고정)
 */
export function rgbToPastelWithSaturation(
  r: number,
  g: number,
  b: number,
  saturation: number
): string {
  const [h] = rgbToHsl(r, g, b);
  const [pr, pg, pb] = hslToRgb(h, saturation, 90);
  return `rgb(${pr}, ${pg}, ${pb})`;
}
