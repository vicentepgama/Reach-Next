interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

  
  export interface Tecnologia{
    id:number;
    title: string;
    image: string;
    description: string;
    rating: number;
    type: string
  }
  