import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div 
                className="relative bg-white rounded-lg p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
                >
                    &times;
                </button>
                <img src={imageSrc} alt="Flyer" className="max-w-full max-h-screen" />
            </div>
        </div>
    );
};

export default Modal; 