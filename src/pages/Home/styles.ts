import styled from 'styled-components'

export const CoffeesSection = styled.section`
  margin-bottom: 9.75rem;

  h2 {
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;
    align-items: start;
    justify-items: center;
  }
`
