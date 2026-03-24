import { Modal } from 'react-native'
import { Product } from '../../types/Product'
import { Text } from '../Text'
import { Image } from './styles'

interface ProductModalProps {
  visible: boolean
  onClose(): void
  product: null | Product
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  if (!product) {
    return null
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Image
        source={{
          uri: `http://10.10.254.67:3001/uploads/${product.imagePath}`
          //uri: `http://192.168.0.18:3001/uploads/${product?.imagePath}`
        }}
      ></Image>
      <Text> Fala rapeize </Text>
    </Modal>
  )
}
