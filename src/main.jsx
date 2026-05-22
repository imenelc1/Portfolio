import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* ============================================================
   SCROLL REVEAL — IntersectionObserver global
   Observe tous les éléments .scroll-reveal et ajoute
   la classe .is-visible quand ils entrent dans le viewport
   ============================================================ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        // On désobserve après l'apparition pour les performances
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
)

// Observer les éléments existants + les nouveaux ajoutés au DOM
const observeAll = () => {
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
}

// Lancer après le rendu React
setTimeout(observeAll, 300)

// MutationObserver pour les éléments ajoutés dynamiquement
const mutObs = new MutationObserver(observeAll)
mutObs.observe(document.body, { childList: true, subtree: true })