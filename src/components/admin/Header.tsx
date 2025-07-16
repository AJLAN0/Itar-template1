import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      <div className="font-bold text-lg">Dashboard</div>
      <div className="flex items-center gap-4">
        <span className="rounded-full bg-gray-200 px-3 py-1">{user}</span>
        <button onClick={logout} className="text-red-500 hover:underline">Logout</button>
      </div>
    </header>
  );
};

export default Header;