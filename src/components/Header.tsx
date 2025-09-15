
import React from 'react';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container py-6">
        <div className="flex items-center space-x-4">
          <BookOpen className="h-8 w-8" style={{ color: '#FBBF24' }} />
          <div>
            <h1 className="text-2xl font-bold">MY MAKTAB</h1>
            <p className="text-lg font-medium text-blue-100">Tajweed Assessment Tool</p>
            <p className="text-sm text-blue-200">Real-time Quranic Recitation Analysis</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
