
import { useState, useEffect, useCallback } from 'react';
import { AssessmentData } from '../types/Assessment';

export const useAssessmentCalculator = () => {
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    studentName: '',
    surahEnglish: '',
    surahArabic: '',
    examinerName: '',
    
    ghunnaMistakes: 0,
    ikhfaaMistakes: 0,
    idghaamMistakes: 2,
    qalqalahMistakes: 0,
    fullMouthMistakes: 0,
    lipsMistakes: 0,
    tongueMistakes: 0,
    throatMistakes: 0,
    fluencyMistakes: 0,
    maddMistakes: 0,
    waqfMistakes: 0,
    minorMistakes: 2,
    majorMistakes: 4,
    
    etiquetteItems: Array(6).fill(false),
    
    tajweedScore: 80,
    pronunciationScore: 96,
    additionalScore: 78,
    etiquetteBonus: 0,
    finalScore: 82,
    ragStatus: 'AMBER',
    grade: 'Good (B)'
  });

  const calculateScores = useCallback(() => {
    // Tajweed Rules Score (based on specific rules)
    const tajweedMistakes = assessmentData.ghunnaMistakes + assessmentData.ikhfaaMistakes + 
                           assessmentData.idghaamMistakes + assessmentData.qalqalahMistakes;
    const tajweedScore = Math.max(0, 100 - (tajweedMistakes * 10));
    
    // Pronunciation Score (based on articulation points)
    const pronunciationMistakes = assessmentData.fullMouthMistakes + assessmentData.lipsMistakes + 
                                 assessmentData.tongueMistakes + assessmentData.throatMistakes;
    const pronunciationScore = Math.max(0, 100 - (pronunciationMistakes * 15));
    
    // Additional Categories Score
    const additionalMistakes = assessmentData.fluencyMistakes + assessmentData.maddMistakes + 
                              assessmentData.waqfMistakes + assessmentData.minorMistakes;
    const additionalScore = Math.max(0, 100 - (additionalMistakes * 12));
    
    // Major mistakes penalty
    const majorPenalty = assessmentData.majorMistakes * 5;
    
    // Etiquette bonus
    const etiquetteChecked = assessmentData.etiquetteItems.filter(item => item).length;
    const etiquetteBonus = Math.min(5, etiquetteChecked);
    
    // Weighted final score
    const weightedScore = (tajweedScore * 0.4) + (pronunciationScore * 0.3) + (additionalScore * 0.3);
    const finalScore = Math.max(0, Math.min(100, weightedScore - majorPenalty + etiquetteBonus));
    
    // RAG Status
    let ragStatus: 'GREEN' | 'AMBER' | 'RED' = 'GREEN';
    let grade = 'Excellent (A)';
    
    if (finalScore >= 90) {
      ragStatus = 'GREEN';
      grade = 'Excellent (A)';
    } else if (finalScore >= 70) {
      ragStatus = 'AMBER';
      grade = 'Good (B)';
    } else if (finalScore >= 50) {
      ragStatus = 'AMBER';
      grade = 'Satisfactory (C)';
    } else {
      ragStatus = 'RED';
      grade = 'Needs Improvement (D)';
    }
    
    return {
      tajweedScore: Math.round(tajweedScore),
      pronunciationScore: Math.round(pronunciationScore),
      additionalScore: Math.round(additionalScore),
      etiquetteBonus,
      finalScore: Math.round(finalScore),
      ragStatus,
      grade
    };
  }, [assessmentData]);

  useEffect(() => {
    const scores = calculateScores();
    setAssessmentData(prev => ({
      ...prev,
      ...scores
    }));
  }, [
    assessmentData.ghunnaMistakes,
    assessmentData.ikhfaaMistakes,
    assessmentData.idghaamMistakes,
    assessmentData.qalqalahMistakes,
    assessmentData.fullMouthMistakes,
    assessmentData.lipsMistakes,
    assessmentData.tongueMistakes,
    assessmentData.throatMistakes,
    assessmentData.fluencyMistakes,
    assessmentData.maddMistakes,
    assessmentData.waqfMistakes,
    assessmentData.minorMistakes,
    assessmentData.majorMistakes,
    assessmentData.etiquetteItems,
    calculateScores
  ]);

  const updateField = (field: keyof AssessmentData, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateCounter = (field: string, value: number) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateEtiquette = (index: number, checked: boolean) => {
    setAssessmentData(prev => ({
      ...prev,
      etiquetteItems: prev.etiquetteItems.map((item, i) => i === index ? checked : item)
    }));
  };

  const getActiveRules = () => {
    return assessmentData.ghunnaMistakes + assessmentData.ikhfaaMistakes + assessmentData.idghaamMistakes;
  };

  const getTotalExpected = () => {
    return 10; // Based on the original dashboard showing 10 expected rules
  };

  return {
    assessmentData,
    updateField,
    updateCounter,
    updateEtiquette,
    getActiveRules,
    getTotalExpected
  };
};
