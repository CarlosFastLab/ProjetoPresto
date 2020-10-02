import { Produto } from '../produto/produto';
export interface Cardapio {
  nome: string;
  produtos: Produto[];
}
