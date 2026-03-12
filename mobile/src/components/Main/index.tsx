import { useState } from 'react'
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
  const [isTableModalVisible, setIsTableModalVisible] = useState(false)

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
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>

      <TableModal visible={isTableModalVisible} />
    </>
  )
}
