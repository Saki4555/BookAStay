'use client'

import { useLanguage } from "@/context/LanguageContext"
import { useImageLightbox } from "@/hooks/useImageLightbox"
import ImageModal from "./ImageModal"
import { galleryImages } from "@/lib/data"

const ImageGallery = () => {
  const { t } = useLanguage()

  // merge images + translations
  const images = galleryImages.map((img) => ({
    ...img,
    title: t(`gallery.images.${img.key}.title`),
    caption: t(`gallery.images.${img.key}.caption`),
  }))

  const { isOpen, currentIndex, open, close, next, previous } =
    useImageLightbox(images)

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 mt-2 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image, index) => (
          <div
            key={image.id}
            onClick={() => open(index)}
            className="group cursor-pointer overflow-hidden rounded-md border border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
          >
            {/* Image container with overlay effect */}
            <div className="relative overflow-hidden h-52 sm:h-56 md:h-60">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Title section */}
            <div className="p-3 sm:p-4 bg-card">
              <h3 className="text-base sm:text-lg font-medium text-secondary group-hover:text-primary transition-colors duration-300">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        images={images}
        isOpen={isOpen}
        currentIndex={currentIndex || 0}
        onClose={close}
        onNext={next}
        onPrevious={previous}
        onSelect={(i) => open(i)}
      />
    </section>
  )
}

export default ImageGallery
