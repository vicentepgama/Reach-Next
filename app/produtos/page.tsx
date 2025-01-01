'use client';

import React, { useEffect, useState } from 'react';
import data from "@/app/data/produtos.js"
import Card from "@/componentes/Card/Card";
import produtos from "@/app/data/produtos.js";
import { Produto } from '@/app/models/interfaces';

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<Produto[]>([]);
  const [cart, setCart] = useState<Produto[]>([]);
  
  interface Carrinho {
    produto: Produto;
    adicionarAoCesto: (produto: Produto) => void;
  }  
  
  interface props {
    cart: Produto[];
    setCart: (cart: Produto[]) => void;
  }

  useEffect(() =>{
    const newFilteredData = data.filter((Produto) => {
      return Produto.title.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredData(newFilteredData);

  }, [search,data])

  const buy = () => {
    fetch("/api/deisishop/buy", {
      method: "POST",
      body: JSON.stringify({
        products: cart.map((Produto: { id: any; }) => Produto.id),
        name: "",
        student: false,
        coupon: ""
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(response => {
        setCart([]);
      })
      .catch(() => {
        console.log("error ao comprar");
      });
  };
  
  (product: Produto) => {
    setCart((prevCart) => [...prevCart, product]);
  }
  
  const addToCart = (produto: Produto) => {
    setCart((prevCart) => [...prevCart, produto]);
    console.log(cart);//debug
  };

  return (<div>
    <h1 className='text-center'>Produtos</h1>
    <div className="grid-container">
      <input
        placeholder="Pesquisar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredData.map((produto: Produto) => (
        <Card key={produto.id} produto={produto} addToCart={addToCart}/>
      ))}
    </div>
    <div>
      <h1>Preço Total: 0.00€</h1>
      <button onClick={buy} style={{ padding: '10px 20px', background: 'green', color: 'white' }}>
       Comprar
    </button>
    </div>
  </div>
);
}