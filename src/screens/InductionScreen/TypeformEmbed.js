import React, { useRef, useEffect } from 'react';
import { createWidget } from '@typeform/embed';
import '@typeform/embed/build/css/widget.css'; // import necessary CSS

const TypeformEmbed = ({ code }) => {
  const container = useRef();

  useEffect(() => {
    createWidget(`${code}`, { container: container.current });
  }, []);

  return <div style={{ height: '100vh', width: '100vw' }} ref={container} />;
};

export default TypeformEmbed;
