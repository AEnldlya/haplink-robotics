'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  duration?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  pin?: boolean;
  markers?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  scrub = false,
  start = 'top 85%',
  end = 'bottom 20%',
  pin = false,
  markers = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const adjustedDuration = isTouch ? duration * 0.6 : duration;
    
    // Physics-based easing
    const easing = 'power3.out';

    let fromVars: gsap.TweenVars = { opacity: 0 };
    let toVars: gsap.TweenVars = { 
      opacity: 1, 
      duration: adjustedDuration,
      ease: easing,
      delay: delay,
    };

    switch (direction) {
      case 'up':
        fromVars = { ...fromVars, y: isTouch ? 20 : 40 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'down':
        fromVars = { ...fromVars, y: isTouch ? -20 : -40 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'left':
        fromVars = { ...fromVars, x: isTouch ? 30 : 60 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'right':
        fromVars = { ...fromVars, x: isTouch ? -30 : -60 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'scale':
        fromVars = { ...fromVars, scale: 0.9 };
        toVars = { ...toVars, scale: 1 };
        break;
      case 'rotate':
        fromVars = { ...fromVars, rotateX: isTouch ? 10 : 15, y: isTouch ? 15 : 30 };
        toVars = { ...toVars, rotateX: 0, y: 0 };
        break;
    }

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(element, fromVars, {
        ...toVars,
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub: scrub === true ? 1 : scrub,
          pin,
          markers,
          toggleActions: scrub ? undefined : 'play none none none',
        },
      });
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [delay, direction, duration, scrub, start, end, pin, markers]);

  return (
    <div ref={ref} className={className} style={{ perspective: '1000px' }}>
      {children}
    </div>
  );
}

// Staggered children reveal
interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
}

export function StaggerReveal({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}: StaggerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isTouch = window.matchMedia('(hover: none)').matches;
    const children = container.children;
    
    if (children.length === 0) return;

    let fromVars: gsap.TweenVars = { opacity: 0 };

    switch (direction) {
      case 'up':
        fromVars = { ...fromVars, y: isTouch ? 20 : 30 };
        break;
      case 'left':
        fromVars = { ...fromVars, x: isTouch ? 20 : 40 };
        break;
      case 'right':
        fromVars = { ...fromVars, x: isTouch ? -20 : -40 };
        break;
      case 'scale':
        fromVars = { ...fromVars, scale: 0.95 };
        break;
    }

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(children, fromVars, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: isTouch ? 0.5 : 0.7,
        stagger: isTouch ? staggerDelay * 0.5 : staggerDelay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [staggerDelay, direction]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

// Parallax scroll effect
interface ParallaxProps {
  children: ReactNode;
  className?: string;
  speed?: number; // -1 to 1, negative moves slower, positive moves faster
}

export function Parallax({ children, className = '', speed = 0.5 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(element, {
        y: () => speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
