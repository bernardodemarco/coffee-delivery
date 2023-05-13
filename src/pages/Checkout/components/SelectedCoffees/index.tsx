import { CartContext } from '../../../../contexts/CartContext/context'
import { useContext } from 'react'
import { InlineCoffeeCard } from '../InlineCoffeeCard'
import { SelectedCoffeesContainer, PriceInfo } from './styles'

export const SelectedCoffees = () => {
  const { cartCoffees } = useContext(CartContext)

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
            />
          )
        })}
      </div>
      <PriceInfo>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </div>
      </PriceInfo>
      <button>confirmar pedido</button>
    </SelectedCoffeesContainer>
  )
}
