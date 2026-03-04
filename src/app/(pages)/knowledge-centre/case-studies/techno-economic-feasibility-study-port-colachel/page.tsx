'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function TechnoEconomicFeasibilityStudyPortColachelPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Political Intelligence</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/case-studies" className="hover:text-white">Case Studies</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Techno Economic Feasibility Study for setting a port at Colachel</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-green-500 text-white">Port Development</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Techno Economic Feasibility Study for setting a port at Colachel</h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  &ldquo;Comprehensive feasibility study for developing a new deep-water port at Colachel, Tamil Nadu, including market analysis, technical design, and financial viability assessment. The study evaluated the potential for establishing a major port facility that could serve the southern region of India and handle international cargo traffic.&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Client */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Government of Tamil Nadu, through the Tamil Nadu Maritime Board, commissioned this study to assess the viability of developing a new port at Colachel. The project aimed to enhance maritime connectivity and boost economic development in the southern districts of Tamil Nadu.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Challenge */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The primary challenge was to conduct a comprehensive feasibility study that would determine the technical, economic, and environmental viability of the proposed port. This included analyzing market demand, assessing natural conditions, designing appropriate infrastructure, and evaluating financial returns while considering environmental impact and stakeholder concerns.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Methodology */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The study involved detailed market research to identify cargo potential, traffic forecasting for the next 30 years, and competitive analysis with existing ports. Technical assessment included hydrographic surveys, geotechnical studies, and port layout design. Financial modeling incorporated capital costs, operational expenses, and revenue projections. Environmental impact assessment evaluated ecological considerations and mitigation measures.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Digineta Proposition */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Digineta Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Digineta recommended a phased development approach starting with a general cargo terminal and expanding to container facilities based on market demand. The master plan included deep-water berths, modern cargo handling equipment, and efficient road and rail connectivity. Financial analysis showed positive returns with an IRR of 12-15% over the project lifecycle. We also provided detailed implementation roadmap and risk mitigation strategies.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl text-white mb-4">Contact for further information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="font-semibold text-lg text-white">
                    Digineta Consultancy
                  </div>
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
                    <a href="mailto:contact@digineta.com" className="text-blue-600 hover:text-blue-700">
                      contact@digineta.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <a href="tel:+919820340418" className="text-blue-600 hover:text-blue-700">
                      Tel: +91 9820340418
                    </a>
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
