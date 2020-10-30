import { Mesa } from '../mesa/mesa';
import { Produto } from '../produto/produto';

export interface Pedido {
  id: Number;
  mesas: Mesa;
  listaProdutos: Produto[];
}
