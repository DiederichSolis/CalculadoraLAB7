// components/CalculatorDisplay.tsx

import React from 'react';

interface CalculatorDisplayProps {
  input: string;
  result: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ input, result }) => {
  return (
    <div className="display">
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
    </div>
  );
};

export default CalculatorDisplay;
