import styled from 'styled-components'
import { IconBackgroundColors } from '.'

interface IconContainerProps {
  iconBackgroundColor: IconBackgroundColors
}

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 2rem;
  height: 2rem;
  background-color: ${({ theme, iconBackgroundColor }) =>
    theme[iconBackgroundColor]};
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.white};
  }
`
