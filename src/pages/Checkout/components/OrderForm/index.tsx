import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import {
  FormInfo,
  FormContainer,
  InputsContainer,
  OptionalInput,
  PaymentMethod,
} from './styles'
import { useFormContext } from 'react-hook-form'

export const OrderForm = () => {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <section>
        <FormInfo iconColor="yellow-dark">
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </FormInfo>
        <InputsContainer>
          <input type="text" placeholder="CEP" {...register('cep')} />
          <input type="text" placeholder="Rua" {...register('street')} />
          <div>
            <input type="number" placeholder="Número" {...register('number')} />
            <OptionalInput>
              <input
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />
            </OptionalInput>
          </div>
          <div>
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input type="text" placeholder="Cidade" {...register('city')} />
            <input type="text" placeholder="UF" {...register('state')} />
          </div>
        </InputsContainer>
      </section>
      <section>
        <FormInfo iconColor="purple">
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </FormInfo>
        <PaymentMethod>
          <input type="radio" id="credit-card" name="payment-method" />
          <label htmlFor="credit-card">
            <CreditCard size={16} />
            <p>cartão de crédito</p>
          </label>
          <input type="radio" id="debit-card" name="payment-method" />
          <label htmlFor="debit-card">
            <Bank size={16} />
            <p>cartão de débito</p>
          </label>
          <input type="radio" id="cash" name="payment-method" />
          <label htmlFor="cash">
            <Money size={16} />
            <p>dinheiro</p>
          </label>
        </PaymentMethod>
      </section>
    </FormContainer>
  )
}
