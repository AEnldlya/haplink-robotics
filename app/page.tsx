'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { ArrowRight, Trophy, Users, Zap, ChevronRight } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { HeroAceternity } from '@/components/HeroAceternity';

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const robotRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story section - scroll triggered
      gsap.from('.story-content', {
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        },
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.story-image', {
        scrollTrigger: {
          trigger: storyRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        x: 80,
        opacity: 0,
        rotation: 3,
        duration: 1.2,
        ease: 'expo.out'
      });

      // Robot specs - staggered with different directions
      gsap.from('.spec-card', {
        scrollTrigger: {
          trigger: robotRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: {
          each: 0.12,
          from: 'random'
        },
        ease: 'power3.out'
      });

      // Team cards - masonry stagger
      gsap.from('.team-card', {
        scrollTrigger: {
          trigger: teamRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.9,
        stagger: {
          each: 0.1,
          from: 'start'
        },
        ease: 'expo.out'
      });

    });

    return () => ctx.revert();
  }, []);

  const teamMembers = [
    { name: 'Andy Zhang', role: 'Lead Builder', quote: 'The third time\'s the charm. Or the fourth.' },
    { name: 'Owen Osterberg', role: 'Programmer', quote: 'It works on my machine.' },
    { name: 'Ben Pastel', role: 'Driver', quote: 'Full speed ahead.' },
    { name: 'Kastner Anderson', role: 'Engineering', quote: 'Measure twice, cut once.' },
    { name: 'Elizabeth Anderson', role: 'Outreach', quote: 'Connections matter.' },
    { name: 'Jacob Hannan', role: 'Design', quote: 'Form follows function.' },
    { name: 'Grayson Lyall', role: 'Strategy', quote: 'Plan for everything.' },
    { name: 'Alan Zhang', role: 'Research', quote: 'Knowledge is power.' },
  ];

  return (
    <main className="bg-[#0A1628] text-[#F0F4F8] overflow-x-hidden">
      {/* Hero Section - Aceternity Style */}
      <HeroAceternity />

      {/* Story Section - Broken Grid */}
      <section ref={storyRef} className="py-32 relative">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text - Bleeds left */}
            <div className="story-content lg:col-span-5 lg:-ml-12">
              <span className="text-[#FF006E] text-sm font-mono tracking-[0.3em] uppercase mb-4 block">
                Our Beginning
              </span>
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 leading-tight">
                From Lego to<br />
                <span className="text-[#00D9FF]">Championship</span>
              </h2>
              <div className="space-y-6 text-lg text-[#94A3B8] leading-relaxed">
                <p>
                  Three years ago, we were just kids with a Lego kit and a curiosity about how things work. 
                  We met in a classroom after school, building simple machines and dreaming bigger.
                </p>
                <p>
                  Today, we are state champions. But the trophy is not the point. The point is that we 
                  learned how to learn, how to fail, and how to build something that actually works.
                </p>
                <p className="text-[#F0F4F8]">
                  This is how we got here.
                </p>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 mt-8 text-[#00D9FF] font-semibold hover:gap-4 transition-all"
              >
                Read our full story <ChevronRight size={20} />
              </Link>
            </div>
            
            {/* Image - Overlaps right */}
            <div className="story-image lg:col-span-7 lg:pl-12 relative">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#1E3A5F] to-[#0A1628] rounded-2xl overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Users size={120} className="text-[#00D9FF]/30" />
                  </div>
                </div>
                {/* Hand-drawn style arrow */}
                <svg className="absolute -left-16 top-1/2 w-24 h-24 text-[#FF006E]" viewBox="0 0 100 100">
                  <path d="M80 20 Q 40 50, 20 80" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M15 70 L 20 80 L 30 75" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robot Section - Full Width with Floating Cards */}
      <section ref={robotRef} className="py-32 bg-[#0F2744] relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-20">
            <span className="text-[#00D9FF] text-sm font-mono tracking-[0.3em] uppercase mb-4 block">
              Meet Our Creation
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
              HapLink <span className="text-[#FF006E]">2.0</span>
            </h2>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              847 hours of design. 23 failed prototypes. One breakthrough idea: 
              what if the driver could feel the field?
            </p>
          </div>
          
          {/* Spec cards - floating at different depths */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="spec-card bg-[#1E3A5F]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <Trophy className="text-[#C9A227] mb-4" size={40} />
              <div className="font-display text-4xl font-bold text-[#F0F4F8] mb-2">State</div>
              <div className="text-[#94A3B8]">Champions 2024</div>
            </div>
            
            <div className="spec-card bg-[#1E3A5F]/50 backdrop-blur-sm border border-[#FF006E]/20 rounded-2xl p-8 transform md:translate-y-8 hover:-translate-y-2 transition-transform duration-300">
              <Zap className="text-[#FF006E] mb-4" size={40} />
              <div className="font-display text-4xl font-bold text-[#F0F4F8] mb-2">#1</div>
              <div className="text-[#94A3B8]">Rookie Team Region</div>
            </div>
            
            <div className="spec-card bg-[#1E3A5F]/50 backdrop-blur-sm border border-[#00D9FF]/20 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <Users className="text-[#00D9FF] mb-4" size={40} />
              <div className="font-display text-4xl font-bold text-[#F0F4F8] mb-2">8</div>
              <div className="text-[#94A3B8]">Student Engineers</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/robot" 
              className="inline-flex items-center gap-3 px-8 py-4 border border-[#00D9FF] text-[#00D9FF] rounded-full font-semibold hover:bg-[#00D9FF] hover:text-[#0A1628] transition-all duration-300"
            >
              Explore the Robot <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section - Masonry Grid */}
      <section ref={teamRef} className="py-32">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="text-[#FF006E] text-sm font-mono tracking-[0.3em] uppercase mb-4 block">
              The Minds Behind the Machine
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold">
              Eight Students,<br />
              <span className="text-[#00D9FF]">One Mission</span>
            </h2>
          </div>
          
          {/* Masonry-style grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`team-card group relative bg-[#1E3A5F]/30 rounded-2xl overflow-hidden hover:bg-[#1E3A5F]/50 transition-all duration-300 ${
                  index % 3 === 0 ? 'lg:row-span-2' : ''
                }`}
              >
                <div className={`${index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'} bg-gradient-to-br from-[#00D9FF]/10 to-[#FF006E]/10 flex items-center justify-center`}>
                  <span className="font-display text-6xl text-[#F0F4F8]/20">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-[#F0F4F8] mb-1">{member.name}</h3>
                  <p className="text-[#00D9FF] text-sm font-mono uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-[#94A3B8] text-sm italic opacity-0 group-hover:opacity-100 transition-opacity">&ldquo;{member.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/team" 
              className="inline-flex items-center gap-2 text-[#00D9FF] font-semibold hover:gap-4 transition-all"
            >
              Meet the full team <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Support CTA - Full Bleed */}
      <section className="py-32 bg-gradient-to-br from-[#00D9FF]/10 via-[#0A1628] to-[#FF006E]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D9FF]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF006E]/20 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Help Us Build<br />
            <span className="text-[#00D9FF]">the Future</span>
          </h2>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Robotics is not cheap. Registration fees, parts, travel. Your donation does not just fund a robot. 
            It funds confidence, problem-solving, and the moment a student realizes they can build anything.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-[#1E3A5F]/50 rounded-full text-[#F0F4F8]">
              <span className="text-[#00D9FF] font-bold">$500</span> = Competition Registration
            </div>
            <div className="px-6 py-3 bg-[#1E3A5F]/50 rounded-full text-[#F0F4F8]">
              <span className="text-[#00D9FF] font-bold">$200</span> = Robot Parts
            </div>
            <div className="px-6 py-3 bg-[#1E3A5F]/50 rounded-full text-[#F0F4F8]">
              <span className="text-[#00D9FF] font-bold">$50</span> = Team Supplies
            </div>
          </div>
          
          <Link 
            href="/donate" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF006E] text-white rounded-full font-semibold text-lg hover:shadow-[0_0_60px_rgba(255,0,110,0.4)] transition-all duration-300"
          >
            Support Team 26532
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
