
export interface AssessmentData {
  studentName: string;
  surahEnglish: string;
  surahArabic: string;
  examinerName: string;
  
  // Mistake counters
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
  
  // Etiquette checkboxes
  etiquetteItems: boolean[];
  
  // Calculated scores
  tajweedScore: number;
  pronunciationScore: number;
  additionalScore: number;
  etiquetteBonus: number;
  finalScore: number;
  ragStatus: 'GREEN' | 'AMBER' | 'RED';
  grade: string;
}

export interface SurahOption {
  english: string;
  arabic: string;
  tier: string;
}

export interface AssessmentCategory {
  name: string;
  current: number;
  expected: number;
  color: string;
}
