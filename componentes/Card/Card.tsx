import React, { useEffect, useState } from 'react';
import styles from './Card.module.css'; 
import { Product } from '@/app/models/interfaces';

const [cart, setCart] = useState<Product[]>([]);


interface Carrinho {
  produto: Product;
  addToCart: (produto: Product) => void;
}

useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);



const Card: React.FC<Carrinho> = ({ produto, addToCart }) => {
  return (
    <section> {}
      <h1>{produto.title}</h1> {}
      <img src={produto.imageUrl} alt={produto.title} />
      
      {produto.type !== 'technology' && (
        <p>Custo total: {produto.preco}€</p>
      )}
      
      <p className={styles['description-product']}>{produto.descricao}</p> {}

      <button className={styles['btn-add']} onClick={() => addToCart(produto)}>+Adicionar ao cesto</button>

    </section>
  );
};

export default Card;
