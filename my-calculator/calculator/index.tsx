// pages/calculator/index.tsx

import { useState } from 'react';
import CalculatorButton from '../components/CalculatorButton';
import CalculatorDisplay from '../components/CalculatorDisplay';

const Calculator = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // Nota: eval() puede ser peligroso, úsalo con precaución
    } catch (e) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <CalculatorDisplay input={input} result={result} />
      <div className="buttons">
        <CalculatorButton onClick={() => handleClick('1')}>1</CalculatorButton>
        <CalculatorButton onClick={() => handleClick('2')}>2</CalculatorButton>
        {/* Resto de los botones */}
        <CalculatorButton onClick={calculate}>=</CalculatorButton>
      </div>
    </div>
  );
};

export default Calculator;
