import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useRef, useState } from 'react'

const ImageModal = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  onSelect,
}) => {
  const image = images[currentIndex]
  const [direction, setDirection] = useState('left')

  const handleNext = () => {
    setDirection('left')
    onNext()
  }

  const handlePrevious = () => {
    setDirection('right')
    onPrevious()
  }

  const touchStartX = useRef(0)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 50) handlePrevious()
    if (diff < -50) handleNext()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-hidden"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-lg bg-white flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-2 flex-shrink-0">
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
            className="rounded-full bg-white p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
            className="rounded-full bg-white p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Image */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative flex w-full items-center justify-center overflow-hidden bg-black flex-1 min-h-0"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.title}
              initial={{
                x: direction === 'left' ? 300 : -300,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: direction === 'left' ? -300 : 300,
                opacity: 0,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="h-full w-full object-fit"
            />
          </AnimatePresence>
        </div>

        {/* Caption */}
        <div className="px-4 py-3 flex-shrink-0">
          <h3 className="text-lg font-semibold">{image.title}</h3>
          {image.caption && (
            <p className="mt-1 text-sm text-gray-600">{image.caption}</p>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto border-t border-gray-100 px-4 py-3 flex-shrink-0">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.thumbnail}
              alt={`Thumbnail ${i}`}
              onClick={() => onSelect(i)}
              className={`h-14 w-20 cursor-pointer rounded border object-cover  transition flex-shrink-0 ${
                i === currentIndex
                  ? 'border-blue-500 ring-2 ring-blue-400'
                  : 'border-gray-200'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ImageModal