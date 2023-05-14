import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/context'

export const DefaultLayout = () => {
  const { cartCoffees } = useContext(CartContext)

  return (
    <LayoutContainer>
      <Header numOfItems={cartCoffees.length} />
      <Outlet />
    </LayoutContainer>
  )
}
