import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Card, RemoveContainer, InfoContainer, InputContainer } from './styles'
import React, { useRef } from 'react'

interface InlineCoffeeCardProps {
  id: number
  imageSource: string
  title: string
  price: number
}

export const InlineCoffeeCard = ({
  // id,
  imageSource,
  title,
  price,
}: InlineCoffeeCardProps) => {
  const priceDigits = String(price).split('.')
  const quantityInputRef = useRef<HTMLInputElement>(null)

  const handleIncrementCoffeeQuantity = () => {
    if (quantityInputRef.current) {
      quantityInputRef.current.value = String(
        parseInt(quantityInputRef.current.value) + 1,
      )
    }
  }

  const handleDecrementCoffeeQuantity = () => {
    if (quantityInputRef.current) {
      quantityInputRef.current.value = String(
        parseInt(quantityInputRef.current.value) - 1,
      )
    }
  }

  const handleCoffeeQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (quantityInputRef.current) {
      if (parseInt(e.target.value) < 1) {
        quantityInputRef.current.value = '1'
      }
      quantityInputRef.current.value = String(e.target.value)
    }
  }

  return (
    <Card>
      <div>
        <img src={imageSource} alt="" />
        <InfoContainer>
          <p>{title}</p>
          <div>
            <InputContainer>
              <Plus size={14} onClick={handleIncrementCoffeeQuantity} />
              <input
                type="number"
                ref={quantityInputRef}
                defaultValue={1}
                min={0}
                onChange={handleCoffeeQuantityChange}
              />
              <Minus size={14} onClick={handleDecrementCoffeeQuantity} />
            </InputContainer>
            <RemoveContainer>
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
