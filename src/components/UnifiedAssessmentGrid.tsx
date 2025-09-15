
import React, { useState } from 'react';

interface GridItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: string;
  type: 'tajweed' | 'makhraj' | 'additional' | 'reserved';
  description: string;
  tooltip: string;
  color: string;
  deductionText: string;
}

interface UnifiedAssessmentGridProps {
  assessmentData: any;
  onUpdateCounter: (category: string, value: number) => void;
}

const UnifiedAssessmentGrid: React.FC<UnifiedAssessmentGridProps> = ({ 
  assessmentData, 
  onUpdateCounter 
}) => {
  const [selectedTooltip, setSelectedTooltip] = useState<string | null>(null);

  const gridItems: GridItem[] = [
    // Row 1 - Core Tajweed Rules
    {
      id: 'ghunna',
      title: 'Ghunna (نّ مّ)',
      shortTitle: 'Ghunna',
      icon: '🔊',
      type: 'tajweed',
      description: 'Nasal sound with م and ن',
      tooltip: 'Track mistakes in Ghunna (nasal sound) application with letters م and ن. Each mistake reduces accuracy based on expected instances in the selected Surah.',
      color: '#0ea5e9',
      deductionText: 'Accuracy based'
    },
    {
      id: 'ikhfaa',
      title: 'Ikhfaa - Concealment',
      shortTitle: 'Ikhfaa',
      icon: '👁️',
      type: 'tajweed',
      description: 'Concealment of ن and tanween',
      tooltip: 'Track mistakes in Ikhfaa (concealment) of ن and tanween before specific letters. Accuracy calculated against expected instances.',
      color: '#0ea5e9',
      deductionText: 'Accuracy based'
    },
    {
      id: 'idghaam',
      title: 'Idhgaam - Merging',
      shortTitle: 'Idhgaam',
      icon: '🤝',
      type: 'tajweed',
      description: 'Merging of letters',
      tooltip: 'Track mistakes in Idhgaam (merging) of letters. Click +/- to adjust mistake count against expected instances in the Surah.',
      color: '#0ea5e9',
      deductionText: 'Accuracy based'
    },
    {
      id: 'qalqalah',
      title: 'Qalqala - Echoing',
      shortTitle: 'Qalqala',
      icon: '⭕',
      type: 'tajweed',
      description: 'Echoing sound with ق د ج ط ب',
      tooltip: 'When ق ط ب ج د have Sukoon – Read with an echo/bounce sound.',
      color: '#0ea5e9',
      deductionText: 'Accuracy based'
    },
    
    // Row 2 - Makhraj/Pronunciation
    {
      id: 'fullMouth',
      title: 'Full Mouth',
      shortTitle: 'Full Mouth',
      icon: '💬',
      type: 'makhraj',
      description: 'خُصَّ – ضَغْطٍ – قِظْ',
      tooltip: 'Huroof Mustaliyah are the letters which are pronounced with a full mouth. There are 7 full mouth letters.',
      color: '#10b981',
      deductionText: '2% each, max 10%'
    },
    {
      id: 'lips',
      title: 'Lips',
      shortTitle: 'Lips',
      icon: '👄',
      type: 'makhraj',
      description: 'ف و ب',
      tooltip: 'Track articulation mistakes for lip letters (ف و ب). Each mistake deducts 2% with maximum 10% total deduction.',
      color: '#10b981',
      deductionText: '2% each, max 10%'
    },
    {
      id: 'tongue',
      title: 'Tongue',
      shortTitle: 'Tongue',
      icon: '👅',
      type: 'makhraj',
      description: 'Multiple tongue positions',
      tooltip: 'Track articulation mistakes for tongue letters. Each mistake deducts 2% with maximum 10% total deduction.',
      color: '#10b981',
      deductionText: '2% each, max 10%'
    },
    {
      id: 'throat',
      title: 'Throat',
      shortTitle: 'Throat',
      icon: '🗣️',
      type: 'makhraj',
      description: 'ء ه ع غ ح خ',
      tooltip: 'Track articulation mistakes for throat letters (ء ه ع غ ح خ). Each mistake deducts 2% with maximum 10% total deduction.',
      color: '#10b981',
      deductionText: '2% each, max 10%'
    },

    // Row 3 - Additional Categories
    {
      id: 'fluency',
      title: 'Fluency',
      shortTitle: 'Fluency',
      icon: '💖',
      type: 'additional',
      description: 'Flow and rhythm',
      tooltip: 'Track fluency issues with overall flow and rhythm. Each mistake deducts points based on severity.',
      color: '#f59e0b',
      deductionText: '2% each, max 10%'
    },
    {
      id: 'madd',
      title: 'Madd',
      shortTitle: 'Madd',
      icon: '↔️',
      type: 'additional',
      description: 'Elongation errors',
      tooltip: 'Elongation mistakes: Incorrect elongation, over-elongation, wrong Madd type, inconsistent lengths. Each mistake deducts 2.5% with maximum 10% total.',
      color: '#f59e0b',
      deductionText: '2.5% each, max 10%'
    },
    {
      id: 'waqf',
      title: 'Waqf',
      shortTitle: 'Waqf',
      icon: '⏸️',
      type: 'additional',
      description: 'Stop/start mistakes',
      tooltip: 'Stop/start errors: Stopped at wrong place, failed to stop, restarted incorrectly. Each mistake deducts 2.5% with maximum 10% total.',
      color: '#f59e0b',
      deductionText: '2.5% each, max 10%'
    },
    {
      id: 'minor',
      title: 'Minor',
      shortTitle: 'Minor',
      icon: '⚠️',
      type: 'additional',
      description: 'Small errors',
      tooltip: 'Minor errors: Misread Sukun, incorrect sound, inconsistent Tajweed. Each mistake deducts 1% with maximum 10% total.',
      color: '#f59e0b',
      deductionText: '1% each, max 10%'
    },

    // Row 4 - Major & Reserved
    {
      id: 'major',
      title: 'Major',
      shortTitle: 'Major',
      icon: '❌',
      type: 'additional',
      description: 'Serious errors',
      tooltip: 'Serious errors: Skipped verses, repeated breakdown, severe mispronunciation. Each mistake deducts 5% with maximum 20% total.',
      color: '#ef4444',
      deductionText: '5% each, max 20%'
    },
    {
      id: 'reserved1',
      title: 'Reserved',
      shortTitle: 'Reserved',
      icon: 'ℹ️',
      type: 'reserved',
      description: 'Future expansion',
      tooltip: 'Reserved slot for future assessment categories.',
      color: '#6b7280',
      deductionText: 'Not active'
    },
    {
      id: 'reserved2',
      title: 'Reserved',
      shortTitle: 'Reserved',
      icon: 'ℹ️',
      type: 'reserved',
      description: 'Future expansion',
      tooltip: 'Reserved slot for future assessment categories.',
      color: '#6b7280',
      deductionText: 'Not active'
    },
    {
      id: 'reserved3',
      title: 'Reserved',
      shortTitle: 'Reserved',
      icon: 'ℹ️',
      type: 'reserved',
      description: 'Future expansion',
      tooltip: 'Reserved slot for future assessment categories.',
      color: '#6b7280',
      deductionText: 'Not active'
    }
  ];

  const getItemValue = (item: GridItem) => {
    if (item.type === 'reserved') return 0;
    
    // Map to assessment data counters
    const counterMap: { [key: string]: string } = {
      'ghunna': 'ghunnaInstances',
      'ikhfaa': 'ikhfaaInstances', 
      'idghaam': 'idghaamInstances',
      'qalqalah': 'qalqalahInstances',
      'fullMouth': 'fullMouth',
      'lips': 'lips',
      'tongue': 'tongue',
      'throat': 'throat',
      'fluency': 'fluency',
      'madd': 'maddMistakes',
      'waqf': 'waqfIbtidaaMistakes',
      'minor': 'minorMistakes',
      'major': 'majorMistakes'
    };

    const key = counterMap[item.id];
    return key ? (assessmentData[key] || 0) : 0;
  };

  const getItemExpected = (item: GridItem) => {
    if (item.type !== 'tajweed') return null;
    
    const expectedMap: { [key: string]: string } = {
      'ghunna': 'ghunnaExpected',
      'ikhfaa': 'ikhfaaExpected',
      'idghaam': 'idghaamExpected', 
      'qalqalah': 'qalqalahExpected'
    };

    const key = expectedMap[item.id];
    return key ? (assessmentData[key] || 0) : 0;
  };

  const getItemStatus = (item: GridItem) => {
    if (item.type === 'reserved') return 'disabled';
    
    const value = getItemValue(item);
    if (value === 0) return 'green';
    if (value <= 2) return 'amber';
    return 'red';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green': return '#22c55e';
      case 'amber': return '#f59e0b'; 
      case 'red': return '#ef4444';
      default: return '#9ca3af';
    }
  };

  const handleIncrement = (item: GridItem) => {
    if (item.type === 'reserved') return;
    
    const currentValue = getItemValue(item);
    onUpdateCounter(item.id, currentValue + 1);
  };

  const handleDecrement = (item: GridItem) => {
    if (item.type === 'reserved') return;
    
    const currentValue = getItemValue(item);
    if (currentValue > 0) {
      onUpdateCounter(item.id, currentValue - 1);
    }
  };

  return (
    <div className="unified-assessment-grid">
      <div className="grid-container">
        {gridItems.map((item, index) => {
          const value = getItemValue(item);
          const expected = getItemExpected(item);
          const status = getItemStatus(item);
          const statusColor = getStatusColor(status);
          
          return (
            <div
              key={item.id}
              className={`grid-item ${item.type} ${status}`}
              style={{ 
                borderColor: statusColor,
                opacity: item.type === 'reserved' ? 0.5 : 1
              }}
            >
              <div className="grid-item-header">
                <span className="grid-icon">{item.icon}</span>
                <h4 style={{ color: item.color }}>{item.shortTitle}</h4>
                <button
                  className="tooltip-button"
                  onClick={() => setSelectedTooltip(selectedTooltip === item.id ? null : item.id)}
                >
                  ?
                </button>
              </div>

              <div className="grid-item-content">
                <div className="counter-display">
                  {item.type === 'tajweed' ? (
                    <span className="counter-value">{value}/{expected}</span>
                  ) : (
                    <span className="counter-value">{value}</span>
                  )}
                </div>

                {item.type !== 'reserved' && (
                  <div className="counter-controls">
                    <button
                      className="counter-button decrement"
                      onClick={() => handleDecrement(item)}
                      disabled={value === 0}
                    >
                      -
                    </button>
                    <button
                      className="counter-button increment"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </div>
                )}

                <p className="grid-item-description">{item.description}</p>
                <p className="deduction-text">{item.deductionText}</p>
              </div>

              {selectedTooltip === item.id && (
                <div className="tooltip-overlay">
                  <div className="tooltip-content">
                    <p>{item.tooltip}</p>
                    <button
                      className="tooltip-close"
                      onClick={() => setSelectedTooltip(null)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UnifiedAssessmentGrid;
