import { Cardapio } from './../cardapio/cardapio';
export class Produto {
    nome: string;
    tipo: string;
    descricao: string;
    tempo: string;
    imagem: string;
    cardapios: Cardapio[];
}