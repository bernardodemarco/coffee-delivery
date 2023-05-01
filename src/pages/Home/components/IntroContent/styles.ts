import styled from 'styled-components'

export const IntroContentContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;

  padding-top: 5.75rem;
  padding-bottom: 8.75rem;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    padding-top: 4rem;
  }
`

export const TextContainer = styled.div`
  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-title']};
  }

  p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 4.125rem;
    margin-top: 1rem;
  }

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;

    @media screen and (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-text']};
  }
`

export const ImageContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`
