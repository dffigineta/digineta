'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function TechnoEconomicFeasibilityStudyMultimodalTransportCoalPage() {
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
              <span className="text-white">Techno Economic Feasibility study on Multimodal Transport of Coal</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-teal-500 text-white">Transport</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Techno Economic Feasibility study on Multimodal Transport of Coal</h1>
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
                  Comprehensive feasibility study for establishing multimodal coal transportation system combining rail, coastal shipping, and inland waterways. The study evaluated technical requirements, infrastructure needs, operational model, cost economics, and environmental benefits of multimodal coal logistics compared to conventional rail-only transportation.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A major power utility planning coal procurement for thermal power plants located in coastal regions. The client sought alternative transportation solutions to reduce dependence on congested rail corridors and achieve cost savings through multimodal logistics combining sea and river transport with rail.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The key challenge was designing an efficient multimodal system that could match the reliability of rail transport while offering cost advantages. Critical issues included evaluating available waterway infrastructure, assessing vessel requirements and availability, determining optimal transshipment points, minimizing cargo handling and transfer costs, and ensuring year-round operability considering seasonal variations in waterway depths.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The study involved route analysis from coal mines in Odisha/Jharkhand to power plants via combination of rail-to-port, coastal shipping, and inland waterway segments. Infrastructure assessment covered port facilities, inland terminals, cargo handling systems, and storage requirements. Vessel specifications were developed for coastal vessels (5,000-10,000 DWT) and river barges. Cost modeling compared multimodal transport economics with existing rail freight, including capital costs, operating expenses, transit times, and inventory carrying costs. Environmental impact assessment quantified carbon emissions reduction and fuel consumption benefits.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mb-12">
            <Card className="border-0 shadow-xl">
              <CardHeader><CardTitle className="text-2xl text-gray-900 mb-4">Digineta Proposition</CardTitle></CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digineta recommended a multimodal corridor: mine to Paradip/Haldia port by rail (300-400 km), coastal shipping to destination port (1,000-1,200 km), and inland waterway/short rail to power plant (50-100 km). The system could transport 3-5 million tonnes annually with 15-20% cost savings versus direct rail freight. Infrastructure requirements included coal loading terminal at port, mechanized cargo handling, and dedicated berths at destination. Vessel fleet included 4-6 self-unloading coastal vessels and supporting barges. Implementation plan covered equipment procurement, regulatory approvals, and phased deployment over 18-24 months. The solution also offered environmental benefits with 30-35% lower carbon emissions compared to rail transport, supporting sustainability goals.
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

