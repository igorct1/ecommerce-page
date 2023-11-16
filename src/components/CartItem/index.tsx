'use client'
import Image from 'next/image'
import cartItemImage from '../../assets/image-product-1-thumbnail.jpg'
import { ICart, CartContext } from '@/contexts/CartContext'
import { formatPrice } from '@/utils/formatPrice'
import { Trash2 } from 'lucide-react'
import { useContext } from 'react'

type CartItemProps = {
  cartItem: ICart
}

export function CartItem({ cartItem }: CartItemProps) {
  const { deleteFromCart } = useContext(CartContext)

  function onHandleDelete(cartItem: ICart) {
    deleteFromCart(cartItem)
  }
  const price = cartItem.price * cartItem.quantity

  return (
    <div className="flex items-center gap-2 md:gap-4" key={cartItem.price}>
      <Image
        src={cartItemImage}
        alt="cart-product-image"
        className="w-14 rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm md:text-base">{cartItem.name}</p>
        <span className="text-sm md:text-base">
          {formatPrice(cartItem.price)} x {cartItem.quantity}{' '}
          <span className="font-bold">{formatPrice(price)}</span>
        </span>
      </div>
      <button onClick={() => onHandleDelete(cartItem)}>
        <Trash2 size={18} className="text-grayish-blue" />
      </button>
    </div>
  )
}
