import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { IconBackgroundColors, RoundIcon } from '../../components/RoundIcon'
import orderCompleted from './../../assets/order-completed.svg'
import { Grid, PageContainer } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

type PaymentMethodOptions = 'credit-card' | 'debit-card' | 'cash'

interface SuccessProps {
  state: {
    street: string
    city: string
    state: string
    neighborhood: string
    number: number
    paymentMethod: PaymentMethodOptions
  }
}

export const Success = () => {
  const { state: props }: SuccessProps = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!props) {
      navigate('/')
    }
  }, [props, navigate])

  const parsePaymentMethod = (paymentMethod: PaymentMethodOptions): string => {
    if (paymentMethod === 'credit-card') {
      return 'Cartão de Crédito'
    }

    if (paymentMethod === 'debit-card') {
      return 'Cartão de Débito'
    }

    return 'Dinheiro'
  }

  if (!props) {
    return <></>
  }

  return (
    <PageContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <Grid>
        <div>
          <article>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.PURPLE}>
              <MapPin size={16} weight="fill" />
            </RoundIcon>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  Rua {props.street}, {props.number}
                </strong>
              </p>
              <p>
                {props.neighborhood} - {props.city}, <span>{props.state}</span>
              </p>
            </div>
          </article>
          <article>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.YELLOW}>
              <Timer size={16} weight="fill" />
            </RoundIcon>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </article>
          <article>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.YELLOW_DARK}>
              <CurrencyDollar size={16} />
            </RoundIcon>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{parsePaymentMethod(props.paymentMethod)}</strong>
              </p>
            </div>
          </article>
        </div>
        <img src={orderCompleted} alt="" />
      </Grid>
    </PageContainer>
  )
}
