import React, { useEffect, useState } from 'react';
import './mechstack.css';

function randomPercentage() {
  return Math.random() * 80 + 10;
}

function randomTranslate() {
  return {
    x: Math.random() * 20 - 10,  // Random between -10px and 10px
    y: Math.random() * 20 - 10   // Random between -10px and 10px
  };
}

function InteractiveStack() {
  const mechStack = ["SolidWorks", "MATLAB", "NX", "AutoCAD", "ANSYS", "Gazebo", "ROS/ROS2", "3D Printing"];
  const [translations, setTranslations] = useState([]);

  useEffect(() => {
    const newTranslations = mechStack.map(() => randomTranslate());
    setTranslations(newTranslations);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="interactive-stack">
      {mechStack.map((tool, idx) => (
        <span 
          key={idx} 
          className="stack-item"
          style={{
            top: `${randomPercentage()}%`,
            left: `${randomPercentage()}%`,
            animation: `drift 5s infinite alternate linear`,
            "--translate-x": `${translations[idx]?.x || 0}px`,
            "--translate-y": `${translations[idx]?.y || 0}px`
          }}
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default InteractiveStack;
