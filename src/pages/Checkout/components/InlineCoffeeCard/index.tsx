import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { Card, RemoveContainer, InfoContainer, InputContainer } from './styles'

export const InlineCoffeeCard = () => {
  return (
    <Card>
      <div>
        <img src="coffee-images/expresso-tradicional.png" alt="" />
        <InfoContainer>
          <p>Expresso Tradicional</p>
          <div>
            <InputContainer>
              <Plus size={14} />
              <input type="number" placeholder="0" />
              <Minus size={14} />
            </InputContainer>
            <RemoveContainer>
              <Trash size={16} />
              <span>remover</span>
            </RemoveContainer>
          </div>
        </InfoContainer>
      </div>
      <strong>R$ 9,90</strong>
    </Card>
  )
}
