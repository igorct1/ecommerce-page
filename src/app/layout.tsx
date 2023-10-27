import type { Metadata } from 'next'
/* eslint-disable camelcase */
import { Kumbh_Sans } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
import { CartStorage } from '../contexts/CartContext'

const kumb = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Ecommerce Sneaker Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={kumb.className}>
        <CartStorage>{children}</CartStorage>
      </body>
    </html>
  )
}
