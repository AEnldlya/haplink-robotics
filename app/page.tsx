'use client';

import { useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap, Heart, Users, Trophy, Cpu } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: isTouch ? 0.1 : 0.3 });

      tl.from('.hero-line', {
        y: isTouch ? 30 : 100,
        opacity: 0,
        duration: isTouch ? 0.5 : 1,
        stagger: isTouch ? 0.08 : 0.15,
        ease: 'power4.out',
      })
      .from('.hero-subtitle', {
        y: isTouch ? 15 : 30,
        opacity: 0,
        duration: isTouch ? 0.4 : 0.8,
        ease: 'power3.out',
      }, '-=0.3')
      .from('.hero-cta', {
        y: isTouch ? 15 : 30,
        opacity: 0,
        duration: isTouch ? 0.4 : 0.8,
        ease: 'power3.out',
      }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Haptic Technology',
      description: 'Experience concerts and events through advanced touch sensors that make you feel like you\'re there.',
    },
    {
      icon: Trophy,
      title: 'State Champions',
      description: 'First year competing and we won state. Our dedication to excellence drives everything we do.',
    },
    {
      icon: Users,
      title: 'Team 26532',
      description: 'Eight passionate students and dedicated coaches working together to push the boundaries of robotics.',
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Making premium entertainment accessible to everyone, not just those who can afford expensive tickets.',
    },
  ];

  const products = [
    {
      title: 'Haptic Vest',
      description: 'Experience live concerts, sporting events, and entertainment from home. Connects with other Haptic products for shared experiences.',
      image: 'https://haplink.net/wp-content/uploads/2024/04/IMG_2821-2-scaled.jpg',
      price: 'Affordable',
    },
    {
      title: 'Haptic Hoodie',
      description: 'Take haptic experiences on the go. All the power of our Haptic Vest in a portable, wearable form.',
      image: 'https://haplink.net/2025/team2025nh.jpg',
      price: 'Portable',
    },
  ];

  return (
    <main className="relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%), url(https://haplink.net/wp-content/uploads/2024/01/IMG_5890-edited.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-void/70" />
        
        {/* 3D Floating Shapes - Hidden on mobile */}
        <div className="hidden md:block">
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-1 lg:mb-2">
              <h1 className="hero-line font-display text-5xl sm:text-6xl lg:text-display-xl text-platinum">
                HapLink
              </h1>
            </div>
            <div className="overflow-hidden mb-1 lg:mb-2">
              <h1 className="hero-line font-display text-3xl sm:text-4xl lg:text-display-lg text-gradient">
                Happy Haptic Doctors
              </h1>
            </div>
            <div className="overflow-hidden mb-6 lg:mb-8">
              <h2 className="hero-line font-display text-xl sm:text-2xl lg:text-display-md text-platinum/80">
                Team 26532
              </h2>
            </div>

            <p className="hero-subtitle text-silver text-base sm:text-lg lg:text-body-lg max-w-xl mb-8 lg:mb-10 leading-relaxed">
              Bringing haptic technology to life. We create immersive experiences that let you 
              feel concerts, sporting events, and entertainment from anywhere.
            </p>

            <div className="hero-cta flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
              <MagneticButton>
                <Link
                  href="/team"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                >
                  Meet the Team
                  <ArrowRight size={16} className="sm:w-[18px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                href="/robot"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-platinum hover:text-cyan transition-colors duration-300 text-sm sm:text-base border border-cyan/30 rounded-full hover:border-cyan"
              >
                See Our Robot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
              What We Do
            </span>
            <LineReveal
              lines={['Innovation through', 'haptic technology']}
              className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum"
              lineClassName="leading-tight"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard className="h-full">
                  <div className="group h-full p-6 sm:p-8 bg-surface border border-white/5 rounded-2xl hover:border-cyan/30 transition-colors duration-500">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-cyan/20 transition-colors duration-300">
                      <feature.icon size={24} className="lg:w-[28px] lg:h-[28px] text-cyan" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-platinum mb-2 lg:mb-3">{feature.title}</h3>
                    <p className="text-silver text-sm sm:text-base">{feature.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-16 lg:py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-magenta text-caption font-medium tracking-wider uppercase mb-4 block">
              Our Innovation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-4">
              Haptic Products
            </h2>
            <p className="text-silver text-base sm:text-lg lg:text-body-lg max-w-2xl mx-auto">
              Experience unlimited entertainment from home for a fraction of the cost.
              A Taylor Swift ticket costs $1,011 on average. Our products let you feel like you're there.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="group relative bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-cyan/30 transition-colors duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-2 block">
                      {product.price}
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl text-platinum mb-3">{product.title}</h3>
                    <p className="text-silver text-body-md">{product.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
                From FLL to <span className="text-gradient">World Championship</span>
              </h2>
              <p className="text-silver text-body-lg mb-6 leading-relaxed">
                We started in First Lego League and quickly rose to become state champions 
                and the #1 rookie team in our first year competing in FIRST Tech Challenge.
              </p>
              <p className="text-silver text-body-md mb-8 leading-relaxed">
                Our journey has taken us to the World Championship, where we competed against 
                the best teams globally and formed partnerships that continue to drive our innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/2024-worlds"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan/10 border border-cyan/30 text-cyan rounded-full font-medium hover:bg-cyan hover:text-void transition-all duration-300"
                >
                  2024 Worlds
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/2025"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-platinum rounded-full font-medium hover:border-magenta hover:text-magenta transition-all duration-300"
                >
                  2025 Season
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-surface border border-white/5 rounded-2xl text-center">
                  <div className="font-display text-4xl lg:text-5xl text-cyan mb-2">#1</div>
                  <p className="text-silver text-sm">Rookie Team</p>
                </div>
                <div className="p-6 bg-surface border border-white/5 rounded-2xl text-center">
                  <div className="font-display text-4xl lg:text-5xl text-magenta mb-2">8</div>
                  <p className="text-silver text-sm">Team Members</p>
                </div>
                <div className="p-6 bg-surface border border-white/5 rounded-2xl text-center">
                  <div className="font-display text-4xl lg:text-5xl text-cyan mb-2">State</div>
                  <p className="text-silver text-sm">Champions</p>
                </div>
                <div className="p-6 bg-surface border border-white/5 rounded-2xl text-center">
                  <div className="font-display text-4xl lg:text-5xl text-magenta mb-2">Worlds</div>
                  <p className="text-silver text-sm">Competitors</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-20 bg-surface border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-magenta/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  Ready to experience the <span className="text-gradient">future</span>?
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  Join us on our journey to revolutionize entertainment through haptic technology. 
                  Support Team 26532 and help us bring innovation to life.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <MagneticButton>
                    <Link
                      href="/team"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                    >
                      Meet the Team
                      <ArrowRight size={16} className="sm:w-[18px]" />
                    </Link>
                  </MagneticButton>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-magenta/30 text-magenta rounded-full font-medium hover:bg-magenta hover:text-void transition-all duration-300 text-sm sm:text-base"
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
