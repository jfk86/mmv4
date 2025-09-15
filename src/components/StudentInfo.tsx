
import React from 'react';
import { User } from 'lucide-react';

interface StudentInfoProps {
  studentName: string;
  onStudentNameChange: (name: string) => void;
}

const StudentInfo: React.FC<StudentInfoProps> = ({ studentName, onStudentNameChange }) => {
  return (
    <div className="assessment-card">
      <div className="flex items-center space-x-2 mb-4">
        <User className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold text-gray-900">Student Information</h2>
      </div>
      
      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-gray-600 mb-2">
          Student Name
        </label>
        <input
          id="studentName"
          type="text"
          value={studentName}
          onChange={(e) => onStudentNameChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded"
          placeholder="Enter student name"
        />
      </div>
    </div>
  );
};

export default StudentInfo;
