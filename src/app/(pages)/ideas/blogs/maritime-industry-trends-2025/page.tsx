'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function MaritimeIndustryTrends2025BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/ideas" className="hover:text-white">i-deas</Link>
              <span className="mx-2">›</span>
              <Link href="/ideas/blogs" className="hover:text-white">Blogs</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Maritime Industry Trends for 2025</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/ideas/blogs">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-500 text-white">Trends</Badge>
              <Badge className="bg-blue-500 text-white">Industry</Badge>
              <Badge className="bg-blue-500 text-white">Analysis</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maritime Industry Trends for 2025</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Dr. Ramesh Singhal</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Jan 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>5 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The maritime industry is undergoing unprecedented transformation as we enter 2025. From digitalization and sustainability initiatives to emerging technologies and new business models, the sector is evolving rapidly to meet the challenges of modern global trade. This article explores the key trends that will shape the maritime industry in 2025 and beyond.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">1. Decarbonization and Green Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The push towards decarbonization continues to dominate the maritime agenda. With the International Maritime Organization&apos;s (IMO) 2050 greenhouse gas reduction targets, shipping companies are accelerating investments in alternative fuels and energy-efficient technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Alternative Fuels:</strong> LNG, methanol, ammonia, and hydrogen are gaining traction as viable alternatives to conventional marine fuel. Major shipping lines are placing orders for dual-fuel vessels capable of operating on these cleaner fuels. Methanol-powered vessels are particularly gaining popularity, with several container ships already in operation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Energy Efficiency:</strong> Advanced hull designs, air lubrication systems, wind-assisted propulsion (rotor sails, kites), and AI-optimized route planning are helping reduce fuel consumption by 20-30%. Shore power connections at ports are becoming standard, eliminating emissions during berthing.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">2. Digital Transformation and Smart Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Digital technologies are revolutionizing maritime operations from ship to shore. The industry is embracing digitalization across all segments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Autonomous and Remote-Controlled Vessels:</strong> While fully autonomous ships are still in development, remote monitoring and assistance systems are becoming common. Several coastal and short-sea shipping routes are testing autonomous vessel technologies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>IoT and Predictive Maintenance:</strong> Sensors throughout vessels provide real-time data on machinery performance, enabling predictive maintenance and reducing costly breakdowns. This approach can reduce maintenance costs by 15-25% while improving vessel reliability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Blockchain and Digital Documentation:</strong> Platforms like TradeLens are streamlining documentation processes, reducing paperwork, and improving supply chain transparency. Smart contracts are automating charter agreements and payment processes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">3. Port Automation and Smart Terminals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ports worldwide are investing heavily in automation to improve efficiency and reduce operational costs. Automated container terminals using automated guided vehicles (AGVs), automated stacking cranes, and remote-controlled ship-to-shore cranes are becoming the norm in new terminal developments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Port Community Systems (PCS) are integrating all port stakeholders - shipping lines, terminal operators, customs, freight forwarders, and trucking companies - on single digital platforms, dramatically reducing cargo dwell time and improving supply chain visibility.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">4. Supply Chain Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Recent global disruptions have highlighted the need for more resilient supply chains. Companies are diversifying their supplier base, nearshoring production, and investing in inventory buffers. The maritime industry is responding with more flexible service offerings and enhanced visibility tools.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Real-time tracking systems, advanced analytics, and scenario planning tools are helping shippers and carriers anticipate and respond to disruptions more effectively.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">5. Consolidation and Strategic Alliances</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The container shipping industry continues to consolidate, with major alliances controlling over 80% of global container capacity. This trend is extending to other maritime sectors including bulk shipping and offshore support vessels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Strategic partnerships between shipping lines, ports, and logistics providers are creating integrated end-to-end supply chain solutions, offering customers seamless service from factory to final destination.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Conclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The maritime industry in 2025 is characterized by rapid technological advancement, environmental consciousness, and increasing customer expectations for service quality and transparency. Companies that successfully navigate these trends—investing in green technologies, embracing digitalization, building resilient operations, and forming strategic partnerships—will be well-positioned for long-term success in the evolving maritime landscape.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  The next decade will see continued transformation as the industry works towards sustainability goals while maintaining its critical role in global trade. Innovation, collaboration, and adaptability will be key success factors for maritime stakeholders.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

