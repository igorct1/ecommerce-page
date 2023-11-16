'use client'
import { useWindowSize } from 'usehooks-ts'
import { MenuMobile } from './components/MenuMobile'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { SettingsTabs } from '../SettingsTab/tabs'

export function Menu() {
  const { width } = useWindowSize()

  return (
    <>
      {width <= 1024 ? (
        <MenuMobile />
      ) : (
        <nav className="flex items-center gap-6 lg:gap-10 xl:gap-14">
          <ul className="order-2 flex gap-4 text-dark-grayish-blue lg:gap-8 xl:gap-12 ">
            <SettingsTabs />
          </ul>
          <Image src={logo} alt="Project Logo" className="-mt-1" />
        </nav>
      )}
    </>
  )
}
