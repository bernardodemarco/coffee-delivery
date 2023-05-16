import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  width: 28rem;
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 6px;
    padding: 0.75rem 0.5rem;

    text-transform: uppercase;
    color: ${({ theme }) => theme.white};
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.6;

    transition: background-color 0.25s ease-in-out;

    &:not(:disabled):hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['yellow-dark']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  @media screen and (max-width: 44.375rem) {
    & {
      width: 85vw;
    }

    & > div {
      width: 100%;
    }
  }
`

export const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-text']};
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`
