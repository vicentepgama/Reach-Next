import React from 'react';
import styles from './Card.module.css'; 

const Card = ({ produto, adicionarAoCesto, removerDoCesto }) => (
  <article className={styles['grid-item']}>
    <header>
      <h2 className={styles['title-product']}>{produto.title}</h2>
    </header>
    
    <figure>
      <img src={produto.image} alt={`Imagem de ${produto.title}`} />
    </figure>

    <section>
      {produto.type!=="tecnologia"&&(
        <p>Preço: {produto.price}€</p>
      )}
      
      <p className={styles['description-product']}>{produto.description}</p>
    </section>

    <footer>
      <button type="button" onClick={() => adicionarAoCesto(produto)}>Adicionar ao cesto</button>
      <button type="button" onClick={() => removerDoCesto(produto)}>Remover do cesto</button>
    </footer>
  </article>
);

export default Card;
