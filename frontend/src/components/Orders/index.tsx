import { OrdersBoard } from '../OrdersBoard'
import { Container } from './styles'

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕑" title="Fila de espera" />
      <OrdersBoard icon="👩‍🍳" title="Em produção" />
      <OrdersBoard icon="✅" title="Pronto!" />
    </Container>
  )
}
