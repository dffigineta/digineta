'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Truck, ArrowLeft } from 'lucide-react'

export default function LogisticsInfobankPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Knowledge Centre</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/infobank" className="hover:text-white">Infobank</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Logistics</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Truck className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maritime Logistics</h1>
            <p className="text-xl text-blue-100">Understanding supply chain, cargo handling, and multimodal transportation</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Maritime Logistics Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime logistics encompasses the planning, implementation, and control of cargo movement from origin to destination through sea transport. It integrates shipping, port operations, warehousing, and inland transportation to create efficient supply chains.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The logistics sector is crucial for international trade, with over 90% of global trade by volume being transported by sea. Efficient logistics reduces costs, improves delivery times, and enhances supply chain reliability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern logistics involves sophisticated information systems, real-time tracking, and coordination among multiple stakeholders including shippers, carriers, freight forwarders, customs authorities, and consignees.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Logistics Infrastructure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Logistics Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Container Freight Stations (CFS)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Facilities where Less than Container Load (LCL) cargo is consolidated or deconsolidated. CFS operations include cargo handling, storage, stuffing/destuffing of containers, and customs clearance services.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Inland Container Depots (ICD)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dry ports located in the hinterland connected to seaports via rail or road. ICDs provide customs clearance, container storage, and cargo consolidation services, reducing congestion at seaports and providing door-to-door services to exporters and importers.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Warehouses & Distribution Centers</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Storage facilities for goods before distribution to final destinations. Modern warehouses feature automation, inventory management systems, and value-added services like packaging, labeling, and quality control.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics Parks</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Integrated facilities combining warehousing, transportation, and value-added services in a single location. Multi-modal logistics parks provide connectivity to rail, road, and waterways, optimizing cargo movement and reducing logistics costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Logistics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Indian Logistics Sector</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  India&apos;s logistics sector is one of the largest in the world, contributing about 14% to the GDP. However, logistics costs in India are higher (13-14% of GDP) compared to developed countries (8-10%), indicating scope for improvement.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The government has launched the National Logistics Policy (NLP) to create a single-window e-logistics market and reduce logistics costs to single digits as a percentage of GDP. The policy focuses on process optimization, digitalization, and multimodal connectivity.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Major initiatives include development of Dedicated Freight Corridors (DFC), Sagarmala programme for port-led development, Bharatmala for highway development, and PM Gati Shakti for integrated infrastructure planning.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  India has established Special Economic Zones (SEZ) and Free Trade Warehousing Zones (FTWZ) to facilitate international trade and provide tax benefits for logistics operations.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Multimodal Transport */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Multimodal Transportation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Multimodal transport involves using two or more modes of transportation (sea, rail, road, air, inland waterways) under a single contract. Benefits include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li>Cost optimization through mode selection based on cargo characteristics</li>
                  <li>Faster transit times with efficient modal interchange</li>
                  <li>Reduced carbon footprint by utilizing rail and waterways</li>
                  <li>Single point of accountability with Multimodal Transport Operator (MTO)</li>
                  <li>Simplified documentation and customs procedures</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  India is developing multimodal logistics parks (MMLPs) at strategic locations to facilitate seamless cargo transfer between modes and reduce handling time and costs.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Technology in Logistics */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Digital Logistics & Technology</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Technology is revolutionizing maritime logistics:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>Logistics Visibility Platforms</strong>: Real-time tracking of cargo across modes and geographies</li>
                  <li><strong>Warehouse Management Systems (WMS)</strong>: Automated inventory control, order fulfillment, and space optimization</li>
                  <li><strong>Transport Management Systems (TMS)</strong>: Route planning, carrier selection, and freight cost management</li>
                  <li><strong>Blockchain</strong>: Transparent, secure documentation and smart contracts for trade finance</li>
                  <li><strong>IoT & Sensors</strong>: Condition monitoring for temperature-sensitive cargo and container security</li>
                  <li><strong>AI & Machine Learning</strong>: Demand forecasting, route optimization, and predictive analytics</li>
                  <li><strong>Robotics & Automation</strong>: Automated guided vehicles (AGVs), sorting systems, and robotic picking</li>
                  <li><strong>Digital Trade Platforms</strong>: Online marketplaces connecting shippers, carriers, and logistics providers</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

