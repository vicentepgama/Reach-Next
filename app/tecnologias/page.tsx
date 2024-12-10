'use client';

import React from 'react';
import tecnologias from "@/app/data/tecnologias.json"; 
import Card from "@/componentes/Card/Card"; 
import { Tecnologia } from "@/app/models/interfaces"; 

const TecnologiasPage = () => {
  return (
    <div>
      <h1>Tecnologias Aprendidas</h1>
      <div>
        {JSON.parse(JSON.stringify(tecnologias)).map((tecnologia: Tecnologia) => (
          <Card
            key={tecnologia.id}
            produto={tecnologia} 
            adicionarAoCesto={null} 
            removerDoCesto={null} 
          />
        ))}
      </div>
    </div>
  );
};

export default TecnologiasPage;
