import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {
  const { data: imagenes, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="card animate__animated animate__zoomInDown">
        {categoria}
      </h3>
      {loading && <p>Loading</p>}
      {
        <div className="card-grid">
          {imagenes.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      }
    </>
  );
};

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired,
};

export default GifGrid;
