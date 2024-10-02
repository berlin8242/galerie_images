// app/components/Modal.tsx
'use client';
import React from 'react';

interface ModalProps {
    image: { url: string; title: string };
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose, onNext, onPrev }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative max-w-3xl w-full p-4 bg-white rounded-lg">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    ✖
                </button>
                <img src={image.url} alt={image.title} className="w-full h-auto rounded-lg" />
                <p className="text-center mt-4 text-xl font-semibold">{image.title}</p>
                <div className="flex justify-between mt-4">
                    <button onClick={onPrev} className="bg-gray-300 hover:bg-gray-400 text-white py-2 px-4 rounded-lg">
                        Précédent
                    </button>
                    <button onClick={onNext} className="bg-gray-300 hover:bg-gray-400 text-white py-2 px-4 rounded-lg">
                        Suivant
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
