'use client'

import { useImageLightbox } from "@/hooks/useImageLightbox"
import ImageModal from "./ImageModal"
import { galleryImages } from "@/lib/data"


const ImageGallery = () => {
  const { isOpen, currentIndex, open, close, next, previous } =
    useImageLightbox(galleryImages)

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold">Creative Assets Library</h2>
        <p className="mx-auto mt-2 max-w-xl text-gray-600">
          Browse stunning visuals sourced from Unsplash. Ideal for portfolios,
          landing pages, or product mockups.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            onClick={() => open(index)}
            className="cursor-pointer overflow-hidden rounded-xl border border-green-200 transition hover:shadow-md"
          >
            <img
              src={image.src}
              alt={image.title}
              className="h-60 w-full object-cover"
              loading="lazy"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <ImageModal
        images={galleryImages}
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
