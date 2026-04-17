/* ============================================================
   APP.JSX — Point d'assemblage principal
   
   Ce fichier :
   1. Enveloppe l'app dans les Providers (Context)
   2. Assemble toutes les sections dans l'ordre
   3. Ne contient PAS de logique — seulement de la composition
   
   L'ordre des Providers est important :
   - ThemeProvider doit être externe (il modifie le <html>)
   - LangProvider peut être interne
   ============================================================ */

import { ThemeProvider, LangProvider } from './context/AppContext'
import Navbar           from './components/layout/Navbar'
import Footer           from './components/layout/Footer'
import HeroSection      from './components/sections/HeroSection'
import ProjectsSection  from './components/sections/ProjectsSection'
import SkillsSection    from './components/sections/SkillsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import ContactSection   from './components/sections/ContactSection'
import './index.css'

/* ---- Composant interne App (avec les Providers autour) ---- */
function AppContent() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
       
      </main>

      <Footer />
    </>
  )
}

/* ---- Export principal avec les Providers ---- */
export default function App() {
  return (
    // ThemeProvider → LangProvider → AppContent
    // Tout composant enfant peut lire ces deux contextes
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  )
}