import { useState } from 'react'
import { Modal, Platform, TouchableOpacity } from 'react-native'
import { Button } from '../Button'
import { Close } from '../Icons/Close'
import { Text } from '../Text'
import { Form, Header, Input, ModalBody, Overlay } from './styles'

interface TableModalProps {
  visible: boolean
  onClose(): void
}

export function TableModal({ visible, onClose }: TableModalProps) {
  const [table, setTable] = useState('')

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text height="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />

            <Button onPress={() => alert(table)} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  )
}
