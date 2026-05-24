import { useEffect, useRef } from 'react'

export default function GridNeonBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const GRID = 48
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    let dots = [], animId

    const toRgba = (hex, a) => {
      const r = parseInt(hex.slice(1,3),16)
      const g = parseInt(hex.slice(3,5),16)
      const b = parseInt(hex.slice(5,7),16)
      return `rgba(${r},${g},${b},${a.toFixed(3)})`
    }

    const waves = [
      { horiz: true,  pos: -120, speed: 0.35, width: 180, lineFrac: 0.30 },
      { horiz: false, pos: -120, speed: 0.28, width: 160, lineFrac: 0.60 },
      { horiz: true,  pos: 0,    speed: 0.30, width: 200, lineFrac: 0.65 },
    ]

    const buildDots = () => {
      dots = []
      const cols = Math.ceil(W / GRID) + 1
      const rows = Math.ceil(H / GRID) + 1
      for (let c = 1; c <= cols; c++) {
        for (let r = 1; r <= rows; r++) {
          if (Math.random() > 0.45) continue
          dots.push({
            x: c * GRID, y: r * GRID,
            phase: Math.random() * Math.PI * 2,
            speed: 0.0008 + Math.random() * 0.001,
            max:   0.1 + Math.random() * 0.18,
            col:   Math.random() > 0.5 ? '--accent' : '--violet',
          })
        }
      }
    }

    const handleResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      buildDots()
    }
    window.addEventListener('resize', handleResize)
    buildDots()

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#2E5BFF'
      const violet = getComputedStyle(document.documentElement).getPropertyValue('--violet').trim() || '#6D6BD4'
      const cols = Math.ceil(W / GRID) + 1
      const rows = Math.ceil(H / GRID) + 1
      const t = performance.now()

      // grille
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth = 0.5
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath(); ctx.moveTo(c*GRID, 0); ctx.lineTo(c*GRID, H); ctx.stroke()
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath(); ctx.moveTo(0, r*GRID); ctx.lineTo(W, r*GRID); ctx.stroke()
      }

      // lueur centrale
      const glow = ctx.createRadialGradient(W*.5, H*.4, 0, W*.5, H*.4, W*.55)
      glow.addColorStop(0, 'rgba(46,91,255,0.04)')
      glow.addColorStop(1, 'transparent')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, W, H)

      // ondes lentes
      for (const w of waves) {
        w.pos += w.speed
        const maxP = w.horiz ? W + w.width : H + w.width
        if (w.pos - w.width > maxP) w.pos = -w.width

        if (w.horiz) {
          const y = Math.floor(rows * w.lineFrac) * GRID
          const g2 = ctx.createLinearGradient(w.pos - w.width, y, w.pos + w.width, y)
          g2.addColorStop(0, 'transparent')
          g2.addColorStop(0.4, toRgba(accent, 0.25))
          g2.addColorStop(0.6, toRgba(violet, 0.25))
          g2.addColorStop(1, 'transparent')
          ctx.strokeStyle = g2; ctx.lineWidth = 1
          ctx.shadowBlur = 6; ctx.shadowColor = accent
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke()
          ctx.shadowBlur = 0
        } else {
          const x = Math.floor(cols * w.lineFrac) * GRID
          const g2 = ctx.createLinearGradient(x, w.pos - w.width, x, w.pos + w.width)
          g2.addColorStop(0, 'transparent')
          g2.addColorStop(0.4, toRgba(violet, 0.22))
          g2.addColorStop(0.6, toRgba(accent, 0.22))
          g2.addColorStop(1, 'transparent')
          ctx.strokeStyle = g2; ctx.lineWidth = 1
          ctx.shadowBlur = 6; ctx.shadowColor = violet
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke()
          ctx.shadowBlur = 0
        }
      }

      // points qui respirent
      for (const p of dots) {
        const col = p.col === '--accent' ? accent : violet
        const alpha = (Math.sin(t * p.speed * 60 + p.phase) + 1) / 2 * p.max
        if (alpha < 0.01) continue
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = toRgba(col, alpha)
        ctx.shadowBlur = 4; ctx.shadowColor = col
        ctx.fill(); ctx.shadowBlur = 0
      }

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => { window.removeEventListener('resize', handleResize); cancelAnimationFrame(animId) }
  }, [])

  return <canvas ref={canvasRef} style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none' }} />
}