'use client';

import React from 'react';
import Card from "@/componentes/Card/Card";
import produtos from "@/app/data/produtos.json";
import { Product } from '../models/interfaces';

export default function ProdutosPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-6">Produtos Disponíveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {JSON.parse(JSON.stringify(produtos)).map((produto: Product) => (
          <Card key={produto.id} product={produto} />
        ))}
      </div>
    </div>
  );
}
