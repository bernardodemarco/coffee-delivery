import styled from 'styled-components'
import { InputContainer as BaseInputContainer } from '../../../Home/components/CoffeeCard/styles'

export const Card = styled.article`
  width: 23rem;
  padding: 0.5rem 0.25rem;
  background-color: ${({ theme }) => theme['base-card']};

  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  strong {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
  }

  @media screen and (max-width: 44.375rem) {
    & {
      width: 100%;

      img {
        display: none;
      }

      strong {
        margin-left: 1rem;
      }
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }

  & > div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 44.375rem) {
    p {
      margin-bottom: 0.5rem;
    }
  }
`

export const InputContainer = styled(BaseInputContainer)`
  height: 2rem;

  & > span {
    border: none;
    background: none;
    width: 1.25rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme['base-title']};
  }
`

export const RemoveContainer = styled.div`
  background-color: ${({ theme }) => theme['base-button']};
  padding: 0 0.5rem;
  border-radius: 6px;
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: background-color 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme['base-hover']};

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    svg {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.15s ease-in-out;
  }

  span {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
    transition: color 0.15s ease-in-out;
  }
`
