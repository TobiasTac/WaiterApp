import { Modal } from 'react-native'
import { Text } from '../Text'
import { ModalBody, Overlay } from './styles'

export function TableModal() {
  return (
    <Modal transparent>
      <Overlay>
        <ModalBody>
          <Text Text>Hello</Text>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
