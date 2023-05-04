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
