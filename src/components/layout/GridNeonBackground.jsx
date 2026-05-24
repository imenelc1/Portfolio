import { useEffect, useRef } from 'react'

export default function GridNeonBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const gridSize = 48 // Aligné pile sur tes 48px CSS
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let activeLines = []

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Fonction pour générer une bordure de carré qui s'allume
    const triggerLine = () => {
      const cols = Math.floor(width / gridSize)
      const rows = Math.floor(height / gridSize)

      // Choisir une intersection de départ au hasard
      const col = Math.floor(Math.random() * cols)
      const row = Math.floor(Math.random() * rows)
      const x = col * gridSize
      const y = row * gridSize

      // Choisir une direction au hasard (0: horizontal vers la droite, 1: vertical vers le bas)
      const isVertical = Math.random() > 0.5
      
      activeLines.push({
        x1: x,
        y1: y,
        x2: isVertical ? x : x + gridSize,
        y2: isVertical ? y + gridSize : y,
        alpha: 1,
        speed: 0.01 + Math.random() * 0.015, // Vitesse d'extinction du néon
        lineWidth: 1.5 + Math.random() * 1 // Épaisseur de la ligne qui brille
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      const accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim() || '#2E5BFF'

      // Fréquence d'allumage des bordures (ajuste le 0.08 si tu en veux plus ou moins)
      if (Math.random() < 0.08 && activeLines.length < 20) {
        triggerLine()
      }

      activeLines = activeLines.filter((line) => {
        ctx.save()
        
        ctx.globalAlpha = line.alpha
        ctx.strokeStyle = accentColor
        ctx.lineWidth = line.lineWidth
        
        // Effet de lueur néon sur la ligne (glow effect)
        ctx.shadowBlur = 8
        ctx.shadowColor = accentColor
        
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
        
        ctx.restore()

        // Diminution de l'opacité
        line.alpha -= line.speed
        return line.alpha > 0
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0, 
        pointerEvents: 'none',
      }}
    />
  )
}