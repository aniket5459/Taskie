import React from 'react';
import Button from './Button';  // Import the reusable Button component

const Modal = ({ isOpen, onClose, title, children, onSubmit, submitLabel = 'Submit' }) => {
    if (!isOpen) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-md w-full max-w-lg max-h-screen overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">{title}</h2>

                {/* Wrapper around content to handle long content such as maps */}
                <div className="mb-4">
                    {children}
                </div>

                {/* Buttons */}
                <div className="flex justify-end mt-4">
                    <Button onClick={onClose} variant="secondary">
                        Cancel
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default Modal;
