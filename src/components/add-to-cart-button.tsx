'use client'

import { useCart } from '@/context/cart'

interface AddToCartButtonProps {
  productId: number
}

function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addItem } = useCart()

  function handleAddToCart() {
    addItem(productId)
  }

  return (
    <button
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
