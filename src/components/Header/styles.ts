import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme['purple-light']};

  & > span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['purple-dark']};
  }

  & > svg {
    color: ${({ theme }) => theme.purple};
  }
`

export const ShoppingCartCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme['yellow-light']};

  & > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }
`
