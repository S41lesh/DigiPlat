import { useEffect, useRef } from 'react';

export const AuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor(Math.min(canvas.width * canvas.height, 50000) / 15000);
      return Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.3 + 0.1,
        hue: Math.random() > 0.5 ? 199 : 280,
      }));
    };

    let particles: ReturnType<typeof createParticles> = [];

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 45%, ${particle.opacity})`;
        ctx.fill();
      });

      // Subtle connections
      ctx.globalAlpha = 0.2;
      particles.forEach((particle, idx) => {
        const maxDistance = 150;
        for (let j = idx + 1; j < Math.min(idx + 5, particles.length); j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(${particle.hue}, 80%, 45%, ${0.05 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resize();
    particles = createParticles();
    drawParticles();

    const handleResize = () => {
      resize();
      particles = createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background" />
      <div className="fixed inset-0 bg-gradient-mesh opacity-20" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 opacity-40"
        style={{ mixBlendMode: 'screen' }}
        aria-hidden="true"
      />
    </>
  );
};