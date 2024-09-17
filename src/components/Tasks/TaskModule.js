import React, { useState } from 'react';
import Table from '../Table';
import Modal from '../Modal';
import TaskForm from './TaskForm';
import TaskSummary from './TaskSummary'; // Import TaskSummary component
import toast from 'react-hot-toast';

const TaskModule = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', status: 'Not Started', dueDate: '' });
  const [editingTask, setEditingTask] = useState(null); // Separate state for editing tasks
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    // Differentiate between editing task and creating new task
    if (editingTask) {
      setEditingTask({ ...editingTask, [e.target.name]: e.target.value });
    } else {
      setNewTask({ ...newTask, [e.target.name]: e.target.value });
    }
  };

  // Handle form submit for creating or updating tasks
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      setTasks(
        tasks.map((task) => (task.id === editingTask.id ? editingTask : task))
      );
      setEditingTask(null);
      toast.success("Task Updated Successfully !")
    } else {
      // Add new task
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    }
    setNewTask({ name: '', status: 'Not Started', dueDate: '' }); // Reset new task form
    setIsModalOpen(false); // Close modal if editing
  };

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'status', header: 'Status' },
    { key: 'dueDate', header: 'Due Date' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      <TaskSummary tasks={tasks} />

      <TaskForm
        newTask={newTask}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {tasks.length > 0 && (
        <Table
          columns={columns}
          rows={tasks}
          onEdit={(task) => {
            setEditingTask(task);
            setIsModalOpen(true);
          }}
          onDelete={(id) => {
            setTasks(tasks.filter((task) => task.id !== id));
            toast.success("Task Deleted Successfully !")
          }}
          actions={{ edit: true, delete: true }}
        />
      )}

      {/* Modal for editing task */}
      {isModalOpen && (
        <Modal
          title="Edit Task"
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          onSubmit={handleSubmit}
          submitLabel="Save"
        >
          <TaskForm
            newTask={editingTask}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
};

export default TaskModule;
