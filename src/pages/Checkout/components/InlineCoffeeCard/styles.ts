import styled from 'styled-components'

export const Card = styled.article`
  width: 23rem;
  padding: 0.5rem 0.25rem;
  background-color: ${({ theme }) => theme['base-card']};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    display: flex;

    img {
      width: 4rem;
      height: 4rem;
      margin-right: 1.25rem;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }
`

export const RemoveContainer = styled.div``
