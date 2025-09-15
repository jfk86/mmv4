
import React from 'react';

const QaidaAssessment: React.FC = () => {
  return (
    <div className="qaida-assessment">
      <div className="assessment-header">
        <h1>Qaida Testing Dashboard</h1>
        <p>Progressive Arabic Reading Skills Assessment</p>
      </div>

      <div className="coming-soon">
        <div className="coming-soon-content">
          <h2>🚧 Coming Soon</h2>
          <p>The Qaida Testing Dashboard is currently under development.</p>
          <p>This module will provide:</p>
          <ul>
            <li>Progressive Arabic letter recognition</li>
            <li>Basic reading skills assessment</li>
            <li>Step-by-step learning progression</li>
            <li>Interactive word recognition tests</li>
          </ul>
          
          <button 
            onClick={() => window.history.back()} 
            className="back-button"
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default QaidaAssessment;
