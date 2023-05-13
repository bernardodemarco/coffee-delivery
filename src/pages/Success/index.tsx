import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { IconBackgroundColors, RoundIcon } from '../../components/RoundIcon'
import orderCompleted from './../../assets/order-completed.svg'
import { Grid, PageContainer } from './styles'

export const Success = () => {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
                <strong>Cartão de crédito</strong>
              </p>
            </div>
          </article>
        </div>
        <img src={orderCompleted} alt="" />
      </Grid>
    </PageContainer>
  )
}
