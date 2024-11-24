import React, { useState } from 'react';

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Si llegamos al final, volvemos al inicio
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Si estamos al inicio, volvemos al final
  };

  return (
    <div>
      {/* Mostrar la imagen actual */}
      <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} style={{ width: '100%', height: 'auto' }} />

      <div>
        {/* Botón para retroceder */}
        <button onClick={prevImage}>Anterior</button>
        {/* Botón para avanzar */}
        <button onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  );
}
