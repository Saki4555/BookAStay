'use client'
import { useEffect, useState } from 'react'

export function useImageLightbox(items) {
  const [currentIndex, setCurrentIndex] = useState(null)

  const isOpen = currentIndex !== null
  const currentItem = currentIndex !== null ? items[currentIndex] : null

  const open = (index) => setCurrentIndex(index)
  const close = () => setCurrentIndex(null)

  const next = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % items.length : null
    )

  const previous = () =>
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + items.length) % items.length : null
    )

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') previous()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return {
    isOpen,
    currentItem,
    currentIndex,
    total: items.length,
    open,
    close,
    next,
    previous,
  }
}
