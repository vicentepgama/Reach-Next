'use client';

import React from 'react';
import Card from '@/componentes/Card/Card';
import tecnologias from '@/app/data/tecnologias.json';
import { Product } from '../models/interfaces';

export default function TecnologiasPage() {
  return (
    <div>
      <h1 className="h1Tecnologias">Tecnologias Aprendidas</h1>
      <div className="divTecnologias">
        {JSON.parse(JSON.stringify(tecnologias)).map((tecnologia: Product) => (
          <Card key={tecnologia.id} product={tecnologia} />
        ))}
      </div>
    </div>
  );
}
