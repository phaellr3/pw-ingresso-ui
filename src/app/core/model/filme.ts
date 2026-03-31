export interface Filme {
    id: number;
    nome: string;
    duracao?: number;
    preco?:number;
    classificacao?:string;
    ano?:number;
    capa?:string;
    imagem?: string;
    genero?:string;
    diretor?: string;
    elenco?: string;
    descricao?: string;
    avaliacao?: number;
}
