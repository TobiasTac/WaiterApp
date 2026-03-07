import { Categories } from '../Categories'
import { Header } from '../Header'
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
        <MenuContainer></MenuContainer>
      </Container>

      <Footer>
        <FooterContainer> </FooterContainer>
      </Footer>
    </>
  )
}
