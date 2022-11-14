import styled from 'styled-components'

export const ProductMatContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1.25rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 1rem;
  }

  a:first-child {
    color: ${(props) => props.theme['gray-300']};

    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme['green-300']};
    }
  }

  a:last-child {
    color: ${(props) => props.theme['gray-300']};
    animation: piscaPisca 1s infinite;

    text-decoration: none;

    @keyframes piscaPisca {
      0% {
        color: ${(props) => props.theme['gray-100']};
      }
      90% {
        color: ${(props) => props.theme['red-300']};
      }

      100% {
        color: ${(props) => props.theme['gray-100']};
      }
    }

    &:hover {
      color: ${(props) => props.theme['red-300']};
    }
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  /* background: ${(props) => props.theme['gray-900']}; */

  input {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    border-style: none;
    border-radius: 15px 0 0 15px;

    padding: 0.7rem;
    width: 20rem;
  }

  button {
    background: ${(props) => props.theme['gray-600']};
    color: ${(props) => props.theme['gray-300']};
    border-style: none;
    border-radius: 0 15px 15px 0;

    padding: 0.7rem;

    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple-300']};
    }
  }
`

export const ProductCardArea = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 1rem;

  margin-top: 1rem;
  align-content: flex-start;

  background: ${(props) => props.theme['gray-900']};

  border-radius: 15px;
  padding: 1rem;

  @media screen and (max-width: 1518px) {
    gap: 0.52rem;
    padding: 0.51rem;
  }

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }
`
