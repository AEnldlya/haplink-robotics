'use client';

import { useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Zap, Heart, Users, Trophy, Cpu, ChevronRight } from 'lucide-react';
import { ScrollReveal, StaggerReveal, Parallax } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton, MagneticArea } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const tl = gsap.timeline({ delay: isTouch ? 0.1 : 0.3 });

      tl.from('.hero-line', {
        y: isTouch ? 30 : 80,
        opacity: 0,
        duration: isTouch ? 0.6 : 1.2,
        stagger: isTouch ? 0.08 : 0.12,
        ease: 'expo.out',
      })
      .from('.hero-subtitle', {
        y: isTouch ? 15 : 25,
        opacity: 0,
        duration: isTouch ? 0.5 : 0.9,
        ease: 'power3.out',
      }, '-=0.5')
      .from('.hero-cta', {
        y: isTouch ? 15 : 25,
        opacity: 0,
        duration: isTouch ? 0.5 : 0.9,
        ease: 'power3.out',
      }, '-=0.5');

      // Stats counter animation
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
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Haptic Technology',
      description: 'Experience concerts and events through advanced touch sensors that make you feel like you\'re there.',
      color: 'cyan',
    },
    {
      icon: Trophy,
      title: 'State Champions',
      description: 'First year competing and we won state. Our dedication to excellence drives everything we do.',
      color: 'magenta',
    },
    {
      icon: Users,
      title: 'Team 26532',
      description: 'Eight passionate students and dedicated coaches working together to push the boundaries of robotics.',
      color: 'cyan',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Making premium entertainment accessible to everyone, not just those who can afford expensive tickets.',
      color: 'magenta',
    },
  ];

  const products = [
    {
      title: 'Haptic Vest',
      description: 'Experience live concerts, sporting events, and entertainment from home. Connects with other Haptic products for shared experiences.',
      image: 'https://haplink.net/wp-content/uploads/2024/04/IMG_2821-2-scaled.jpg',
      tag: 'Flagship Product',
    },
    {
      title: 'Haptic Hoodie',
      description: 'Take haptic experiences on the go. All the power of our Haptic Vest in a portable, wearable form.',
      image: 'https://haplink.net/2025/team2025nh.jpg',
      tag: 'Portable',
    },
  ];

  const stats = [
    { value: 1, suffix: '', label: 'Rookie Team', sublabel: 'Ranked #1' },
    { value: 8, suffix: '', label: 'Team Members', sublabel: 'Students + Coaches' },
    { value: 2024, suffix: '', label: 'State Champions', sublabel: 'First Year' },
    { value: 26532, suffix: '', label: 'Team Number', sublabel: 'FTC' },
  ];

  return (
    <main className="relative bg-[#050A15]">
      {/* Ambient Background - Integrated shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#00D9FF]/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#FF006E]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background Image with Mask */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://haplink.net/wp-content/uploads/2024/01/IMG_5890-edited.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#050A15]/80 via-[#050A15]/60 to-[#050A15]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050A15]/90 via-transparent to-[#050A15]/50" />
        </div>
        
        {/* 3D Floating Shapes - Desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </div>

        {/* Diagonal Shape Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050A15] to-transparent" />

        <div className="relative z-10 container-premium py-16 lg:py-24">
          <div className="max-w-3xl">
            {/* Label */}
            <div className="overflow-hidden mb-4">
              <p className="hero-line font-mono text-xs sm:text-sm text-[#00D9FF] tracking-[0.2em] uppercase">
                FIRST Tech Challenge • Team 26532
              </p>
            </div>

            {/* Main Title */}
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

            {/* Description */}
            <p className="hero-subtitle text-[#94A3B8] text-base sm:text-lg lg:text-xl max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Bringing haptic technology to life. We create immersive experiences that let you 
              feel concerts, sporting events, and entertainment from anywhere.
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-start gap-4">
              <MagneticButton strength={0.4}>
                <Link
                  href="/team"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[#00D9FF] text-[#050A15] rounded-full font-semibold text-sm hover:shadow-[0_0_60px_rgba(0,217,255,0.4)] transition-shadow duration-500"
                >
                  Meet the Team
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </MagneticButton>
              <Link
                href="/robot"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/90 hover:text-white border border-white/20 rounded-full font-medium text-sm hover:border-[#00D9FF]/50 hover:bg-[#00D9FF]/5 transition-all duration-300"
              >
                See Our Robot
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Integrated with layout */}
      <section ref={statsRef} className="relative py-16 lg:py-20 border-y border-white/5">
        <div className="container-premium">
          <StaggerReveal className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.1}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
                  <span className="stat-number" data-value={stat.value}>0</span>
                  <span className="text-[#00D9FF]">{stat.suffix}</span>
                </div>
                <div className="text-white font-medium text-sm sm:text-base">{stat.label}</div>
                <div className="text-[#64748B] text-xs sm:text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Features Section - Grid with integrated shapes */}
      <section className="section-padding relative">
        <div className="container-premium">
          {/* Section Header */}
          <ScrollReveal className="max-w-2xl mb-16 lg:mb-20">
            <span className="font-mono text-xs text-[#00D9FF] tracking-[0.2em] uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Innovation through<br />
              <span className="text-gradient">haptic technology</span>
            </h2>
            <p className="text-[#94A3B8] text-base lg:text-lg">
              We combine robotics expertise with cutting-edge haptic feedback to create 
              experiences that were previously impossible.
            </p>
          </ScrollReveal>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <TiltCard className="h-full" maxTilt={5}>
                  <div className={`group h-full p-6 sm:p-8 bg-[#0F1428] border border-white/5 rounded-2xl hover:border-${feature.color === 'cyan' ? '[#00D9FF]' : '[#FF006E]'}/30 transition-all duration-500 hover-lift`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                      feature.color === 'cyan' 
                        ? 'bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20' 
                        : 'bg-[#FF006E]/10 group-hover:bg-[#FF006E]/20'
                    }`}>
                      <feature.icon size={24} className={feature.color === 'cyan' ? 'text-[#00D9FF]' : 'text-[#FF006E]'} />
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

      {/* Products Section - Full-width with proper image placement */}
      <section className="section-padding relative border-y border-white/5">
        <div className="container-premium">
          {/* Section Header */}
          <ScrollReveal className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="font-mono text-xs text-[#FF006E] tracking-[0.2em] uppercase mb-4 block">
              Our Innovation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Haptic Products
            </h2>
            <p className="text-[#94A3B8] text-base lg:text-lg">
              Experience unlimited entertainment from home for a fraction of the cost.
              A Taylor Swift ticket costs $1,011 on average. Our products let you feel like you're there.
            </p>
          </ScrollReveal>

          {/* Products Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="scale">
                <MagneticArea strength={0.1}>
                  <div className="group relative bg-[#0F1428] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-500">
                    {/* Image Container - Proper aspect ratio */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 img-premium"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1428] via-[#0F1428]/40 to-transparent" />
                      
                      {/* Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-xs text-[#00D9FF] bg-[#00D9FF]/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#00D9FF]/20">
                          {product.tag}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 lg:p-8">
                      <h3 className="font-display text-xl sm:text-2xl text-white mb-3">{product.title}</h3>
                      <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </MagneticArea>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section - Split layout with image */}
      <section className="section-padding relative">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <ScrollReveal direction="left">
              <span className="font-mono text-xs text-[#00D9FF] tracking-[0.2em] uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                From FLL to<br />
                <span className="text-gradient">World Championship</span>
              </h2>
              <div className="space-y-4 text-[#94A3B8] text-base lg:text-lg leading-relaxed">
                <p>
                  We started in First Lego League and quickly rose to become state champions 
                  and the #1 rookie team in our first year competing in FIRST Tech Challenge.
                </p>
                <p>
                  Our journey has taken us to the World Championship, where we competed against 
                  the best teams globally and formed partnerships that continue to drive our innovation.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/2024-worlds"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D9FF]/10 border border-[#00D9FF]/30 text-[#00D9FF] rounded-full font-medium text-sm hover:bg-[#00D9FF] hover:text-[#050A15] transition-all duration-300"
                >
                  2024 Worlds
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/2025"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/90 rounded-full font-medium text-sm hover:border-[#FF006E] hover:text-[#FF006E] transition-all duration-300"
                >
                  2025 Season
                </Link>
              </div>
            </ScrollReveal>

            {/* Image - Properly placed */}
            <ScrollReveal delay={0.2} direction="right">
              <div className="relative">
                {/* Background Shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#00D9FF]/10 to-[#FF006E]/10 rounded-3xl blur-2xl" />
                
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="https://haplink.net/wp-content/uploads/2024/01/IMG_5890-edited.jpg"
                    alt="HapLink Team"
                    className="w-full h-full object-cover img-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A15]/60 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative border-t border-white/5">
        <div className="container-premium">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-16 bg-[#0F1428] border border-white/5 rounded-3xl overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF006E]/10 rounded-full blur-[100px]" />
              
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white mb-4">
                  Ready to experience the <span className="text-gradient">future</span>?
                </h2>
                <p className="text-[#94A3B8] text-base lg:text-lg mb-8">
                  Join us on our journey to revolutionize entertainment through haptic technology. 
                  Support Team 26532 and help us bring innovation to life.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <MagneticButton strength={0.4}>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D9FF] text-[#050A15] rounded-full font-semibold text-sm hover:shadow-[0_0_60px_rgba(0,217,255,0.4)] transition-shadow duration-500"
                    >
                      Meet the Team
                      <ArrowRight size={18} />
                    </Link>
                  </MagneticButton>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF006E]/30 text-[#FF006E] rounded-full font-medium text-sm hover:bg-[#FF006E] hover:text-[#050A15] transition-all duration-300"
                  >
                    Support Our Mission
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
