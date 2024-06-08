import React, { useState } from 'react';
import './index.css';

function App() {
  const [isRaining, setIsRaining] = useState(false);

  const onSunClick = () => {
    setIsRaining(false);
  };

  const onRainClick = () => {
    setIsRaining(true);
  };

  const getBackgroundColor = () => {
    return isRaining ? 'rainy' : 'sunny';
  };

  const getTitle = () => {
    return isRaining ? 'Rain Time' : 'Sun Time';
  };

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny time</button>
      <button onClick={onRainClick}>Rain time</button>
    </main>
  );
}

export default App;
