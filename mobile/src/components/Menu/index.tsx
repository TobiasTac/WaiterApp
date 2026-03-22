import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { products } from '../../mocks/products'
import { formatCurrency } from '../../utils/formatCurrency'
import { PlusCircle } from '../Icons/PlusCircle'
import { ProductModal } from '../ProductModal'
import { Text } from '../Text'
import {
  AddToCartButton,
  Product,
  ProductDetails,
  ProductImage,
  Separator
} from './styles'

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <>
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <Product onPress={() => setIsModalVisible(true)}>
            <ProductImage
              source={{
                uri: `http://192.168.0.18:3001/uploads/${product.imagePath}`
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text weight="600" size={14}>
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />

      <ProductModal visible={isModalVisible} />
    </>
  )
}
