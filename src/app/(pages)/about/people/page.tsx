'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function PeoplePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Leadership &amp; Network</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Leadership &amp; Network</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              A distributed leadership, data, and field network that turns political intent into
              operational reality across campaigns and governance programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-black leading-relaxed">
                Digineta brings together campaign strategists, data scientists, technologists and
                on-ground organisers. Our network stretches from national war rooms to booth-level
                coordinators and issue experts.
              </p>
            </motion.section>

            {/* A mix of experience and youthful dynamism */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-black mb-4">A mix of experience and youthful dynamism</h2>
              <p className="text-black leading-relaxed">
                Senior political practitioners provide judgement and context. Younger leaders bring
                digital fluency, on-ground energy and comfort with experimentation. We intentionally
                design teams that combine both.
              </p>
            </motion.section>

            {/* Profiles */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-black mb-4">Who makes Digineta work</h2>
              <p className="text-black leading-relaxed">
                Behind every engagement is a cross-functional team – people who understand party
                structures, constitutional offices and campaign realities as deeply as they understand
                dashboards and field apps.
              </p>
            </motion.section>

            {/* Key People Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Campaign Strategy Lead */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#B31942] shadow-lg bg-[#002147]/20"></div>
                      <CardTitle className="text-xl mb-2">Campaign Strategy Lead</CardTitle>
                      <p className="text-black font-semibold">National and state election strategy, narrative and coalition design</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black leading-relaxed">
                      Leads cross-state political strategy for campaigns and governance programs.
                      Works closely with party leadership and senior office-bearers to clarify goals,
                      design winning paths and keep the organisation aligned through the cycle.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Data & Insights Director */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#002147] shadow-lg bg-[#B31942]/20"></div>
                      <CardTitle className="text-xl mb-2">Data &amp; Insights Director</CardTitle>
                      <p className="text-black font-semibold">Polling, sentiment intelligence and decision dashboards</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black leading-relaxed">
                      Designs the data backbone for campaigns and governance programs – integrating
                      voter files, surveys, digital signals and on-ground reports into simple stories
                      that leaders can act on.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Testimonials */}
            <Card className="bg-[#B31942] text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💬</span>
                  </div>
                  <CardTitle className="text-xl">Testimonials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">National campaign team</h4>
                    <p className="text-white/80 text-sm">Campaign Director</p>
                  </div>
                  <blockquote className="text-white/80 italic text-sm leading-relaxed">
                    &ldquo;The Digineta team plugged directly into our structures – from war-room to booth.
                    They brought discipline to our meetings and visibility into what was actually
                    happening on the ground.&rdquo;
                  </blockquote>
                  <Link href="/about/testimonials">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      More...
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-[#002147] text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📁</span>
                  </div>
                  <CardTitle className="text-xl">Case Studies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-white/80 text-sm">
                    Leadership coaching and decision frameworks for a Chief Minister&apos;s Office
                  </div>
                  <div className="text-white/80 text-sm">
                    Rapid-response narrative and war-room setup for a national campaign
                  </div>
                  <div className="text-white/80 text-sm">
                    Network-building program for local leaders across urban wards
                  </div>
                  <Link href="/knowledge-centre/case-studies">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      More...
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

