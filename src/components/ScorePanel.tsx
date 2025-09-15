
import React from 'react';
import { TrendingUp, Activity, Target } from 'lucide-react';

interface ScorePanelProps {
  finalScore: number;
  tajweedScore: number;
  pronunciationScore: number;
  additionalScore: number;
  etiquetteBonus: number;
  ragStatus: 'GREEN' | 'AMBER' | 'RED';
  grade: string;
  activeRules: number;
  totalExpected: number;
}

const ScorePanel: React.FC<ScorePanelProps> = ({
  finalScore,
  tajweedScore,
  pronunciationScore,
  additionalScore,
  etiquetteBonus,
  ragStatus,
  grade,
  activeRules,
  totalExpected
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'GREEN': return 'text-status-green border-status-green bg-green-50';
      case 'AMBER': return 'text-status-amber border-status-amber bg-amber-50';
      case 'RED': return 'text-status-red border-status-red bg-red-50';
      default: return 'text-status-amber border-status-amber bg-amber-50';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'GREEN': return 'Excellent';
      case 'AMBER': return 'Good';
      case 'RED': return 'Needs Improvement';
      default: return 'Good';
    }
  };

  return (
    <div className="assessment-card sticky top-4">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp className="h-5 w-5 text-text-medium" />
        <h2 className="text-lg font-semibold text-text-dark">Overall Assessment Score</h2>
      </div>
      
      {/* Main Score Display */}
      <div className="text-center mb-6">
        <div className="text-6xl font-extrabold text-text-dark mb-2">
          {finalScore}%
        </div>
        <div className={`inline-block px-4 py-2 rounded-full border-2 ${getStatusColor(ragStatus)}`}>
          <span className="font-semibold">{getStatusLabel(ragStatus)}</span>
        </div>
        <div className="text-sm text-text-medium mt-2">
          Weighted Assessment Score
        </div>
      </div>
      
      {/* Score Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-text-dark">Tajweed Rules</span>
          <span className="text-sm font-bold text-text-dark">{tajweedScore}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-text-dark">Pronunciation</span>
          <span className="text-sm font-bold text-text-dark">{pronunciationScore}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-text-dark">Additional Categories</span>
          <span className="text-sm font-bold text-text-dark">{additionalScore}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-text-dark">Quranic Fluency</span>
          <span className="text-sm font-bold text-text-dark">+{etiquetteBonus}%</span>
        </div>
      </div>
      
      {/* Progress Indicators */}
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Activity className="h-4 w-4 text-text-medium" />
            <span className="text-sm font-medium text-text-dark">Active Rules:</span>
          </div>
          <span className="text-sm font-bold text-text-dark">{activeRules}</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Target className="h-4 w-4 text-text-medium" />
            <span className="text-sm font-medium text-text-dark">Total Expected:</span>
          </div>
          <span className="text-sm font-bold text-text-dark">{totalExpected}</span>
        </div>
        
        <div className={`text-center px-3 py-2 rounded-lg border-2 ${getStatusColor(ragStatus)}`}>
          <span className="text-sm font-bold">{ragStatus} STATUS</span>
        </div>
      </div>
    </div>
  );
};

export default ScorePanel;
