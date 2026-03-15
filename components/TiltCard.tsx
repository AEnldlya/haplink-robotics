'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
}

export function TiltCard({ 
  children, 
  className = '',
  maxTilt = 8,
  glare = true,
  scale = 1.02,
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
        scale,
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
  }, [isTouchDevice, maxTilt, glare, scale]);

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

// 3D Card with depth
interface Card3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export function Card3D({ children, className = '', depth = 20 }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(hover: none)').matches);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;
    
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(element, {
        rotateY: x * 10,
        rotateX: -y * 10,
        translateZ: depth,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateY: 0,
        rotateX: 0,
        translateZ: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, depth]);

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
        perspective: '1000px',
      }}
    >
      {children}
    </div>
  );
}

// Hover lift card
interface HoverLiftProps {
  children: ReactNode;
  className?: string;
}

export function HoverLift({ children, className = '' }: HoverLiftProps) {
  return (
    <div 
      className={`transition-all duration-400 ease-expo-out ${className}`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </div>
  );
}

// Glow card
interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className = '', glowColor = '#00D9FF' }: GlowCardProps) {
  return (
    <div className={`relative group ${className}`}>
      <div 
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${glowColor}40, transparent)` }}
      />
      <div className="relative bg-[#0F1428] rounded-2xl">
        {children}
      </div>
    </div>
  );
}
