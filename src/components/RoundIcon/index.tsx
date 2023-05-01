import { ReactNode } from 'react'
import { IconContainer } from './styles'

export enum IconBackgroundColors {
  YELLOW_DARK = 'yellow-dark',
  YELLOW = 'yellow',
  BASE_TEXT = 'base-text',
  PURPLE = 'purple',
}

interface RoundIconProps {
  children: ReactNode
  iconBackgroundColor: IconBackgroundColors
}

export const RoundIcon = ({
  children,
  iconBackgroundColor,
}: RoundIconProps) => {
  return (
    <IconContainer iconBackgroundColor={iconBackgroundColor}>
      {children}
    </IconContainer>
  )
}
