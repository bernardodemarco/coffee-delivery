import { HeaderContainer, LocationCard, ShoppingCartCard } from './styles'
import logo from './../../assets/main-logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <div>
        <LocationCard>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationCard>
        <ShoppingCartCard>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartCard>
      </div>
    </HeaderContainer>
  )
}
