'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ 
  children, 
  className = '',
  strength = 0.3 
}: MagneticButtonProps) {
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
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, strength]);

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div 
      ref={ref} 
      className={`inline-block ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

// Magnetic wrapper for larger elements
interface MagneticAreaProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticArea({ 
  children, 
  className = '',
  strength = 0.15 
}: MagneticAreaProps) {
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
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, strength]);

  if (isTouchDevice) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
}

// Button with shimmer effect
interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShimmerButton({ children, className = '', onClick }: ShimmerButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`relative overflow-hidden group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </button>
  );
}

// Glow button
interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowButton({ children, className = '', glowColor = '#00D9FF' }: GlowButtonProps) {
  return (
    <MagneticButton strength={0.4}>
      <button 
        className={`relative group ${className}`}
        style={{ 
          boxShadow: `0 0 0 transparent`,
          transition: 'box-shadow 0.5s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 60px ${glowColor}40`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 transparent`;
        }}
      >
        {children}
      </button>
    </MagneticButton>
  );
}
