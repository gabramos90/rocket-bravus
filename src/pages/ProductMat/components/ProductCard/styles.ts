import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  height: 22.5rem;
  width: 14.85rem;
  padding: 0.8rem;

  background: ${(props) => props.theme['gray-700']};

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  border-radius: 15px;

  color: black;

  @media screen and (max-width: 1518px) {
    height: 20rem;
    width: 14rem;
  }

  span {
    display: flex;
    flex-direction: row-reverse;

    font-size: 0.875rem;

    color: ${(props) => props.theme['gray-400']};
  }

  a {
    display: flex;
    justify-content: center;

    font-size: 0.875rem;
    text-decoration: none;

    color: ${(props) => props.theme['gray-400']};
  }
`
export const ProductDescriptionContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-content: center;

  color: ${(props) => props.theme['gray-400']};

  img {
    background-color: ${(props) => props.theme['gray-900']};

    height: 57px;
    width: 57px;
    border-radius: 50%;
    padding: 10px;
  }

  p:nth-child(2) {
    font-size: 0.875rem;
  }

  strong {
    color: ${(props) => props.theme['green-300']};

    border-radius: 3px;

    padding: 1px 2px;
    font-size: 0.7rem;
  }
`

export const ProductProfit = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  color: ${(props) => props.theme['green-300']};
`
