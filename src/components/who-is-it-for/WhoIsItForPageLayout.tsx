'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Newspaper,
  BarChart3,
  Users,
  FileText,
  type LucideIcon,
} from 'lucide-react'

const OFFER_ICONS: LucideIcon[] = [
  LayoutDashboard,
  Megaphone,
  MessageSquare,
  Newspaper,
  BarChart3,
  Users,
  FileText,
]

export interface WhoIsItForHeroProps {
  breadcrumbLabel: string
  title: string
  subtitle: string
  cta1Label: string
  cta1Href: string
  cta2Label: string
  cta2Href: string
}

export interface WhoIsItForStat {
  number: string
  label: string
}

export interface WhoIsItForOfferCard {
  title: string
  description: string
  iconIndex?: number
}

export interface WhoIsItForService {
  title: string
  bullets: string[]
}

export interface WhoIsItForTestimonial {
  quote: string
  name: string
  role: string
}

export interface WhoIsItForCtaBanner {
  heading: string
  subtext: string
  cta1Label: string
  cta1Href: string
  cta2Label: string
  cta2Href: string
}

export interface WhoIsItForPageLayoutProps {
  hero: WhoIsItForHeroProps
  stats: WhoIsItForStat[]
  offerSection: {
    heading: string
    subtitle: string
    cards: WhoIsItForOfferCard[]
  }
  servicesSection: {
    heading: string
    services: WhoIsItForService[]
  }
  testimonialsSection: {
    heading: string
    items: WhoIsItForTestimonial[]
  }
  ctaBanner: WhoIsItForCtaBanner
}

export function WhoIsItForPageLayout({
  hero,
  stats,
  offerSection,
  servicesSection,
  testimonialsSection,
  ctaBanner,
}: WhoIsItForPageLayoutProps) {
  return (
    <div className="who-is-it-for-page min-h-screen" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* Hero */}
      <section className="relative py-16 md:py-24" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
            <Link href="/who-is-it-for" className="hover:opacity-80" style={{ color: 'var(--color-text-secondary)' }}>
              {hero.breadcrumbLabel}
            </Link>
          </nav>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10" style={{ color: 'var(--color-text-secondary)' }}>
              {hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.cta1Href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-primary)' }}
              >
                {hero.cta1Label}
              </Link>
              <Link
                href={hero.cta2Href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-colors hover:opacity-90"
                style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
              >
                {hero.cta2Label}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-8" style={{ backgroundColor: 'var(--color-stat-bg)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--color-accent)' }}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              {offerSection.heading}
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              {offerSection.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerSection.cards.map((card, i) => {
              const Icon = OFFER_ICONS[card.iconIndex ?? i % OFFER_ICONS.length]
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl border transition-all hover:border-[var(--color-accent)]"
                  style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    <Icon className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {card.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {servicesSection.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesSection.services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border transition-all hover:border-[var(--color-accent)]"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
              >
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  {svc.title}
                </h3>
                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: 'var(--color-accent)' }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {testimonialsSection.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsSection.items.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl border"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
              >
                <p className="text-base italic mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                  {t.name}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {t.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--color-accent)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            {ctaBanner.heading}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90" style={{ color: 'var(--color-text-primary)' }}>
            {ctaBanner.subtext}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={ctaBanner.cta1Href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-text-primary)' }}
            >
              {ctaBanner.cta1Label}
            </Link>
            <Link
              href={ctaBanner.cta2Href}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border-2 transition-all hover:opacity-90"
              style={{ borderColor: 'var(--color-text-primary)', color: 'var(--color-text-primary)' }}
            >
              {ctaBanner.cta2Label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
