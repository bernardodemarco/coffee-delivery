import { CartContext } from '../../../../contexts/CartContext/context'
import { useContext } from 'react'
import { InlineCoffeeCard } from '../InlineCoffeeCard'
import { SelectedCoffeesContainer, PriceInfo } from './styles'

export const SelectedCoffees = () => {
  const { cartCoffees } = useContext(CartContext)

  const parsePrice = (price: number): string => {
    const priceDigits = String(price).split('.')
    if (priceDigits.length === 1) {
      return `R$ ${priceDigits[0]},00`
    }
    return `R$ ${priceDigits[0]},${priceDigits[1].slice(0, 2).padEnd(2, '0')}`
  }

  const deliveryPrice = 3.5
  const coffeesPrice = cartCoffees.reduce((totalPrice, coffee) => {
    return totalPrice + coffee.price * coffee.quantity
  }, 0)
  const totalPrice = deliveryPrice + coffeesPrice

  return (
    <SelectedCoffeesContainer>
      <div>
        {cartCoffees.map((coffee) => {
          return (
            <InlineCoffeeCard
              key={coffee.id}
              id={coffee.id}
              imageSource={coffee.imageSource}
              title={coffee.title}
              price={coffee.price}
              quantity={coffee.quantity}
            />
          )
        })}
      </div>
      <PriceInfo>
        <div>
          <span>Total de itens</span>
          <span>{parsePrice(coffeesPrice)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{parsePrice(deliveryPrice)}</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>{parsePrice(totalPrice)}</strong>
        </div>
      </PriceInfo>
      <button>confirmar pedido</button>
    </SelectedCoffeesContainer>
  )
}
