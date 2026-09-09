"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict } from "@/content/dictionary";

export type Lang = "sr" | "en";

type LanguageContextValue = {
  lang: Lang;
  /** Dictionary for the active language. */
  t: Dict;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "sr",
  t: dict.sr,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("sr");

  useEffect(() => {
    const saved = window.localStorage.getItem("bj-lang");
    if (saved === "sr" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("bj-lang", l);
    document.documentElement.lang = l === "sr" ? "sr-Latn" : "en";
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, t: dict[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
