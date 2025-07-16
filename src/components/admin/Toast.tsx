import React from 'react';

const Toast: React.FC<{ message: string; type?: 'success' | 'error' }> = ({ message, type = 'success' }) => (
  <div className={`fixed top-6 right-6 px-4 py-2 rounded shadow-lg z-50 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
    {message}
  </div>
);

export default Toast;
