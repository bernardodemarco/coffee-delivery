import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;

  section {
    background-color: ${({ theme }) => theme['base-card']};
    border-radius: 6px;

    width: 100%;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.3;
      color: ${({ theme }) => theme['yellow-dark']};
    }

    svg {
      color: ${({ theme }) => theme['yellow-dark']};
    }
  }

  @media screen and (max-width: 44.375rem) {
    & {
      width: 85vw;
    }
  }
`

interface FormInfoProps {
  iconColor: 'purple' | 'yellow-dark'
}

export const FormInfo = styled.div<FormInfoProps>`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;

  & > div > h3 {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3;
    font-weight: 400;
  }

  & > div > p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;
  }

  svg {
    color: ${({ theme, iconColor }) => theme[iconColor]};
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
  }

  input {
    display: block;
    padding: 0.75rem;
    background-color: ${({ theme }) => theme['base-input']};
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme['base-button']};
    color: ${({ theme }) => theme['base-text']};
    font-size: 0.875rem;
    line-height: 1.3;
    font-weight: 400;

    transition: border 0.125s ease-in-out;
  }

  input:nth-of-type(1) {
    width: 12.5rem;
  }

  div:nth-of-type(2) {
    input:nth-of-type(2) {
      flex: 1;
    }

    input:nth-of-type(3) {
      width: 3.75rem;
    }
  }

  input::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme['yellow-dark']};
  }

  @media screen and (max-width: 44.375rem) {
    & > div {
      flex-direction: column;
      justify-content: center;
    }

    input:nth-of-type(1),
    div:nth-of-type(2) input:nth-of-type(2),
    div:nth-of-type(2) input:nth-of-type(3) {
      width: 100%;
    }
  }
`

interface OptionalInputProps {
  isComplementFilled: boolean
}

export const OptionalInput = styled.div<OptionalInputProps>`
  position: relative;
  flex: 1;
  display: flex;

  & > input {
    flex: 1;
  }

  &::after {
    content: 'Opcional';
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    display: ${({ isComplementFilled }) =>
      isComplementFilled ? 'none' : 'block'};

    color: ${({ theme }) => theme['base-label']};
    font-size: 0.75rem;
    line-height: 1.3;
    font-weight: 400;
    font-style: italic;
  }

  @media screen and (max-width: 44.375rem) {
    & {
      width: 100%;
    }
  }
`

export const PaymentMethod = styled.div`
  align-self: center;

  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    padding: 1rem;

    transition: background-color 0.25s ease-in-out;

    svg {
      color: ${({ theme }) => theme.purple};
    }

    p {
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['base-text']};
      width: 7.1875rem;
    }

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme['base-hover']};
    }
  }

  input:checked + label {
    background-color: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme.purple};
  }
`
