
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardSelector from './components/DashboardSelector';
import TajweedAssessment from './components/TajweedAssessment';
import QaidaAssessment from './components/QaidaAssessment';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<DashboardSelector />} />
          <Route path="/tajweed" element={<TajweedAssessment />} />
          <Route path="/qaida" element={<QaidaAssessment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
