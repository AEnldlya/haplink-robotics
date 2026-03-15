'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

const fllImages = [
  { image: 'https://haplink.net/wp-content/uploads/2024/04/fll-1.jpg', title: 'State Competition' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/fll-2.jpg', title: 'Team Building' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/fll-3.jpg', title: 'Robot Design' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/fll-4.jpg', title: 'Victory' },
  { image: 'https://haplink.net/wp-content/uploads/2024/04/fll-5.jpg', title: 'Celebration' },
];

export default function FLLPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />
      </div>

      <section className="relative min-h-[60vh] flex items-center pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 to-transparent" />
        <div className="hidden md:block">
          <Suspense fallback={null}>
            <FloatingShapes />
          </Suspense>
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16">
          <ScrollReveal>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-display-xl text-platinum mb-4 lg:mb-6">
              2023 FIRST Lego<br />
              <span className="text-gradient">League</span>
            </h1>
            <p className="text-silver text-lg sm:text-body-lg max-w-2xl">
              Our entry into FIRST competitions. Building fundamentals and sparking innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="mb-12 lg:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
              Building the Foundation
            </h2>
            <p className="text-silver text-body-lg max-w-2xl">
              FLL taught us robotics fundamentals and teamwork. It was the perfect stepping stone 
              to FIRST Tech Challenge, where we'd eventually become state champions.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {fllImages.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-cyan/30 transition-colors duration-500 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-platinum font-medium">{item.title}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative p-8 sm:p-12 lg:p-20 bg-surface border border-white/5 rounded-2xl lg:rounded-3xl overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  From FLL to <span className="text-gradient">FIRST Tech Challenge</span>
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  See how we evolved into state champions and world-class competitors.
                </p>
                <MagneticButton>
                  <Link
                    href="/2024-worlds"
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-magenta text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(255,0,110,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                  >
                    2024 Championship
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
