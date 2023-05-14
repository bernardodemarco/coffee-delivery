import { CartCoffee } from './context'
import { ActionTypes } from './actions'

export const cartReducer = (state: CartCoffee[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const { coffeeData } = action.payload
      let isCoffeeInCart = false

      const newCoffees = state.map((coffee) => {
        if (coffee.id === coffeeData.id) {
          isCoffeeInCart = true
          return {
            ...coffee,
            quantity: coffee.quantity + coffeeData.quantity,
          }
        }
        return coffee
      })

      if (!isCoffeeInCart) {
        newCoffees.push(coffeeData)
      }
      return newCoffees
    }
    case ActionTypes.REMOVE_COFFEE: {
      const { id } = action.payload
      return state.filter((coffee) => {
        return coffee.id !== id
      })
    }
    case ActionTypes.SET_COFFEE_QUANTITY: {
      const { newCoffeeQuantity, id } = action.payload
      if (newCoffeeQuantity < 1) {
        return state
      }
      return state.map((coffee) => {
        if (coffee.id !== id) {
          return coffee
        }
        return { ...coffee, quantity: newCoffeeQuantity }
      })
    }
    default:
      return state
  }
}
