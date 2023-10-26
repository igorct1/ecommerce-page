'use client'
import { useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import image1 from '../../assets/image-product-1.jpg'
import image2 from '../../assets/image-product-2.jpg'
import image3 from '../../assets/image-product-3.jpg'
import image4 from '../../assets/image-product-4.jpg'

import thumb1 from '../../assets/image-product-1-thumbnail.jpg'
import thumb2 from '../../assets/image-product-2-thumbnail.jpg'
import thumb3 from '../../assets/image-product-3-thumbnail.jpg'
import thumb4 from '../../assets/image-product-4-thumbnail.jpg'

import Image, { StaticImageData } from 'next/image'

const images = [image1, image2, image3, image4]
const thumbs = [thumb1, thumb2, thumb3, thumb4]

export function ImagePreview() {
  const { width } = useWindowSize()

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const previewImage = images[currentImageIndex]

  const changePreviewImage = (action: 'next' | 'prev') => {
    if (action === 'next') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex,
      )
    } else if (action === 'prev') {
      setCurrentImageIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex,
      )
    }
  }
  function changePreviewImageCarousel(thumbImage: StaticImageData) {
    const thumbIndex = thumbs.findIndex((thumb) => thumb === thumbImage)
    setCurrentImageIndex(thumbIndex)
  }

  return (
    <>
      {width <= 1023 ? (
        <section className="relative flex">
          <Image
            src={previewImage}
            alt="imagePreview"
            className="max-h-[773px] w-full"
          />
          <div className="absolute top-2/4 flex w-full translate-y-[-50%] justify-between px-4">
            <span
              onClick={() => changePreviewImage('prev')}
              className="rounded-full bg-zinc-50 p-2"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </span>
            <span
              onClick={() => changePreviewImage('next')}
              className="rounded-full bg-zinc-50 p-2"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </span>
          </div>
        </section>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="overflow-hidden rounded-lg">
            <Image src={previewImage} alt="imagePreview" />
          </div>
          <nav className="flex gap-6">
            {thumbs.map((thumb) => (
              <div
                key={thumb.src}
                onClick={() => changePreviewImageCarousel(thumb)}
                className="overflow-hidden rounded-lg"
              >
                <Image src={thumb} alt="thumbnail-image" />
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
