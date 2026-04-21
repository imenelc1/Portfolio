/* ============================================================
   COMPOSANT — LightboxModal

   ============================================================ */

import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'

const OVERLAY = {
  position: 'fixed', inset: 0, zIndex: 1000,
  background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(10px)',
  display: 'flex', flexDirection: 'column',
  alignItems: 'center', justifyContent: 'center',
  padding: '1.5rem',
}

const CTRL_BTN = (disabled) => ({
  background: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '7px',
  color: disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.8)',
  cursor: disabled ? 'not-allowed' : 'pointer',
  padding: '0.375rem',
  display: 'flex', alignItems: 'center',
})

const NAV_BTN = (side) => ({
  position: 'absolute', [side]: '0.75rem', top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.55)',
  border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: '8px', color: '#fff',
  cursor: 'pointer', padding: '0.5rem', display: 'flex',
})

export default function LightboxModal({
  images, title, activeIndex, setActive,
  onClose, prev, next,
  zoom, offset, isDragging, zoomIn, zoomOut, resetZoom, zoomHandlers,
}) {
  return createPortal(
    <div style={OVERLAY} onClick={onClose}>
      <div
        onClick={e => e.stopPropagation()}
        style={{ width: '100%', maxWidth: '960px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-grotesk)', fontSize: '0.875rem' }}>
            {title} — {activeIndex + 1} / {images.length}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              color: zoom > 1 ? 'var(--accent)' : 'rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-grotesk)', fontSize: '0.75rem', fontWeight: 600,
              minWidth: '38px', textAlign: 'center',
            }}>
              {Math.round(zoom * 100)}%
            </span>
            <button onClick={zoomOut}  disabled={zoom <= 1} style={CTRL_BTN(zoom <= 1)}><ZoomOut  size={15} /></button>
            <button onClick={resetZoom} disabled={zoom === 1} style={CTRL_BTN(zoom === 1)}><Maximize2 size={14} /></button>
            <button onClick={zoomIn}   disabled={zoom >= 4}  style={CTRL_BTN(zoom >= 4)}> <ZoomIn   size={15} /></button>
            <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.15)', margin: '0 0.25rem' }} />
            <button onClick={onClose} style={CTRL_BTN(false)}><X size={16} /></button>
          </div>
        </div>

        {/* Zone image */}
        <div
          {...zoomHandlers}
          style={{
            borderRadius: '12px', overflow: 'hidden',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            height: 'min(65vh, 580px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
            cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
            userSelect: 'none',
          }}
        >
          {zoom === 1 && (
            <span style={{
              position: 'absolute', bottom: '0.75rem', left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.45)',
              fontSize: '0.7rem', fontFamily: 'var(--font-grotesk)',
              padding: '0.25rem 0.625rem', borderRadius: '100px',
              pointerEvents: 'none', whiteSpace: 'nowrap',
            }}>
              Double-clic ou molette pour zoomer
            </span>
          )}

          <img
            src={images[activeIndex]}
            alt={`${title} ${activeIndex + 1}`}
            draggable={false}
            style={{
              width: '100%', height: '100%',
              objectFit: 'contain',
              transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease',
              transformOrigin: 'center center',
            }}
          />

          {images.length > 1 && (
            <>
              <button onClick={prev} style={NAV_BTN('left')}> <ChevronLeft  size={20} /></button>
              <button onClick={next} style={NAV_BTN('right')}><ChevronRight size={20} /></button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            {images.map((img, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                width: '56px', height: '38px', borderRadius: '6px',
                overflow: 'hidden', padding: 0, cursor: 'pointer', flexShrink: 0,
                border: `2px solid ${i === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.12)'}`,
                background: 'rgba(255,255,255,0.05)', transition: 'border-color 0.2s',
              }}>
                <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        )}

        {/* Raccourcis */}
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', fontFamily: 'var(--font-grotesk)' }}>
          ← → navigation &nbsp;·&nbsp; + / − zoom &nbsp;·&nbsp; 0 reset &nbsp;·&nbsp; Échap fermer
        </p>
      </div>
    </div>,
    document.body
  )
}