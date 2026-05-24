import { ThemeProvider, LangProvider } from './context/AppContext'
import Navbar               from './components/layout/Navbar'
import Footer               from './components/layout/Footer'
import HeroSection          from './components/sections/HeroSection'
import ProjectsSection      from './components/sections/ProjectsSection'
import SkillsSection        from './components/sections/SkillsSection'
import ExperienceSection    from './components/sections/ExperienceSection'
import ContactSection       from './components/sections/ContactSection'
import CertificationsSection from './components/sections/Certificationssection'
import GridNeonBackground   from './components/layout/GridNeonBackground' 
import './index.css'

function AppContent() {
  return (
    <>
      <GridNeonBackground /> 
      
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppContent />
      </LangProvider>
    </ThemeProvider>
  )
}