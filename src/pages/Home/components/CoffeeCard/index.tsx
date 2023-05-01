import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'
import coffeeImage from './../../../../assets/expresso-tradicional.png'
import {
  BuyContainer,
  Card,
  IconContainer,
  InputContainer,
  Label,
} from './styles'

export const CoffeeCard = () => {
  return (
    <Card>
      <img src={coffeeImage} alt="" />
      <Label>Tradicional</Label>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <BuyContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <InputContainer>
          <Plus size={14} />
          <input type="number" />
          <Minus size={14} />
        </InputContainer>
        <IconContainer>
          <ShoppingCartSimple size={22} weight="fill" />
        </IconContainer>
      </BuyContainer>
    </Card>
  )
}
