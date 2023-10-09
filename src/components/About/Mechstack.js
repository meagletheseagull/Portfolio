import React from 'react';
import './mechstack.css';


function randomPercentage() {
  return Math.random() * 80 + 10;
}

function InteractiveStack() {
  const mechStack = ["SolidWorks", "MATLAB", "NX",
   "AutoCAD", "ANSYS", "Gazebo", "ROS/ROS2","3D Printing"];

  return (
    <div className="interactive-stack">
      {mechStack.map((tool, idx) => (
        <span 
          key={idx} 
          className="stack-item"
          style={{
            top: `${randomPercentage()}%`,
            left: `${randomPercentage()}%`
          }}
        >
          {tool}
        </span>
      ))}
    </div>
  );
}

export default InteractiveStack;
