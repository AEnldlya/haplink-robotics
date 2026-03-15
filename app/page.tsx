'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Zap, Heart, Users, Trophy, ChevronRight, Play, Star, Award, Target, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerReveal, Parallax } from '@/components/ScrollReveal';
import { TiltCard, HoverLift, GlowCard } from '@/components/TiltCard';
import { MagneticButton, GlowButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    
    const ctx = gsap.context(() => {
      // ========== HERO SECTION ANIMATIONS ==========
      const tl = gsap.timeline({ delay: isTouch ? 0.1 : 0.3 });

      // 1. Logo scale-in with glow
      tl.from('.logo-mark', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'expo.out' })
      // 2. Nav items stagger
      .from('.nav-item', { y: -20, opacity: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }, '-=0.4')
      // 3. Hero lines reveal
      .from('.hero-line', { y: 80, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, '-=0.3')
      // 4. Subtitle fade up
      .from('.hero-subtitle', { y: 25, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      // 5. Background zoom out
      .from('.hero-bg', { scale: 1.1, duration: 1.5, ease: 'power2.out' }, 0)
      // 6. Hero image scale in
      .from('.hero-image', { scale: 1.2, opacity: 0, duration: 1.2, ease: 'expo.out' }, '-=1')
      // 7. CTA buttons slide up
      .from('.hero-cta', { y: 25, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
      // 8. Floating icons pop in
      .from('.hero-icon', { scale: 0, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' }, '-=0.3')
      // 9. Accent shapes rotation
      .from('.accent-shape', { rotation: -45, opacity: 0, duration: 1, ease: 'back.out(1)' }, '-=0.8');

      // ========== SCROLL-SCRUBBED HERO ANIMATION ==========
      const heroScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      heroScrollTl
        .to('.hero-content', { y: -100, opacity: 0 })
        .to('.hero-bg', { y: 100, scale: 1.1 }, 0)
        .to('.floating-element', { y: -150, rotation: 15 }, 0);

      // ========== STATS COUNTER ANIMATION ==========
      const statNumbers = document.querySelectorAll('.stat-number');
      statNumbers.forEach((stat) => {
        const target = parseInt(stat.getAttribute('data-value') || '0');
        gsap.fromTo(stat, 
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== ROTATING ELEMENTS ==========
      gsap.utils.toArray<HTMLElement>('.rotate-360').forEach((el) => {
        gsap.to(el, {
          rotation: 360,
          ease: 'none',
          duration: 3,
          repeat: -1,
        });
      });

      // ========== SCROLL ROTATION ==========
      gsap.utils.toArray<HTMLElement>('.rotate-on-scroll').forEach((el) => {
        gsap.to(el, {
          rotation: 360,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        });
      });

      // ========== SCALE PULSE ON SCROLL ==========
      gsap.utils.toArray<HTMLElement>('.scale-pulse-scroll').forEach((el) => {
        gsap.fromTo(el,
          { scale: 0.8 },
          {
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });

      // ========== SKEW ON SCROLL ==========
      gsap.utils.toArray<HTMLElement>('.skew-scroll').forEach((el) => {
        gsap.fromTo(el,
          { skewX: -8 },
          {
            skewX: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== HORIZONTAL SLIDE LEFT ==========
      gsap.utils.toArray<HTMLElement>('.slide-in-left').forEach((el) => {
        gsap.fromTo(el,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== HORIZONTAL SLIDE RIGHT ==========
      gsap.utils.toArray<HTMLElement>('.slide-in-right').forEach((el) => {
        gsap.fromTo(el,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== CLIP PATH REVEAL ==========
      gsap.utils.toArray<HTMLElement>('.clip-reveal').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== BLUR REVEAL ==========
      gsap.utils.toArray<HTMLElement>('.blur-reveal').forEach((el) => {
        gsap.fromTo(el,
          { filter: 'blur(20px)', opacity: 0 },
          {
            filter: 'blur(0px)',
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== FLOATING BOUNCE ==========
      gsap.utils.toArray<HTMLElement>('.float-bounce').forEach((el, i) => {
        gsap.to(el, {
          y: -20,
          duration: 2 + i * 0.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      });

      // ========== GLOW PULSE ==========
      gsap.utils.toArray<HTMLElement>('.glow-pulse').forEach((el) => {
        gsap.fromTo(el,
          { boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)' },
          {
            boxShadow: '0 0 60px rgba(0, 217, 255, 0.4)',
            duration: 1,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          }
        );
      });

      // ========== COLOR SHIFT ON SCROLL ==========
      gsap.utils.toArray<HTMLElement>('.color-shift').forEach((el) => {
        gsap.fromTo(el,
          { backgroundColor: 'rgba(0, 217, 255, 0)' },
          {
            backgroundColor: 'rgba(0, 217, 255, 0.1)',
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      });

      // ========== STAGGER CHILDREN ==========
      gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
        const children = container.querySelectorAll('.stagger-item');
        gsap.fromTo(children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== BOUNCE IN ==========
      gsap.utils.toArray<HTMLElement>('.bounce-in').forEach((el) => {
        gsap.fromTo(el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // ========== FLIP/ROTATE IN 3D ==========
      gsap.utils.toArray<HTMLElement>('.flip-in').forEach((el) => {
        gsap.fromTo(el,
          { rotateY: -90, opacity: 0 },
          {
            rotateY: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Zap, title: 'Haptic Technology', description: 'Feel concerts and events through advanced touch sensors.', color: 'cyan' },
    { icon: Trophy, title: 'State Champions', description: 'First year competing, won state. Excellence drives us.', color: 'magenta' },
    { icon: Users, title: 'Team 26532', description: 'Eight students and coaches pushing robotics boundaries.', color: 'cyan' },
    { icon: Heart, title: 'Community First', description: 'Making premium entertainment accessible to everyone.', color: 'magenta' },
  ];

  const achievements = [
    { icon: Star, label: 'World Championship', value: '2024' },
    { icon: Award, label: 'State Champions', value: '2024' },
    { icon: Target, label: 'Rookie Rank', value: '#1' },
    { icon: Sparkles, label: 'Innovation Award', value: 'Winner' },
  ];

  return (
    <main className="relative bg-[#050A15] overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Parallax speed={-0.3}>
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00D9FF]/[0.03] rounded-full blur-[150px]" />
        </Parallax>
        <Parallax speed={0.2}>
          <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#FF006E]/[0.03] rounded-full blur-[120px]" />
        </Parallax>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://haplink.net/wp-content/uploads/2024/01/IMG_5890-edited.jpg)' }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A15]/80 via-[#050A15]/60 to-[#050A15]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A15]/90 via-transparent to-[#050A15]/50" />
        </div>
        
        <div className="floating-element hidden lg:block absolute top-1/4 right-1/4 w-32 h-32 border border-[#00D9FF]/20 rounded-full rotate-on-scroll" />
        <div className="floating-element hidden lg:block absolute bottom-1/3 left-1/5 w-24 h-24 border border-[#FF006E]/20 rounded-full rotate-on-scroll" />

        <div className="accent-shape absolute top-1/2 right-1/3 w-48 h-48 border-2 border-[#00D9FF]/10 rounded-full" />
        <div className="accent-shape absolute bottom-1/4 left-1/4 w-32 h-32 border border-[#FF006E]/10 rounded-lg" />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A15] to-transparent" />

        <div className="hero-content relative z-10 container-premium py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="overflow-hidden mb-4">
              <p className="hero-line font-mono text-xs sm:text-sm text-[#00D9FF] tracking-[0.2em] uppercase">
                FIRST Tech Challenge • Team 26532
              </p>
            </div>

            <div className="overflow-hidden mb-2">
              <h1 className="hero-line font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight">
                HapLink
              </h1>
            </div>

            <div className="overflow-hidden mb-6">
              <h2 className="hero-line font-display-light text-2xl sm:text-3xl lg:text-4xl text-gradient tracking-tight">
                Happy Haptic Doctors
              </h2>
            </div>

            <p className="hero-subtitle text-[#94A3B8] text-base sm:text-lg lg:text-xl max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Bringing haptic technology to life. We create immersive experiences that let you feel concerts, sporting events, and entertainment from anywhere.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-start gap-4">
              <MagneticButton strength={0.4}>
                <Link href="/team" className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D9FF] text-[#050A15] rounded-full font-semibold text-sm hover:shadow-[0_0_60px_rgba(0,217,255,0.4)] transition-shadow duration-500">
                  Meet the Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </MagneticButton>
              <Link href="/robot" className="inline-flex items-center gap-2 px-8 py-4 text-white/90 hover:text-white border border-white/20 rounded-full font-medium text-sm hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/5 transition-all duration-300">
                See Our Robot
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-16 lg:py-20 border-y border-white/5">
        <div className="container-premium">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 stagger-container">
            {[
              { value: 1, label: 'Rookie Team', sublabel: 'Ranked #1' },
              { value: 8, label: 'Team Members', sublabel: 'Students + Coaches' },
              { value: 2024, label: 'State Champions', sublabel: 'First Year' },
              { value: 26532, label: 'Team Number', sublabel: 'FTC' },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left group scale-pulse-scroll stagger-item glow-pulse">
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                  <span className="stat-number" data-value={stat.value}>0</span>
                </div>
                <div className="text-white font-medium text-sm sm:text-base group-hover:text-[#00D9FF] transition-colors duration-300">{stat.label}</div>
                <div className="text-[#64748B] text-xs sm:text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-16 lg:py-20">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-12">
            <span className="font-mono text-xs text-[#FF006E] tracking-[0.2em] uppercase mb-4 block">Recognition</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white">Our Achievements</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="scale">
                <div className="group p-6 bg-[#0F1428] border border-white/5 rounded-lg hover:border-[#00D9FF]/30 transition-all duration-300 text-center stagger-item bounce-in">
                  <item.icon size={32} className="text-[#00D9FF] mx-auto mb-4 group-hover:scale-110 transition-transform rotate-360" />
                  <div className="font-display text-2xl text-white mb-1">{item.value}</div>
                  <div className="text-[#94A3B8] text-sm">{item.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding relative">
        <div className="container-premium">
          <ScrollReveal className="max-w-2xl mb-16 lg:mb-20">
            <span className="font-mono text-xs text-[#00D9FF] tracking-[0.2em] uppercase mb-4 block">What We Do</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Innovation through<br /><span className="text-gradient">haptic technology</span>
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 stagger-container">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full" maxTilt={5}>
                  <div className={`group h-full p-6 sm:p-8 bg-[#0F1428] border border-white/5 rounded-lg hover:border-${feature.color === 'cyan' ? '[#00D9FF]' : '[#FF006E]'}/30 transition-all duration-500 clip-reveal stagger-item`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 ${feature.color === 'cyan' ? 'bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20' : 'bg-[#FF006E]/10 group-hover:bg-[#FF006E]/20'}`}>
                      <feature.icon size={24} className={`${feature.color === 'cyan' ? 'text-[#00D9FF]' : 'text-[#FF006E]'} group-hover:rotate-12 transition-transform`} />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-white mb-2">{feature.title}</h3>
                    <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">{feature.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
