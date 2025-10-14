
import React, { useEffect, useRef, useMemo } from 'react';
import './AcademicBanner.css';

interface AcademicBannerProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
}

const AcademicBanner: React.FC<AcademicBannerProps> = ({
  color = [0.85, 0.62, 0.2], // Gold color
  amplitude = 0.8,
  distance = 0.1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const isMobile = useMemo(() => window.innerWidth <= 768, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Simple wave animation for mobile performance
    let time = 0;
    const lineCount = isMobile ? 20 : 40;
    const lineWidth = isMobile ? 4 : 7;

    const animate = () => {
      time += 0.01;
      const width = canvas.width / (isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2));
      const height = canvas.height / (isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < lineCount; i++) {
        const perc = i / lineCount;
        const opacity = (1 - perc) * 0.6;
        
        ctx.strokeStyle = `rgba(${Math.floor(color[0] * 255)}, ${Math.floor(color[1] * 255)}, ${Math.floor(color[2] * 255)}, ${opacity})`;
        ctx.lineWidth = lineWidth * (1 - perc * 0.5);
        ctx.lineCap = 'round';
        
        ctx.beginPath();
        
        for (let x = 0; x < width; x += isMobile ? 8 : 4) {
          const xNorm = x / width;
          const wave1 = Math.sin(xNorm * Math.PI * 2 + time + perc * 2) * amplitude * 20;
          const wave2 = Math.sin(xNorm * Math.PI * 4 + time * 0.7 + perc * 3) * amplitude * 10;
          const y = height / 2 + (perc - 0.5) * distance * 100 + wave1 + wave2;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.stroke();
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', resize);
    };
  }, [color, amplitude, distance, isMobile]);

  return (
    <div className="academic-banner-wrapper">
      <canvas ref={canvasRef} className="academic-banner-canvas" />
      <div className="academic-banner-content">
        <h1 className="academic-banner-title">
          Academic <span className="academic-banner-highlight">Excellence</span>
        </h1>
        <p className="academic-banner-description">
          Comprehensive curriculum designed to challenge, inspire, and prepare students for success in higher education and beyond.
        </p>
      </div>
    </div>
  );
};

export default AcademicBanner;
