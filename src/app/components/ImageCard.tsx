// app/components/ImageCard.tsx
'use client';
import React from 'react';

interface ImageCardProps {
    image: { url: string; title: string };
    onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <img src={image.url} alt={image.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
            <h3 className="mt-2 text-center text-lg font-semibold">{image.title}</h3>
        </div>
    );
};

export default ImageCard;
