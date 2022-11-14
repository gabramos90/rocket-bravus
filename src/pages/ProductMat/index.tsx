import { ListPlus, Warning } from 'phosphor-react'
import { ProductCard } from './components/ProductCard'
import {
  HeaderContainer,
  ProductCardArea,
  ProductMatContainer,
  SearchBarContainer,
} from './styles'

export function ProductMat() {
  return (
    <ProductMatContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <input type="text" placeholder="Busque o seu produto aqui..." />
          <button>Buscar</button>
        </SearchBarContainer>
        <nav>
          <a href="#">
            <ListPlus size={22} />
          </a>
          <a href="#">
            <Warning size={22} />
          </a>
        </nav>
      </HeaderContainer>
      <ProductCardArea>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductCardArea>
    </ProductMatContainer>
  )
}
