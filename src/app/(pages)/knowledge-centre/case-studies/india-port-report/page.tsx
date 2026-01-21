'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function IndiaPortReportPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Knowledge Centre</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/case-studies" className="hover:text-white">Case Studies</Link>
              <span className="mx-2">›</span>
              <span className="text-white">India Port Report</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-rose-500 text-white">Research</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">India Port Report</h1>
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
                  Comprehensive research report covering India&apos;s entire port sector including all major and minor ports. The report provided detailed analysis of traffic trends, infrastructure facilities, operational performance, development plans, regulatory framework, and future outlook for Indian ports. Served as a definitive reference document for stakeholders in port and shipping industry.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Multiple stakeholders including port equipment manufacturers, logistics companies, infrastructure investors, and international organizations seeking comprehensive intelligence on Indian port sector. The report addressed the need for reliable, consolidated information on all aspects of India&apos;s port industry in a single reference document.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The challenge was to compile comprehensive, accurate information on over 200 ports spread across India&apos;s vast coastline, covering diverse ownership structures, operational models, cargo types, and development stages. Required extensive primary research, data validation, and analysis to present meaningful insights beyond raw statistics.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The report development involved extensive field visits to all major ports and selected minor ports. Primary research included interviews with port management, terminal operators, shipping lines, and logistics service providers. Traffic data analysis covered 10-year historical trends and commodity-wise breakdowns. Infrastructure assessment documented berths, draft, cargo handling equipment, storage facilities, and connectivity. Financial analysis reviewed port tariffs, operational efficiency metrics, and investment plans. Regulatory framework examination covered port governance, PPP models, and policy developments including Maritime India Vision 2030.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">i-maritime Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The India Port Report provided 300+ page comprehensive coverage organized into port-wise profiles, commodity analysis, infrastructure assessment, and strategic outlook sections. Each major port profile included traffic statistics, infrastructure details, connectivity, major customers, expansion plans, and SWOT analysis. Minor port section covered promising upcoming ports with development potential. The report analyzed traffic trends showing strong growth in containers, coal, and crude oil, identifying capacity constraints and expansion opportunities. Infrastructure analysis quantified requirements for new berths, deeper drafts, and mechanization. Regulatory section explained port governance reforms and PPP opportunities. Strategic outlook section provided 10-year traffic projections and identified investment opportunities worth Rs. 1 lakh crore. The report became a widely-referenced industry publication, updated annually to track sector developments.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Contact for further information</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="font-semibold text-lg text-gray-900">i-maritime Consultancy Pvt. Ltd.</div>
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

