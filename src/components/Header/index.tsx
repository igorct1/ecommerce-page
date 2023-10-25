import { ShoppingCart } from 'lucide-react'
import { Menu } from '../Menu'

export function Header() {
  return (
    <header className="flex justify-between items-center md:border-b md:py-8 ">
      <Menu />
      <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
        <ShoppingCart width={20} className="text-dark-grayish-blue" />
        <picture className="rounded-full overflow-hidden">
          <img
            src="https://github.com/igorct1.png"
            alt=""
            className="w-6 sm:w-10 md:w-12"
          />
        </picture>
      </div>
    </header>
  )
}
