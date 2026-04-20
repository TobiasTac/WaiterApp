import { useState } from 'react'
import { CartItem } from '../../types/CartItem'
import { Product } from '../../types/Product'
import { Button } from '../Button'
import { Cart } from '../Cart'
import { Categories } from '../Categories'
import { Header } from '../Header'
import { Menu } from '../Menu'
import { TableModal } from '../TableModal'
import { CategoriesContainer, Container, Footer, MenuContainer } from './styles'

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false)
  const [selectedTable, setSelectedTable] = useState('')
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function handleSaveTable(table: string) {
    setSelectedTable(table)
  }

  function handleCancelOrder() {
    setSelectedTable('')
  }

  function handleAddToCart(product: Product) {
    if (!selectedTable) {
      setIsTableModalVisible(true)
    }

    setCartItems(prevState => {
      const itemIndex = prevState.findIndex(
        cartItems => cartItems.product._id === product._id
      )

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product
        })
      }

      const newCartItems = [...prevState]
      const item = newCartItems[itemIndex]

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1
      }

      return newCartItems
    })
  }

  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          onCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu onAddToCart={handleAddToCart} />
        </MenuContainer>
      </Container>

      <Footer>
        {/* <FooterContainer> */}
        {!selectedTable && (
          <Button onPress={() => setIsTableModalVisible(true)}>
            Novo Pedido
          </Button>
        )}

        {selectedTable && (
          <Cart cartItems={cartItems} onAdd={handleAddToCart} />
        )}
        {/* </FooterContainer> */}
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </>
  )
}
