'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function DetailedProjectReportShipyardGujaratPage() {
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
              <span className="text-white">Detailed Project Report for setting up Shipyard facility in Gujarat</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-purple-500 text-white">Shipbuilding</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Detailed Project Report for setting up Shipyard facility in Gujarat</h1>
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
                  Comprehensive Detailed Project Report (DPR) for establishing a modern shipbuilding facility in Gujarat. The project covered technical specifications, infrastructure design, machinery selection, manpower planning, financial projections, and implementation roadmap for a greenfield shipyard capable of building commercial vessels up to 25,000 DWT.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  An industrial conglomerate planning to diversify into shipbuilding sector. The client had secured waterfront land in Gujarat and required a comprehensive project report covering technical, commercial, and financial aspects for investment approval and securing project financing from financial institutions.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The challenge involved designing a competitive shipyard that could match international standards while remaining cost-effective. Key considerations included vessel type selection, production capacity planning, technology choices, infrastructure layout, workforce development, and creating a sustainable business model in a globally competitive industry dominated by established Asian shipyards.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The DPR development involved site assessment including hydrographic surveys and geotechnical studies. Market analysis identified target vessel types with strong demand (bulk carriers, tankers, offshore supply vessels). Technical design covered shipyard layout, dry dock specifications (160m x 30m), fabrication shops, assembly areas, and launching arrangements. Equipment planning included cranes, welding systems, plate processing machinery, and marine equipment. Detailed manpower planning covered skilled workers, engineers, and management. Financial modeling incorporated capital expenditure (Rs. 800 crores), working capital, revenue projections, and sensitivity analysis.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">i-maritime Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  i-maritime recommended a phased development starting with ship repair and small vessel construction, progressing to commercial vessels up to 25,000 DWT. The master plan included one large dry dock, fabrication facilities, 150-ton goliath crane, and modern outfitting shops. We suggested technology partnerships with established shipyards for know-how transfer. Business strategy focused on Indian coastal shipping fleet and offshore sector initially, expanding to export markets. The DPR included detailed implementation schedule (24 months construction), manpower recruitment plan, and quality/safety management systems. Financial analysis projected breakeven at 60% capacity utilization with IRR of 12% over 15-year horizon.
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

