import React, { useState } from 'react';
import './Hovercs.css';

const Hover = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="button-container">
    {isHovered || (
      <button className="hover-button">Click Me!</button>
    )}
    <div className="trigger-area" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      Hover me
    </div>
  </div>
  )
}

export default Hover
