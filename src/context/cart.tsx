'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (productId: number) => void
}

const cartContext = createContext({} as CartContextType)
export const useCart = () => useContext(cartContext)

function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(productId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      }

      return [...state, { productId, quantity: 1 }]
    })
  }

  const value = {
    items: cartItems,
    addItem,
  } as CartContextType

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>
}

export default CartProvider
