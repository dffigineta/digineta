'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { TrendingUp, BarChart, Target, Users, DollarSign, FileText, Globe, Shield } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: "Company Valuation",
    description: "Comprehensive valuation analysis of maritime companies using multiple methodologies including DCF, comparable analysis, and asset-based valuation."
  },
  {
    icon: BarChart,
    title: "Financial Analysis",
    description: "In-depth financial statement analysis, ratio analysis, and performance benchmarking for maritime companies and investment opportunities."
  },
  {
    icon: Target,
    title: "Investment Recommendations",
    description: "Strategic investment recommendations with detailed buy/sell/hold ratings and price targets for maritime sector investments."
  },
  {
    icon: Users,
    title: "Sector Analysis",
    description: "Comprehensive analysis of maritime industry sectors including ports, shipping, logistics, and shipbuilding with investment outlook."
  },
  {
    icon: DollarSign,
    title: "Risk Assessment",
    description: "Detailed risk analysis including market risk, operational risk, regulatory risk, and financial risk assessment for investment decisions."
  },
  {
    icon: FileText,
    title: "Research Reports",
    description: "Detailed equity research reports covering company fundamentals, industry trends, and investment opportunities in maritime sectors."
  }
]

const researchTypes = [
  "Company Initiation Reports",
  "Quarterly Earnings Analysis",
  "Sector Outlook Reports",
  "Merger & Acquisition Analysis",
  "IPO Research & Valuation",
  "Private Equity Research",
  "Credit Analysis",
  "ESG Investment Analysis"
]

const sectors = [
  "Port Operators & Terminal Companies",
  "Shipping Lines & Fleet Operators",
  "Shipbuilding & Repair Companies",
  "Maritime Logistics & Warehousing",
  "Offshore & Energy Services",
  "Maritime Technology Companies",
  "Maritime Finance & Insurance",
  "Maritime Services & Consulting"
]

export default function EquityResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-violet-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-violet-200 text-sm font-medium px-3 py-1 bg-violet-800/30 rounded-full">
                Services &gt; Practice Area &gt; Equity Research
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Equity Research
            </h1>
            <p className="text-xl text-violet-100 leading-relaxed">
              Comprehensive investment analysis and equity research to identify 
              value opportunities and drive informed investment decisions in maritime sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-violet-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Equity Research"
                    width={400}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategic Investment Analysis
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our equity research services provide comprehensive investment analysis and 
                    valuation expertise for maritime companies and sectors. We combine fundamental 
                    analysis with industry expertise to deliver actionable investment insights 
                    and recommendations.
                  </p>
                  <p>
                    Our research covers company valuations, financial analysis, sector outlook, 
                    and investment recommendations, helping institutional investors, private equity 
                    firms, and corporate clients make informed investment decisions in maritime markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Equity Research Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment analysis solutions designed to identify value 
              opportunities and support informed investment decisions in maritime markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Types of Research We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {researchTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-violet-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Sectors We Analyze
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-violet-900 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Equity Research?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <BarChart className="w-12 h-12 text-violet-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Deep Industry Knowledge</h3>
                <p className="text-violet-100">Extensive maritime industry expertise and market insights</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-violet-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-violet-100">Clear investment recommendations with price targets</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Shield className="w-12 h-12 text-violet-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk-Adjusted Returns</h3>
                <p className="text-violet-100">Comprehensive risk assessment for informed investment decisions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-violet-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Unlock Investment Opportunities
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our equity research experts to identify value opportunities 
              and make informed investment decisions in maritime markets.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-violet-900 hover:bg-violet-50 font-semibold px-8 py-4"
              >
                Request Research Report
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
