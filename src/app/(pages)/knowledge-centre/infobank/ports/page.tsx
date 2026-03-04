'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Anchor, ArrowLeft } from 'lucide-react'

export default function PortsInfobankPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Political Intelligence</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/infobank" className="hover:text-white">Infobank</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Ports</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Anchor className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Seaports Information</h1>
            <p className="text-xl text-blue-100">Comprehensive information about seaport development, operations, and management</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Global Scenario */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Global Seaport Scenario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  With the growing move for privatisation of seaports all over the world, private sector participation in operations and infrastructure activities of seaports has increased substantially over the last few years. This has resulted in a radical change in the organizational models of ports, converting from Service port model to Landlord port model, where port authority retains the port infrastructure and fulfills its regulatory functions, while port services are provided by private operators that own the assets conforming to port superstructure and equipment required for service provision.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Major technological changes viz. containerisation of cargo and development of larger and deeper specialised vessels have made revolution in seaport sector across the world leading to fast renovation of existing facilities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In order to attend to the growing demand for modernisation, seaports industry across the world has felt a strong need for capital investment and private participation appears to be a better alternative to respond to these challenges.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Scenario */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Indian Seaport Scenario</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  India has a coastline of about 7,517 kilometers, which is dotted with 13 major and 200 notified minor and intermediate ports. The major ports handle approximately 70% of the country&apos;s total seaborne trade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Indian ports have been experiencing steady growth in cargo traffic. The total traffic handled by major ports has grown from about 20 million tonnes in 1950-51 to over 700 million tonnes currently. This growth has been driven by India&apos;s expanding economy and increasing international trade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Government of India has taken several initiatives to modernize and expand port infrastructure. The National Maritime Development Programme (NMDP) aims to develop world-class port infrastructure with investments exceeding Rs. 3 lakh crores. The Sagarmala programme focuses on port-led development and aims to reduce logistics costs for EXIM and domestic trade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Private sector participation has been encouraged through various models including PPP (Public-Private Partnership), BOT (Build-Operate-Transfer), and BOOT (Build-Own-Operate-Transfer). Several major ports have successfully privatized terminal operations, leading to improved efficiency and service quality.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Port Types */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Types of Ports</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Major Ports</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Major ports are governed by the Major Port Authorities Act, 2021. There are 13 major ports in India: Deendayal (Kandla), Mumbai, JNPT, Mormugao, New Mangalore, Cochin, Chennai, Kamarajar (Ennore), V.O. Chidambaranar, Visakhapatnam, Paradip, Kolkata, and Port Blair.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Minor Ports</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Minor ports are governed by respective State Governments. These ports handle about 30% of the country&apos;s cargo traffic. Several minor ports have been developed as world-class facilities through private sector participation, including Mundra, Pipavav, Dhamra, and Krishnapatnam.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Port Operations */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Port Operations & Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern ports offer a wide range of services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Pilotage services for vessel navigation</li>
                  <li>Cargo handling and storage facilities</li>
                  <li>Container terminal operations</li>
                  <li>Bulk cargo handling (coal, iron ore, crude oil, etc.)</li>
                  <li>Ship repair and maintenance facilities</li>
                  <li>Customs clearance and documentation services</li>
                  <li>Inland transportation connectivity</li>
                  <li>Warehousing and distribution services</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technology & Innovation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Technology & Innovation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Indian ports are increasingly adopting modern technologies to improve efficiency and competitiveness:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Port Community Systems (PCS) for digital integration</li>
                  <li>Automated container terminals with AI and IoT</li>
                  <li>Direct Port Delivery (DPD) and Direct Port Entry (DPE) systems</li>
                  <li>RFID-based container tracking</li>
                  <li>Green port initiatives with renewable energy</li>
                  <li>Smart port solutions with real-time data analytics</li>
                  <li>Blockchain for supply chain transparency</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

