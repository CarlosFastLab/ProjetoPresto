import { Mesa } from '../mesa/mesa';
import { Produto } from '../produto/produto';

export interface Pedido {
  id: number;
  descricao: string;
  mesas: Mesa[];
  itensDoPedido: Produto[];
}
