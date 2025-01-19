import React, { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [cursorStyle, setCursorStyle] = useState('default');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setCursorStyle('click');
    };

    const handleMouseUp = () => {
      setCursorStyle('default');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const createStar = (x, y) => {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${x - 10}px`;
    star.style.top = `${y - 10}px`;

    // Random colors
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF'];
    star.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;

    document.body.appendChild(star);

    star.addEventListener('animationend', () => {
      star.remove();
    });
  };

  useEffect(() => {
    const handleStarCreation = (e) => {
      if (Math.random() < 0.3) {
        createStar(e.clientX, e.clientY);
      }
    };

    document.addEventListener('mousemove', handleStarCreation);

    return () => {
      document.removeEventListener('mousemove', handleStarCreation);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-wrapper fixed top-0 left-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform z-[99999999] ${cursorStyle === 'click' ? 'scale-50 bg-light rounded-full shadow-shadow-primary' : 'scale-100'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className={`custom-cursor w-6 h-6 border border-light rounded-full pointer-events-none transition-all`}></div>
      </div>
    </>
  );
}
