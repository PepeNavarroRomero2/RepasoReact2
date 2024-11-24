import React from 'react';
import ImageGallery from './ImageGallery';

export default function App() {
  const imageUrls = [
    'https://www.dzoom.org.es/wp-content/uploads/2019/09/imagenes-stock-4.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsgDqQidntc0-ua5gGAxirQg7wbgPd1tu7Q&s',
    'https://st.depositphotos.com/5311026/57460/i/450/depositphotos_574606878-stock-photo-young-guy-jacket-bow-tie.jpg',
  ];

  return (
    <div>
      <h1>Galería de Imágenes</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}
