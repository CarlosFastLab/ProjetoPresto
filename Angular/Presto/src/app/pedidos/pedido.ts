import { Mesa } from '../mesa/mesa';
import { Produto } from '../produto/produto';

export interface Pedido {
  id: Number;
  descricao: string;
  mesas: Mesa[];
  itensDoPedido: Produto[];
}
