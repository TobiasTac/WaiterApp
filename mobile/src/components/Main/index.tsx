import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer
} from './styles'

export function Main() {
  return (
    <>
      <Container>
        <Header />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>

      <Footer>
        <FooterContainer> </FooterContainer>
      </Footer>
    </>
  )
}
