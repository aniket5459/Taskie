import React from 'react';
import Button from './Button';  // Import the reusable Button component

const Modal = ({ isOpen, onClose, title, children, onSubmit, submitLabel = 'Submit' }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-full max-w-lg">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {children}
                <div className="flex justify-between ml-[12rem] mt-[-4.5rem] ">
                    <Button onClick={onClose} variant="secondary">
                        Cancel
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
