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

  div:nth-of-type(1) {
    & > input {
      width: 12.5rem;
    }
  }

  div:nth-of-type(2) {
    input:nth-of-type(1) {
      width: 12.5rem;
    }

    input:nth-of-type(2) {
      flex: 1;
    }

    input:nth-of-type(3) {
      width: 3.75rem;
    }
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

  input:nth-child(1) {
    width: 12.5rem;
  }

  input::placeholder {
    color: ${({ theme }) => theme['base-label']};
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme['yellow-dark']};
  }
`
export const OptionalInput = styled.div`
  position: relative;
  flex: 1;
  display: flex;

  & > input {
    flex: 1;
  }

  &::after {
    content: 'djkdnço';
    position: absolute;
    right: 8px;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
    color: #ccc;
  }

  &:focus-within {
    &::after {
      display: none;
    }
  }
`
