import { Cardapio } from '../cardapio/cardapio';
export interface Produto {
  id : Number;
  nome: string;
  tipo: string;
  descricao: string;
  tempo: string;
  imagem: File;
  cardapios: Cardapio;
}
