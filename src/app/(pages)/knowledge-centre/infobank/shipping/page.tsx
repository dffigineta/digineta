'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Ship, ArrowLeft } from 'lucide-react'

export default function ShippingInfobankPage() {
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
              <span className="text-white">Shipping</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <Ship className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shipping Industry Information</h1>
            <p className="text-xl text-blue-100">Insights into maritime shipping, vessel types, and industry dynamics</p>
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
                <CardTitle className="text-3xl text-gray-900">Global Shipping Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The shipping industry is the backbone of global trade, transporting approximately 90% of world trade by volume. It is one of the most international industries, operating across borders and connecting economies worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The global shipping fleet consists of over 100,000 commercial vessels, ranging from small coastal vessels to mega container ships and oil tankers. The industry employs more than 1.5 million seafarers and supports millions of jobs worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime shipping is highly competitive and cyclical, with freight rates influenced by global economic conditions, fuel prices, supply-demand dynamics, and geopolitical events.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Shipping */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Indian Shipping Sector</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  India has a strong maritime tradition dating back thousands of years. Today, the Indian shipping industry comprises approximately 1,400 vessels with a total deadweight tonnage of around 13 million DWT.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Indian-flagged fleet carries about 7-8% of India&apos;s overseas trade by volume, while foreign-flagged vessels handle the majority. The government has been promoting the &quot;Make in India&quot; initiative and incentivizing domestic shipping to increase this percentage.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Major Indian shipping companies include Shipping Corporation of India (SCI), Great Eastern Shipping Company, Essar Shipping, Mercator Limited, and Varun Shipping Company. These companies operate various types of vessels including tankers, bulk carriers, container ships, and specialized vessels.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Vessel Types */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Types of Vessels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Container Ships</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Designed to carry standardized containers (TEUs - Twenty-foot Equivalent Units). Modern ultra-large container vessels (ULCVs) can carry over 24,000 TEUs. These ships revolutionized global trade with efficient intermodal transportation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bulk Carriers</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Transport unpackaged bulk cargo such as coal, iron ore, grain, and cement. Categories include Handysize (10,000-35,000 DWT), Handymax (35,000-60,000 DWT), Panamax (60,000-80,000 DWT), and Capesize (over 100,000 DWT).
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tankers</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Designed to transport liquid cargo including crude oil, petroleum products, chemicals, and LNG (Liquefied Natural Gas). Oil tankers range from small product tankers to Very Large Crude Carriers (VLCCs) exceeding 300,000 DWT.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Vessels</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Include RoRo (Roll-on/Roll-off) vessels for vehicles, LNG carriers, offshore support vessels, heavy-lift ships, refrigerated cargo ships (reefers), and passenger vessels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Regulations */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Maritime Regulations & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The International Maritime Organization (IMO) is the United Nations specialized agency responsible for regulating shipping. Key conventions include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>SOLAS</strong> (Safety of Life at Sea): Sets minimum safety standards for construction, equipment, and operation of ships</li>
                  <li><strong>MARPOL</strong> (Marine Pollution): Prevents pollution from ships including oil, chemicals, sewage, and garbage</li>
                  <li><strong>STCW</strong> (Standards of Training, Certification and Watchkeeping): Establishes qualification standards for seafarers</li>
                  <li><strong>ISM Code</strong> (International Safety Management): Provides standards for safe management and operation of ships</li>
                  <li><strong>ISPS Code</strong> (International Ship and Port Facility Security): Addresses ship and port facility security</li>
                </ul>
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
                <CardTitle className="text-3xl text-gray-900">Future of Shipping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The shipping industry is undergoing significant transformation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>Decarbonization</strong>: IMO 2050 targets require 50% reduction in greenhouse gas emissions. Alternative fuels including LNG, hydrogen, ammonia, and methanol are being developed</li>
                  <li><strong>Digitalization</strong>: Smart ships with IoT sensors, predictive maintenance, and autonomous navigation systems</li>
                  <li><strong>Big Data & AI</strong>: Route optimization, predictive analytics for maintenance, and improved supply chain visibility</li>
                  <li><strong>Blockchain</strong>: Digital documentation, smart contracts, and transparent supply chains</li>
                  <li><strong>Autonomous Ships</strong>: Development of unmanned vessels for specific routes and operations</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

