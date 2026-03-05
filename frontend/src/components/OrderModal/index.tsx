import { ModalBody, OrderDetails, Overlay } from './styles'

import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'

interface OrderModalProps {
  visible: boolean
  order: Order | null
}

const STATUS_PROPS = {
  WAITING: {
    icon: '🕑',
    title: 'Fila de espera',
  },
  IN_PRODUCTION: {
    icon: '👩‍🍳',
    title: 'Em produção',
  },
  DONE: {
    icon: '✅',
    title: 'Pronto!',
  },
} as any

export function OrderModal({ order, visible }: OrderModalProps) {
  if (!visible || !order) {
    return null
  }

  const status = STATUS_PROPS[order.status]

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button">
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>

          <div>
            <span>{status}</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}
