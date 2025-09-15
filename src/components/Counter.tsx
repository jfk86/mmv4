
import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface CounterProps {
  label: string;
  current: number;
  expected: number;
  onIncrement: () => void;
  onDecrement: () => void;
  backgroundColor?: string;
}

const Counter: React.FC<CounterProps> = ({ 
  label, 
  current, 
  expected, 
  onIncrement, 
  onDecrement, 
  backgroundColor = 'bg-white' 
}) => {
  return (
    <div className={`p-4 rounded-lg border border-gray-200 ${backgroundColor} hover:shadow-md transition-shadow`}>
      <div className="text-center">
        <h3 className="text-sm font-medium text-text-dark mb-3">{label}</h3>
        
        <div className="flex items-center justify-center space-x-3 mb-3">
          <button
            onClick={onDecrement}
            className="counter-button"
            disabled={current <= 0}
          >
            <Minus className="h-4 w-4" />
          </button>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-text-dark">
              {current}
            </div>
            {expected > 0 && (
              <div className="text-xs text-text-medium">
                /{expected}
              </div>
            )}
          </div>
          
          <button
            onClick={onIncrement}
            className="counter-button"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <div className="text-xs text-text-medium">
          {expected > 0 ? `Expected: ${expected}` : 'Count'}
        </div>
      </div>
    </div>
  );
};

export default Counter;
