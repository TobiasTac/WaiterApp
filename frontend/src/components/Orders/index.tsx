import { Order } from '../../types/Order'
import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

const orders: Order[] = [
  {
    _id: '69a8a8536b79540b7c8ccdf2',
    table: '2',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza',
          imagePath: '1772580663203-quatro-queijos.png',
          price: 40,
        },
        quantity: 3,
        _id: '69a8a8536b79540b7c8ccdf3',
      },
    ],
  },
]

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em produção" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  )
}
