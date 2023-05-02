import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { InputContainer } from '../../../Home/components/CoffeeCard/styles'
import { Card, RemoveContainer, InfoContainer } from './styles'

export const InlineCoffeeCard = () => {
  return (
    <Card>
      <div>
        <img src="coffee-images/arabe.png" alt="" />
        <InfoContainer>
          <p>title</p>
          <div>
            <InputContainer>
              <Plus size={14} />
              <input type="number" placeholder="0" />
              <Minus size={14} />
            </InputContainer>
            <RemoveContainer>
              <Trash />
              <span>remover</span>
            </RemoveContainer>
          </div>
        </InfoContainer>
      </div>
      <strong>price</strong>
    </Card>
  )
}
