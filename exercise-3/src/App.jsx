import React, { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(false);

  const handleAChange = (event) => {
    setA(event.target.value);
    setError(false);
  };

  const handleBChange = (event) => {
    setB(event.target.value);
    setError(false);
  };

  const handleCompute = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (isNaN(numA) || isNaN(numB)) {
      setResult('A and B shall be numbers!');
      setError(true);
    } else {
      setResult(numA + numB);
      setError(false);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input type="text" value={a} onChange={handleAChange} />

      <label>B =</label>
      <input type="text" value={b} onChange={handleBChange} />

      <label>A + B =</label>
      <input
        type="text"
        value={result}
        disabled
        style={{ color: error ? 'red' : 'black' }}
      />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
