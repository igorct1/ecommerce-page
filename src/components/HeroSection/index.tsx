'use client'
import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
} from 'lucide-react'
import { useWindowSize } from 'usehooks-ts'

import image1 from '../../assets/image-product-1.jpg'
import image2 from '../../assets/image-product-2.jpg'
import image3 from '../../assets/image-product-3.jpg'
import image4 from '../../assets/image-product-4.jpg'

import thumb1 from '../../assets/image-product-1-thumbnail.jpg'
import thumb2 from '../../assets/image-product-2-thumbnail.jpg'
import thumb3 from '../../assets/image-product-3-thumbnail.jpg'
import thumb4 from '../../assets/image-product-4-thumbnail.jpg'

const images = [image1, image2, image3, image4]
const thumbs = [thumb1, thumb2, thumb3, thumb4]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const previewImage = images[currentImageIndex]
  const { width } = useWindowSize()

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
    <div className="flex flex-col gap-8 md:gap-20 lg:flex-row">
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
      <section className="flex flex-col px-4 pb-8 pt-4 md:px-8 lg:py-14">
        <span className="uppercase tracking-wider text-orange">
          Sneaker Company
        </span>
        <h1 className="py-4 text-2xl font-bold text-very-dark-blue md:text-4xl lg:text-5xl">
          Fall Limited Edition Sneakers
        </h1>
        <p className="max-w-[1000px] py-2 pb-4 text-lg font-bold text-grayish-blue">
          These low-profile sneakers are perfect casual wear companion.
          Featuring a durable rubber outer sole, they`ll withstand everything
          the weather can offer.
        </p>
        <div className="flex flex-row items-start justify-between gap-4 pb-6 pt-4 md:flex-col">
          <strong className="flex items-center gap-4 text-xl font-bold text-very-dark-blue">
            $125.00{' '}
            <span className="rounded-lg bg-pale-orange px-1.5 py-1  text-sm text-orange">
              50%
            </span>
          </strong>
          <p className="text-md text-grayish-blue line-through">$250.00</p>
        </div>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="flex w-full items-center justify-between gap-6 rounded-lg bg-zinc-100 p-2.5 lg:w-auto">
            <button className="rounded-lg p-1.5 hover:bg-pale-orange">
              <Minus strokeWidth={2} className="text-orange" />
            </button>
            <span>1</span>
            <button className="rounded-lg p-1.5 hover:bg-pale-orange">
              <Plus strokeWidth={2} className="text-orange" />
            </button>
          </div>
          <button className="flex w-full justify-center gap-4 rounded-lg bg-orange p-4 font-bold text-white shadow-lg">
            <ShoppingCart />
            Add to cart
          </button>
        </div>
      </section>
    </div>
  )
}
