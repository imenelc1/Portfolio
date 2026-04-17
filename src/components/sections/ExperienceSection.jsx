/* ============================================================
   SECTION — Parcours Professionnel (Timeline)
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { experiences } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'

export default function ExperienceSection() {
  const { t, lang } = useLang()

  return (
    <section
      id="experience"
      style={{
        padding: '6rem 1.5rem',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <SectionHeader
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
        align="center"
      />

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Ligne verticale centrale */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'var(--border-color)',
          transform: 'translateX(-50%)',
        }} />

        {experiences.map((exp, index) => {
          // Alternance gauche/droite
          const isLeft = index % 2 === 0

          return (
            <div
              key={exp.id}
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: '2rem',
                position: 'relative',
              }}
            >
              {/* Point central sur la timeline */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '1.5rem',
                transform: 'translate(-50%, -50%)',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: exp.type === 'work' ? 'var(--accent)' : 'var(--violet)',
                border: '2px solid var(--bg-primary)',
                boxShadow: `0 0 12px ${exp.type === 'work' ? 'rgba(46,91,255,0.5)' : 'rgba(109,107,212,0.5)'}`,
                zIndex: 1,
              }} />

              {/* Carte de l'expérience */}
              <div
                className="glass"
                style={{
                  width: '45%',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  marginRight: isLeft ? 0 : 0,
                  transition: 'transform 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.02)'
                  e.currentTarget.style.borderColor = 'var(--border-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.borderColor = 'var(--glass-border)'
                }}
              >
                {/* Période */}
                <p style={{
                  fontSize: '0.75rem',
                  color: exp.type === 'work' ? 'var(--accent)' : 'var(--violet)',
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  {exp.period.start[lang]} — {exp.period.end ? exp.period.end[lang] : t('experience.present')}
                </p>

                {/* Titre */}
                <h3 style={{
                  fontFamily: 'var(--font-grotesk)',
                  fontWeight: 600,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                  marginBottom: '0.25rem',
                }}>
                  {exp.title[lang]}
                </h3>

                {/* Entreprise */}
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-grotesk)',
                }}>
                  {exp.company}
                </p>

                {/* Description */}
                <p style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  marginBottom: '0.75rem',
                }}>
                  {exp.description[lang]}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'var(--bg-surface-2)',
                      color: 'var(--text-muted)',
                      padding: '0.125rem 0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-grotesk)',
                      fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}