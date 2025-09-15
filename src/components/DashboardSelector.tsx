
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardSelector: React.FC = () => {
  const navigate = useNavigate();

  const dashboards = [
    {
      id: 'tajweed',
      title: 'Tajweed Assessment',
      description: 'Real-time Quranic Recitation Analysis',
      subtitle: 'Advanced assessment for experienced reciters',
      icon: '📖',
      color: '#0E2A47',
      bgColor: '#f0f7ff',
      path: '/tajweed'
    },
    {
      id: 'qaida',
      title: 'Qaida Testing Dashboard',
      description: 'Progressive Arabic Reading Skills',
      subtitle: 'Step-by-step learning from basics to fluency',
      icon: '🎓',
      color: '#2563eb',
      bgColor: '#eff6ff',
      path: '/qaida'
    },
    {
      id: 'islamic-learning',
      title: 'Islamic Learning Assessment',
      description: 'Comprehensive Islamic Studies',
      subtitle: 'Duas, Hadiths & Islamic knowledge assessment',
      icon: '🕌',
      color: '#059669',
      bgColor: '#f0fdf4',
      path: '/islamic-learning'
    }
  ];

  return (
    <div className="dashboard-selector">
      <div className="dashboard-header">
        <h1>Choose Your Learning Path</h1>
        <p>Select the assessment tool that matches your current level and learning goals</p>
      </div>

      <div className="dashboard-cards">
        {dashboards.map((dashboard) => (
          <div
            key={dashboard.id}
            className="dashboard-card"
            onClick={() => navigate(dashboard.path)}
            style={{ borderLeft: `4px solid ${dashboard.color}` }}
          >
            <div className="dashboard-icon" style={{ backgroundColor: dashboard.bgColor }}>
              <span style={{ fontSize: '2rem' }}>{dashboard.icon}</span>
            </div>

            <div className="dashboard-content">
              <h3 style={{ color: dashboard.color }}>{dashboard.title}</h3>
              <p className="dashboard-description">{dashboard.description}</p>
              <p className="dashboard-subtitle">{dashboard.subtitle}</p>
              
              <div className="dashboard-action" style={{ color: dashboard.color }}>
                <span>Get Started →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-info">
        <h4>Need Help Choosing?</h4>
        <p>
          <strong>Qaida Testing</strong> is perfect for beginners learning Arabic letters and basic reading skills.
          <br />
          <strong>Tajweed Assessment</strong> is designed for advanced students who can already read Arabic fluently.
          <br />
          <strong>Islamic Learning Assessment</strong> offers comprehensive assessment for Islamic studies and memorization.
        </p>
      </div>
    </div>
  );
};

export default DashboardSelector;
