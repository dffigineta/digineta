'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Wrench, ArrowLeft } from 'lucide-react'

export default function ShipyardInfobankPage() {
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
              <span className="text-white">Shipyard</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Wrench className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipbuilding & Repair</h1>
            <p className="text-xl text-blue-100">Comprehensive guide to shipyards, shipbuilding, and ship repair industry</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Global Industry */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Global Shipbuilding Industry</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The global shipbuilding industry is dominated by East Asian countries, particularly China, South Korea, and Japan, which together account for over 90% of global ship production by tonnage. These countries have developed world-class infrastructure, advanced technology, and skilled workforce.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The industry is highly capital-intensive and cyclical, closely tied to global trade patterns and economic conditions. Shipbuilding orders fluctuate based on freight rates, commodity prices, and fleet replacement needs.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern shipyards are adopting advanced technologies including modular construction, robotics, 3D design, and digital twins to improve efficiency and reduce construction time. Some of the largest shipyards can build vessels exceeding 400,000 DWT.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Shipbuilding */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Indian Shipbuilding Sector</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  India has a rich history of shipbuilding dating back thousands of years. The modern Indian shipbuilding industry comprises several public and private sector shipyards with capabilities ranging from small vessels to large merchant ships and naval vessels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Major Indian shipyards include Cochin Shipyard Limited (CSL), Mazagon Dock Shipbuilders Limited (MDL), Garden Reach Shipbuilders & Engineers (GRSE), Goa Shipyard Limited (GSL), Hindustan Shipyard Limited (HSL), and several private yards like Larsen & Toubro Shipbuilding and Pipavav Defence & Offshore Engineering.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Indian government has launched the Shipbuilding Financial Assistance Policy to promote domestic shipbuilding and make Indian shipyards globally competitive. The policy provides financial assistance to Indian shipyards to bridge the price gap with foreign yards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  India&apos;s shipbuilding industry has strong capabilities in building specialized vessels including offshore supply vessels, dredgers, tugs, and defense vessels. The country is also developing capabilities in building large merchant ships and offshore platforms.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Types of Shipyards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Types of Shipyards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">New Construction Yards</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Specialized facilities for building new ships from scratch. These yards require extensive infrastructure including dry docks, slipways, heavy-lift cranes, fabrication shops, and assembly areas. They employ thousands of workers including engineers, welders, electricians, and technicians.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ship Repair Yards</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Focus on maintenance, repair, and conversion of existing vessels. Services include hull repairs, engine overhauls, equipment replacement, painting, and dry-docking services. India has several well-equipped ship repair facilities in Mumbai, Cochin, Vizag, and other port cities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Offshore Yards</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Specialized in building offshore structures including oil rigs, FPSOs (Floating Production Storage and Offloading units), jack-up platforms, and offshore support vessels. These require advanced engineering capabilities and specialized equipment.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Naval Dockyards</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Government-owned facilities dedicated to building and maintaining naval vessels including warships, submarines, and patrol boats. These yards have stringent security requirements and specialized capabilities for defense equipment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Shipbuilding Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Shipbuilding Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Modern shipbuilding follows a systematic approach:
                </p>
                <ol className="list-decimal pl-6 space-y-3 text-lg text-gray-700">
                  <li><strong>Design & Engineering</strong>: Detailed design using CAD/CAM systems, structural analysis, and hydrodynamic testing</li>
                  <li><strong>Steel Cutting & Fabrication</strong>: Automated cutting of steel plates and assembly of sections</li>
                  <li><strong>Pre-Assembly</strong>: Creation of large modules including compartments and systems</li>
                  <li><strong>Block Assembly</strong>: Joining modules to form larger blocks</li>
                  <li><strong>Erection</strong>: Assembly of blocks on the building berth or dry dock</li>
                  <li><strong>Launching</strong>: Transfer of the vessel to water</li>
                  <li><strong>Outfitting</strong>: Installation of machinery, equipment, and systems</li>
                  <li><strong>Sea Trials</strong>: Testing of all systems and performance verification</li>
                  <li><strong>Delivery</strong>: Handover to the shipowner after successful trials</li>
                </ol>
              </CardContent>
            </Card>
          </motion.section>

          {/* Future Trends */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Innovation & Future Trends</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The shipbuilding industry is embracing new technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>Green Shipbuilding</strong>: Eco-friendly vessels with alternative propulsion systems and energy-efficient designs</li>
                  <li><strong>Smart Manufacturing</strong>: Industry 4.0 technologies including robotics, automation, and AI</li>
                  <li><strong>Digital Twins</strong>: Virtual replicas for design optimization and performance prediction</li>
                  <li><strong>Advanced Materials</strong>: High-strength steel, composites, and corrosion-resistant alloys</li>
                  <li><strong>Modular Construction</strong>: Pre-fabricated modules for faster construction and quality control</li>
                  <li><strong>LNG-ready Designs</strong>: Vessels prepared for alternative fuel conversion</li>
                  <li><strong>Autonomous Vessels</strong>: Development of unmanned ship technologies</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

