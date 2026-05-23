import { useState } from 'react'
import ImageGallery from './Imagegallery'
import { GitBranch, ExternalLink } from 'lucide-react'

export default function ProjectCard({ project, lang, t, index = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <article
      className="glass scroll-reveal"
      /* Fix stagger : style inline pour le delay car nth-child
         ne marche pas sur des éléments non-frères directs */
      style={{ '--reveal-delay': `${index * 0.1}s` }}
      data-delay={index * 0.1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Wrapper interne pour le hover sans casser le scroll-reveal */}
      <div style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        borderColor: hovered ? project.color + '50' : 'transparent',
        boxShadow: hovered ? `0 20px 40px ${project.color}12` : 'none',
      }}>
        <div style={{
          height: '2px',
          background: `linear-gradient(90deg, ${project.color}, ${project.color}00)`,
          opacity: hovered ? 1 : 0.4,
          transition: 'opacity 0.3s ease',
        }} />

        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              background: project.color + '18', border: `1px solid ${project.color}35`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, color: project.color,
              fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: '0.75rem',
            }}>
              {'</>'}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-grotesk)', fontWeight: 600,
              fontSize: '1.0625rem', color: 'var(--text-primary)',
              lineHeight: 1.3, paddingTop: '0.125rem',
            }}>
              {project.title}
            </h3>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65, flex: 1 }}>
            {project.description[lang]}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{
                background: 'var(--bg-surface-2)', color: 'var(--text-muted)',
                padding: '0.2rem 0.55rem', borderRadius: '6px',
                fontSize: '0.73rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
                border: '1px solid var(--border-color)',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex', gap: '1rem',
            paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)',
            alignItems: 'center',
          }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                style={{
                  color: 'var(--text-secondary)', textDecoration: 'none',
                  fontSize: '0.8125rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '0.375rem', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <GitBranch size={14} strokeWidth={2} />
                {t('projects.view_code')}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                style={{
                  color: project.color, textDecoration: 'none',
                  fontSize: '0.8125rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '0.375rem',
                }}
              >
                <ExternalLink size={14} strokeWidth={2} />
                {t('projects.view_demo')}
              </a>
            )}
            <div style={{ marginLeft: 'auto' }}>
              <ImageGallery images={project.images} title={project.title} t={t} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}