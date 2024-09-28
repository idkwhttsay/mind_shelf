import React, { useState, useEffect, useRef } from 'react';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const audioRef = useRef(new Audio('/key.mp3'));

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        audioRef.current.play().catch(error => console.error('Error playing sound:', error));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingEffect;