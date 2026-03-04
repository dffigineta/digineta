'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react'

export default function MultiLogisticsParkAhmedabadPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Knowledge Centre</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/case-studies" className="hover:text-white">Case Studies</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Multi Logistics Park in Ahmedabad</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/case-studies">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Badge className="bg-orange-500 text-white">Logistics</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Multi Logistics Park in Ahmedabad</h1>
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  &ldquo;Strategic planning and development of integrated logistics hub in Ahmedabad, Gujarat, including warehouse design, connectivity analysis, and operational planning. The study focused on creating a comprehensive logistics solution that would serve as a key distribution center for the western region of India.&rdquo;
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Client</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A leading infrastructure development company with significant investments in Gujarat&apos;s logistics sector. The client aimed to establish a world-class logistics park to capitalize on Ahmedabad&apos;s strategic location and growing industrial base.
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Challenge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The challenge was to design an integrated logistics park that could handle multiple cargo types while ensuring optimal connectivity to major transportation networks. Key considerations included market demand analysis, optimal site selection, infrastructure requirements, and operational efficiency planning.
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Methodology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Comprehensive market analysis was conducted to understand cargo flow patterns in the region. Site selection involved evaluation of connectivity to highways, railways, and ports. Infrastructure planning included warehouse design, container handling facilities, and supporting amenities. Financial modeling assessed project viability and return on investment.
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Digineta Proposition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Digineta recommended a phased development approach with initial focus on container and general cargo handling. The master plan included dedicated zones for different cargo types, state-of-the-art warehouse facilities, and integrated IT systems for efficient operations. We provided detailed technical specifications and financial projections for the project.
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
                <CardTitle className="text-2xl text-gray-900 mb-4">Contact for further information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="font-semibold text-lg text-gray-900">
                    Digineta Consultancy Pvt. Ltd.
                  </div>
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
