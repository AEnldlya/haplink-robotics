'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Microscope } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

const systems = [
  {
    icon: Cpu,
    title: 'Control Systems',
    description: 'Advanced autonomous systems powered by real-time sensor feedback and machine learning algorithms.',
  },
  {
    icon: Zap,
    title: 'Power Management',
    description: 'Optimized battery systems and power distribution for sustained high-performance operation.',
  },
  {
    icon: Microscope,
    title: 'Haptic Sensors',
    description: 'Precision haptic sensing technology that enables immersive touch-based feedback systems.',
  },
];

const gallery = [
  { image: 'https://haplink.net/wp-content/uploads/2024/04/robot-1.jpg', caption: 'Complete Robot Assembly' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/robot-2.jpg', caption: 'Mechanical Design' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/robot-3.jpg', caption: 'Electronics & Sensors' },
];

export default function RobotPage() {
  return (
    <main className="relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-magenta/10 to-transparent" />
        
        <div className="hidden md:block">
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <ScrollReveal>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-display-xl text-platinum mb-4 lg:mb-6">
              Engineering<br />
              <span className="text-gradient">Excellence</span>
            </h1>
            <p className="text-silver text-lg sm:text-body-lg max-w-2xl">
              A deep dive into the design philosophy, advanced systems, and innovative engineering behind our competition robot.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
                Our Approach
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
                Design Philosophy
              </h2>
              <p className="text-silver text-body-lg mb-6 leading-relaxed">
                We believe in engineering solutions that are both innovative and reliable. 
                Every component of our robot is designed with precision and tested rigorously 
                to ensure peak performance in competition.
              </p>
              <p className="text-silver text-body-lg mb-8 leading-relaxed">
                Our approach combines mechanical excellence with cutting-edge electronics, 
                all integrated through sophisticated control systems that enable autonomous 
                and human-controlled operation.
              </p>
              <ul className="space-y-4">
                {['Precision Manufacturing', 'Real-time Autonomy', 'Modular Design', 'Rapid Iteration'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan" />
                    <span className="text-platinum">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden bg-surface border border-white/5">
                <img
                  src="https://haplink.net/wp-content/uploads/2024/04/robot-main.jpg"
                  alt="Robot Design"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advanced Systems */}
      <section className="relative py-16 lg:py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-magenta text-caption font-medium tracking-wider uppercase mb-4 block">
              Technology Stack
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum">
              Advanced Systems
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {systems.map((system, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="group h-full p-6 sm:p-8 bg-surface border border-white/5 rounded-2xl hover:border-magenta/30 transition-colors duration-500">
                    <div className="w-14 h-14 rounded-xl bg-magenta/10 flex items-center justify-center mb-6 group-hover:bg-magenta/20 transition-colors duration-300">
                      <system.icon size={28} className="text-magenta" />
                    </div>
                    <h3 className="font-display text-xl text-platinum mb-3">{system.title}</h3>
                    <p className="text-silver text-body-md leading-relaxed">{system.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Gallery */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="mb-12 lg:mb-16">
            <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum">
              Hardware in Action
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {gallery.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-cyan/30 transition-colors duration-500 h-64 sm:h-72">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-platinum font-medium">{item.caption}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-20 bg-surface border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-magenta/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  Help us build the <span className="text-gradient">future</span>
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  Supporting Team 26532 means helping us develop cutting-edge robotics technology 
                  and compete at the highest levels of FIRST Tech Challenge.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                  <MagneticButton>
                    <Link
                      href="/2024-worlds"
                      className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                    >
                      2024 Worlds
                      <ArrowRight size={16} className="sm:w-[18px]" />
                    </Link>
                  </MagneticButton>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-magenta/30 text-magenta rounded-full font-medium hover:bg-magenta hover:text-void transition-all duration-300 text-sm sm:text-base"
                  >
                    Donate
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
