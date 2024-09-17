import React from 'react';
import Button from '../Button';
const TaskForm = ({ newTask, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                    <input
                        type="text"
                        name="name"
                        placeholder="Task name"
                        value={newTask.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                    <select
                        name="status"
                        value={newTask.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                    >
                        <option value="Not Started">Not Started</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className="w-full md:w-1/3 px-2">
                    <input
                        type="date"
                        name="dueDate"
                        value={newTask.dueDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-md"
                        required
                    />
                </div>
            </div>


            <Button type="submit" variant="primary">
                {newTask.id ? 'Update Task' : 'Create New Task'}
            </Button>
        </form>
    );
};

export default TaskForm;
