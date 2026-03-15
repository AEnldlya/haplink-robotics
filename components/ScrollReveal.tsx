'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate' | 'blur' | 'clip';
  duration?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  pin?: boolean;
  markers?: boolean;
  stagger?: number;
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
      case 'blur':
        fromVars = { ...fromVars, filter: 'blur(10px)' };
        toVars = { ...toVars, filter: 'blur(0px)' };
        break;
      case 'clip':
        fromVars = { ...fromVars, clipPath: 'inset(0 100% 0 0)' };
        toVars = { ...toVars, clipPath: 'inset(0 0% 0 0)' };
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
          toggleActions: scrub ? undefined : 'play none none reverse',
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
  direction?: 'up' | 'left' | 'right' | 'scale' | 'blur';
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
      case 'blur':
        fromVars = { ...fromVars, filter: 'blur(5px)' };
        break;
    }

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(children, fromVars, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: isTouch ? 0.5 : 0.7,
        stagger: isTouch ? staggerDelay * 0.5 : staggerDelay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
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
  speed?: number;
  direction?: 'vertical' | 'horizontal';
}

export function Parallax({ children, className = '', speed = 0.5, direction = 'vertical' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const prop = direction === 'vertical' ? 'y' : 'x';
      const tween = gsap.to(element, {
        [prop]: () => speed * 100,
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
  }, [speed, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Multi-layer parallax
interface ParallaxLayersProps {
  layers: { children: ReactNode; speed: number; className?: string }[];
}

export function ParallaxLayers({ layers }: ParallaxLayersProps) {
  return (
    <div className="relative">
      {layers.map((layer, index) => (
        <Parallax key={index} speed={layer.speed} className={layer.className}>
          {layer.children}
        </Parallax>
      ))}
    </div>
  );
}

// Text reveal with clip-path
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(element,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.8,
          ease: 'expo.out',
          delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [delay]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {children}
    </span>
  );
}

// Counter animation
interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function Counter({ end, suffix = '', prefix = '', duration = 2, className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(element,
        { innerText: 0 },
        {
          innerText: end,
          duration,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}

// Split text animation
interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  stagger?: number;
}

export function SplitText({ text, className = '', charClassName = '', stagger = 0.02 }: SplitTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = container.querySelectorAll('.char');
    if (chars.length === 0) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(chars,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [stagger]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {text.split('').map((char, index) => (
        <span key={index} className={`char inline-block ${charClassName}`}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

// Line reveal animation
interface LineRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function LineReveal({ children, className = '', delay = 0 }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(element,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
      
      if (tween.scrollTrigger) {
        triggersRef.current.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggersRef.current.forEach(trigger => trigger.kill());
      triggersRef.current = [];
      ctx.revert();
    };
  }, [delay]);

  return (
    <div className="overflow-hidden">
      <div ref={ref} className={className}>
        {children}
      </div>
    </div>
  );
}
