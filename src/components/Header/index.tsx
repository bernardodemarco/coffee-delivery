import { HeaderContainer, LocationCard, ShoppingCartCard } from './styles'
import logo from './../../assets/main-logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  numOfItems: number
}

export const Header = ({ numOfItems }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Link to={'/'}>
        <img src={logo} alt="" />
      </Link>
      <div>
        <LocationCard>
          <MapPin size={22} weight="fill" />
          <span>Florianópolis, SC</span>
        </LocationCard>
        <Link to={'/checkout'}>
          <ShoppingCartCard>
            {numOfItems > 0 && <span>{numOfItems}</span>}
            <ShoppingCart size={22} weight="fill" />
          </ShoppingCartCard>
        </Link>
      </div>
    </HeaderContainer>
  )
}
