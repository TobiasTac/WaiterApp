import { Modal, TouchableOpacity } from 'react-native'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { Form, Header, ModalBody, Overlay } from './styles'

export function TableModal() {
  return (
    <Modal transparent>
      <Overlay>
        <ModalBody>
          <Header>
            <Text height="600">Informe a mesa</Text>

            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form></Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
