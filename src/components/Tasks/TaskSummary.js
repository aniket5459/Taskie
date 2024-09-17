import React from 'react';
import Card from '../Card';

const TaskSummary = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'Completed').length;
    const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length;
    const notStartedTasks = tasks.filter(task => task.status === 'Not Started').length;

    return (
        <div className="flex gap-4 mb-8">
            <Card title="Total Tasks" count={totalTasks} bgColor="bg-blue-100" textColor="text-blue-600" />
            <Card title="Completed Tasks" count={completedTasks} bgColor="bg-green-100" textColor="text-green-600" />
            <Card title="In Progress Tasks" count={inProgressTasks} bgColor="bg-yellow-100" textColor="text-yellow-600" />
            <Card title="Not Started Tasks" count={notStartedTasks} bgColor="bg-red-100" textColor="text-red-600" />
        </div>
    );
};

export default TaskSummary;
