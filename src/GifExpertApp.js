import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categorias, setCategorias] = useState(defaultCategories);

  return (
    <>
      <h2>Gif Expert app</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((categoria) => (
          <GifGrid categoria={categoria} key={categoria} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
