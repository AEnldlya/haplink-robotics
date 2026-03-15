'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Footer } from '@/components/Footer';
import { FloatingShapes } from '@/components/FloatingShapes';

const sponsorshipTiers = [
  {
    name: 'Bronze Sponsor',
    amount: '$500',
    benefits: [
      'Recognition on website',
      'Company name on robot',
      'Logo in social media',
      'Event invitation',
    ],
  },
  {
    name: 'Silver Sponsor',
    amount: '$1,500',
    benefits: [
      'All Bronze benefits',
      'Featured sponsor section',
      'Logo on merchandise',
      'Exclusive event access',
      'Quarterly updates',
    ],
    featured: true,
  },
  {
    name: 'Gold Sponsor',
    amount: '$5,000',
    benefits: [
      'All Silver benefits',
      'Naming opportunity',
      'Custom partnership',
      'Board recognition',
      'Press releases',
      'Priority contact',
    ],
  },
];

export default function DonatePage() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

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
              Support Our<br />
              <span className="text-gradient">Mission</span>
            </h1>
            <p className="text-silver text-lg sm:text-body-lg max-w-2xl">
              Help Team 26532 bring haptic technology innovation to life. 
              Your support funds robot parts, competition fees, and groundbreaking R&D.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 lg:py-section">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <ScrollReveal className="text-center mb-12 lg:mb-16">
            <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
              Sponsorship
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-display-lg text-platinum mb-6">
              Partner With Us
            </h2>
            <p className="text-silver text-base sm:text-lg lg:text-body-lg max-w-2xl mx-auto">
              Choose a sponsorship tier that fits your organization's investment goals.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <TiltCard>
                  <div
                    className={`group h-full p-6 sm:p-8 rounded-2xl transition-all duration-500 cursor-pointer ${
                      tier.featured
                        ? 'bg-magenta/10 border-2 border-magenta/50 hover:border-magenta'
                        : 'bg-surface border border-white/5 hover:border-cyan/30'
                    }`}
                    onClick={() => setSelectedTier(tier.name)}
                  >
                    <div className="mb-4 lg:mb-6">
                      <h3 className="font-display text-2xl text-platinum mb-2">{tier.name}</h3>
                      <div className="text-4xl font-display text-cyan mb-4">{tier.amount}</div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-magenta/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-magenta" />
                          </div>
                          <span className="text-silver text-body-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                        tier.featured
                          ? 'bg-magenta text-void hover:shadow-[0_0_40px_rgba(255,0,110,0.4)]'
                          : 'bg-cyan/10 text-cyan hover:bg-cyan hover:text-void'
                      }`}
                    >
                      Choose Plan
                    </button>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-section border-y border-white/5">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <span className="text-cyan text-caption font-medium tracking-wider uppercase mb-4 block">
                Impact
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
                Where Your Money Goes
              </h2>
              <div className="space-y-6">
                {[
                  { label: 'Robot Hardware', percent: 40 },
                  { label: 'Competition Fees', percent: 25 },
                  { label: 'Travel & Logistics', percent: 20 },
                  { label: 'R&D & Innovation', percent: 15 },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.08}>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-platinum font-medium">{item.label}</span>
                        <span className="text-cyan">{item.percent}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan to-magenta transition-all duration-1000"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="text-magenta text-caption font-medium tracking-wider uppercase mb-4 block">
                Direct Donation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-display-md text-platinum mb-6">
                Give Any Amount
              </h2>
              <div className="space-y-4 mb-8">
                <input
                  type="number"
                  placeholder="Enter amount in dollars"
                  className="w-full px-6 py-4 bg-surface border border-white/10 rounded-xl text-platinum placeholder-silver/50 focus:border-cyan outline-none transition-colors"
                />
                <textarea
                  placeholder="Leave a message (optional)"
                  rows={4}
                  className="w-full px-6 py-4 bg-surface border border-white/10 rounded-xl text-platinum placeholder-silver/50 focus:border-cyan outline-none transition-colors resize-none"
                />
              </div>
              <MagneticButton>
                <button className="w-full px-6 py-4 bg-magenta text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(255,0,110,0.4)] transition-shadow duration-500 flex items-center justify-center gap-2">
                  <Heart size={20} />
                  Donate Now
                </button>
              </MagneticButton>
            </ScrollReveal>
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
                  Questions about <span className="text-gradient">supporting us</span>?
                </h2>
                <p className="text-silver text-base sm:text-lg lg:text-body-lg mb-6 lg:mb-8">
                  Reach out to our team directly for custom sponsorship opportunities or partnership inquiries.
                </p>
                <MagneticButton>
                  <Link
                    href="mailto:contact@haplink.net"
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-cyan text-void rounded-full font-medium hover:shadow-[0_0_40px_rgba(0,217,255,0.4)] transition-shadow duration-500 text-sm sm:text-base"
                  >
                    Contact Us
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
