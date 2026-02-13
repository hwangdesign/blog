"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

type PageBackgroundContextValue = {
  backgroundColor: string | null;
  setBackgroundColor: (color: string | null) => void;
};

const PageBackgroundContext = createContext<PageBackgroundContextValue | null>(
  null
);

export function PageBackgroundProvider({ children }: { children: ReactNode }) {
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);

  const setColor = useCallback((color: string | null) => {
    setBackgroundColor(color);
  }, []);

  // 푸터·메인·GNB 등에서 var(--background)로 페이지 배경 연동
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      backgroundColor ?? "#ffffff"
    );
  }, [backgroundColor]);

  return (
    <PageBackgroundContext.Provider
      value={{ backgroundColor, setBackgroundColor: setColor }}
    >
      {children}
    </PageBackgroundContext.Provider>
  );
}

export function usePageBackground() {
  return useContext(PageBackgroundContext);
}
