import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Images } from 'lucide-react'

export default function ImageGallery({ images, title, t }) {
  const [isOpen, setIsOpen]       = useState(false)
  const [activeIndex, setActive]  = useState(0)

  // Fermer avec Escape + bloquer le scroll du body quand ouvert
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape')      setIsOpen(false)
      if (e.key === 'ArrowRight')  next()
      if (e.key === 'ArrowLeft')   prev()
    }

    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'  // bloquer le scroll

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''  // restaurer le scroll
    }
  }, [isOpen, activeIndex])

  const prev = () => setActive(i => (i - 1 + images.length) % images.length)
  const next = () => setActive(i => (i + 1) % images.length)

  // Si pas d'images, on n'affiche rien
  if (!images || images.length === 0) return null

  return (
    <>
      {/* Bouton déclencheur — intégré dans la ProjectCard */}
      <button
        onClick={() => { setIsOpen(true); setActive(0) }}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-secondary)',
          cursor: 'pointer',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-grotesk)',
          fontWeight: 500,
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          padding: 0,
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
      >
        <Images size={14} strokeWidth={2} />
        {t('projects.view_images')} ({images.length})
      </button>

      {/* Overlay — rendu via Portal directement dans <body>
          POURQUOI createPortal ?
          Sans portal, l'overlay est rendu DANS la carte.
          Si la carte a overflow:hidden ou un z-index bas,
          l'overlay sera coupé ou masqué.
          createPortal le rend au niveau du <body> → z-index toujours au-dessus. */}
      {isOpen && createPortal(
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Contenu — stopper la propagation pour éviter de fermer en cliquant dedans */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '900px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {/* Header : titre + compteur + bouton fermer */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.875rem',
              }}>
                {title} — {t('projects.image_of')} {activeIndex + 1} {t('projects.of')} {images.length}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '8px',
                  color: '#fff',
                  cursor: 'pointer',
                  padding: '0.375rem',
                  display: 'flex',
                  alignItems: 'center',
                  transition: 'background 0.2s',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Image principale */}
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              aspectRatio: '16/9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src={images[activeIndex]}
                alt={`${title} — screenshot ${activeIndex + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                onError={e => {
                  // Si l'image n'existe pas encore, on affiche un placeholder
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Placeholder si image manquante */}
              <div style={{
                display: 'none',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'var(--font-grotesk)',
                fontSize: '0.875rem',
              }}>
                <Images size={32} strokeWidth={1} />
                Screenshot à venir
              </div>

              {/* Boutons prev/next (seulement si plusieurs images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    style={{
                      position: 'absolute',
                      left: '0.75rem',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#fff',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      display: 'flex',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(46,91,255,0.6)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    style={{
                      position: 'absolute',
                      right: '0.75rem',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRadius: '8px',
                      color: '#fff',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      display: 'flex',
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(46,91,255,0.6)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center',
              }}>
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    style={{
                      width: '60px',
                      height: '40px',
                      borderRadius: '6px',
                      overflow: 'hidden',
                      border: i === activeIndex
                        ? '2px solid var(--accent)'
                        : '2px solid rgba(255,255,255,0.15)',
                      cursor: 'pointer',
                      padding: 0,
                      background: 'rgba(255,255,255,0.05)',
                      transition: 'border-color 0.2s',
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={img}
                      alt={`thumb ${i + 1}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body  // ← Portal : rendu directement dans <body>
      )}
    </>
  )
}