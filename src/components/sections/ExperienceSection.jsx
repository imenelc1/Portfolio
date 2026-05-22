/* ============================================================
   SECTION — Parcours
   Séparé en deux colonnes : Académique & Professionnel
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { experiences } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'
import { GraduationCap, Briefcase } from 'lucide-react'

function TimelineColumn({ items, type, t, lang }) {
  const isWork = type === 'work'
  const color  = isWork ? 'var(--accent)' : 'var(--violet)'
  const Icon   = isWork ? Briefcase : GraduationCap
  const label  = isWork
    ? (lang === 'fr' ? 'Expérience' : 'Experience')
    : (lang === 'fr' ? 'Formation'  : 'Education')

  return (
    <div style={{ flex: 1, minWidth: 0 }}>

      {/* En-tête colonne */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: `2px solid ${color}`,
      }}>
        <div style={{
          width: '32px', height: '32px',
          borderRadius: '8px',
          background: color + '18',
          border: `1px solid ${color}35`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: color,
        }}>
          <Icon size={16} strokeWidth={2} />
        </div>
        <h3 style={{
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 700,
          fontSize: '1rem',
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {label}
        </h3>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>

        {/* Ligne verticale */}
        <div style={{
          position: 'absolute',
          left: '5px',
          top: 0, bottom: 0,
          width: '1px',
          background: `linear-gradient(to bottom, ${color}, ${color}00)`,
        }} />

        {items.map((exp, i) => (
          <div
            key={exp.id}
            className="scroll-reveal"
            style={{
              position: 'relative',
              marginBottom: i < items.length - 1 ? '1.75rem' : 0,
            }}
          >
            {/* Point sur la timeline */}
            <div style={{
              position: 'absolute',
              left: '-1.5rem',
              top: '1.25rem',
              width: '11px', height: '11px',
              borderRadius: '50%',
              background: color,
              border: '2px solid var(--bg-primary)',
              boxShadow: `0 0 10px ${color}60`,
            }} />

            {/* Carte */}
            <div
              className="glass"
              style={{
                borderRadius: '12px',
                padding: '1.125rem',
                transition: 'transform 0.2s, border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(4px)'
                e.currentTarget.style.borderColor = color + '55'
                e.currentTarget.style.boxShadow = `0 8px 24px ${color}12`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'var(--glass-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Période */}
              <p style={{
                fontSize: '0.7rem',
                color: color,
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.375rem',
              }}>
                {exp.period.start[lang]} — {exp.period.end ? exp.period.end[lang] : t('experience.present')}
              </p>

              <h4 style={{
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                color: 'var(--text-primary)',
                marginBottom: '0.2rem',
                lineHeight: 1.3,
              }}>
                {exp.title[lang]}
              </h4>

              <p style={{
                fontSize: '0.8125rem',
                color: 'var(--text-secondary)',
                marginBottom: '0.625rem',
                fontFamily: 'var(--font-grotesk)',
              }}>
                {exp.company}
              </p>

              <p style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '0.75rem',
              }}>
                {exp.description[lang]}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{
                    background: color + '12',
                    color: color,
                    border: `1px solid ${color}25`,
                    padding: '0.15rem 0.5rem',
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
        ))}
      </div>
    </div>
  )
}

export default function ExperienceSection() {
  const { t, lang } = useLang()

  const workItems      = experiences.filter(e => e.type === 'work')
  const educationItems = experiences.filter(e => e.type === 'education')

  return (
    <section
      id="experience"
      style={{ padding: '6rem 1.5rem', maxWidth: '1100px', margin: '0 auto' }}
    >
      <SectionHeader
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        alignItems: 'start',
      }}>
        <TimelineColumn items={workItems}      type="work"      t={t} lang={lang} />
        <TimelineColumn items={educationItems} type="education" t={t} lang={lang} />
      </div>
    </section>
  )
}