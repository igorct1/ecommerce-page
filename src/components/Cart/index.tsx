'use client'
import { ShoppingCart } from 'lucide-react'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import * as Dialog from '@radix-ui/react-dialog'
import { formatPrice } from '@/utils/formatPrice'
import { CartItem } from '../CartItem'

export function Cart() {
  const { cart, cartQuantity } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, total) => {
    return acc + total.price * total.quantity
  }, 0)

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="relative">
            <ShoppingCart
              width={20}
              className="relative text-dark-grayish-blue"
            />
            {cartQuantity > 0 && (
              <span className="absolute -right-3 -top-1 rounded-full bg-orange px-2 py-0.5 text-xs text-zinc-50">
                {cartQuantity}
              </span>
            )}
          </div>
        </Dialog.Trigger>
        <Dialog.Content asChild>
          <div className="absolute left-2/4 right-4 top-24 z-10 flex min-w-[340px]  translate-x-[-50%] flex-col items-start  rounded-lg bg-white shadow-xl md:left-auto md:top-24 md:-translate-x-0 2xl:right-64">
            <span className="p-4 font-bold md:p-8">Cart</span>

            <div className="h-[1px] w-full bg-zinc-200" />

            {cartQuantity === 0 ? (
              <span className="mx-auto flex justify-center px-1 py-16 font-bold text-dark-grayish-blue">
                Your cart is empty
              </span>
            ) : (
              <div className="flex w-full  flex-col gap-6 p-4 md:p-8">
                {cart.map((item) => {
                  return <CartItem key={item.name} cartItem={item} />
                })}

                <p className="font-bold">
                  Total:{' '}
                  <span className="font-normal">{formatPrice(totalPrice)}</span>
                </p>
                <button className="w-full rounded-lg bg-orange p-3 font-bold text-white shadow-2xl hover:bg-orange/80">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}
