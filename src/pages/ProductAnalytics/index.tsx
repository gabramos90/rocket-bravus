import {
  HeaderContainer,
  NavBarContainer,
  ProductAnalyticsContainer,
  ExitIcon,
} from './styles'
import { Presentation, SignOut } from 'phosphor-react'

export function ProductAnalytics() {
  return (
    <ProductAnalyticsContainer>
      <HeaderContainer>
        <NavBarContainer>
          <a href="#">
            <Presentation size={25} />
          </a>
          <a href="#">
            <Presentation size={25} />
          </a>
          <a href="#">
            <Presentation size={25} />
          </a>
          <a href="#">
            <Presentation size={25} />
          </a>
        </NavBarContainer>
        <ExitIcon>
          <a href="#">
            <SignOut size={25} />
          </a>
        </ExitIcon>
      </HeaderContainer>
    </ProductAnalyticsContainer>
  )
}
