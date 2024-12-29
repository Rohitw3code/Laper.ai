import React, { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    const fontSize = 16; // Increased font size
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops with varied starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }

    const draw = () => {
      // Reduced fade effect for more visible trails
      ctx.fillStyle = 'rgba(10, 1, 24, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create gradient effect for characters
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#FF3BFF');
      gradient.addColorStop(0.5, '#B537F2');
      gradient.addColorStop(1, '#5C24FF');
      ctx.fillStyle = gradient;
      ctx.font = `bold ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect
        ctx.shadowColor = '#FF3BFF';
        ctx.shadowBlur = 10;
        ctx.fillText(char, x, y);
        ctx.shadowBlur = 0;

        // Reset drop with random delay
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        // Varied speed for more dynamic effect
        drops[i] += 0.5 + Math.random() * 0.5;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30" // Increased opacity
      style={{ mixBlendMode: 'screen' }}
    />
  );
}