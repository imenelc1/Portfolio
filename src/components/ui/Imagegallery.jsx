/* ============================================================
   COMPOSANT — ImageGallery
   ============================================================ */

import { useState, useEffect } from 'react'
import { Images } from 'lucide-react'
import { useZoom } from '../../hooks/useZoom'
import LightboxModal from './LightboxModal'

export default function ImageGallery({ images, title, t }) {
  const [isOpen, setIsOpen]      = useState(false)
  const [activeIndex, setActive] = useState(0)
  const { zoom, offset, isDragging, reset, zoomIn, zoomOut, handlers } = useZoom()

  // Reset zoom à chaque changement d'image
  useEffect(() => { reset() }, [activeIndex])

  // Raccourcis clavier
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape')     { setIsOpen(false); reset() }
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === '+')          zoomIn()
      if (e.key === '-')          zoomOut()
      if (e.key === '0')          reset()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [isOpen, activeIndex, zoom])

  if (!images || images.length === 0) return null

  const prev = () => setActive(i => (i - 1 + images.length) % images.length)
  const next = () => setActive(i => (i + 1) % images.length)
  const onClose = () => { setIsOpen(false); reset() }

  return (
    <>
      {/* Bouton discret dans la ProjectCard */}
      <button
        onClick={() => { setIsOpen(true); setActive(0) }}
        style={{
          background: 'transparent', border: 'none', padding: 0,
          color: 'var(--text-secondary)', cursor: 'pointer',
          fontSize: '0.8125rem', fontFamily: 'var(--font-grotesk)', fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: '0.375rem',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
      >
        <Images size={14} strokeWidth={2} />
        {t('projects.view_images')} ({images.length})
      </button>

      {isOpen && (
        <LightboxModal
          images={images} title={title}
          activeIndex={activeIndex} setActive={setActive}
          onClose={onClose} prev={prev} next={next}
          zoom={zoom} offset={offset} isDragging={isDragging}
          zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={reset}
          zoomHandlers={handlers}
        />
      )}
    </>
  )
}