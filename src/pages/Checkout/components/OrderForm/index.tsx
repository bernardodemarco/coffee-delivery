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

export const OrderForm = () => {
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
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div>
            <input type="number" placeholder="Número" />
            <OptionalInput>
              <input type="text" placeholder="Complemento" />
            </OptionalInput>
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
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
