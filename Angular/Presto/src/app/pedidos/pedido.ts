import { Mesa } from '../mesa/mesa';
import { Produto } from '../produto/produto';

export interface Pedido {
  id: number;
  descricao: string;
  valorTotal : number;
  mesas: Mesa[];
  itensDoPedido: Produto[];
}
