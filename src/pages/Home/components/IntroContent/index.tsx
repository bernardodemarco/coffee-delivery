import {
  FeatureItem,
  ImageContainer,
  IntroContentContainer,
  TextContainer,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from '@phosphor-icons/react'
import coffeeImage from './../../../../assets/main-coffee-image.png'

import {
  IconBackgroundColors,
  RoundIcon,
} from './../../../../components/RoundIcon'

export const IntroContent = () => {
  return (
    <IntroContentContainer>
      <TextContainer>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <FeatureItem>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.YELLOW_DARK}>
              <ShoppingCart size={16} weight="fill" />
            </RoundIcon>
            <span>Compra simples e segura</span>
          </FeatureItem>
          <FeatureItem>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.BASE_TEXT}>
              <Package size={16} weight="fill" />
            </RoundIcon>
            <span>Embalagem mantém o café intacto</span>
          </FeatureItem>
          <FeatureItem>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.YELLOW}>
              <Timer size={16} weight="fill" />
            </RoundIcon>
            <span>Entrega rápida e rastreada</span>
          </FeatureItem>
          <FeatureItem>
            <RoundIcon iconBackgroundColor={IconBackgroundColors.PURPLE}>
              <Coffee size={16} weight="fill" />
            </RoundIcon>
            <span>O café chega fresquinho até você</span>
          </FeatureItem>
        </div>
      </TextContainer>
      <ImageContainer>
        <img
          src={coffeeImage}
          alt="Copo de café de plástico da Coffee Delivery, com grãos de café em um plano de fundo de cor amarela."
        />
      </ImageContainer>
    </IntroContentContainer>
  )
}
