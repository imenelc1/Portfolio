/* ============================================================
   SECTION — Projets
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

// Composant réutilisable pour les titres de section
import SectionHeader from '../ui/SectionHeader'

export default function ProjectsSection() {
  const { t, lang } = useLang()

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <SectionHeader
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />

      {/* Grille de projets */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        marginBottom: '3rem',
      }}>
        {/* On mappe sur le tableau de projets pour créer une carte par projet */}
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            t={t}
          />
        ))}
      </div>

      {/* Lien "Voir tous les projets" */}
      <div style={{ textAlign: 'center' }}>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 500,
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '2px',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)'
            e.currentTarget.style.borderColor = 'var(--border-color)'
          }}
        >
          {t('projects.view_all')} →
        </a>
      </div>
    </section>
  )
}