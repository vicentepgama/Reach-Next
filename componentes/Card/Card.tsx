'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from "@/app/models/interfaces";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="divCard">
      <Image
        src={product.imageUrl}
        alt={product.nome}
        width={200}
        height={200}
        className="estaticaCard"
      />
      <h2 className="nomeCard">{product.nome}</h2>
      <p className="descricaoCard text-gray-600">{product.descricao}</p>
      <p className="precoCard">€{product.preco}</p>
    </div>
  );
};

export default Card;
