import { Menu } from '../Menu'
import { Cart } from '../Cart'
import avatar from '../../assets/image-avatar.png'
import Image from 'next/image'

export function Header() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-8">
      <header className="flex items-center justify-between py-6 lg:py-0">
        <Menu />
        <div className="flex items-center gap-6 sm:gap-8 md:gap-10">
          <Cart />
          <Image
            src={avatar}
            className="w-8 cursor-pointer overflow-hidden rounded-full border-orange hover:border-2 sm:w-10 md:w-12"
            alt="avatar-img"
          />
        </div>
      </header>
      <div className=" bg-zinc-200 lg:h-[1px]" />
    </div>
  )
}
