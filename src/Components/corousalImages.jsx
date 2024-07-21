import React from 'react';

const CarouselImage = ({ src, alt }) => {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
    />
  );
};

export default CarouselImage;
