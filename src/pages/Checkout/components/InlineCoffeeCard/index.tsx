import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Card, RemoveContainer, InfoContainer, InputContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext/context'

interface InlineCoffeeCardProps {
  id: number
  imageSource: string
  title: string
  price: number
  quantity: number
}

export const InlineCoffeeCard = ({
  id,
  imageSource,
  title,
  price,
  quantity,
}: InlineCoffeeCardProps) => {
  const { updateCoffeeQuantity, removeCoffeeFromCart } = useContext(CartContext)

  const handleDeleteCoffee = () => {
    removeCoffeeFromCart(id)
  }

  const handleIncrementCoffeeQuantity = () => {
    updateCoffeeQuantity(id, quantity + 1)
  }

  const handleDecrementCoffeeQuantity = () => {
    updateCoffeeQuantity(id, quantity - 1)
  }

  const priceDigits = String(price).split('.')

  return (
    <Card>
      <div>
        <img src={imageSource} alt="" />
        <InfoContainer>
          <p>{title}</p>
          <div>
            <InputContainer>
              <Plus size={14} onClick={handleIncrementCoffeeQuantity} />
              <span>{quantity}</span>
              <Minus size={14} onClick={handleDecrementCoffeeQuantity} />
            </InputContainer>
            <RemoveContainer onClick={handleDeleteCoffee}>
              <Trash size={16} />
              <span>remover</span>
            </RemoveContainer>
          </div>
        </InfoContainer>
      </div>
      <strong>
        R$ {priceDigits[0]},{priceDigits[1].padEnd(2, '0')}
      </strong>
    </Card>
  )
}
