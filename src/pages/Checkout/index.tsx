import { SelectedCoffees } from './components/SelectedCoffees'
import { OrderForm } from './components/OrderForm'
import { CheckoutForm } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const orderFormSchema = zod.object({
  cep: zod.string(),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string(),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a rua'),
  state: zod.string().length(2, 'Informe o estado'),
})

type OrderFormSchema = zod.infer<typeof orderFormSchema>

export const Checkout = () => {
  const newOrderForm = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
  })
  const { handleSubmit, formState } = newOrderForm

  console.log(formState.errors)
  const handleCreateNewOrder = (data: OrderFormSchema) => {
    console.log(data)
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
