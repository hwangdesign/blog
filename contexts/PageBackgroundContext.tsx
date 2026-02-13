"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
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
