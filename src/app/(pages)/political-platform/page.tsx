'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, LayoutDashboard, Settings, BarChart3 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TABS = [
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
  { id: 'benefits', label: 'Benefits', href: '#benefits' },
]

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function PoliticalPlatformPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const overviewRef = useRef<HTMLElement>(null)
  const howRef = useRef<HTMLElement>(null)
  const benefitsRef = useRef<HTMLElement>(null)
  const tabBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const refs = [
      { id: 'overview', ref: overviewRef },
      { id: 'how-it-works', ref: howRef },
      { id: 'benefits', ref: benefitsRef },
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = refs.find((r) => r.ref.current === entry.target)?.id
            if (id) setActiveTab(id)
            break
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    refs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="who-is-it-for-page min-h-screen" style={{ backgroundColor: 'var(--color-primary)' }}>
      {/* SECTION 1 — HERO */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container mx-auto px-4">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Political Platform
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl"
            style={{ color: 'var(--color-text-primary)' }}
          >
            India&apos;s Complete Political Technology Platform
          </h1>
          <p
            className="text-xl md:text-2xl mb-10 max-w-2xl"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            A dedicated space for leaders, parties, and campaign teams to access political intelligence, digital
            outreach, voter data, and campaign tools — all in one place.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-primary)' }}
            >
              Explore the Platform
            </Link>
            <button
              type="button"
              onClick={() => scrollToSection('#overview')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-opacity hover:opacity-90"
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
              Learn More
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </div>
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#overview')
            }}
            className="inline-flex flex-col items-center gap-1 text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* SECTION 2 — STICKY TAB BAR */}
      <div
        ref={tabBarRef}
        className="sticky z-40 top-14 md:top-16 py-3 border-b"
        style={{ backgroundColor: 'var(--color-secondary)', borderColor: 'var(--color-border)' }}
      >
        <div className="container mx-auto px-4 flex flex-wrap gap-2 md:gap-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollToSection(tab.href)}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'text-white'
                  : 'opacity-80 hover:opacity-100'
              )}
              style={{
                color: 'var(--color-text-primary)',
                backgroundColor: activeTab === tab.id ? 'var(--color-accent)' : 'transparent',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 3 — OVERVIEW (#overview) */}
      <section
        id="overview"
        ref={overviewRef}
        className="py-16 md:py-24 scroll-mt-20"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Political Platform Overview
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Access tools, intelligence, and managed services for campaigning, constituency management, digital
                outreach, voter data, and analytics — tailored for every level of Indian political leadership.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: LayoutDashboard,
                    title: 'Command Centre',
                    text: 'Constituency dashboards, voter maps, and real-time campaign intelligence',
                  },
                  {
                    icon: Settings,
                    title: 'Services Access',
                    text: 'Tailored for MPs, MLAs, Corporators, Party Workers, and Panchayat Leaders',
                  },
                  {
                    icon: BarChart3,
                    title: 'Always Election-Ready',
                    text: 'Keep your campaign data, digital presence, and ground team primed at all times',
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: 'var(--color-text-primary)' }} />
                    </div>
                    <div>
                      <span className="font-semibold block" style={{ color: 'var(--color-text-primary)' }}>
                        {item.title}:
                      </span>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
              <Image
                src="/images/platform-dashboard.jpg"
                alt="Digineta Political Platform Dashboard"
                width={1200}
                height={800}
                className="w-full h-auto object-cover section-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW IT WORKS (#how-it-works) */}
      <section
        id="how-it-works"
        ref={howRef}
        className="py-16 md:py-24 scroll-mt-20"
        style={{ backgroundColor: 'var(--color-primary)' }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            How It Works
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-14"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Get started with the Political Platform in five simple steps.
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: 'Assess',
                text: "Evaluate your current digital presence, voter data quality, ground team strength, and campaign readiness across your constituency or party unit.",
              },
              {
                step: 2,
                title: 'Map & Segment',
                text: "Use Digineta's intelligence tools to map your voter base — by booth, segment, demographic, and sentiment — and identify priority areas for outreach and mobilisation.",
              },
              {
                step: 3,
                title: 'Plan & Create',
                text: 'Build your campaign plan and content strategy. Generate multilingual content, schedule digital outreach, and brief your ground teams — all from the platform.',
              },
              {
                step: 4,
                title: 'Execute',
                text: 'Launch and manage your outreach — WhatsApp broadcasts, social media campaigns, call centre operations, field coordination, and event management — with real-time tracking.',
              },
              {
                step: 5,
                title: 'Track & Optimise',
                text: 'Monitor progress through live dashboards. Track voter sentiment, outreach performance, booth-level turnout, and media coverage. Adjust strategies based on real data.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-6 rounded-xl border"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold"
                  style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-primary)' }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — BENEFITS (#benefits) */}
      <section
        id="benefits"
        ref={benefitsRef}
        className="py-16 md:py-24 scroll-mt-20"
        style={{ backgroundColor: 'var(--color-secondary)' }}
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Why Political Leaders Choose Digineta
          </h2>
          <p
            className="text-lg text-center max-w-2xl mx-auto mb-14"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Built for the complexity, scale, and urgency of Indian elections.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'All-in-One Platform',
                text: 'Stop juggling multiple vendors. Political intelligence, digital outreach, voter data, design tools, and call centre — all under one roof, managed by one team.',
              },
              {
                title: 'Built for Indian Elections',
                text: 'Designed specifically for the Indian political context — multilingual, booth-level granular, caste-aware, and optimised for the scale of Indian constituencies.',
              },
              {
                title: 'Real-Time Intelligence',
                text: "Live dashboards and ground-level data give you the information you need to make fast, confident decisions — before your competitors even know what's happening.",
              },
              {
                title: 'Scalable for Any Level',
                text: "Whether you're a Sarpanch managing one village or a national party managing thousands of booths, the platform scales to your size and complexity.",
              },
              {
                title: 'Trusted by Elected Leaders',
                text: "Serving MPs, MLAs, Corporators, and Party Leaders across India. Our track record speaks through the leaders and campaigns we've powered.",
              },
              {
                title: 'Ongoing Support, Not Just Tools',
                text: 'Digineta is a managed service, not just software. Our team works alongside yours — strategising, creating, executing, and reporting throughout the campaign cycle.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl border transition-colors hover:border-[var(--color-accent)]"
                style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — BOTTOM CTA BANNER */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: 'var(--color-stat-bg)' }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ready to Run Smarter Campaigns?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Explore how the Political Platform can transform your constituency management, voter outreach, and
            campaign execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-text-primary)' }}
            >
              Talk to an Expert
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border transition-opacity hover:opacity-90"
              style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
