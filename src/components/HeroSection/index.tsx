import { ImagePreview } from '../ImagePreview'
import { AddToCart } from './AddToCart'

export function HeroSection() {
  return (
    <div className="flex flex-col gap-8 md:gap-20 lg:flex-row">
      <ImagePreview />

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
          <AddToCart />
        </div>
      </section>
    </div>
  )
}
