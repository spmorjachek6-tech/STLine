"use client"

import { createContext, useState } from "react"
import type { ReactNode } from "react"

export const LanguageContext = createContext<{ language: string; setLanguage: (lang: string) => void } | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}
