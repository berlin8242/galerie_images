// app/gallery/Gallery.tsx
'use client';
import React, { useState } from 'react';
import ImageCard from '../components/ImageCard';
import Modal from '../components/Modal';

const images = [
    { url: 'https://images.unsplash.com/photo-1476283721796-dd935b062838?w=800&auto=format&fit=crop&q=60', title: 'Image 1' },
    { url: 'https://images.unsplash.com/photo-1727777313422-8c1bd34bae95?w=800&auto=format&fit=crop&q=60', title: 'Image 2' },
    { url: 'https://images.unsplash.com/photo-1726962083545-235ea66eb340?w=800&auto=format&fit=crop&q=60', title: 'Image 3' },
    { url: 'https://images.unsplash.com/photo-1727085482248-86691ac814cc?w=800&auto=format&fit=crop&q=60', title: 'Image 4' },
    { url: 'https://images.unsplash.com/photo-1726624397419-2faa9e55e40e?w=800&auto=format&fit=crop&q=60', title: 'Image 5' },
    { url: 'https://images.unsplash.com/photo-1726098161786-585aecd468a1?w=800&auto=format&fit=crop&q=60', title: 'Image 6' },
    { url: 'https://images.unsplash.com/photo-1725417857453-b73c9fda6a5f?w=800&auto=format&fit=crop&q=60', title: 'Image 7' },
    { url: 'https://images.unsplash.com/photo-1727187110926-ad3a35908899?w=800&auto=format&fit=crop&q=60', title: 'Image 8' },
    { url: 'https://images.unsplash.com/photo-1527538079466-b6297ad15363?w=800&auto=format&fit=crop&q=60', title: 'Image 9' },
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ url: string; title: string } | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const showNextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <ImageCard key={index} image={image} onClick={() => openModal(index)} />
                ))}
            </div>

            {selectedImage && (
                <Modal
                    image={selectedImage}
                    onClose={closeModal}
                    onNext={showNextImage}
                    onPrev={showPrevImage}
                />
            )}
        </div>
    );
};

export default Gallery;
