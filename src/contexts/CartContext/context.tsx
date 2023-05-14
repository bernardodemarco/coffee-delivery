import React, { useReducer } from 'react'

import { Coffee } from '../../pages/Home/coffees-data'
import { cartReducer } from './reducer'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateCoffeeQuantityAction,
} from './actions'

export interface CartCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  addCoffeeToCart: (coffeeData: CartCoffee) => void
  removeCoffeeFromCart: (id: number) => void
  updateCoffeeQuantity: (id: number, newCoffeeQuantity: number) => void
  cartCoffees: CartCoffee[]
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartCoffees, dispatch] = useReducer(cartReducer, [])

  const addCoffeeToCart = (coffeeData: CartCoffee) => {
    dispatch(addCoffeeToCartAction(coffeeData))
  }

  const removeCoffeeFromCart = (id: number) => {
    dispatch(removeCoffeeFromCartAction(id))
  }

  const updateCoffeeQuantity = (id: number, newCoffeeQuantity: number) => {
    dispatch(updateCoffeeQuantityAction(id, newCoffeeQuantity))
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeQuantity,
        cartCoffees,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
