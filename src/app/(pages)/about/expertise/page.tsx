'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle, Lightbulb, Target, Users, Award } from 'lucide-react'

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/about" className="hover:text-white">About Digineta</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Capabilities &amp; Expertise</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Capabilities &amp; Expertise</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Digineta blends political intelligence, technology, and on-ground networks to design, run,
              and optimise campaigns for parties, leaders, and governments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Digineta capabilities overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B31942] to-[#002147] rounded-2xl transform rotate-3 opacity-20"></div>
                  <div className="relative bg-[#002147] rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/10 rounded-full mx-auto mb-4"></div>
                      <div className="w-32 h-4 bg-white/20 rounded mx-auto mb-2"></div>
                      <div className="w-24 h-4 bg-white/20 rounded mx-auto"></div>
                      <p className="mt-4 text-sm text-white/80">
                        Placeholder visual for campaign intelligence dashboards
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-black mb-6">
                    Political technology, intelligence and execution in one stack
                  </h2>
                  <div className="space-y-4 text-black leading-relaxed">
                    <p>
                      Digineta partners with campaigns, parties and governments to turn complex political
                      environments into clear, data-backed action. We combine research, digital
                      infrastructure, messaging, and field operations into one integrated capability set.
                    </p>
                    <p>
                      From early listening and sentiment intelligence to booth-level mobilisation and
                      performance reviews, our teams bring together strategists, technologists and
                      on-ground organisers who speak the language of politics as well as data.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* What makes Digineta different */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-black mb-8">
                What makes us different from typical political consulting?
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#B31942] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We start with evidence, not assumptions. Our campaign and governance strategies are
                    built on real voter behaviour, sentiment signals and network maps – not just
                    instincts.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Users className="w-6 h-6 text-[#002147] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We understand our partners&apos; realities – coalition dynamics, local leadership,
                    internal structures and media ecosystems – and design solutions that work inside
                    those constraints.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <Award className="w-6 h-6 text-[#B31942] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We blend political experience with product-thinking and modern campaign technology –
                    from data platforms and dashboards to field tools and narrative labs.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <Lightbulb className="w-6 h-6 text-[#002147] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We bring structured experimentation to politics – rapid testing of messages,
                    creatives and formats across digital and field, so you scale what actually works.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <Target className="w-6 h-6 text-[#B31942] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We go down to the booth and ward level – identifying priority segments, local
                    influencers and micro-geographies, then designing targeted interventions for each.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-[#002147] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We stay through implementation – building teams, training cadre, tracking execution
                    and feeding intelligence back into strategy every week.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <ArrowRight className="w-6 h-6 text-[#B31942] mt-1 flex-shrink-0" />
                  <p className="text-black">
                    We measure what matters – vote share movement, favourability shifts, network growth
                    and narrative adoption – and present it in simple frameworks leaders can act on.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Sample impact stories */}
            <Card className="bg-[#B31942] text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <CardTitle className="text-xl">Impact snapshots</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">State election campaign</h4>
                    <p className="text-white/80 text-sm">Integrated ground intelligence and digital orchestration</p>
                  </div>
                  <blockquote className="text-white/80 italic text-sm leading-relaxed">
                    &ldquo;Digineta helped us move from intuition-driven politics to a cadence of weekly
                    evidence, clear priorities and disciplined execution across districts.&rdquo;
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
                    State-wide campaign: booth-level influence mapping and narrative roll-out
                  </div>
                  <div className="text-white/80 text-sm">
                    Governance outreach: citizen feedback loops for a flagship public program
                  </div>
                  <div className="text-white/80 text-sm">
                    Digital infrastructure: unified political data platform for a multi-state party
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

