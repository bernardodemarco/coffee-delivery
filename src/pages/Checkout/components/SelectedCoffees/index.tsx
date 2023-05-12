import { InlineCoffeeCard } from '../InlineCoffeeCard'
import { SelectedCoffeesContainer, PriceInfo } from './styles'

export const SelectedCoffees = () => {
  return (
    <SelectedCoffeesContainer>
      <div>
        <InlineCoffeeCard />
        <InlineCoffeeCard />
        {/* <InlineCoffeeCard /> */}
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
