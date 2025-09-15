
import React from 'react';
import { Grid3X3 } from 'lucide-react';
import Counter from './Counter';

interface AssessmentGridProps {
  assessmentData: {
    ghunnaMistakes: number;
    ikhfaaMistakes: number;
    idghaamMistakes: number;
    qalqalahMistakes: number;
    fullMouthMistakes: number;
    lipsMistakes: number;
    tongueMistakes: number;
    throatMistakes: number;
    fluencyMistakes: number;
    maddMistakes: number;
    waqfMistakes: number;
    minorMistakes: number;
    majorMistakes: number;
  };
  onUpdateCounter: (field: string, value: number) => void;
}

const AssessmentGrid: React.FC<AssessmentGridProps> = ({ assessmentData, onUpdateCounter }) => {
  const increment = (field: string) => {
    onUpdateCounter(field, assessmentData[field as keyof typeof assessmentData] + 1);
  };

  const decrement = (field: string) => {
    const currentValue = assessmentData[field as keyof typeof assessmentData];
    if (currentValue > 0) {
      onUpdateCounter(field, currentValue - 1);
    }
  };

  return (
    <div className="assessment-card">
      <div className="flex items-center space-x-2 mb-6">
        <Grid3X3 className="h-5 w-5 text-text-medium" />
        <h2 className="text-lg font-semibold text-text-dark">Assessment Grid</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {/* Row 1 - Tajweed Rules */}
        <Counter
          label="Ghunna"
          current={assessmentData.ghunnaMistakes}
          expected={2}
          onIncrement={() => increment('ghunnaMistakes')}
          onDecrement={() => decrement('ghunnaMistakes')}
          backgroundColor="bg-tajweed-bg"
        />
        <Counter
          label="Ikhfaa"
          current={assessmentData.ikhfaaMistakes}
          expected={3}
          onIncrement={() => increment('ikhfaaMistakes')}
          onDecrement={() => decrement('ikhfaaMistakes')}
          backgroundColor="bg-tajweed-bg"
        />
        <Counter
          label="Idghaam"
          current={assessmentData.idghaamMistakes}
          expected={5}
          onIncrement={() => increment('idghaamMistakes')}
          onDecrement={() => decrement('idghaamMistakes')}
          backgroundColor="bg-tajweed-bg"
        />
        <Counter
          label="Qalqalah"
          current={assessmentData.qalqalahMistakes}
          expected={0}
          onIncrement={() => increment('qalqalahMistakes')}
          onDecrement={() => decrement('qalqalahMistakes')}
          backgroundColor="bg-tajweed-bg"
        />
        
        {/* Row 2 - Pronunciation */}
        <Counter
          label="Full Mouth"
          current={assessmentData.fullMouthMistakes}
          expected={0}
          onIncrement={() => increment('fullMouthMistakes')}
          onDecrement={() => decrement('fullMouthMistakes')}
          backgroundColor="bg-pronunciation-bg"
        />
        <Counter
          label="Lips"
          current={assessmentData.lipsMistakes}
          expected={0}
          onIncrement={() => increment('lipsMistakes')}
          onDecrement={() => decrement('lipsMistakes')}
          backgroundColor="bg-pronunciation-bg"
        />
        <Counter
          label="Tongue"
          current={assessmentData.tongueMistakes}
          expected={0}
          onIncrement={() => increment('tongueMistakes')}
          onDecrement={() => decrement('tongueMistakes')}
          backgroundColor="bg-pronunciation-bg"
        />
        <Counter
          label="Throat"
          current={assessmentData.throatMistakes}
          expected={0}
          onIncrement={() => increment('throatMistakes')}
          onDecrement={() => decrement('throatMistakes')}
          backgroundColor="bg-pronunciation-bg"
        />
        
        {/* Row 3 - Additional Categories */}
        <Counter
          label="Fluency"
          current={assessmentData.fluencyMistakes}
          expected={0}
          onIncrement={() => increment('fluencyMistakes')}
          onDecrement={() => decrement('fluencyMistakes')}
          backgroundColor="bg-additional-bg"
        />
        <Counter
          label="Madd"
          current={assessmentData.maddMistakes}
          expected={0}
          onIncrement={() => increment('maddMistakes')}
          onDecrement={() => decrement('maddMistakes')}
          backgroundColor="bg-additional-bg"
        />
        <Counter
          label="Waqf"
          current={assessmentData.waqfMistakes}
          expected={0}
          onIncrement={() => increment('waqfMistakes')}
          onDecrement={() => decrement('waqfMistakes')}
          backgroundColor="bg-additional-bg"
        />
        <Counter
          label="Minor"
          current={assessmentData.minorMistakes}
          expected={0}
          onIncrement={() => increment('minorMistakes')}
          onDecrement={() => decrement('minorMistakes')}
          backgroundColor="bg-additional-bg"
        />
        
        {/* Row 4 - Major mistakes spanning multiple cells */}
        <div className="col-span-2">
          <Counter
            label="Major"
            current={assessmentData.majorMistakes}
            expected={0}
            onIncrement={() => increment('majorMistakes')}
            onDecrement={() => decrement('majorMistakes')}
            backgroundColor="bg-mistakes-bg"
          />
        </div>
      </div>
    </div>
  );
};

export default AssessmentGrid;
