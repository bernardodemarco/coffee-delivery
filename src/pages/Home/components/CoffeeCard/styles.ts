import styled from 'styled-components'

export const Card = styled.article`
  width: 16rem;
  padding: 0 1.5rem 1.25rem 1.5rem;

  background-color: ${({ theme }) => theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    position: relative;
    top: -1.25rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme['base-label']};
  }

  & > div:nth-of-type(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    margin-bottom: 1rem;
    margin-top: -0.75rem;
  }
`

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;

  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;
  color: ${({ theme }) => theme['yellow-dark']};
  text-transform: uppercase;
`

export const BuyContainer = styled.div`
  margin-top: 2.0625rem;

  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
    margin-right: 1.25rem;

    strong {
      font-family: 'Baloo 2', cursive;
      font-family: 800;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['base-text']};
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  height: 2.375rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['base-button']};

  margin-right: 0.5rem;

  input {
    border: none;
    background: none;
    width: 1.25rem;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    text-align: center;
    color: ${({ theme }) => theme['base-title']};
  }

  svg {
    color: ${({ theme }) => theme.purple};
    transition: color 0.2s ease-in-out;
  }

  svg:hover {
    cursor: pointer;
    color: ${({ theme }) => theme['purple-dark']};
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-dark']};
  transition: background-color 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.white};
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.purple};
  }
`
