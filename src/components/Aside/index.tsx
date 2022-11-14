import {
  AsideContainer,
  MenuContainer,
  Notification,
  NotifierArea,
} from './styles'
import logoRocket from '../../assets/logo-rocketbravus.svg'
import { CodesandboxLogo, Vault } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Aside() {
  return (
    <AsideContainer>
      <img src={logoRocket} alt="" />
      <nav>
        <MenuContainer>
          <strong>Menu</strong>
          <NavLink to="/">
            <CodesandboxLogo size={29} />
            Produtos
          </NavLink>
          <a href="#">
            <Vault size={29} />
            Cofre
          </a>
        </MenuContainer>
      </nav>
      <strong>Notificações</strong>
      <NotifierArea>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
        <Notification>
          <span>Bolsa Suit Woman</span>
          <p>Venda realizada no valor de R$147,90</p>
        </Notification>
      </NotifierArea>
    </AsideContainer>
  )
}
