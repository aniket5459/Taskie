import React from 'react';

const Button = ({ onClick, children, type = 'button', className = '', variant = 'primary', ...props }) => {
    const baseStyle = 'px-4 py-2 rounded-md font-semibold transition ease-in-out duration-150';
    const variantStyles = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        location: 'bg-green-500 text-white hover:bg-green-600',
        secondary: 'bg-gray-400 text-white hover:bg-gray-500',
        danger: 'bg-red-500 text-white hover:bg-red-600',
        default: 'bg-slate-200 text-slate-400 hover:bg-slate-300',
    };

    const combinedStyle = `${baseStyle} ${variantStyles[variant]} ${className}`;

    return (
        <button type={type} onClick={onClick} className={combinedStyle} {...props}>
            {children}
        </button>
    );
};

export default Button;
