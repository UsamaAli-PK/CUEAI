import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ValidationError {
  field: string;
  message: string;
}

interface FormValidationProps {
  errors: ValidationError[];
  className?: string;
}

export const FormValidation: React.FC<FormValidationProps> = ({ errors, className = '' }) => {
  if (errors.length === 0) return null;

  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800 mb-2">
            Please fix the following errors:
          </h3>
          <ul className="text-sm text-red-700 space-y-1">
            {errors.map((error, index) => (
              <li key={index}>• {error.message}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};