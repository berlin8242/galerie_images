// app/components/Modal.tsx
'use client';
import React, { useState } from 'react';

interface ModalProps {
    image: { url: string; title: string };
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose, onNext, onPrev }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState<string[]>([]);

    const addComment = () => {
        const comment = prompt("Ajoutez un commentaire:");
        if (comment) {
            setComments([...comments, comment]);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-4 max-w-lg w-full rounded shadow-lg relative transition-transform transform scale-95 duration-300 ease-in-out">
                <button onClick={onClose} className="absolute top-2 right-2 text-black text-2xl">&times;</button>
                <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded" />
                <h2 className="text-center mt-4 text-lg font-semibold">{image.title}</h2>

                {/* Gestion des "likes" */}
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setLikes(likes + 1)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Like ({likes})
                    </button>
                </div>

                {/* Gestion des commentaires */}
                <div className="mt-4 text-center">
                    <button onClick={addComment} className="bg-green-500 text-white px-4 py-2 rounded-lg">
                        Ajouter un commentaire
                    </button>
                    <div className="mt-2 text-left">
                        {comments.map((comment, index) => (
                            <p key={index} className="bg-gray-100 p-2 mt-1 rounded">{comment}</p>
                        ))}
                    </div>
                </div>

                {/* Boutons de navigation */}
                <div className="flex justify-between mt-4">
                    <button onClick={onPrev} className="bg-gray-300 px-4 py-2 rounded-lg">Précédent</button>
                    <button onClick={onNext} className="bg-gray-300 px-4 py-2 rounded-lg">Suivant</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
