import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    // Update the result whenever input1 or input2 changes
    setResult(Number(input1) + Number(input2));
  }, [input1, input2]);

  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  return (
    <div id="main">
      <input id='input1' type='number' value={input1} onChange={handleInput1Change} />
       +
      <input id='input2' type='number' value={input2} onChange={handleInput2Change} />
      
      <p id='result'>{result}</p>
    </div>
  );
};

export default App;

