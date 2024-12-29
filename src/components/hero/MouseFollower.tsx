import React, { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      requestAnimationFrame(() => {
        follower.style.transform = `translate(${clientX}px, ${clientY}px)`;
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed w-8 h-8 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
    </div>
  );
}