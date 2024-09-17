import React from 'react';
import Row from './Row'; // Assuming Row is located in the same directory

const Table = ({ columns, rows, onEdit, onDelete, actions }) => {
    return (
        <table className="w-full">
            <thead>
                <tr className="bg-gray-200">
                    {columns.map((col, index) => (
                        <th key={index} className="text-left p-2">
                            {col.header}
                        </th>
                    ))}
                    {actions && <th className="text-left p-2">Actions</th>}
                </tr>
            </thead>
            <tbody>
                {rows.map((row) => (
                    <Row
                        key={row.id}
                        data={row}
                        columns={columns.map(col => col.key)}
                        onEdit={() => onEdit && onEdit(row)}
                        onDelete={() => onDelete && onDelete(row.id)}
                        actions={actions}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
