'use client';

import React from 'react';
import Card from "@/componentes/Card/Card";
import produtos from "@/app/data/produtos.json";
import { Product } from "@/app/models/interfaces";

export default function ProdutosPage() {
  return (
    <div>
      <h1 >Produtos Disponíveis</h1>
      <div>
        {JSON.parse(JSON.stringify(produtos)).map((produto: Product) => (
          <Card key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}
