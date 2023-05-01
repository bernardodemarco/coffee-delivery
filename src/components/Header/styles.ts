import styled from 'styled-components'

export const HeaderContainer = styled.header`
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
  padding: 0.5rem;
  border-radius: 6px;
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
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${({ theme }) => theme['yellow-light']};

  & > svg {
    color: ${({ theme }) => theme['yellow-dark']};
  }

  span {
    position: absolute;
    top: -21.075%;
    right: -21.99%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme['yellow-dark']};
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: 0.75rem;
    text-align: center;
  }
`
