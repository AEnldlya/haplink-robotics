'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

const seasonUpdates = [
  {
    title: 'Robot Design 2.0',
    description: 'Building on lessons from 2024, we\'re developing an even more advanced robot with improved autonomous systems.',
  },
  {
    title: 'Team Expansion',
    description: 'Growing our team with new talent and fresh perspectives to tackle bigger challenges.',
  },
  {
    title: 'Innovation Focus',
    description: 'Applying haptic technology learnings to create breakthrough solutions for 2025 competition.',
  },
];

export default function Season2025Page() {
  return (
    <main className="relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />
      </div>

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
              2025 Season<br />
              <span className="text-gradient">Preview</span>
            </h1>
            <p className="text-silver text-lg sm:text-body-lg max-w-2xl">
              The next chapter of our robotics journey. New challenges, 
              new innovations, and continued excellence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-magenta text-caption font-medium tracking-wider uppercase mb-4 block">
              What's Next
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum">
              2025 Development
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {seasonUpdates.map((update, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard>
                  <div className="group h-full p-6 sm:p-8 bg-surface border border-white/5 rounded-2xl hover:border-magenta/30 transition-colors duration-500">
                    <div className="w-12 h-12 rounded-xl bg-magenta/10 flex items-center justify-center mb-6 group-hover:bg-magenta/20 transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-magenta/40" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-platinum mb-3">{update.title}</h3>
                    <p className="text-silver text-body-md">{update.description}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
                Timeline
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
                Season Milestones
              </h2>
              <div className="space-y-6">
                {[
                  { month: 'January', event: 'Robot Design Phase Begins' },
                  { month: 'February', event: 'Component Assembly & Testing' },
                  { month: 'March', event: 'Autonomous System Development' },
                  { month: 'April-May', event: 'Regional & State Competitions' },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-cyan" />
                        {index < 3 && <div className="w-0.5 h-12 bg-cyan/30 mt-2" />}
                      </div>
                      <div>
                        <p className="font-display text-cyan">{item.month}</p>
                        <p className="text-silver">{item.event}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="aspect-video rounded-2xl overflow-hidden bg-surface border border-white/5">
                <img
                  src="https://haplink.net/wp-content/uploads/2024/04/2025-prep.jpg"
                  alt="2025 Preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-20 bg-surface border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-magenta/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  Be part of <span className="text-gradient">the journey</span>
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  Help us build the robots and innovations that will define the 2025 season.
                </p>
                <MagneticButton>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                  >
                    Support Team 26532
                    <ArrowRight size={16} className="sm:w-[18px]" />
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
