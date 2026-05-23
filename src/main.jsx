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
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
)

const observeNew = () => {
  document.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach(el => {
    revealObserver.observe(el)
  })
}

/* Premier passage après rendu React */
setTimeout(observeNew, 250)

/* Observer les nouveaux éléments ajoutés dynamiquement */
const mutationObs = new MutationObserver(() => observeNew())
mutationObs.observe(document.body, { childList: true, subtree: true })