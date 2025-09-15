
import React from 'react';
import StudentInfo from './StudentInfo';
import SurahSelection from './SurahSelection';
import UnifiedAssessmentGrid from './UnifiedAssessmentGrid';
import ScorePanel from './ScorePanel';
import AssessmentCompletion from './AssessmentCompletion';
import { useAssessmentCalculator } from '../hooks/useAssessmentCalculator';
import { surahs } from '../data/surahs';

const TajweedAssessment: React.FC = () => {
  const {
    assessmentData,
    updateField,
    updateCounter,
    updateEtiquette,
    getActiveRules,
    getTotalExpected
  } = useAssessmentCalculator();

  const handleSubmit = () => {
    console.log('Assessment submitted:', assessmentData);
    alert('Assessment submitted successfully!');
  };

  return (
    <div className="tajweed-assessment">
      <div className="assessment-header">
        <h1>Tajweed Assessment Dashboard</h1>
        <p>Track and assess Tajweed rule application during Quran recitation</p>
      </div>

      <div className="assessment-content">
        <div className="assessment-main">
          <StudentInfo
            studentName={assessmentData.studentName}
            onStudentNameChange={(name) => updateField('studentName', name)}
          />
          
          <div className="selection-score-row">
            <SurahSelection
              selectedSurah={assessmentData.surahEnglish}
              onSurahChange={(surah) => updateField('surahEnglish', surah)}
              surahs={surahs}
            />
            
            <ScorePanel
              finalScore={assessmentData.finalScore}
              tajweedScore={assessmentData.tajweedScore}
              pronunciationScore={assessmentData.pronunciationScore}
              additionalScore={assessmentData.additionalScore}
              etiquetteBonus={assessmentData.etiquetteBonus}
              ragStatus={assessmentData.ragStatus}
              grade={assessmentData.grade}
              activeRules={getActiveRules()}
              totalExpected={getTotalExpected()}
            />
          </div>
          
          <div className="unified-grid-section">
            <div className="grid-header">
              <h2>Unified Assessment Dashboard</h2>
              <p>All assessment categories in one accessible 4x4 grid with contextual tooltips</p>
            </div>
            
            <UnifiedAssessmentGrid
              assessmentData={assessmentData}
              onUpdateCounter={updateCounter}
            />
          </div>
          
          <AssessmentCompletion
            examinerName={assessmentData.examinerName}
            onExaminerNameChange={(name) => updateField('examinerName', name)}
            etiquetteItems={assessmentData.etiquetteItems}
            onEtiquetteChange={updateEtiquette}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default TajweedAssessment;
