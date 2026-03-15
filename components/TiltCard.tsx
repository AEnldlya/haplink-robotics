'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({ 
  children, 
  className = '',
  maxTilt = 8,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    
    const element = ref.current;
    const glareEl = glareRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 1000,
      });

      if (glareEl && glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        
        gsap.to(glareEl, {
          opacity: 0.15,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          duration: 0.3,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(element, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)',
      });

      if (glareEl) {
        gsap.to(glareEl, {
          opacity: 0,
          duration: 0.3,
        });
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, maxTilt, glare]);

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div 
      ref={ref} 
      className={`relative ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="absolute inset-0 pointer-events-none rounded-inherit opacity-0"
          style={{ borderRadius: 'inherit' }}
        />
      )}
    </div>
  );
}
