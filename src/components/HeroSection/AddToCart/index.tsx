'use client'
import { CartContext } from '@/contexts/CartContext'
import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import { useContext, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'

export function AddToCart() {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)
  const [open, setOpen] = useState(false)

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
    setOpen(true)
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
      <Toast.Provider swipeDirection="right">
        <button
          className="flex w-full justify-center gap-4 rounded-lg bg-orange p-4 font-bold text-white shadow-2xl hover:bg-orange/80"
          onClick={handleAddToCart}
        >
          <ShoppingCart />
          Add to cart
        </button>

        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className=" grid grid-cols-[auto_max-content] items-center gap-x-[15px] rounded-md bg-orange p-[15px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] [grid-template-areas:_'title_action'_'description_action'] data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
        >
          <Toast.Title className="mb-[5px] text-[15px] font-semibold text-zinc-50 [grid-area:_title]">
            Item adicionado ao carrinho
          </Toast.Title>

          <Toast.Action className="[grid-area:_action]" asChild altText="Undo">
            <button className="text-zinc-50">
              <X />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="fixed right-0 top-0 z-[2147483647] m-0 flex w-[390px] max-w-[100vw] list-none flex-col gap-[10px] p-[var(--viewport-padding)] outline-none [--viewport-padding:_25px]" />
      </Toast.Provider>
    </>
  )
}
