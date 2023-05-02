import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  BuyContainer,
  Card,
  IconContainer,
  InputContainer,
  Label,
} from './styles'

export interface CoffeeCardProps {
  imageSource: string
  labels: ('tradicional' | 'gelado' | 'com leite' | 'especial' | 'alcoólico')[]
  title: string
  description: string
  price: number
}

export const CoffeeCard = ({
  imageSource,
  labels,
  title,
  description,
  price,
}: CoffeeCardProps) => {
  const priceDigits = String(price).split('.')

  return (
    <Card>
      <img src={imageSource} alt="" />
      <div>
        {labels.map((label) => (
          <Label key={label}>{label}</Label>
        ))}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <BuyContainer>
        <span>
          R${' '}
          <strong>
            {priceDigits[0]},{priceDigits[1].padEnd(2, '0')}
          </strong>
        </span>
        <InputContainer>
          <Plus size={14} />
          <input type="number" placeholder="0" />
          <Minus size={14} />
        </InputContainer>
        <IconContainer>
          <ShoppingCartSimple size={22} weight="fill" />
        </IconContainer>
      </BuyContainer>
    </Card>
  )
}
