import { ListPlus, MagnifyingGlass, Warning } from 'phosphor-react'
import {
  HeaderContainer,
  ProductMatContainer,
  SearchBarContainer,
} from './styles'

export function ProductMat() {
  return (
    <ProductMatContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <MagnifyingGlass size={20} />
          <input type="text" placeholder="Busque o seu produto aqui..." />
          <button>Buscar</button>
        </SearchBarContainer>
        <nav>
          <a href="#">
            <ListPlus size={20} />
          </a>
          <a href="#">
            <Warning size={20} />
          </a>
        </nav>
      </HeaderContainer>
    </ProductMatContainer>
  )
}
