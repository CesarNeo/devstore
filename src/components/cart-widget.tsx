'use client'

import { useCart } from '@/context/cart'
import { ShoppingBag } from 'lucide-react'

function CartWidget() {
  const { items } = useCart()

  return (
    <button className="flex items-center gap-2">
      <ShoppingBag className="w-4 h-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </button>
  )
}

export default CartWidget
