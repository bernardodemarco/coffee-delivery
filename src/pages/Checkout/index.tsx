import { SelectedCoffees } from './components/SelectedCoffees'
import { OrderForm } from './components/OrderForm'
import { CheckoutForm } from './styles'
import { CartContext } from '../../contexts/CartContext/context'
import { useContext } from 'react'

export const Checkout = () => {
  const { cartCoffees } = useContext(CartContext)
  console.log(cartCoffees)

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
