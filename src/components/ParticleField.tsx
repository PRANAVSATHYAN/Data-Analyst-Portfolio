import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      const particleCount = Math.min(
        100, 
        Math.floor(window.innerWidth * window.innerHeight / 10000)
      );
      particlesRef.current = [];
      
      // Purple color variations
      const colors = [
        'rgba(155, 135, 245, 0.6)',  // Primary Purple
        'rgba(204, 115, 248, 0.7)',  // Primary (from CSS)
        'rgba(126, 105, 171, 0.5)',  // Secondary Purple
        'rgba(139, 92, 246, 0.6)',   // Vivid Purple
      ];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary checks
        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;
        
        // Draw the particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect particles if they are close enough
        const mouseDistance = Math.hypot(
          particle.x - mouseRef.current.x, 
          particle.y - mouseRef.current.y
        );
        
        // React to mouse (move towards cursor)
        if (mouseDistance < 100) {
          const angle = Math.atan2(
            mouseRef.current.y - particle.y,
            mouseRef.current.x - particle.x
          );
          particle.speedX += Math.cos(angle) * 0.03;
          particle.speedY += Math.sin(angle) * 0.03;
          
          // Limit speed
          const maxSpeed = 2;
          const currentSpeed = Math.sqrt(
            particle.speedX * particle.speedX + 
            particle.speedY * particle.speedY
          );
          
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
          }
        }
        
        // Add slight damping
        particle.speedX *= 0.98;
        particle.speedY *= 0.98;
        
        // Connect to nearby particles
        for (let j = index + 1; j < particlesRef.current.length; j++) {
          const otherParticle = particlesRef.current[j];
          const distance = Math.hypot(
            particle.x - otherParticle.x, 
            particle.y - otherParticle.y
          );
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(204, 115, 248, ${1 - distance / 100})`;
            ctx.lineWidth = 0.3;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    // Touch support
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    // Initialize
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    resizeCanvas();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleField;
