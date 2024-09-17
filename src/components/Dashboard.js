import React from 'react';
import { Link } from 'react-router-dom';

const moduleData = [
  { name: 'Tasks', icon: '📝', path: '/tasks', color: 'bg-blue-500' },
  { name: 'Locations', icon: '📍', path: '/locations', color: 'bg-green-500' },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Taskie, John Doe!</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
          {moduleData.map((module) => (
            <Link
              key={module.name}
              to={module.path}
              className={`${module.color} hover:opacity-90 text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-200 transform hover:scale-105`}
            >
              <span className="text-4xl mb-2">{module.icon}</span>
              <span className="text-xl font-semibold">{module.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;