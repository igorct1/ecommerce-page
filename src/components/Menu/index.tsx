'use client'
import { useWindowSize } from 'usehooks-ts'
import { MenuMobile } from './components/MenuMobile'
import logo from '../../assets/logo.svg'
import Image from 'next/image'

export function Menu() {
  const { width } = useWindowSize()

  return (
    <>
      {width <= 720 ? (
        <MenuMobile />
      ) : (
        <nav className="flex items-center gap-6 lg:gap-10 xl:gap-14">
          <ul className="flex  text-dark-grayish-blue order-2 xl:gap-12 lg:gap-8 gap-4 ">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </ul>
          <Image src={logo} alt="Project Logo" className="-mt-1" />
        </nav>
      )}
    </>
  )
}
