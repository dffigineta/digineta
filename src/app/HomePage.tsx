'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const useCountUp = (target: number, duration: number = 2) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration * 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return { count, ref }
}

const platformFeatures = [
  {
    icon: '🏆',
    title: 'Mahaneta',
    desc: 'Public profile & performance showcase for elected leaders. Build your digital identity, track your work, and stay visible to voters year-round.',
  },
  {
    icon: '🖼',
    title: 'Netabanner',
    desc: 'One-stop promotion & poster engine. Generate professional campaign banners, festive greetings, and event posters in seconds.',
  },
  {
    icon: '📱',
    title: 'Smart Apps',
    desc: 'Dedicated apps for Sarpanchs, Corporators, MLAs, MPs and more. Manage constituency tasks, communicate updates, and engage your base.',
  },
  {
    icon: '🔍',
    title: 'Voter Search & Management',
    desc: 'Verified voter data tools for search, segmentation, and targeted outreach across any constituency in India.',
  },
  {
    icon: '🏛',
    title: 'Party & Group Platforms',
    desc: 'Digital platforms for parties, associations, and social groups to organise, communicate, and mobilise at scale.',
  },
]

const whoWeServe = [
  { emoji: '🏛', label: 'MPs', desc: 'Members of Parliament', href: '/who-is-it-for/members-of-parliament' },
  { emoji: '🗳', label: 'MLAs', desc: 'State Assembly Members', href: '/who-is-it-for/members-of-legislative-assembly' },
  { emoji: '🏙', label: 'Corporators', desc: 'Municipal Leaders', href: '/who-is-it-for/municipal-corporators' },
  { emoji: '🌾', label: 'Panchayat Leaders', desc: 'Local Body Representatives', href: '/who-is-it-for/panchayat-local-body-leaders' },
  { emoji: '🤝', label: 'Party Workers', desc: 'Ground-Level Campaign Teams', href: '/who-is-it-for/political-party-workers' },
]

export default function HomePage() {
  const stat1 = useCountUp(5000)
  const stat2 = useCountUp(200)
  const stat3 = useCountUp(50)
  const stat4 = useCountUp(20)

  return (
    <div
      className="min-h-screen"
      style={{
        ['--bg-primary' as string]: '#0a0a0a',
        ['--bg-secondary' as string]: '#0f172a',
        ['--bg-card' as string]: '#111827',
        ['--bg-card-hover' as string]: '#1a2236',
        ['--accent' as string]: '#f97316',
        ['--accent-dim' as string]: 'rgba(249,115,22,0.12)',
        ['--accent-hover' as string]: '#ea6c0a',
        ['--text-primary' as string]: '#ffffff',
        ['--text-secondary' as string]: '#cbd5e1',
        ['--text-muted' as string]: '#64748b',
        ['--border' as string]: 'rgba(255,255,255,0.08)',
        ['--border-accent' as string]: 'rgba(249,115,22,0.3)',
      }}
    >
      {/* Section 1 — Hero */}
      <section
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-4 py-20 lg:py-0"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #0a0a0a 60%, #1a0a00 100%)',
        }}
      >
        {/* Radial orange glow top-right */}
        <div
          className="absolute top-0 right-0 w-[80%] h-[80%] max-w-[800px] max-h-[800px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Dot grid overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.04 }}
        >
          <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#ffffff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-dots)" />
        </svg>

        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center max-w-[1200px]">
          {/* Left column */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span
                className="inline-block border rounded-full px-4 py-1.5 text-xs font-bold tracking-wider"
                style={{
                  borderColor: 'var(--border-accent)',
                  background: 'var(--accent-dim)',
                  color: '#f97316',
                  letterSpacing: '0.1em',
                }}
              >
                ⚡ India&apos;s #1 Political Technology Venture
              </span>
            </motion.div>

            <h1 className="text-[42px] md:text-[72px] font-extrabold leading-[1.1] text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                For Political Success
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block mt-1"
              >
                in the{' '}
                <span className="relative inline-block" style={{ color: '#f97316' }}>
                  Digital World.
                  <svg
                    className="absolute -bottom-1 left-0 w-full"
                    height="8"
                    viewBox="0 0 120 8"
                    fill="none"
                  >
                    <path
                      d="M2 6C20 2 40 2 60 5S100 2 118 6"
                      stroke="#f97316"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[#cbd5e1] max-w-xl mx-auto lg:mx-0 mb-8 leading-[1.7]"
            >
              Digineta is India&apos;s dedicated political technology venture. We combine deep
              election data, powerful apps, and full-funnel digital outreach to help political
              leaders, parties and organisations win and govern better.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start flex-wrap"
            >
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center justify-center rounded-full text-lg font-medium px-8 py-3.5 text-white"
                  style={{
                    background: '#f97316',
                    boxShadow: '0 0 24px rgba(249,115,22,0.35)',
                  }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Talk to Our Political Tech Team
                </motion.span>
              </Link>
              <Link href="/knowledge-centre/case-studies">
                <motion.span
                  className="inline-flex items-center justify-center rounded-full text-lg font-medium px-8 py-3.5 border-2 border-white text-white bg-transparent"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Campaign Case Studies
                </motion.span>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8 text-[13px] text-[#64748b]"
            >
              ✓ 5000+ Booths Analysed &nbsp; · &nbsp; ✓ 200+ Leaders Served &nbsp; · &nbsp; ✓ 20+ States Covered
            </motion.p>
          </div>

          {/* Right column — hero image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(249,115,22,0.15), 0 32px 64px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-1/3 z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(10,10,10,0.7), transparent)',
                }}
              />
              <Image
                src="/images/hero-political-rally.jpg"
                alt="Indian political rally — Digineta political technology platform"
                width={700}
                height={600}
                className="object-cover rounded-2xl w-full"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-3xl block"
            style={{ color: '#f97316' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </section>

      {/* Section 2 — Animated stats strip */}
      <section
        className="w-full py-12 border-t border-b"
        style={{
          background: '#0f172a',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { count: stat1.count, label: 'Booths Analysed', suffix: '+' },
              { count: stat2.count, label: 'Leaders & Teams Served', suffix: '+' },
              { count: stat3.count, label: 'Election Campaigns', suffix: '+' },
              { count: stat4.count, label: 'States & UTs Covered', suffix: '+' },
            ].map((item, i) => (
              <div
                key={item.label}
                ref={i === 0 ? stat1.ref : i === 1 ? stat2.ref : i === 2 ? stat3.ref : stat4.ref}
                className="flex items-center gap-4 lg:border-r border-[rgba(255,255,255,0.08)] lg:last:border-r-0 pr-4 lg:pr-8 lg:last:pr-0"
              >
                <div
                  className="w-[3px] h-12 flex-shrink-0 rounded-full"
                  style={{ background: '#f97316' }}
                />
                <div>
                  <div
                    className="text-4xl lg:text-5xl font-extrabold tabular-nums"
                    style={{ color: '#f97316' }}
                  >
                    {item.count.toLocaleString()}{item.suffix}
                  </div>
                  <div
                    className="text-sm uppercase tracking-wider mt-1"
                    style={{ color: '#64748b', letterSpacing: '0.08em' }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Platforms for political success */}
      <section
        className="py-16 lg:py-[120px] px-4"
        style={{ background: '#0a0a0a' }}
      >
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: '#f97316' }}
            >
              Our Platforms
            </p>
            <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-4 leading-tight">
              Platforms Built for
              <br />
              Every Level of Indian Politics
            </h2>
            <p className="text-base md:text-lg text-[#cbd5e1] max-w-2xl mb-12 leading-[1.7]">
              From hyper-local visibility to national narrative control — Digineta&apos;s suite of
              political technology platforms gives every leader the tools to win and govern better.
            </p>

            <div className="space-y-0">
              {platformFeatures.map((row, index) => (
                <motion.div
                  key={row.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 py-6 px-4 rounded-xl border-b border-[rgba(255,255,255,0.08)] last:border-b-0"
                  style={{
                    background: index % 2 === 1 ? 'rgba(255,255,255,0.02)' : 'transparent',
                  }}
                >
                  <span className="text-2xl flex-shrink-0">{row.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-2">{row.title}</h3>
                    <p className="text-[#cbd5e1] text-base leading-[1.7]">{row.desc}</p>
                  </div>
                  <span className="text-[#f97316] font-medium flex-shrink-0 sm:pt-1">→</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/services"
                className="text-lg font-medium"
                style={{ color: '#f97316' }}
              >
                Explore All Digineta Platforms & Solutions →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 — Knowledge & case studies */}
      <section
        className="py-16 lg:py-[120px] px-4"
        style={{ background: '#0f172a' }}
      >
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-[rgba(249,115,22,0.3)]"
              style={{
                background: '#111827',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src="/images/analytics-data.jpg"
                  alt="Political Intelligence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ color: '#f97316' }}
                >
                  Knowledge Centre
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Political Intelligence & Knowledge Centre
                </h3>
                <p className="text-[#cbd5e1] text-base leading-[1.7] mb-6">
                  Daily political updates, election data and campaign learnings curated for leaders,
                  party teams and spokespersons across India.
                </p>
                <div className="space-y-2">
                  <Link href="/knowledge-centre/case-studies" className="block text-[#f97316] font-medium">
                    Case Studies →
                  </Link>
                  <Link href="/knowledge-centre/databases" className="block text-[#f97316] font-medium">
                    Election Analytics →
                  </Link>
                  <Link href="/knowledge-centre/research" className="block text-[#f97316] font-medium">
                    Research & Insights →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-[rgba(249,115,22,0.3)]"
              style={{
                background: '#111827',
                borderColor: 'rgba(255,255,255,0.08)',
              }}
            >
              <div className="relative h-[200px] w-full">
                <Image
                  src="/images/ground-team-community.jpg"
                  alt="Campaign case studies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
                  style={{ color: '#f97316' }}
                >
                  Proof of Impact
                </p>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Real Campaigns. Real Results.
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-[#cbd5e1]">
                    <span style={{ color: '#f97316' }}>•</span>
                    Cross-party digital campaign for an urban constituency
                  </li>
                  <li className="flex items-start gap-2 text-[#cbd5e1]">
                    <span style={{ color: '#f97316' }}>•</span>
                    Booth-level analytics strategy in a rural district
                  </li>
                </ul>
                <Link
                  href="/knowledge-centre/case-studies"
                  className="inline-flex items-center justify-center rounded-full border-2 font-medium px-6 py-3 transition-colors"
                  style={{ borderColor: '#f97316', color: '#f97316' }}
                >
                  View All Political Case Studies →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5 — Who we serve */}
      <section
        className="py-16 lg:py-[120px] px-4 overflow-hidden"
        style={{ background: '#0f172a' }}
      >
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: '#f97316' }}
            >
              Who Is It For
            </p>
            <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-4">
              Built for Every Level of Indian Democracy
            </h2>
            <p className="text-[#cbd5e1] text-base md:text-lg max-w-2xl leading-[1.7]">
              From Parliament to Panchayat — our tools and services scale to your role, your
              constituency, and your campaign goals.
            </p>
          </motion.div>

          <div
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin' }}
          >
            {whoWeServe.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="flex-shrink-0 w-[220px] snap-center rounded-xl border p-6 transition-all duration-300 min-h-[180px] flex flex-col hover:border-[rgba(249,115,22,0.3)] hover:shadow-[0_0_24px_rgba(249,115,22,0.08)]"
                style={{
                  background: '#111827',
                  borderColor: 'rgba(255,255,255,0.08)',
                }}
              >
                <span className="text-4xl mb-3 block text-center">{card.emoji}</span>
                <h3 className="text-lg font-semibold text-white mb-1">{card.label}</h3>
                <p className="text-sm text-[#cbd5e1] leading-snug flex-1">{card.desc}</p>
                <Link
                  href={card.href}
                  className="mt-4 text-sm font-medium"
                  style={{ color: '#f97316' }}
                >
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Testimonial */}
      <section className="relative py-16 lg:py-[120px] px-4 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{ background: '#0a0a0a' }}
        />
        <div className="absolute inset-0 z-[1]">
          <Image
            src="/images/tech-background-dark.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.1]"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto max-w-[1200px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-[760px] mx-auto"
          >
            <p
              className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: '#f97316' }}
            >
              What Leaders Say
            </p>
            <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-10">
              Trusted by Elected Representatives Across India
            </h2>
            <div className="relative pl-4 md:pl-8">
              <span
                className="absolute left-0 top-0 text-[120px] font-serif leading-none opacity-30"
                style={{ color: '#f97316' }}
              >
                &ldquo;
              </span>
              <blockquote className="text-2xl md:text-[24px] italic text-white leading-[1.6] pt-8">
                Digineta&apos;s team helped us turn scattered data into clear booth-level strategy.
                Their apps and digital communication support ensured that every message reached the
                right voter segment at the right time.
              </blockquote>
              <p className="mt-6 text-sm text-[#64748b]">
                — Sitting MLA, Western India{' '}
                <span className="text-[#64748b]">(Name withheld, multi-term legislator)</span>
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about/testimonials"
                className="text-lg font-medium"
                style={{ color: '#f97316' }}
              >
                Read More Leader Testimonials →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7 — Political platform feature block */}
      <section
        className="py-16 lg:py-[120px] px-4"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #0f172a 100%)',
        }}
      >
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <p
                className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                style={{ color: '#f97316' }}
              >
                The Political Platform
              </p>
              <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-4">
                Your Campaign Command Centre
              </h2>
              <p className="text-[#cbd5e1] text-base md:text-lg leading-[1.7] mb-8">
                The Digineta Political Platform brings together constituency intelligence, digital
                outreach, voter data, and ground team coordination — all from one unified dashboard.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Real-time booth-level voter analytics',
                  'Integrated WhatsApp & social media outreach',
                  'Ground team coordination & polling day tools',
                ].map((bullet, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#cbd5e1]">
                    <span style={{ color: '#f97316' }}>✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <Link href="/political-platform">
                <motion.span
                  className="inline-flex items-center justify-center rounded-full font-medium px-8 py-3.5 text-white"
                  style={{ background: '#f97316' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore the Platform →
                </motion.span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 48px rgba(249,115,22,0.12)',
              }}
            >
              <Image
                src="/images/platform-dashboard.jpg"
                alt="Digineta Political Platform Dashboard"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 — Bottom CTA banner */}
      <section
        className="relative py-16 lg:py-[120px] px-4 overflow-hidden"
        style={{ background: '#0f172a' }}
      >
        <div
          className="absolute left-0 top-0 bottom-0 w-2 z-0"
          style={{ background: '#f97316' }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at center, rgba(249,115,22,0.05) 0%, transparent 70%)',
          }}
        />
        <div className="container mx-auto max-w-[1200px] relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="max-w-[700px]"
          >
            <h2 className="text-[28px] md:text-[42px] font-bold text-white mb-4">
              Ready to Partner with India&apos;s Political Technology Venture?
            </h2>
            <p className="text-[#cbd5e1] text-base md:text-lg leading-[1.7] mb-10">
              From booth-level analytics to full-funnel digital communication — Digineta becomes
              your dedicated political technology partner for the next election and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.span
                  className="inline-flex items-center justify-center rounded-full text-lg font-medium px-8 py-4 text-white"
                  style={{ background: '#f97316' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Schedule a Strategy Call
                </motion.span>
              </Link>
              <Link href="/services">
                <motion.span
                  className="inline-flex items-center justify-center rounded-full text-lg font-medium px-8 py-4 border-2 border-white text-white bg-transparent"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Services & Platforms
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
