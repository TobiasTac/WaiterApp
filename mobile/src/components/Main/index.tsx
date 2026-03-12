import { Button } from '../Button'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { TableModal } from '../TableModal'
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
        <FooterContainer>
          <Button onPress={() => alert('ai')} disabled>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>

      <TableModal />
    </>
  )
}
