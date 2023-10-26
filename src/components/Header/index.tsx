import { ShoppingCart } from 'lucide-react'
import { Menu } from '../Menu'

export function Header() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8">
      <header className="flex items-center justify-between  py-6 md:py-10">
        <Menu />
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          <ShoppingCart width={20} className="text-dark-grayish-blue" />
          <picture className="overflow-hidden rounded-full">
            <img
              src="https://github.com/igorct1.png"
              alt=""
              className="w-6 sm:w-10 md:w-12"
            />
          </picture>
        </div>
      </header>
      <div className=" bg-zinc-200 lg:h-[1px]" />
    </div>
  )
}
