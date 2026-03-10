"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface HeroContextValue {
  isLit: boolean;
  setLit: (lit: boolean) => void;
}

const HeroContext = createContext<HeroContextValue | null>(null);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [isLit, setIsLit] = useState(false);
  const setLit = useCallback((lit: boolean) => setIsLit(lit), []);
  return (
    <HeroContext.Provider value={{ isLit, setLit }}>{children}</HeroContext.Provider>
  );
}

export function useHero(): HeroContextValue {
  const ctx = useContext(HeroContext);
  return ctx ?? { isLit: false, setLit: () => {} };
}
