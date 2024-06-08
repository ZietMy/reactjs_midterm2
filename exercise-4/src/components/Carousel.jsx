import React, { useState } from 'react';
function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev}>Left</button>
      <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <button onClick={handleNext}>Right</button>
    </div>
  );
}

export default Carousel;
