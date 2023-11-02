import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const PendulumContainer = styled.div`
  width: 10px;
  height: 100px;
  background-color: #3498db;
  border-radius: 50%;
  position: relative;
  top: 0;
  transition: transform 0.1s;
`;

const Pendulum = () => {
  const [angle, setAngle] = useState(0);
  const [direction, setDirection] = useState(1);

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

  const pendulumStyle = {
    transform: `rotate(${angle}deg)`,
  };

  return <PendulumContainer style={pendulumStyle} />;
};

export default Pendulum;
