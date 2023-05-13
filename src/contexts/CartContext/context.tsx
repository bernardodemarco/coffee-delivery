import React, { useState } from 'react'

import { Coffee } from '../../pages/Home/coffees-data'

interface CartCoffee extends Coffee {
  quantity: number
}

interface CartContextType {
  addCoffeeToCart: (coffeeData: CartCoffee) => void
  removeCoffeeFromCart: (id: number) => void
  updateCoffeeQuantity: (id: number, newQuantity: number) => void
  cartCoffees: CartCoffee[]
}

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContext = React.createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartCoffees, setCartCoffees] = useState<CartCoffee[]>([])

  const addCoffeeToCart = (coffeeData: CartCoffee): void => {
    setCartCoffees((prevCoffees) => [...prevCoffees, coffeeData])
  }

  const removeCoffeeFromCart = (id: number): void => {
    setCartCoffees((prevCoffees) => {
      return prevCoffees.filter((coffee) => {
        return coffee.id !== id
      })
    })
  }

  const updateCoffeeQuantity = (id: number, newQuantity: number): void => {
    setCartCoffees((prevCoffees) => {
      return prevCoffees.map((coffee) => {
        if (coffee.id !== id) {
          return coffee
        }
        return { ...coffee, quantity: newQuantity }
      })
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartCoffees,
        addCoffeeToCart,
        removeCoffeeFromCart,
        updateCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
