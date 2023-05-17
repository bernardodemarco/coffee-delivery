import { useContext } from 'react'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { CheckoutForm } from './styles'
import { SelectedCoffees } from './components/SelectedCoffees'
import { OrderForm } from './components/OrderForm'
import { CartContext } from '../../contexts/CartContext/context'

const orderFormSchema = zod.object({
  cep: zod
    .string()
    .regex(/^\d{5}-?\d{3}$/, 'Informe o CEP no formato XXXXX-XXX'),
  street: zod.string().min(1, 'Informe a rua'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().length(2, 'Informe o estado no formato XX'),
  number: zod
    .number({
      invalid_type_error: 'Informe um número',
    })
    .gt(0, 'O número deve ser positivo'),
  'payment-method': zod.enum(['credit-card', 'debit-card', 'cash'], {
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
})

export type OrderFormSchema = zod.infer<typeof orderFormSchema>

export const Checkout = () => {
  const navigate = useNavigate()
  const { cartCoffees, resetCart } = useContext(CartContext)

  const newOrderForm = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
  })
  const { handleSubmit } = newOrderForm

  const handleCreateNewOrder = (data: OrderFormSchema) => {
    if (cartCoffees.length > 0) {
      resetCart()
      navigate('/success', {
        state: {
          street: data.street,
          city: data.city,
          state: data.state,
          number: data.number,
          neighborhood: data.neighborhood,
          paymentMethod: data['payment-method'],
        },
      })
    }
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(handleCreateNewOrder)}>
      <section>
        <h2>Complete seu pedido</h2>
        <FormProvider {...newOrderForm}>
          <OrderForm />
        </FormProvider>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </section>
    </CheckoutForm>
  )
}
