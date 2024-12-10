import internal from "stream";

export interface Product {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imageUrl: string;
  }
  
  export interface Tecnologia{
    id:number;
    title:String;
    image: string;
    description: string;
    rating: internal;
  }
  