'use client'

import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../../../../assets/logo.svg'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 ">
      <MenuIcon
        width={20}
        className="text-dark-grayish-blue"
        onClick={() => setIsOpen(true)}
      />
      <Image src={logo} alt="Project Logo" className="-mt-1" />
      {isOpen && (
        <div className="fixed left-0 top-0 z-10 h-screen w-screen overflow-hidden bg-zinc-900/75">
          <div className="fixed left-0 top-0 z-20 h-full w-4/6  space-y-10 bg-white px-6 py-4 transition-all">
            <X
              className="text-dark-grayish-blue"
              onClick={() => setIsOpen(false)}
            />
            <nav>
              <ul className="flex flex-col space-y-8 font-bold text-very-dark-blue">
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
