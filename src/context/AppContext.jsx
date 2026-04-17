/* ============================================================
   CONTEXTE REACT — ThemeContext & LanguageContext
   ============================================================ */

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../i18n/translations'

/* ============================================================
   1. THÈME (Dark / Light)
   ============================================================ */

// Création du contexte avec une valeur par défaut null
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // On lit le thème sauvegardé dans localStorage (pour le mémoriser)
  const [theme, setTheme] = useState(() => {
    // 1. Si l'utilisateur a déjà choisi manuellement → on respecte son choix
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved

    // 2. Sinon, on lit la préférence système de l'appareil
    // window.matchMedia('(prefers-color-scheme: dark)').matches
    // → true si l'OS est en mode sombre, false sinon
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  // useEffect : s'exécute quand `theme` change
  // On met à jour l'attribut data-theme sur le <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  // Écouter les changements de thème système EN TEMPS RÉEL
  // Si l'utilisateur n'a pas encore choisi manuellement,
  // on suit automatiquement son OS quand il bascule dark↔light
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleSystemChange = (e) => {
      // On ne réagit QUE si l'utilisateur n'a pas de préférence sauvegardée
      const hasSavedPreference = localStorage.getItem('portfolio-theme')
      if (!hasSavedPreference) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener('change', handleSystemChange)
    // Cleanup : retirer l'écouteur quand le composant est démonté
    return () => mediaQuery.removeEventListener('change', handleSystemChange)
  }, []) // [] = s'exécute une seule fois au montage

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook personnalisé : plus propre que d'écrire useContext(ThemeContext) partout
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme doit être utilisé dans un ThemeProvider')
  }
  return context
}

/* ============================================================
   2. LANGUE (FR / EN)
   ============================================================ */

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'fr'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang)
    // On met aussi l'attribut lang sur html pour l'accessibilité
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = () => {
    setLang(prev => prev === 'fr' ? 'en' : 'fr')
  }

  // t() est la fonction de traduction
  const t = (key) => {
    // On split la clé par '.' pour naviguer dans l'objet imbriqué
    const keys = key.split('.')
    let value = translations[lang]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Si la clé n'existe pas, on retourne la clé elle-même
    // (utile pour débugger)
    return value || key
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) {
    throw new Error('useLang doit être utilisé dans un LangProvider')
  }
  return context
}