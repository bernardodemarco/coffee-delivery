import React, { useEffect, useReducer } from 'react'

import { Coffee } from '../../pages/Home/coffees-data'
import { cartReducer } from './reducer'
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  resetCartAction,
  updateCoffeeQuantityAction,
} from './actions'

export interface CartCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  addCoffeeToCart: (coffeeData: CartCoffee) => void
  removeCoffeeFromCart: (id: number) => void
  updateCoffeeQuantity: (id: number, newCoffeeQuantity: number) => void
  resetCart: () => void
  cartCoffees: CartCoffee[]
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartCoffees, dispatch] = useReducer(
    cartReducer,
    [],
    (initialState) => {
      const storedCoffeeCartAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-coffees-1.0.0',
      )

      if (storedCoffeeCartAsJSON) {
        return JSON.parse(storedCoffeeCartAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const cartCoffeesJSON = JSON.stringify(cartCoffees)

    localStorage.setItem('@coffee-delivery:cart-coffees-1.0.0', cartCoffeesJSON)
  }, [cartCoffees])

  const addCoffeeToCart = (coffeeData: CartCoffee) => {
    dispatch(addCoffeeToCartAction(coffeeData))
  }

  const removeCoffeeFromCart = (id: number) => {
    dispatch(removeCoffeeFromCartAction(id))
  }

  const updateCoffeeQuantity = (id: number, newCoffeeQuantity: number) => {
    dispatch(updateCoffeeQuantityAction(id, newCoffeeQuantity))
  }

  const resetCart = () => {
    dispatch(resetCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeQuantity,
        resetCart,
        cartCoffees,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
