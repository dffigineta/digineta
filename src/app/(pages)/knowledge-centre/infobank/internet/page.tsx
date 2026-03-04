'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Globe, ArrowLeft } from 'lucide-react'

export default function InternetInfobankPage() {
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
              <span className="text-white">Internet & Digital</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Globe className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Maritime & Internet Resources</h1>
            <p className="text-xl text-blue-100">Online platforms, digital transformation, and internet resources for maritime industry</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Digital Transformation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Digital Transformation in Maritime</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The maritime industry is undergoing rapid digital transformation, leveraging internet technologies to improve efficiency, reduce costs, and enhance decision-making. Digital platforms are revolutionizing traditional maritime operations and creating new business models.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cloud computing, big data analytics, Internet of Things (IoT), and artificial intelligence are enabling real-time vessel tracking, predictive maintenance, route optimization, and automated operations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The COVID-19 pandemic accelerated digital adoption in the maritime sector, with remote inspections, virtual surveys, and digital documentation becoming mainstream practices.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Online Platforms */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Digital Maritime Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Freight & Charter Platforms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Online marketplaces connecting ship owners and charterers. Platforms like Freight Investor Services, Baltic Exchange, and digital freight brokers provide real-time freight rates, vessel availability, and charter fixtures. These platforms increase market transparency and reduce transaction costs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Port Community Systems (PCS)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Integrated platforms connecting all port stakeholders including shipping lines, terminal operators, customs, freight forwarders, and trucking companies. Examples include PortNet (Singapore), Port of Rotterdam&apos;s Portbase, and India&apos;s PCS1x platform for major ports.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Vessel Tracking Systems</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    AIS (Automatic Identification System) based platforms like Marine Traffic, Vessel Finder, and FleetMon provide real-time vessel positions, port calls, and voyage information. These are essential tools for charterers, cargo owners, and port operators.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Platforms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    TradeLens (Maersk & IBM), CargoX, and other blockchain platforms digitize shipping documents, provide supply chain visibility, and enable smart contracts. These reduce documentation errors, speed up processes, and prevent fraud.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Information Resources */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Online Maritime Information Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry News & Publications</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Leading maritime news portals include TradeWinds, Lloyd&apos;s List, Maritime Executive, Splash 247, and seatrade-maritime.com. These provide daily news, market analysis, and industry insights. Specialized publications cover segments like container shipping, tankers, dry bulk, and offshore.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Intelligence Platforms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Clarksons Research, Drewry Maritime, IHS Markit, and Dynamar provide comprehensive maritime data, fleet statistics, freight rate indices, and market forecasts. These subscription-based services are essential for strategic decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regulatory & Classification Society Websites</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    International Maritime Organization (IMO), flag state authorities, and classification societies (DNV, Lloyd&apos;s Register, ABS, ClassNK) provide regulations, guidelines, and technical standards. These resources are crucial for compliance and vessel certification.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maritime E-Learning Platforms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Online training platforms like Seagull Maritime, Videotel, and Marlins Test provide STCW-compliant training courses, competency assessments, and continuous professional development for seafarers and maritime professionals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Connectivity */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Maritime Connectivity Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Reliable internet connectivity at sea is essential for modern shipping operations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>VSAT (Very Small Aperture Terminal)</strong>: Satellite-based broadband providing high-speed internet on vessels globally</li>
                  <li><strong>Fleet Broadband</strong>: Inmarsat FleetBroadband and similar services offering voice, data, and streaming capabilities</li>
                  <li><strong>LEO Satellite Constellations</strong>: Emerging low-earth orbit satellite networks like Starlink offering high-speed, low-latency maritime connectivity</li>
                  <li><strong>4G/5G Coastal Networks</strong>: Mobile connectivity in coastal waters and ports</li>
                  <li><strong>Hybrid Solutions</strong>: Combining multiple connectivity methods for redundancy and cost optimization</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  Enhanced connectivity enables crew welfare (internet access for personal use), operational efficiency (real-time data exchange), and safety (weather updates, navigation information).
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Cybersecurity */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Maritime Cybersecurity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  As maritime operations become increasingly digital, cybersecurity has become critical:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>IMO Guidelines</strong>: Resolution MSC.428(98) requires cyber risk management in ship safety management systems</li>
                  <li><strong>Threat Landscape</strong>: Ransomware attacks, GPS spoofing, ECDIS (Electronic Chart Display) manipulation, and phishing targeting maritime companies</li>
                  <li><strong>Best Practices</strong>: Network segmentation, regular software updates, access controls, employee training, and incident response plans</li>
                  <li><strong>Port Cybersecurity</strong>: Protection of port IT systems, terminal operating systems, and cargo handling equipment from cyber threats</li>
                  <li><strong>Third-party Risk</strong>: Managing cybersecurity risks from service providers, equipment vendors, and software suppliers</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

