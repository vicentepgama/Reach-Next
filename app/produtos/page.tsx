'use client';

import React from 'react';
import useSWR from 'swr';
import { Product } from "@/app/models/interfaces";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error, isLoading } = useSWR<Product[]>('/api/products', fetcher);

  if (isLoading) return <div>A carregar os produtos...</div>;
  if (error) return <div>Erro ao carregar os produtos.</div>;

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.nome}</li> 
        ))}
      </ul>
    </div>
  );
}
