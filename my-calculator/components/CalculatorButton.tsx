// components/CalculatorButton.tsx

import React from 'react';

interface CalculatorButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Agregar la propiedad children
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default CalculatorButton;
