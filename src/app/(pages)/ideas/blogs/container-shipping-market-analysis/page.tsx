'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function ContainerShippingMarketAnalysisBlogPage() {
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
              <span className="text-white">Container Shipping Market Analysis</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/ideas/blogs">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-500 text-white">Shipping</Badge>
              <Badge className="bg-blue-500 text-white">Market</Badge>
              <Badge className="bg-blue-500 text-white">Analysis</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Container Shipping Market Analysis</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Dr. Ramesh Singhal</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Dec 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>8 min read</span>
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
                  The container shipping market is the lifeblood of global trade, transporting approximately 60% of world seaborne trade by value. As we move through 2024-2025, the industry faces a complex landscape shaped by geopolitical tensions, supply chain restructuring, capacity dynamics, and evolving demand patterns. This comprehensive analysis examines current market conditions, freight rate trends, and the outlook for containerized trade.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Market Overview and Current Dynamics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The container shipping market has experienced extraordinary volatility over the past few years. After the pandemic-driven surge in freight rates and congestion, the market has normalized, but new challenges have emerged. Global container trade volume reached approximately 190 million TEUs in 2023, with modest growth expected to continue.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The three major shipping alliances - 2M (Maersk and MSC), Ocean Alliance (CMA CGM, COSCO, OOCL, Evergreen), and THE Alliance (Hapag-Lloyd, ONE, Yang Ming, HMM) - control over 80% of global container capacity on major trade lanes. This concentration has significant implications for pricing power and service offerings.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recent disruptions in the Red Sea due to Houthi attacks have forced carriers to reroute via the Cape of Good Hope, adding 10-14 days to Asia-Europe transit times and absorbing significant capacity, which has provided some support to freight rates.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Freight Rate Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Current Rate Environment</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      After the dramatic decline from pandemic peaks (where Shanghai-LA rates exceeded $15,000/FEU), spot rates have stabilized at more sustainable levels. As of late 2024, major trade lane spot rates are:
                    </p>
                    <ul className="mt-3 space-y-2 text-lg text-gray-700">
                      <li>• Asia-US West Coast: $2,000-2,500/FEU</li>
                      <li>• Asia-US East Coast: $3,500-4,000/FEU</li>
                      <li>• Asia-Europe: $1,800-2,200/FEU</li>
                      <li>• Transpacific Eastbound: $2,500-3,000/FEU</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Contract vs. Spot Market</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The relationship between contract and spot rates has normalized after pandemic disruptions. Contract rates for 2024-2025 typically reflect spot rate averages plus stability premiums. Major shippers increasingly favor multi-year agreements with volume commitments to secure capacity and pricing predictability.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Rate Determinants</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Several factors influence freight rates: bunker fuel costs (accounting for 20-30% of operating expenses), capacity deployment decisions by carriers, seasonal demand variations (peak season traditionally July-October), port congestion and schedule reliability, and operational costs including canal fees, port charges, and labor expenses.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Supply-Demand Dynamics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Capacity Supply</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-3">
                      The global container fleet stands at approximately 28 million TEU, with an orderbook of 7-8 million TEU (25-30% of existing fleet) scheduled for delivery through 2027. This unprecedented orderbook raises concerns about potential overcapacity.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      New vessels are significantly larger (24,000+ TEU mega-ships) and more fuel-efficient, but their deployment will add substantial capacity. Carriers are managing this through slow steaming, idling vessels, and scrapping older tonnage (typically 20+ years old).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Demand Outlook</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Container trade growth is closely correlated with global GDP and trade volumes. Forecasts suggest:
                    </p>
                    <ul className="mt-3 space-y-2 text-lg text-gray-700">
                      <li>• 2024-2025: 2-3% volume growth</li>
                      <li>• Long-term (2025-2030): 3-4% CAGR</li>
                      <li>• Intra-Asia and North-South trades showing stronger growth than traditional East-West lanes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Regional Trade Lane Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Transpacific Trade</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The Asia-US trade lane remains the world&apos;s largest containerized trade route, handling 25-30 million TEUs annually. US import demand, while moderating from pandemic peaks, remains strong. The shift from China to Vietnam, Thailand, and India for manufacturing (&quot;China+1&quot; strategy) is reshaping cargo origin patterns. Labor negotiations at US West Coast ports and East Coast infrastructure development continue to influence routing decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Asia-Europe Trade</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      This trade lane (15-20 million TEUs annually) faces unique challenges from Red Sea disruptions extending voyage times and consuming capacity. European import demand remains subdued due to economic headwinds and inflation. Carriers have introduced surcharges to offset longer routing costs. Northern European ports continue to gain share from Mediterranean gateways.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Intra-Asia Trade</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The largest trade region by volume (65-70 million TEUs), intra-Asia trade benefits from regional manufacturing integration and growing consumer markets. China&apos;s exports to Southeast Asia continue growing strongly. India&apos;s emergence as a manufacturing hub is creating new intra-regional trade flows.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Industry Consolidation and Market Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The container shipping industry has undergone significant consolidation over the past decade. The top 10 carriers now control over 85% of global capacity, up from 70% a decade ago. This consolidation has several implications:
                </p>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Pricing Power:</strong> Carriers have greater ability to manage capacity and influence freight rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Service Quality:</strong> Schedule reliability has improved to 55-60% from pandemic lows of 30%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Vertical Integration:</strong> Carriers investing in terminals, logistics, and inland transportation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3">•</span>
                    <span><strong>Customer Relationships:</strong> Shift toward long-term partnerships rather than transactional spot market dealings</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Key Risks and Uncertainties</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li>• <strong>Economic Recession:</strong> Global economic slowdown could significantly impact demand</li>
                  <li>• <strong>Overcapacity:</strong> Large orderbook deliveries may exceed demand growth</li>
                  <li>• <strong>Geopolitical Tensions:</strong> US-China relations, regional conflicts affecting trade routes</li>
                  <li>• <strong>Environmental Regulations:</strong> Increasing costs from emissions compliance and carbon pricing</li>
                  <li>• <strong>Fuel Price Volatility:</strong> Bunker costs remain major expense and uncertainty factor</li>
                  <li>• <strong>Port Congestion:</strong> Labor disputes and infrastructure constraints causing delays</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}>
            <Card className="border-0 shadow-xl mb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Outlook and Conclusions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The container shipping market is entering a period of more balanced supply-demand conditions after years of volatility. Freight rates are likely to remain in the $2,000-3,500/FEU range for major trades, with seasonal variations and disruption-driven spikes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The industry&apos;s ability to manage capacity through slow steaming, idling, and alliance coordination will be crucial in avoiding destructive rate wars as new vessels deliver. Carriers&apos; improved financial discipline and focus on long-term customer relationships suggest a more stable market environment compared to pre-pandemic volatility.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  For shippers, the current market offers opportunities to negotiate favorable multi-year contracts while rates are relatively stable. However, maintaining supply chain resilience through carrier diversification and flexible logistics strategies remains important given persistent uncertainty.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The next 2-3 years will be critical in determining whether the industry can maintain profitability and rational capacity management, or if competitive pressures lead to another cycle of oversupply and rate deterioration. Early indicators suggest carriers are committed to disciplined capacity growth, but this resolve will be tested as new mega-ships deliver and economic conditions evolve.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

