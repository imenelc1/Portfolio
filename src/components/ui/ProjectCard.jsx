/* ============================================================
   COMPOSANT UI — ProjectCard
   ============================================================ */

export default function ProjectCard({ project, lang, t }) {
  return (
    <article
      className="glass"
      style={{
        borderRadius: '16px',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = project.color + '50'
        e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'var(--glass-border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Accent coloré en haut de la carte */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: `linear-gradient(90deg, ${project.color}, ${project.color}00)`,
      }} />

      {/* Icône du projet (cercle coloré) */}
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: project.color + '20',
        border: `1px solid ${project.color}40`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.25rem',
      }}>
        {/* On pourrait mettre une vraie icône ici */}
        <span style={{ color: project.color }}>{'</>'}</span>
      </div>

      {/* Titre */}
      <h3 style={{
        fontFamily: 'var(--font-grotesk)',
        fontWeight: 600,
        fontSize: '1.125rem',
        color: 'var(--text-primary)',
        lineHeight: 1.3,
      }}>
        {project.title}
      </h3>

      {/* Description (selon la langue active) */}
      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-secondary)',
        lineHeight: 1.6,
        flex: 1,
      }}>
        {project.description[lang]}
      </p>

      {/* Tags technologies */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.375rem',
      }}>
        {project.tags.map(tag => (
          <span
            key={tag}
            style={{
              background: 'var(--bg-surface-2)',
              color: 'var(--text-muted)',
              padding: '0.25rem 0.625rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              border: '1px solid var(--border-color)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Liens (GitHub + Demo) */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        paddingTop: '0.5rem',
        borderTop: '1px solid var(--border-color)',
      }}>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >
            ↗ {t('projects.view_code')}
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: project.color,
              textDecoration: 'none',
              fontSize: '0.8125rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '0.375rem',
            }}
          >
            ↗ {t('projects.view_demo')}
          </a>
        )}
      </div>
    </article>
  )
}