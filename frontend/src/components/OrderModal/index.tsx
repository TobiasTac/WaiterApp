import { ModalBody, OrderDetails, Overlay } from './styles'

import closeIcon from '../../assets/images/close-icon.svg'
import { Order } from '../../types/Order'
import { formatCurrency } from '../../utils/formatCurrency'

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

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity
  }, 0)

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
            <span>{status.icon}</span>
            <strong>{status.title}</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>
      </ModalBody>
    </Overlay>
  )
}
