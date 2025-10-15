'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function FutureOfPortAutomationBlogPage() {
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
              <span className="text-white">The Future of Port Automation</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/ideas/blogs">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-500 text-white">Automation</Badge>
              <Badge className="bg-blue-500 text-white">Technology</Badge>
              <Badge className="bg-blue-500 text-white">Ports</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">The Future of Port Automation</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Sarah Johnson</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Jan 10, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>6 min read</span>
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
                  Port automation is transforming the maritime logistics landscape, promising unprecedented efficiency gains, enhanced safety, and significant cost reductions. As global trade volumes continue to grow and labor costs increase, ports worldwide are embracing automation technologies to remain competitive. This article explores how automation and artificial intelligence are revolutionizing port operations and what the future holds for automated terminals.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">The Automation Revolution in Ports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Port automation has evolved from simple mechanization to sophisticated systems incorporating robotics, AI, and IoT. Today&apos;s automated ports feature integrated systems that orchestrate complex operations with minimal human intervention.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Leading examples include Rotterdam&apos;s Maasvlakte II terminal, Singapore&apos;s Tuas Port, and China&apos;s Yangshan Port - all showcasing how automation can dramatically improve productivity. These facilities handle thousands of containers daily with remarkable precision and speed.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Key Automation Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Automated Stacking Cranes (ASCs)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Rail-mounted gantry cranes that automatically stack and retrieve containers in the yard. These systems operate 24/7 with high precision, maximizing yard density and throughput. Modern ASCs feature collision avoidance systems, real-time positioning, and predictive maintenance capabilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Automated Guided Vehicles (AGVs)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Battery-powered vehicles that transport containers between quayside and yard without drivers. AGVs follow magnetic markers or use GPS navigation, optimizing routes in real-time to minimize congestion. Next-generation AGVs can automatically recharge, further reducing operational interruptions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Remote-Controlled Ship-to-Shore Cranes</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Operators control massive quayside cranes from comfortable control rooms using cameras and sensors, eliminating the need to climb into crane cabins. Advanced systems incorporate anti-sway technology and semi-autonomous container handling, with operators primarily supervising operations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Terminal Operating Systems (TOS)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Sophisticated software platforms that coordinate all terminal operations - from vessel planning to yard management. Modern TOS use AI and machine learning to optimize container placement, minimize reshuffling, and predict equipment maintenance needs.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Benefits of Port Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Increased Productivity:</strong> Automated terminals can achieve 30-50% higher container moves per hour compared to conventional terminals. Operations continue 24/7 without fatigue-related productivity drops.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Enhanced Safety:</strong> Removing humans from hazardous environments significantly reduces workplace accidents. Automated equipment operates with greater precision, minimizing damage to containers and infrastructure.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Cost Efficiency:</strong> While initial investment is high, automated terminals achieve lower operating costs through reduced labor expenses, optimized equipment utilization, and predictive maintenance.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Environmental Benefits:</strong> Electric AGVs produce zero emissions, while optimized operations reduce energy consumption. Automated terminals typically have 20-30% lower carbon footprint per container move.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Data-Driven Operations:</strong> Automation generates vast amounts of operational data, enabling continuous improvement through analytics and machine learning insights.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Challenges and Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Despite compelling benefits, port automation faces significant challenges:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>High Capital Investment:</strong> Automated terminals require $500 million to over $1 billion in initial investment, with payback periods of 10-15 years. This makes automation viable primarily for new terminals or major expansions.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Labor Relations:</strong> Automation raises concerns about job displacement. Ports must navigate complex relationships with labor unions and develop transition plans including retraining programs for workers moving into supervisory and maintenance roles.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  <strong>Technology Integration:</strong> Integrating various automated systems and ensuring seamless communication between equipment, software, and legacy systems requires sophisticated engineering and ongoing technical support.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Flexibility Limitations:</strong> Automated terminals are optimized for standard operations but may struggle with exceptions and unusual situations that human operators handle intuitively.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Card className="border-0 shadow-xl mb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">The Road Ahead</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The future of port automation will likely feature hybrid models combining automation&apos;s efficiency with human expertise. Semi-automated terminals, where critical decisions remain with human operators while routine tasks are automated, may represent the optimal balance for many facilities.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Emerging technologies like 5G connectivity, edge computing, and advanced AI will enable even more sophisticated automation. Digital twins - virtual replicas of physical terminals - will allow operators to test scenarios and optimize operations before implementing changes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As automation technology matures and becomes more affordable, we can expect wider adoption across ports of all sizes. The ports that successfully implement automation while managing the human and social dimensions will gain significant competitive advantages in the increasingly demanding global logistics landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

