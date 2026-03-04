'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function MarketStudyCFSFacilityJNPTPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Political Intelligence</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/case-studies" className="hover:text-white">Case Studies</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Market study for setting CFS facility at JNPT</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-orange-500 text-white">Logistics</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market study for setting CFS facility at JNPT</h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Market assessment and feasibility study for establishing a Container Freight Station (CFS) facility near Jawaharlal Nehru Port Trust (JNPT), India&apos;s largest container port. The study analyzed market dynamics, competition, cargo potential, and financial viability of the proposed CFS operation.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  A logistics company planning to invest in CFS infrastructure near JNPT. The client required comprehensive market intelligence to assess the opportunity, understand competitive landscape, and develop a viable business model for CFS operations serving EXIM trade through Mumbai.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The JNPT region has numerous existing CFS facilities creating intense competition. The challenge was to assess realistic market share potential, identify differentiation strategies, evaluate location advantages, understand customer requirements, and determine optimal facility size and service offerings to achieve commercial success in a crowded market.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The study involved extensive primary research with exporters, importers, shipping lines, and customs brokers. Analysis of JNPT cargo statistics identified traffic patterns and CFS utilization trends. Competitive benchmarking evaluated existing CFS operators covering tariffs, services, locations, and market positioning. Site evaluation assessed connectivity, infrastructure, and regulatory compliance. Financial modeling incorporated capital costs, operating expenses, throughput projections, and revenue assumptions.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Digineta Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Digineta recommended a medium-sized CFS facility (15-20 acres) with capacity for 50,000 TEUs annually, strategically located with excellent road connectivity. We identified niche opportunities in specific cargo types and customer segments underserved by existing facilities. The business plan emphasized value-added services including customs clearance, warehousing, and last-mile delivery. Recommended technology investments in container tracking systems and digital documentation. Financial projections showed acceptable returns with breakeven achievable within 3-4 years through competitive pricing and superior service quality.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Contact for further information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="font-semibold text-lg text-white">Digineta Consultancy</div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-[#cbd5e1]">
                      <div>11B 114, WeWork India Management</div>
                      <div>10th floor, Tower 1</div>
                      <div>Seawoods Grand Central, Sector 40</div>
                      <div>Nerul, Navi Mumbai (Maharashtra) 400706</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="mailto:contact@digineta.com" className="text-blue-600 hover:text-blue-700">contact@digineta.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="tel:+919820340418" className="text-blue-600 hover:text-blue-700">Tel: +91 9820340418</a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

