'use client'
import { ReactNode, createContext, useState } from 'react'

export interface ICart {
  name: string
  price: number
  quantity: number
}

interface CartContextProps {
  cart: ICart[]
  cartQuantity: number
  addToCart: (CartItem: ICart) => void
  deleteFromCart: (CartItem: ICart) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartStorageProps {
  children: ReactNode
}

export function CartStorage({ children }: CartStorageProps) {
  const [cart, setCart] = useState<ICart[]>([])
  const cartQuantity = cart.length

  function addToCart(CartItem: ICart) {
    setCart((prev) => [...prev, CartItem])
  }

  function deleteFromCart(CartItem: ICart) {
    const newList = cart.filter((item) => item !== CartItem)

    setCart(newList)
  }
  return (
    <CartContext.Provider
      value={{ cart, cartQuantity, addToCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
