import React from 'react';
import Image from 'next/image';
import { Product } from '@/app/models/interfaces';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="card">
      <Image
        src={product.imageUrl}
        alt={product.nome}
        width={200}
        height={200}
        className="card-image"
      />
      <h2>{product.nome}</h2>
      <p>{product.descricao}</p>
    </div>
  );
};

export default Card;
