
import React from 'react';
import { Book } from 'lucide-react';
import { SurahOption } from '../types/Assessment';

interface SurahSelectionProps {
  selectedSurah: string;
  onSurahChange: (surah: string) => void;
  surahs: SurahOption[];
}

const SurahSelection: React.FC<SurahSelectionProps> = ({ selectedSurah, onSurahChange, surahs }) => {
  return (
    <div className="assessment-card">
      <div className="flex items-center space-x-2 mb-4">
        <Book className="h-5 w-5 text-text-medium" />
        <h2 className="text-lg font-semibold text-text-dark">Select Surah</h2>
      </div>
      
      <div>
        <label htmlFor="surahSelect" className="block text-sm font-medium text-text-medium mb-2">
          Surah
        </label>
        <select
          id="surahSelect"
          value={selectedSurah}
          onChange={(e) => onSurahChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
        >
          <option value="">Select a Surah</option>
          {surahs.map((surah, index) => (
            <option key={index} value={surah.english}>
              {surah.english} - {surah.arabic} ({surah.tier})
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SurahSelection;
