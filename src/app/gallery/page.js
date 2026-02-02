import GalleryHero from "@/components/gallery/GalleryHero"
import ImageGallery from "@/components/gallery/ImageGallery"

export const metadata = {
  title: "Gallery | Winds of Zanzibar",
  description:
    "Explore photos of Winds of Zanzibar, from the seaside villa and pool to the surrounding ocean and landscape.",
};

const GalleryPage = () => {
  return (
    <>
    <GalleryHero />
    <ImageGallery />
    </>
  )
}

export default GalleryPage