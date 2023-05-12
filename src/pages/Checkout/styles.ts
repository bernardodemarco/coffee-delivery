import styled from 'styled-components'

export const CheckoutForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 2.5rem 0 7rem;

  & h2 {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    margin-bottom: 0.9375rem;
  }

  @media screen and (max-width: 72.5rem) {
    & {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: 4rem;
    }
  }
`
