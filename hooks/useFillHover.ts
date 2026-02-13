"use client";

import { useCallback, useState } from "react";

export function useFillHover() {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setCoords({ x, y });
  }, []);

  const style = {
    "--mouse-x": `${coords.x}%`,
    "--mouse-y": `${coords.y}%`,
  } as React.CSSProperties;

  return { onMouseEnter, style };
}
