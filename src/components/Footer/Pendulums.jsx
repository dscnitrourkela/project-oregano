import React, { useState, useEffect } from 'react';
import './styles';

const Pendulum = () => {
  const [angle, setAngle] = useState(0);
  const [direction, setDirection] = useState(1);

  const pendulumStyle = {
    transform: `rotate(${angle}deg)`,
  };

  useEffect(() => {
    const pendulumAnimation = setInterval(() => {
      setAngle((prevAngle) => prevAngle + direction);
    }, 10);

    return () => {
      clearInterval(pendulumAnimation);
    };
  }, [angle, direction]);

  useEffect(() => {
    if (angle >= 45 || angle <= -45) {
      setDirection(-direction);
    }
  }, [angle, direction]);

  return <div className="pendulum" style={pendulumStyle}></div>;
};

function Pendulums() {
  return (
    <div className="Pendulums">
      <div className="pendulum-container">
        <Pendulum />
        <Pendulum />
        <Pendulum />
        <Pendulum />
        <Pendulum />
      </div>
    </div>
  );
}

export default Pendulums;
