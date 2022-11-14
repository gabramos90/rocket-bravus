import styled from 'styled-components'

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 1.25rem;
  border-right: 1px solid ${(props) => props.theme['gray-600']};
  padding-right: 1.25rem;

  img {
    width: 168px;
    height: 34px;
    margin: 0 auto;
  }

  nav {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;

    a {
      margin-top: 0.5rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem;
      border-radius: 15px;

      color: ${(props) => props.theme['gray-300']};

      :hover {
        background-color: ${(props) => props.theme['gray-600']};
      }

      :focus {
        background-color: ${(props) => props.theme['purple-300']};
      }
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const NotifierArea = styled.div`
  margin-top: 1rem;
  width: 15rem;
  height: 25rem;
  border-radius: 15px;
  background: ${(props) => props.theme['gray-900']};
  overflow-y: scroll;
  overflow-x: hidden;
  flex: 1;

  ::-webkit-scrollbar {
    width: 0;
  }
`

export const Notification = styled.div`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.56rem;
  padding: 10px;

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 12px;
  }
`
