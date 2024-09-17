import React from 'react';
import { HiPencil, HiTrash } from 'react-icons/hi2';
import Button from './Button';  // Import the reusable Button component

const Row = ({ data, onEdit, onDelete, columns, actions }) => {
    return (
        <tr className="border-b">
            {columns.map((col, index) => (
                <td key={index} className="p-2">
                    {data[col]}
                </td>
            ))}
            {actions && (
                <td className="p-2 flex">
                    {actions.edit && (
                        <Button onClick={onEdit} variant="default" className="mr-2">
                            <HiPencil />
                        </Button>
                    )}
                    {actions.delete && (
                        <Button onClick={onDelete} variant="danger">
                            <HiTrash />
                        </Button>
                    )}
                </td>
            )}
        </tr>
    );
};

export default Row;
