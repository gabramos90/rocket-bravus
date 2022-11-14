import styled from 'styled-components'

export const ProductAnalyticsContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1.25rem;
`
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`

export const NavBarContainer = styled.nav`
  display: flex;

  a {
    display: flex;

    margin: 0 0.5rem;
    padding: 0.4rem;

    border-radius: 9999px;
    border: 2.5px solid transparent;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-400']};

    text-decoration: none;

    &:hover {
      border: 2.5px solid ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['green-300']};
      transition: all 0.2s;
    }
  }
`
export const ExitIcon = styled.a`
  display: flex;

  a {
    display: flex;
    text-align: center;

    margin: 0 0.5rem;
    padding: 0.4rem;

    border-radius: 9999px;
    border: 2.5px solid transparent;

    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-400']};

    text-decoration: none;

    &:hover {
      border: 2.5px solid ${(props) => props.theme['red-300']};
      color: ${(props) => props.theme['red-300']};
      transition: all 0.2s;
    }
  }
`
