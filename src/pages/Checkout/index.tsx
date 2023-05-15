import { SelectedCoffees } from './components/SelectedCoffees'
import { OrderForm } from './components/OrderForm'
import { CheckoutForm } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const orderFormSchema = zod.object({
  cep: zod
    .string()
    .regex(/^\d{5}-?\d{3}$/, 'Insira o CEP no formato XXXXX-XXX'),
  street: zod.string().min(1, 'Informe a rua'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a rua'),
  state: zod.string().length(2, 'Insira o estado no formato XX'),
  number: zod
    .number({
      invalid_type_error: 'Insira um número',
    })
    .gt(0, 'O número deve ser positivo'),
  'payment-method': zod.enum(['credit-card', 'debit-card', 'cash'], {
    invalid_type_error: 'Selecione uma forma de pagamento',
  }),
})

export type OrderFormSchema = zod.infer<typeof orderFormSchema>

export const Checkout = () => {
  const newOrderForm = useForm<OrderFormSchema>({
    resolver: zodResolver(orderFormSchema),
  })
  const { handleSubmit } = newOrderForm

  const handleCreateNewOrder = (data: OrderFormSchema) => {
    console.log('FORM DATA', data)
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
