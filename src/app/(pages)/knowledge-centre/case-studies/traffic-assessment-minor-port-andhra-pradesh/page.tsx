'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function TrafficAssessmentMinorPortAndhraPradeshPage() {
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
              <span className="text-white">Traffic assessment for a minor port in Andhra Pradesh</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-green-500 text-white">Port Development</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Traffic assessment for a minor port in Andhra Pradesh</h1>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Overview</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Traffic potential assessment for a minor port in Andhra Pradesh to support investment and development decisions. The study evaluated cargo generation in the hinterland, competitive positioning, infrastructure requirements, and realistic traffic capture potential to enable data-driven port development planning.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Andhra Pradesh state government and private developer planning modernization of a minor port. The client required comprehensive traffic assessment to determine optimal development scale, attract private investment, and ensure sustainable operations in presence of competing major ports like Visakhapatnam and Krishnapatnam.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Andhra Pradesh has well-established major ports creating challenging competitive environment for minor ports. Key issues included identifying niche cargo opportunities not well-served by major ports, assessing realistic market share achievable, evaluating infrastructure investments needed to attract cargo, and determining financial viability given limited traffic potential and high capital requirements.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The study involved detailed hinterland analysis covering industrial clusters, mining operations, and agricultural areas. Primary cargo identification focused on commodities with locational advantages for the minor port. Competitive assessment evaluated service levels, tariffs, and capacity utilization of nearby major ports. Transport economics modeling identified cost-competitive catchment areas. Infrastructure gap analysis determined investments needed for different cargo types. Financial viability assessment incorporated realistic traffic growth scenarios and investment recovery timelines.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Digineta Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Digineta identified niche opportunities in breakbulk cargo, coastal shipping, and serving local industries with specialized requirements. Traffic potential estimated at 1-1.5 million tonnes initially, growing to 2.5-3 million tonnes in 7-10 years. Primary cargo types included steel products, project cargo for nearby industries, agricultural commodities, and coastal coal movements. Recommended focused development strategy: 1-2 multi-purpose berths with mobile harbor cranes, open storage yards, and basic warehousing. Suggested targeting cargo diversion from congested major ports through competitive pricing and faster turnaround. Implementation strategy included phased development aligned with cargo growth and PPP model for terminal operations. Financial analysis showed modest but stable returns with lower risk compared to greenfield port development, making it attractive for specific investor profiles seeking steady cash flows rather than high growth potential.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mb-12">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader><CardTitle className="text-2xl text-white mb-4">Contact for further information</CardTitle></CardHeader>
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

