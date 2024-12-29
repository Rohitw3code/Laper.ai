import React, { useState, useEffect } from 'react';
import RippleEffect from './RippleEffect';

export default function CustomCursor() {
  const [clicks, setClicks] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      setClicks(prev => [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }]);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const removeClick = (id: number) => {
    setClicks(prev => prev.filter(click => click.id !== id));
  };

  return (
    <>
      {clicks.map(click => (
        <RippleEffect
          key={click.id}
          x={click.x}
          y={click.y}
          onComplete={() => removeClick(click.id)}
        />
      ))}
    </>
  );
}