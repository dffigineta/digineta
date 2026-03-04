'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Users, Building2, Building, Home, UserCheck } from 'lucide-react'

const segments = [
  {
    title: 'Members of Parliament (MPs)',
    href: '/who-is-it-for/members-of-parliament',
    description: 'Constituency intelligence, digital presence, and governance tools for elected MPs.',
    icon: Users,
  },
  {
    title: 'Members of Legislative Assembly (MLAs)',
    href: '/who-is-it-for/members-of-legislative-assembly',
    description: 'Assembly-level voter data, campaign platforms, and booth management for MLAs.',
    icon: Building2,
  },
  {
    title: 'Municipal Corporators',
    href: '/who-is-it-for/municipal-corporators',
    description: 'Ward-level digital presence and community engagement for urban local body leaders.',
    icon: Building,
  },
  {
    title: 'Panchayat & Local Body Leaders',
    href: '/who-is-it-for/panchayat-local-body-leaders',
    description: 'Simple digital tools and regional language support for grassroots leaders.',
    icon: Home,
  },
  {
    title: 'Political Party Workers',
    href: '/who-is-it-for/political-party-workers',
    description: 'Training, volunteer apps, and content tools for party workers.',
    icon: UserCheck,
  },
]

export default function WhoIsItForClient() {
  return (
    <div className="who-is-it-for-page min-h-screen" style={{ backgroundColor: 'var(--color-primary)' }}>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Who Is It For
            </h1>
            <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
              Digineta&apos;s political technology serves leaders at every level of Indian democracy — from Parliament to the panchayat.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <motion.div
                key={seg.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={seg.href}
                  className="block p-6 rounded-xl border transition-all hover:border-[var(--color-accent)]"
                  style={{ backgroundColor: 'var(--color-card-bg)', borderColor: 'var(--color-border)' }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    <seg.icon className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} />
                  </div>
                  <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {seg.title}
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {seg.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
