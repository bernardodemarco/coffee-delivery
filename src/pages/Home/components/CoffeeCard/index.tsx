import React, { useState, useContext } from 'react'
import { Plus, Minus, ShoppingCartSimple } from '@phosphor-icons/react'
import {
  BuyContainer,
  Card,
  IconContainer,
  InputContainer,
  Label,
} from './styles'
import { Coffee } from '../../coffees-data'
import { CartContext } from '../../../../contexts/CartContext/context'

interface CoffeeCardProps extends Coffee {}

export const CoffeeCard = ({
  imageSource,
  labels,
  title,
  description,
  price,
  id,
}: CoffeeCardProps) => {
  const { addCoffeeToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number | string>(1)

  const handleIncrementCoffeeQuantity = () => {
    setQuantity((prevQuantity) => {
      if (typeof prevQuantity === 'number') {
        return prevQuantity + 1
      }
      return 1
    })
  }

  const handleDecrementCoffeeQuantity = () => {
    setQuantity((prevQuantity) => {
      if (typeof prevQuantity === 'number' && prevQuantity > 1) {
        return prevQuantity - 1
      }
      return 1
    })
  }

  const handleCoffeeQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newCoffeeQuantity = parseInt(e.target.value)
    if (newCoffeeQuantity >= 1) {
      setQuantity(newCoffeeQuantity)
    } else {
      setQuantity('')
    }
  }

  const handleAddCoffeeToCart = () => {
    if (typeof quantity === 'string') {
      setQuantity(1)
    } else {
      addCoffeeToCart({
        id,
        imageSource,
        labels,
        title,
        description,
        price,
        quantity,
      })
    }
  }

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
          <Plus size={14} onClick={handleIncrementCoffeeQuantity} />
          <input
            type="number"
            min={1}
            max={100}
            onChange={handleCoffeeQuantityChange}
            value={quantity}
          />
          <Minus size={14} onClick={handleDecrementCoffeeQuantity} />
        </InputContainer>
        <IconContainer onClick={handleAddCoffeeToCart}>
          <ShoppingCartSimple size={22} weight="fill" />
        </IconContainer>
      </BuyContainer>
    </Card>
  )
}
