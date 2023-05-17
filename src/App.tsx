import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'

import { CartContextProvider } from './contexts/CartContext/context'
import { Router } from './components/Router'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
