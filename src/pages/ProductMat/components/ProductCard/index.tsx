import { TrendUp } from 'phosphor-react'
import {
  ProductCardContainer,
  ProductDescriptionContainer,
  ProductProfit,
} from './styles'
import logoPequena from '../../../../assets/logo-pequena.svg'
import { ProductGraphic } from '../ProductGrapic'
import { NavLink } from 'react-router-dom'

export function ProductCard() {
  return (
    <ProductCardContainer>
      <span>Há 2 meses</span>
      <ProductDescriptionContainer>
        <img src={logoPequena} alt="" />
        <div>
          <p>Horsejet</p>
          <p>R$159,90</p>
          <strong>ATIVO</strong>
        </div>
      </ProductDescriptionContainer>
      <ProductProfit>
        <TrendUp /> R$ 5.300,00 (2.77%)
      </ProductProfit>
      <ProductGraphic />
      <NavLink to="/analytics">Exibir mais informações</NavLink>
    </ProductCardContainer>
  )
}
