import { CartCoffee } from './context'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
  REMOVE_COFFEE = 'REMOVE_COFFEE',
  SET_COFFEE_QUANTITY = 'SET_COFFEE_QUANTITY',
}

export const addCoffeeToCartAction = (coffeeData: CartCoffee) => {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffeeData,
    },
  }
}

export const removeCoffeeFromCartAction = (id: number) => {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export const updateCoffeeQuantityAction = (
  id: number,
  newCoffeeQuantity: number,
) => {
  return {
    type: ActionTypes.SET_COFFEE_QUANTITY,
    payload: {
      id,
      newCoffeeQuantity,
    },
  }
}
