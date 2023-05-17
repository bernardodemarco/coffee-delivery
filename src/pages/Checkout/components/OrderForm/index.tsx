import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Warning,
} from '@phosphor-icons/react'
import {
  FormInfo,
  FormContainer,
  InputsContainer,
  OptionalInput,
  PaymentMethod,
} from './styles'

import { useFormContext, FieldErrors } from 'react-hook-form'
import { OrderFormSchema } from '../..'

export const OrderForm = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const getErrors = (errors: FieldErrors<OrderFormSchema>) => {
    if (errors.cep) {
      return errors.cep.message
    }

    if (errors.city) {
      return errors.city.message
    }

    if (errors.complement) {
      return errors.complement.message
    }

    if (errors.neighborhood) {
      return errors.neighborhood.message
    }

    if (errors.number) {
      return errors.number.message
    }

    if (errors['payment-method']) {
      return errors['payment-method'].message
    }

    if (errors.state) {
      return errors.state.message
    }

    if (errors.street) {
      return errors.street.message
    }

    return false
  }

  const formErrors = getErrors(errors)

  const optionalInput = watch('complement')
  const isComplementFilled = optionalInput && optionalInput.length > 0

  return (
    <FormContainer>
      {!!formErrors && (
        <div>
          <Warning size={16} />
          <p>{formErrors}</p>
        </div>
      )}
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
            <input
              type="number"
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
            />
            <OptionalInput isComplementFilled={isComplementFilled}>
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
          <input
            type="radio"
            id="credit-card"
            {...register('payment-method')}
            value={'credit-card'}
          />
          <label htmlFor="credit-card">
            <CreditCard size={16} />
            <p>cartão de crédito</p>
          </label>
          <input
            type="radio"
            id="debit-card"
            {...register('payment-method')}
            value={'debit-card'}
          />
          <label htmlFor="debit-card">
            <Bank size={16} />
            <p>cartão de débito</p>
          </label>
          <input
            type="radio"
            id="cash"
            {...register('payment-method')}
            value={'cash'}
          />
          <label htmlFor="cash">
            <Money size={16} />
            <p>dinheiro</p>
          </label>
        </PaymentMethod>
      </section>
    </FormContainer>
  )
}
