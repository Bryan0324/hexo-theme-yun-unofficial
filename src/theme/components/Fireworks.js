import React, { useEffect, useRef } from 'react';
import './Fireworks.css';

export default function Fireworks({ enable = true, colors = [] }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enable) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Default colors if none provided
    const defaultColors = colors.length > 0 
      ? colors 
      : ['102, 167, 221', '62, 131, 225', '33, 78, 194'];

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 0.5) * 8;
        this.alpha = 1;
        this.color = defaultColors[Math.floor(Math.random() * defaultColors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.1; // gravity
        this.alpha -= 0.01;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const createFirework = (x, y) => {
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y));
      }
    };

    const handleClick = (e) => {
      createFirework(e.clientX, e.clientY);
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(p => p.alpha > 0);
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    canvas.addEventListener('click', handleClick);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enable, colors]);

  if (!enable) {
    return null;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="yun-fireworks-canvas"
      aria-hidden="true"
      role="presentation"
      aria-label="Decorative fireworks effect - click to create fireworks"
    />
  );
}
