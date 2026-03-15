'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { LineReveal } from '@/components/TextReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

const teamMembers = [
  { name: 'Kastner Anderson', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/kastner.jpg' },
  { name: 'Elizabeth Anderson', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/elizabeth.jpg' },
  { name: 'Jacob Hannan', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/jacob.jpg' },
  { name: 'Grayson Lyall', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/grayson.jpg' },
  { name: 'Owen Osterberg', role: 'Creative Director', image: 'https://haplink.net/wp-content/uploads/2024/04/owen.jpg' },
  { name: 'Alan Zhang', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/alan.jpg' },
  { name: 'Andy Zhang', role: 'Founder & Lead Dev', image: 'https://haplink.net/wp-content/uploads/2024/04/andy.jpg' },
  { name: 'Ella Zhang', role: 'Team Member', image: 'https://haplink.net/wp-content/uploads/2024/04/ella.jpg' },
];

const coaches = [
  { name: 'Erich Osterberg', role: 'Coach', image: 'https://haplink.net/wp-content/uploads/2024/04/erich.jpg' },
  { name: 'Yu Zhang', role: 'Coach', image: 'https://haplink.net/wp-content/uploads/2024/04/yu.jpg' },
];

export default function TeamPage() {
  return (
    <main className="relative">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
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
              Meet the<br />
              <span className="text-gradient">Team</span>
            </h1>
            <p className="text-silver text-lg sm:text-body-lg max-w-2xl">
              Eight passionate students and two dedicated coaches working together to push the boundaries of robotics innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="mb-12 lg:mb-16">
            <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
              8 Students + 2 Coaches
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum">
              Team 26532
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <TiltCard>
                  <div className="group h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-platinum mb-1">{member.name}</h3>
                    <p className="text-cyan text-body-sm">{member.role}</p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="relative py-16 lg:py-section border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="mb-12 lg:mb-16">
            <span className="text-magenta text-caption font-medium tracking-wider uppercase mb-4 block">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum">
              Our Coaches
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl">
            {coaches.map((coach, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <TiltCard>
                  <div className="group h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                    </div>
                    <h3 className="font-display text-xl text-platinum mb-1">{coach.name}</h3>
                    <p className="text-magenta text-body-sm">{coach.role}</p>
                  </div>
                </TiltCard>
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
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-cyan/10 rounded-full blur-[60px] sm:blur-[100px]" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl lg:text-display-md text-platinum mb-4 lg:mb-6">
                  Interested in joining <span className="text-gradient">the team</span>?
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  We're always looking for passionate students who want to push the boundaries of robotics and innovation.
                </p>
                <MagneticButton>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                  >
                    Support Us
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
