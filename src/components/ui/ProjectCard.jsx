import ImageGallery from './Imagegallery'

export default function ProjectCard({ project, lang, t }) {
  return (
    <article
      className="glass"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',  // important pour que l'image respecte le border-radius
        transition: 'all 0.3s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
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
      {/* Image de couverture */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: project.color + '15',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {project.cover ? (
          <img
            src={project.cover}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.4s ease',
            }}
            onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            onError={e => { e.target.style.display = 'none' }}
          />
        ) : (
          // Placeholder si pas d'image
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.color,
            opacity: 0.4,
            fontFamily: 'var(--font-grotesk)',
            fontSize: '2rem',
            fontWeight: 700,
          }}>
            {'</>'}
          </div>
        )}

        {/* Barre de couleur en haut */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${project.color}, ${project.color}00)`,
        }} />
      </div>

      {/* Contenu texte */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>

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

        {/* Description */}
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          flex: 1,
        }}>
          {project.description[lang]}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              background: 'var(--bg-surface-2)',
              color: 'var(--text-muted)',
              padding: '0.25rem 0.625rem',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-grotesk)',
              fontWeight: 500,
              border: '1px solid var(--border-color)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Liens */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid var(--border-color)',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '0.375rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              ↗ {t('projects.view_code')}
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              style={{
                color: project.color,
                textDecoration: 'none',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-grotesk)',
                fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '0.375rem',
              }}
            >
              ↗ {t('projects.view_demo')}
            </a>
          )}

          {/* Galerie d'images */}
          <ImageGallery images={project.images} title={project.title} t={t} />
        </div>
      </div>
    </article>
  )
}