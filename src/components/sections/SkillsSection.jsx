/* ============================================================
   SECTION — Compétences
   ============================================================ */

import { useLang } from '../../context/AppContext'
import { humanLanguages, tools } from '../../data/skills'
import SectionHeader from '../ui/SectionHeader'
import DynamicIcon from '../ui/DynamicIcon'

/* Langages de programmation — maintenant juste des tags comme les outils */
const programmingLanguageTags = [
  { name: 'Java',       category: 'Language', icon: 'Coffee'    },
  { name: 'JavaScript', category: 'Language', icon: 'Zap'       },
  { name: 'TypeScript', category: 'Language', icon: 'FileCode2' },
  { name: 'Python',     category: 'Language', icon: 'Terminal'  },
  { name: 'SQL',        category: 'Language', icon: 'Database'  },
  { name: 'PHP',        category: 'Language', icon: 'Code2'     },
  { name: 'Kotlin',     category: 'Language', icon: 'Smartphone'},
]

/* Couleurs par catégorie */
const categoryColors = {
  Language: '#2E5BFF',
  Frontend: '#0EA5E9',
  Backend:  '#6D6BD4',
  Mobile:   '#8B5CF6',
  DevOps:   '#10B981',
  Database: '#F59E0B',
  Design:   '#EC4899',
}

/* Tag générique */
function Tag({ name, category, icon }) {
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
      transition: 'background 0.2s, transform 0.15s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = color + '28'
      e.currentTarget.style.transform = 'translateY(-1px)'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = color + '15'
      e.currentTarget.style.transform = 'translateY(0)'
    }}
    >
      {icon && <DynamicIcon name={icon} size={13} strokeWidth={2} color={color} />}
      {name}
    </span>
  )
}

/* Groupe de tags avec label de catégorie */
function TagGroup({ label, items }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <p style={{
        fontSize: '0.6875rem',
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 600,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        marginBottom: '0.625rem',
      }}>
        {label}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {items.map(item => (
          <Tag key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const { t, lang } = useLang()

  /* Regrouper les outils par catégorie */
  const groupedTools = tools.reduce((acc, tool) => {
    if (!acc[tool.category]) acc[tool.category] = []
    acc[tool.category].push(tool)
    return acc
  }, {})

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

          {/* Colonne 1 : Langages + Outils groupés */}
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
              {t('skills.tools')}
            </h3>

            {/* Langages de programmation */}
            <TagGroup
              label="Langages"
              items={programmingLanguageTags}
            />

            {/* Outils groupés par catégorie */}
            {Object.entries(groupedTools).map(([category, items]) => (
              <TagGroup key={category} label={category} items={items} />
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
      </div>
    </section>
  )
}