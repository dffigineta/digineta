'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function FeasibilityStudyPortBasedMultiProductSEZPage() {
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
              <span className="text-white">Feasibility Study for a port based Multi Product SEZ</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-green-500 text-white">Port Development</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Feasibility Study for a port based Multi Product SEZ</h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Overview</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Comprehensive feasibility study for developing a port-based Special Economic Zone (SEZ) with multiple product sectors. The study evaluated the potential for establishing an integrated industrial-port complex combining manufacturing, processing, and export facilities with dedicated port infrastructure for seamless cargo movement.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A major infrastructure developer planning to establish a port-based SEZ to attract export-oriented industries. The client sought to understand market demand, optimal product mix, infrastructure requirements, investment needed, and financial viability of the multi-product SEZ concept.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The key challenge was designing an optimal product mix that would maximize land utilization and attract quality investors while ensuring port infrastructure could efficiently handle diverse cargo types. The study needed to balance infrastructure sharing across sectors, assess market demand for each product vertical, evaluate regulatory compliance for SEZ operations, and create a financially viable development model.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The study involved extensive market research across multiple sectors including textiles, pharmaceuticals, engineering, gems & jewelry, and electronics. Analysis of export trends and FDI patterns identified high-potential sectors. Port requirements assessment covered berth specifications, cargo handling equipment, and connectivity infrastructure. SEZ regulatory framework evaluation ensured compliance with government policies. Financial modeling incorporated land development costs, infrastructure investments, operational revenues, and fiscal incentives.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Digineta Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digineta recommended a phased 500-acre SEZ with dedicated sectors for pharmaceuticals (150 acres), engineering & electronics (200 acres), and textiles & apparel (150 acres). Port facilities included multi-purpose berths, container terminal, and bulk cargo jetty. The master plan integrated manufacturing zones with logistics areas, warehousing, and common infrastructure (power, water, effluent treatment). Marketing strategy included investor outreach programs and anchor tenant identification. Financial projections showed attractive returns with IRR of 14-16% over 15 years, supported by SEZ tax benefits and land appreciation.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Contact for further information</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="font-semibold text-lg text-gray-900">Digineta Consultancy Pvt. Ltd.</div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="text-gray-700">
                      <div>11B 114, WeWork India Management Pvt Ltd</div>
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

