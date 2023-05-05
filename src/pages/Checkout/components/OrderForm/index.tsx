import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import {
  FormInfo,
  FormContainer,
  InputsContainer,
  OptionalInput,
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
        <div>
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </section>
    </FormContainer>
  )
}
