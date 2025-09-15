
import React from 'react';
import { UserCheck, CheckCircle, Send } from 'lucide-react';

interface AssessmentCompletionProps {
  examinerName: string;
  onExaminerNameChange: (name: string) => void;
  etiquetteItems: boolean[];
  onEtiquetteChange: (index: number, checked: boolean) => void;
  onSubmit: () => void;
}

const AssessmentCompletion: React.FC<AssessmentCompletionProps> = ({
  examinerName,
  onExaminerNameChange,
  etiquetteItems,
  onEtiquetteChange,
  onSubmit
}) => {
  const etiquetteLabels = [
    'Proper sitting posture during recitation',
    'Appropriate Islamic greeting and manners',
    'Respectful behavior towards the Quran',
    'Demonstrated patience and attentiveness',
    'Showed effort and engagement throughout',
    'Maintained focus and concentration'
  ];

  return (
    <div className="space-y-6">
      {/* Examiner Name */}
      <div className="assessment-card">
        <div className="flex items-center space-x-2 mb-4">
          <UserCheck className="h-5 w-5 text-text-medium" />
          <h2 className="text-lg font-semibold text-text-dark">Examiner Information</h2>
        </div>
        
        <div>
          <label htmlFor="examinerName" className="block text-sm font-medium text-text-medium mb-2">
            Examiner Name
          </label>
          <input
            id="examinerName"
            type="text"
            value={examinerName}
            onChange={(e) => onExaminerNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="Enter examiner name"
          />
        </div>
      </div>
      
      {/* Islamic Etiquette & Behaviour */}
      <div className="assessment-card">
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="h-5 w-5 text-text-medium" />
          <h2 className="text-lg font-semibold text-text-dark">Islamic Etiquette & Behaviour</h2>
        </div>
        
        <div className="space-y-3">
          {etiquetteLabels.map((label, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                id={`etiquette-${index}`}
                type="checkbox"
                checked={etiquetteItems[index] || false}
                onChange={(e) => onEtiquetteChange(index, e.target.checked)}
                className="h-4 w-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
              />
              <label htmlFor={`etiquette-${index}`} className="text-sm text-text-dark flex-1">
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="assessment-card">
        <button
          onClick={onSubmit}
          className="btn-primary"
        >
          <Send className="h-5 w-5" />
          <span>Submit Assessment</span>
        </button>
      </div>
    </div>
  );
};

export default AssessmentCompletion;
