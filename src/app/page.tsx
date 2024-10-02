// src/app/page.tsx
'use client';
import React from 'react';
import Gallery from '../app/gallery/page'; // Assurez-vous que ce chemin est correct

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-8">Bienvenue dans la Galerie d'Images</h1>
      <Gallery /> {/* Intégration de la galerie ici */}
    </div>
  );
};

export default HomePage;
