'use client'
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
    <div className="flex items-center gap-4" key={cartItem.price}>
      <picture>
        <img
          src="https://github.com/igorct1.png"
          alt=""
          className="w-14 rounded-lg"
        />
      </picture>
      <div className="flex flex-col gap-1">
        <p>{cartItem.name}</p>
        <span>
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
