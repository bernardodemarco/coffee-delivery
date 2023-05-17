import styled from 'styled-components'

export const PageContainer = styled.section`
  margin: 5rem 0 2rem;

  & > div > h1 {
    color: ${({ theme }) => theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    margin-bottom: 0.25rem;
  }

  & > div > p {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${({ theme }) => theme['base-subtitle']};
  }
`

export const Grid = styled.div`
  margin-top: 2.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 6.375rem;

  & > div {
    border-radius: 6px 36px;
    border: 1px solid transparent;

    background-image: linear-gradient(
        ${({ theme }) => theme.background},
        ${({ theme }) => theme.background}
      ),
      linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    background-origin: border-box;
    background-clip: padding-box, border-box;

    width: 32.875rem;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  article {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;

    p {
      color: ${({ theme }) => theme['base-text']};
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
    }

    strong {
      font-weight: 700;
    }

    & > div > p:nth-of-type(2) > span {
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 64rem) {
    & {
      margin: 3rem 0;
      gap: 1.5rem;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  @media screen and (max-width: 36rem) {
    & > div {
      width: 85vw;
    }

    & > img {
      display: none;
    }
  }
`
