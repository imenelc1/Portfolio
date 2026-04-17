/* ============================================================
   SECTION — Compétences
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { programmingLanguages, humanLanguages, tools } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'
import DynamicIcon from '../ui/DynamicIcon'

// Composant interne : barre de progression
function SkillBar({ name, level, icon }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {/* Nom + pourcentage */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
      }}>
        <span style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 500,
          fontSize: '0.9375rem',
          color: 'var(--text-primary)',
        }}>
          {icon && (
            <span style={{ color: 'var(--accent)', display: 'flex' }}>
              <DynamicIcon name={icon} size={15} strokeWidth={2} />
            </span>
          )}
          {name}
        </span>
        <span style={{
          fontSize: '0.8125rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-grotesk)',
        }}>
          {level}%
        </span>
      </div>

      {/* Barre */}
      {/* La piste (fond) */}
      <div style={{
        height: '4px',
        background: 'var(--border-color)',
        borderRadius: '100px',
        overflow: 'hidden',
      }}>
        {/* Le remplissage (la largeur = level%) */}
        <div style={{
          height: '100%',
          width: `${level}%`,
          background: 'linear-gradient(90deg, var(--accent), var(--violet))',
          borderRadius: '100px',
          transition: 'width 1s ease',
        }} />
      </div>
    </div>
  )
}

// Composant interne : tag de tool
function ToolTag({ name, category, icon }) {
  const categoryColors = {
    Frontend: '#2E5BFF',
    Backend:  '#6D6BD4',
    Mobile:   '#0EA5E9',
    DevOps:   '#10B981',
    Database: '#F59E0B',
    Design:   '#EC4899',
  }

  const color = categoryColors[category] || '#6B7280'

  return (
    <span style={{
      background: color + '15',
      color: color,
      border: `1px solid ${color}30`,
      padding: '0.375rem 0.75rem',
      borderRadius: '8px',
      fontSize: '0.8125rem',
      fontFamily: 'var(--font-grotesk)',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.375rem',
    }}>
      {icon && <DynamicIcon name={icon} size={13} strokeWidth={2} color={color} />}
      {name}
    </span>
  )
}

export default function SkillsSection() {
  const { t, lang } = useLang()

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 1.5rem',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionHeader
          title={t('skills.title')}
          subtitle={t('skills.subtitle')}
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}>

          {/* Colonne 1 : Langages de programmation */}
          <div className="glass" style={{ borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.75rem',
            }}>
              {t('skills.prog_langs')}
            </h3>
            {programmingLanguages.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>

          {/* Colonne 2 : Langues humaines */}
          <div className="glass" style={{ borderRadius: '16px', padding: '1.5rem' }}>
            <h3 style={{
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.75rem',
            }}>
              {t('skills.human_langs')}
            </h3>
            {humanLanguages.map(hl => (
              <div key={hl.name.fr} style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-grotesk)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{ color: 'var(--violet)', display: 'flex' }}>
                      <DynamicIcon name={hl.icon} size={15} />
                    </span>
                    {hl.name[lang]}
                  </span>
                  <span style={{
                    fontSize: '0.8125rem',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-grotesk)',
                    fontWeight: 500,
                  }}>
                    {hl.level[lang]}
                  </span>
                </div>
                <div style={{
                  height: '4px',
                  background: 'var(--border-color)',
                  borderRadius: '100px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${hl.percent}%`,
                    background: 'linear-gradient(90deg, var(--violet), var(--accent))',
                    borderRadius: '100px',
                  }} />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Outils & Frameworks */}
        <div style={{ marginTop: '2rem' }} className="glass" style={{
          borderRadius: '16px',
          padding: '1.5rem',
          marginTop: '2rem',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-grotesk)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.75rem',
          }}>
            {t('skills.tools')}
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.625rem',
          }}>
            {tools.map(tool => (
              <ToolTag key={tool.name} {...tool} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}