'use client'
import { CartContext } from '@/contexts/CartContext'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import { useContext, useState } from 'react'

export function AddToCart() {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function onQuantityChange(action: 'plus' | 'minus') {
    setQuantity((prev) => {
      if (action === 'plus') {
        return prev + 1
      } else {
        return prev > 1 ? prev - 1 : 1
      }
    })
  }

  function handleAddToCart() {
    const item = {
      name: 'Fall Limited Edition Sneaker',
      price: 125,
      quantity,
    }

    addToCart(item)
  }

  return (
    <>
      <div className="flex w-full items-center justify-between gap-6 rounded-lg bg-zinc-100 p-2.5 lg:w-auto">
        <button
          className="rounded-lg p-1.5 hover:bg-pale-orange"
          onClick={() => onQuantityChange('minus')}
        >
          <Minus strokeWidth={2} className="text-orange" />
        </button>
        <span>{quantity}</span>
        <button
          className="rounded-lg p-1.5 hover:bg-pale-orange"
          onClick={() => onQuantityChange('plus')}
        >
          <Plus strokeWidth={2} className="text-orange" />
        </button>
      </div>
      <button
        className="flex w-full justify-center gap-4 rounded-lg bg-orange p-4 font-bold text-white shadow-2xl hover:bg-orange/80"
        onClick={handleAddToCart}
      >
        <ShoppingCart />
        Add to cart
      </button>
    </>
  )
}
