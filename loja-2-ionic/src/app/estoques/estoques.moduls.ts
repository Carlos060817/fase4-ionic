export class Estoque{
    id: number;
    cod: number;
    nome: string;
    entrada: number;
    saida: number;
    qtde: number;

    constructor(id: number, cod:number, nome:string, entrada: number, saida: number, qtde: number){
        this.id = id
        this.cod = cod
        this.nome = nome
        this.entrada = entrada
        this.saida = saida
        this.qtde = qtde
    }
}