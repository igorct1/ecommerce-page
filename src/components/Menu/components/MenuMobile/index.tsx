'use client'

import { MenuIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../../../../assets/logo.svg'

export function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex gap-4 items-center">
      <MenuIcon
        width={20}
        className="text-dark-grayish-blue"
        onClick={() => setIsOpen(true)}
      />
      <Image src={logo} alt="Project Logo" className="-mt-1" />
      {isOpen && (
        <div className="absolute top-0 left-0 bg-zinc-900/75 h-screen w-screen">
          <div className="space-y-10 absolute top-0 left-0 bg-white w-4/6 h-full py-4 px-6 transition-all">
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
