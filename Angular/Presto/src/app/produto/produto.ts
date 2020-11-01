import { Cardapio } from '../cardapio/cardapio';
export interface Produto {
  id : number;
  nome: string;
  tipo: string;
  descricao: string;
  tempo: string;
  imagem: string;
  cardapios: Cardapio;
}
