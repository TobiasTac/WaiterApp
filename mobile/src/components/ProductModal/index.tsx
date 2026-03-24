import { Modal } from 'react-native'
import { Product } from '../../types/Product'
import { Text } from '../Text'

interface ProductModalProps {
  visible: boolean
  onClose(): void
  product: null | Product
}

export function ProductModal({ visible, onClose, product }: ProductModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <Text> Fala rapeize </Text>
    </Modal>
  )
}
