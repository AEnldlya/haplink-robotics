# HapLink Product Requirement Document (PRD)

## Project Overview

**Product Name:** HapLink (Happy Haptic Doctors - Team 26532)
**Type:** FIRST Tech Challenge Robotics Team Website
**Target Audience:** Competition judges, potential sponsors, community supporters, prospective team members
**Design Philosophy:** Human-crafted, intentionally imperfect, story-driven premium experience

---

## 1. Design Vision: Human vs AI Aesthetic

### Core Principle
Move from "AI-generated but polished" to "handcrafted by senior designers" through intentional imperfection, asymmetry, and brand-specific personality.

### Anti-Patterns to Avoid
- Perfect symmetry and centering
- Generic marketing copy
- Repetitive fade-in animations
- Stock imagery
- Rigid grid structures
- Template-like section ordering

### Human-Craft Indicators
- Asymmetrical layouts with purposeful imbalance
- Micro-offsets and overlapping elements
- Brand-specific copy with varied rhythm
- Custom choreography in animations
- Real photography and textures
- Intentional grid-breaking

---

## 2. Visual Design System

### Color Palette
```
Primary Deep:      #0A1628 (Void - backgrounds)
Primary Mid:       #1E3A5F (Navy - surfaces)
Accent Cyan:       #00D9FF (Energy - CTAs, highlights)
Accent Magenta:    #FF006E (Passion - secondary accents)
Gold/Aurum:        #C9A227 (Achievement - premium touches)
Platinum:          #F0F4F8 (Primary text)
Silver:            #94A3B8 (Secondary text)
```

### Typography
```
Display/Headings:  Space Grotesk (bold, geometric, technical)
Body:              Inter (clean, readable)
Accent/Quotes:     Cormorant Garamond (elegant contrast)
Mono/Labels:       JetBrains Mono (code, technical data)
```

### Spacing Philosophy
- **Asymmetric section padding:** 80px top, 120px bottom (varied)
- **Staggered grid gaps:** 24px, 32px, 48px (non-uniform)
- **Micro-offsets:** Elements shifted 2-8px intentionally
- **Bleed edges:** Images breaking container boundaries

---

## 3. Page Structure & Narrative Flow

### Homepage Narrative Arc

#### Section 1: Hero (The Hook)
**Layout:** Asymmetrical split - content left (60%), visual right (40%) with overlap
**Content:**
- Label: "FIRST Tech Challenge 2024-2025"
- Headline: "We Are Team 26532" (staggered letter animation)
- Subheadline: "Eight students. One robot. Infinite innovation."
- CTA: "Follow Our Journey" (magnetic button)

**Visual:**
- 3D robot model (React Three Fiber) floating right
- Geometric shapes overlapping text
- Scroll indicator with custom animation

**Animation:**
- Letters slide in from varying angles (not uniform)
- Robot rotates slowly on scroll
- Shapes drift at different speeds (parallax layers)

#### Section 2: The Story (Not Services)
**Layout:** Broken grid - text bleeds left, image overlaps right
**Content:**
- Label: "Our Beginning"
- Headline: "From Lego to Championship"
- Narrative: "Three years ago, we were just kids with a Lego kit..."
- Timeline snippet: FLL → FTC transition

**Visual:**
- Photo from early days (authentic, not stock)
- Hand-drawn arrow connecting to current team photo
- Texture overlay (subtle grain)

**Animation:**
- Scroll-triggered path drawing for timeline
- Photos reveal with mask-wipe, not fade

#### Section 3: The Robot (Technical Showcase)
**Layout:** Full-width with overlapping cards
**Content:**
- Label: "Meet Our Creation"
- Headline: "HapLink 2.0"
- Technical specs as data cards (not bullet list)
- Engineering philosophy quote

**Visual:**
- Large hero image of robot with parallax
- Spec cards floating at different z-depths
- Blueprint-style technical drawing overlay

**Animation:**
- Spec numbers count up with easing
- Cards tilt on hover (3D transform)
- Scroll-linked rotation of robot CAD model

#### Section 4: The Team (Human Connection)
**Layout:** Masonry grid (not uniform rows)
**Content:**
- Label: "The Minds Behind the Machine"
- Headline: "Eight Students, One Mission"
- Individual cards with personality, not just names

**Visual:**
- Photos with varied aspect ratios
- Hand-written name overlays
- Different card treatments per member

**Animation:**
- Staggered entrance (each card different delay)
- Hover reveals fun fact or quote
- Subtle float animation at different speeds

#### Section 5: Competition Journey (Story-Driven)
**Layout:** Horizontal scroll section or timeline
**Content:**
- Label: "Our Season"
- Headline: "From Practice to Worlds"
- Key milestones with dates and emotions

**Visual:**
- Polaroid-style photos from events
- Map showing competition locations
- Trophy/award visualizations

**Animation:**
- Scroll-driven timeline progression
- Photos scatter in and assemble
- Confetti burst at championship mention

#### Section 6: Support CTA (Purposeful)
**Layout:** Full-bleed background with centered content
**Content:**
- Headline: "Help Us Build the Future"
- Specific ask: "Your donation funds robot parts, competition fees, and community outreach."
- Impact statement: "$500 = One competition registration"

**Visual:**
- Background video or animated gradient
- Floating donation tier cards
- Progress bar toward fundraising goal

**Animation:**
- Background slowly morphs
- Cards hover with magnetic effect
- Counter animates to current total

---

## 4. Animation Specifications

### Motion Philosophy
Every animation must feel "engineered" not "generated." Use custom easing, varied timing, and directional diversity.

### Easing Curves
```
Entrance:    cubic-bezier(0.23, 1, 0.32, 1)  // Expo out - snappy
Hover:       cubic-bezier(0.34, 1.56, 0.64, 1)  // Springy
Scroll:      cubic-bezier(0.65, 0, 0.35, 1)  // Smooth
Exit:        cubic-bezier(0.7, 0, 0.84, 0)  // Expo in
```

### Scroll-Linked Animations
- Hero content fades and translates Y at different rates
- Robot model rotates based on scroll position
- Timeline draws itself as user scrolls
- Parallax layers at 0.2x, 0.5x, 0.8x, 1.2x speeds

### Micro-Interactions
- Buttons: Magnetic pull toward cursor (GSAP)
- Cards: 3D tilt on hover (perspective transform)
- Images: Subtle zoom + grain texture reveal
- Links: Underline draws from left to right

### Signature Animation
**The "Haptic Pulse":**
- Custom cursor that leaves a fading trail
- Subtle vibration/ripple effect on click
- References team's haptic technology focus
- Makes site feel alive and responsive

---

## 5. Content & Copy Guidelines

### Voice & Tone
- **Confident but humble:** "We built this" not "We are the best"
- **Technical but accessible:** Explain without condescending
- **Passionate:** Show love for robotics, not just competence
- **Specific:** Names, dates, numbers, not vague claims

### Copy Patterns to Use
```
AI: "We are passionate about robotics and innovation."
Human: "At 2 AM, when the robot finally drove straight, we celebrated with cold pizza."

AI: "Our team values collaboration and excellence."
Human: "Owen debugged the code. Andy rebuilt the arm. We failed 47 times before it worked."

AI: "State champions with innovative design."
Human: "First year competing. Didn't expect to win. Then we did."
```

### Section-Specific Copy

**Hero:**
- Label: "FIRST Tech Challenge 2024-2025"
- Headline: "We Are Team 26532"
- Subheadline: "Eight students. One robot. Infinite innovation."

**Story:**
- "Three years ago, we were just kids with a Lego kit and a curiosity about how things work. Today, we're state champions. This is how we got here."

**Robot:**
- "HapLink 2.0 isn't just a robot. It's 847 hours of design, 23 failed prototypes, and one breakthrough idea: what if the driver could feel the field?"

**Team:**
- "Meet the eight students who turned late nights into championship hardware."

**Support:**
- "Robotics isn't cheap. Registration fees, parts, travel. Your donation doesn't just fund a robot. It funds confidence, problem-solving, and the moment a student realizes they can build anything."

---

## 6. Visual Assets Requirements

### Photography Style
- **Authentic over polished:** Real workshop photos, not stock
- **Candid over posed:** Action shots, not team portraits
- **Details matter:** Close-ups of hands working, tools, robot parts
- **Emotion captured:** Celebration, frustration, focus

### Custom Visual Elements
- Hand-drawn icons (not icon library)
- Blueprint-style technical drawings
- Custom data visualizations (not charts)
- Texture overlays: grain, paper, subtle noise

### 3D Elements
- Robot CAD model (interactive, rotatable)
- Geometric accent shapes (floating, parallax)
- Championship trophy visualization

---

## 7. Technical Implementation

### Tech Stack
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- GSAP (ScrollTrigger, Flip)
- Framer Motion
- React Three Fiber (3D robot)
- Lenis (smooth scroll)

### Performance Targets
- Lighthouse: 95+ all categories
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Smooth 60fps animations

### Accessibility
- WCAG 2.1 AA compliance
- Reduced motion support
- Keyboard navigation
- Screen reader optimized
- Color contrast 4.5:1 minimum

---

## 8. Page Specifications

### Home Page
**Sections:** Hero, Story, Robot, Team, Journey, Support CTA
**Load:** Critical CSS inline, images lazy-loaded
**Animation:** Full scroll-linked experience

### Team Page
**Layout:** Masonry grid with personality cards
**Content:** Individual profiles with quotes, roles, contributions
**Feature:** Filter by sub-team (Build, Code, Outreach)

### Robot Page
**Layout:** Technical showcase with 3D model
**Content:** Specs, design evolution, engineering decisions
**Feature:** Interactive CAD viewer, exploded view

### Competition Page
**Layout:** Timeline or journal format
**Content:** Event recaps, photos, results, lessons learned
**Feature:** Photo galleries, video embeds

### Support/Donate Page
**Layout:** Impact-focused with transparency
**Content:** Budget breakdown, specific asks, recognition tiers
**Feature:** Progress bars, donor wall, easy payment

---

## 9. Success Metrics

### Design Quality
- Lighthouse score 95+
- Zero layout shifts
- 60fps animations
- WCAG AA compliance

### User Engagement
- Time on site > 3 minutes
- Multiple pages visited
- Return visitor rate
- Social shares

### Business Goals
- Sponsor inquiries
- Donation conversions
- Team recruitment contacts
- Media/press mentions

---

## 10. Anti-AI Checklist

Before launch, verify:

- [ ] Layout has intentional asymmetry
- [ ] At least 3 different animation styles (not all fade-up)
- [ ] Copy has specific details, numbers, names
- [ ] Real photography used throughout
- [ ] Grid is broken in at least 2 places
- [ ] Custom interaction (magnetic buttons, 3D tilt, etc.)
- [ ] Texture/grain overlay applied
- [ ] Story section exists (not just features list)
- [ ] Typography has contrast (not all same weight)
- [ ] One signature "only ours" element

---

## 11. References & Inspiration

### Design References
- Awwwards SOTD winners (handcrafted feel)
- Stripe.com (technical but human)
- Apple product pages (scroll storytelling)
- FWA winners (experimental but polished)

### Animation References
- GSAP Showcase (complex scroll animations)
- Codrops (experimental interactions)
- Spline (3D web experiences)

### Content References
- Basecamp.com (confident, specific copy)
- Mailchimp.com (personality in brand)
- Linear.app (technical elegance)

---

## 12. Development Phases

### Phase 1: Foundation (Week 1)
- Setup Next.js project
- Implement design system (colors, typography, spacing)
- Build layout components with asymmetry
- Setup GSAP and Framer Motion

### Phase 2: Content & Structure (Week 2)
- Build all page sections
- Implement scroll animations
- Add real content and copy
- Integrate 3D elements

### Phase 3: Polish & Interactions (Week 3)
- Micro-interactions (hover, click)
- Performance optimization
- Accessibility audit
- Mobile responsiveness

### Phase 4: Launch (Week 4)
- Final testing
- SEO optimization
- Analytics setup
- Deploy

---

## Conclusion

This PRD establishes HapLink as a handcrafted, premium digital experience that stands apart from AI-generated websites. Through intentional imperfection, authentic storytelling, and engineered animations, the site will reflect the same care and craftsmanship the team puts into their robot.

The goal is not just a website, but a digital experience that makes visitors feel the passion, late nights, and breakthrough moments of Team 26532.

---

**Document Version:** 1.0
**Last Updated:** March 15, 2026
**Author:** Studio Aureum Design Team
