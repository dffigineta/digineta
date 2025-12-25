'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardHeader } from '@/components/ui/Card'
import { Building, Calendar, Users, Award } from 'lucide-react'

export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#8F1333] to-[#002147] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Corporate Profile</h1>
            <p className="text-xl text-white leading-relaxed">
              Digineta is India&apos;s political technology venture – combining election intelligence, digital
              platforms and campaign execution support for leaders, parties and organisations across the country.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black mb-4">Digineta at a Glance</h2>
              <p className="text-lg text-black leading-relaxed">
                Digineta was set up to solve one problem: how can Indian political leaders access the same
                quality of technology, data and digital execution that brands and startups enjoy – but tuned to
                constituencies, booths and party structures.
              </p>
              <p className="text-lg text-black leading-relaxed">
                We work across the full political technology stack – apps for leaders and teams, voter and booth
                intelligence, creative and content engines, and full-funnel digital outreach. Our work is designed
                to plug into existing party or leader structures instead of replacing them.
              </p>
              <p className="text-lg text-black leading-relaxed">
                From local leaders to national campaigns, Digineta operates as a long-term tech partner – helping
                teams track ground reality, communicate with citizens and run more organised campaigns every cycle.
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about-corporate-placeholder.jpg"
                  alt="Digineta team and platforms overview"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: Calendar, title: 'Election Cycles', value: 'Multiple cycles' },
                  { icon: Users, title: 'Leaders & Teams', value: '200+ served' },
                  { icon: Award, title: 'Campaigns', value: '50+ supported' },
                  { icon: Building, title: 'States & UTs', value: '20+ covered' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg bg-white">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-black">{item.title}</div>
                            <div className="text-2xl font-bold text-black">{item.value}</div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

