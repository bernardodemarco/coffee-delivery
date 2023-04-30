import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 2rem;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }
`
