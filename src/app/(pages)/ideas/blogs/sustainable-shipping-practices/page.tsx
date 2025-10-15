'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function SustainableShippingPracticesBlogPage() {
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
              <span className="text-white">Sustainable Shipping Practices</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/ideas/blogs">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-500 text-white">Sustainability</Badge>
              <Badge className="bg-blue-500 text-white">Environment</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Shipping Practices</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Michael Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Jan 5, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>7 min read</span>
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
                  As the maritime industry faces increasing pressure to reduce its environmental footprint, sustainable shipping practices have moved from optional initiatives to business imperatives. With shipping accounting for nearly 3% of global greenhouse gas emissions, the sector is embracing innovative technologies and operational practices to meet ambitious decarbonization goals while maintaining the efficiency that global trade demands.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">The Urgency of Maritime Decarbonization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The International Maritime Organization (IMO) has set ambitious targets to reduce greenhouse gas emissions from international shipping by at least 50% by 2050 compared to 2008 levels, with aspirations for complete decarbonization. The European Union&apos;s inclusion of shipping in its Emissions Trading System (ETS) and various national regulations are accelerating the timeline for change.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  These regulatory pressures, combined with growing customer demand for sustainable logistics solutions and investor focus on ESG (Environmental, Social, and Governance) criteria, are driving shipping companies to fundamentally rethink their operations and invest in cleaner technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Alternative Fuels: The Path Forward</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Liquefied Natural Gas (LNG)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      LNG has emerged as the most commercially viable alternative fuel in the near term, offering 20-25% reduction in CO2 emissions and near-elimination of sulfur oxides. Over 600 LNG-powered vessels are currently in operation or on order. However, LNG is considered a transition fuel, as methane slip during combustion and the fuel&apos;s fossil nature limit its long-term sustainability credentials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Methanol</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Methanol, particularly green methanol produced from renewable sources, is gaining significant traction. Maersk has committed to carbon-neutral methanol vessels, with several already in service. Methanol offers practical advantages including easier storage and bunkering compared to hydrogen, and existing engine technology can be adapted. The challenge lies in scaling up green methanol production.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ammonia</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Green ammonia (produced using renewable energy) is carbon-free and offers high energy density. Several ammonia-powered vessel projects are in development, primarily for deployment after 2025. Challenges include ammonia&apos;s toxicity, lower volumetric energy density than conventional fuels, and the need for new bunkering infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hydrogen</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      While hydrogen offers zero-emission potential, its low energy density and storage challenges make it more suitable for shorter routes. Several hydrogen-powered ferries and coastal vessels are operational, demonstrating the technology&apos;s viability for specific applications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Energy Efficiency Measures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Beyond alternative fuels, numerous operational and technical measures can significantly reduce fuel consumption:
                </p>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Slow Steaming:</strong> Reducing vessel speed by 10% can cut fuel consumption by 20-30%. Many shipping lines have optimized speeds to balance schedule reliability with fuel efficiency.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Hull Optimization:</strong> Advanced hull designs, air lubrication systems, and regular hull cleaning/coating reduce drag and improve fuel efficiency by 5-10%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Wind-Assisted Propulsion:</strong> Technologies like rotor sails, wing sails, and kites harness wind power, potentially reducing fuel consumption by 10-20% on suitable routes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>Waste Heat Recovery:</strong> Systems capturing and utilizing engine waste heat can improve overall energy efficiency by 5-10%.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span><strong>AI-Powered Route Optimization:</strong> Advanced algorithms analyze weather patterns, currents, and traffic to determine the most fuel-efficient routes, typically saving 3-5% on fuel.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Port Sustainability Initiatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ports play a crucial role in maritime sustainability:
                </p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span><strong>Shore Power:</strong> Onshore power supply (cold ironing) allows berthed vessels to shut down auxiliary engines, eliminating port emissions. Leading ports are mandating shore power connections for calling vessels.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span><strong>Green Port Certification:</strong> Programs like EcoPorts and Green Marine provide frameworks for environmental management, covering air quality, energy consumption, waste management, and biodiversity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3">•</span>
                    <span><strong>Renewable Energy:</strong> Ports are installing solar panels, wind turbines, and utilizing hydroelectric power to meet their energy needs sustainably.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Economic Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The transition to sustainable shipping requires massive investment. A typical LNG dual-fuel vessel costs 25-30% more than conventional vessels. Alternative fuels currently cost 2-4 times more than heavy fuel oil. However, these costs must be weighed against:
                </p>
                <ul className="space-y-2 text-lg text-gray-700">
                  <li>• Regulatory compliance costs and potential penalties</li>
                  <li>• Carbon pricing through ETS and similar mechanisms</li>
                  <li>• Enhanced corporate reputation and customer loyalty</li>
                  <li>• Long-term fuel price stability and security</li>
                  <li>• Access to green financing at favorable rates</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">The Way Forward</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Sustainable shipping requires a multi-pronged approach combining alternative fuels, energy efficiency measures, operational optimization, and port infrastructure development. There is no single solution - different vessel types, routes, and operators will adopt different strategies based on their specific circumstances.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Collaboration among shipowners, fuel suppliers, ports, regulators, and technology providers is essential. Industry initiatives like the Getting to Zero Coalition and various flag state programs are facilitating knowledge sharing and coordinated action.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The next decade will be crucial in determining the maritime industry&apos;s pathway to sustainability. Companies that invest early in green technologies, despite higher initial costs, will be better positioned for long-term success in an increasingly carbon-constrained world. The journey toward sustainable shipping has begun, and momentum is building across the industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

