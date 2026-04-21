/* ============================================================
   HOOK — useZoom

   ============================================================ */

import { useState, useRef } from 'react'

export function useZoom() {
  const [zoom, setZoom]            = useState(1)
  const [offset, setOffset]        = useState({ x: 0, y: 0 })
  const [isDragging, setDragging]  = useState(false)
  const dragStart                  = useRef(null)

  const reset   = () => { setZoom(1); setOffset({ x: 0, y: 0 }) }
  const zoomIn  = () => setZoom(z => Math.min(z + 0.5, 4))
  const zoomOut = () => setZoom(z => {
    const n = Math.max(z - 0.5, 1)
    if (n === 1) setOffset({ x: 0, y: 0 })
    return n
  })

  const onWheel = (e) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? -0.25 : 0.25
    setZoom(z => {
      const next = Math.min(Math.max(z + delta, 1), 4)
      if (next === 1) setOffset({ x: 0, y: 0 })
      return next
    })
  }

  const onDoubleClick = () => zoom > 1 ? reset() : setZoom(2)

  const onMouseDown = (e) => {
    if (zoom <= 1) return
    setDragging(true)
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y }
  }
  const onMouseMove = (e) => {
    if (!isDragging || !dragStart.current) return
    setOffset({ x: e.clientX - dragStart.current.x, y: e.clientY - dragStart.current.y })
  }
  const onMouseUp = () => setDragging(false)

  return {
    zoom, offset, isDragging, reset,
    zoomIn, zoomOut,
    handlers: { onWheel, onDoubleClick, onMouseDown, onMouseMove, onMouseUp, onMouseLeave: onMouseUp },
  }
}