import { Modal, Platform, TouchableOpacity } from 'react-native'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { Form, Header, Input, ModalBody, Overlay } from './styles'

interface TableModalProps {
  visible: boolean
}

export function TableModal({ visible }: TableModalProps) {
  return (
    <Modal transparent visible={visible}>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text height="600">Informe a mesa</Text>

            <TouchableOpacity>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />

            <Button onPress={() => alert('Salvou')}> Salvar </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
