import React, { useEffect, useState, useRef } from 'react';
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
    let newTranslations = mechStack.map(() => ({
      top: randomPercentage(),
      left: randomPercentage(),
      translate: randomTranslate()
    }));

    // Adjust positions to prevent overlaps
    for (let i = 0; i < newTranslations.length; i++) {
      for (let j = i + 1; j < newTranslations.length; j++) {
        while (checkOverlap(newTranslations[i], newTranslations[j])) {
          newTranslations[j] = {
            top: randomPercentage(),
            left: randomPercentage(),
            translate: randomTranslate()
          };
        }
      }
    }

    setTranslations(newTranslations);
  }, []);

  function checkOverlap(item1, item2) {
    // Assuming each element is a square of 100x100 pixels for simplicity
    const elementSize = 100;
  
    // Convert percentages to pixels based on the container size
    // Assuming the container is 1000x1000 pixels for simplicity
    const containerSize = 1000;
    const item1X = (item1.left / 100) * containerSize;
    const item1Y = (item1.top / 100) * containerSize;
    const item2X = (item2.left / 100) * containerSize;
    const item2Y = (item2.top / 100) * containerSize;
  
    // Check if item1 and item2 overlap
    return (
      item1X < item2X + elementSize &&
      item1X + elementSize > item2X &&
      item1Y < item2Y + elementSize &&
      item1Y + elementSize > item2Y
    );
  }
  

  return (
    <div className="interactive-stack">
      {mechStack.map((tool, idx) => (
        <span 
          key={idx} 
          className="stack-item"
          style={{
            top: `${translations[idx]?.top}%`,
            left: `${translations[idx]?.left}%`,
            animation: `drift 5s infinite alternate linear`,
            "--translate-x": `${translations[idx]?.translate.x}px`,
            "--translate-y": `${translations[idx]?.translate.y}px`
          }}
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default InteractiveStack;