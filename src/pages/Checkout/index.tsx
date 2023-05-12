import { SelectedCoffees } from './components/SelectedCoffees'
import { OrderForm } from './components/OrderForm'
import { CheckoutForm } from './styles'

export const Checkout = () => {
  return (
    <CheckoutForm>
      <section>
        <h2>Complete seu pedido</h2>
        <OrderForm />
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutForm>
  )
}
