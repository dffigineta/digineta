'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function StudyBusinessOpportunitiesDredgingIndiaPage() {
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
              <span className="text-white">Study for business opportunities for dredging in India</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-gray-500 text-white">Dredging</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Study for business opportunities for dredging in India</h1>
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
                  Business opportunity study for dredging services in India covering capital dredging for new port development, maintenance dredging for existing ports, inland waterway dredging, land reclamation projects, and beach nourishment. The study identified specific project opportunities, assessed competitive landscape, and developed market entry strategy for dredging operations in India.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  An international dredging contractor with strong track record in Southeast Asia and Middle East markets, seeking to enter the Indian dredging market. The client required detailed opportunity assessment, competitive intelligence, and business development strategy to establish dredging operations in India.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The dredging market in India has established players including Dredging Corporation of India and several private contractors. Challenges included identifying untapped opportunities, understanding tender procedures and qualification requirements, assessing equipment mobilization logistics and costs, evaluating regulatory and environmental clearance processes, and determining competitive pricing strategies while maintaining profitability.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The study involved comprehensive mapping of dredging requirements across India&apos;s maritime infrastructure. Port master plans and development projects identified capital dredging needs for port deepening and expansion. Maintenance dredging contracts analysis covered annual requirements at major and minor ports. National Waterways development program under Sagarmala provided significant inland dredging opportunities. Land reclamation projects for urban expansion and industrial development were evaluated. Project pipeline analysis quantified tender opportunities over 5-year horizon. Competitive assessment profiled existing dredging companies, their fleet capabilities, and market shares.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Digineta Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digineta identified specific opportunities worth Rs. 5,000-6,000 crores over 5 years in capital dredging (new port development, deepening projects), maintenance dredging (annual contracts), inland waterways (National Waterways 1, 2, 3 development), and land reclamation (coastal infrastructure projects). Recommended entry strategy through establishing Indian subsidiary, prequalifying for major port tenders, and mobilizing specialized equipment (TSHD 10,000+ cubic meter capacity). Identified immediate opportunities in 3-4 large capital dredging projects under tendering and long-term maintenance contracts at private ports. Business model combined spot projects with multi-year maintenance contracts for revenue stability. Provided detailed equipment mobilization plan, Indian partner identification for local expertise, and financial projections showing attractive returns despite initial mobilization costs.
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

