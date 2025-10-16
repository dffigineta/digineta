'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Building, Users, Target, TrendingUp, DollarSign, Globe, Shield, FileText } from 'lucide-react'

const services = [
  {
    icon: Building,
    title: "M&A Strategy & Advisory",
    description: "Strategic advisory services for mergers, acquisitions, and divestitures in the maritime industry, including deal structuring and execution."
  },
  {
    icon: Users,
    title: "Due Diligence",
    description: "Comprehensive due diligence services including financial, operational, legal, and commercial assessment of target companies."
  },
  {
    icon: Target,
    title: "Valuation Services",
    description: "Professional valuation services for maritime companies and assets using multiple methodologies including DCF, comparable analysis, and asset-based valuation."
  },
  {
    icon: TrendingUp,
    title: "Transaction Management",
    description: "End-to-end transaction management including deal sourcing, negotiation, documentation, and closing for maritime M&A transactions."
  },
  {
    icon: DollarSign,
    title: "Financial Modeling",
    description: "Sophisticated financial modeling and analysis including merger models, accretion/dilution analysis, and synergy assessment."
  },
  {
    icon: Globe,
    title: "Cross-Border Transactions",
    description: "International M&A advisory services including cross-border deal structuring, regulatory compliance, and cultural integration planning."
  }
]

const transactionTypes = [
  "Strategic Acquisitions",
  "Private Equity Investments",
  "Divestitures & Spin-offs",
  "Joint Ventures & Partnerships",
  "Management Buyouts",
  "Recapitalizations",
  "Hostile Takeovers Defense",
  "Cross-Border Mergers"
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

export default function MAAdvisoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-indigo-200 text-sm font-medium px-3 py-1 bg-indigo-800/30 rounded-full">
                Services &gt; Practice Area &gt; M&A Advisory
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              M&A Advisory
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Strategic mergers and acquisitions advisory services for the maritime industry, 
              providing expertise in deal structuring, valuation, and transaction execution.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="M&A Advisory"
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
                  Strategic M&A Excellence in Maritime
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our M&A advisory services provide comprehensive support for mergers, acquisitions, 
                    and divestitures in the maritime industry. We combine deep industry expertise with 
                    proven transaction experience to deliver successful outcomes for our clients.
                  </p>
                  <p>
                    Our team works with maritime companies, private equity firms, and institutional 
                    investors to identify opportunities, structure transactions, and execute deals 
                    that create sustainable value and competitive advantages.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our M&A Advisory Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive M&A advisory solutions designed to identify opportunities, 
              structure transactions, and execute successful deals in the maritime industry.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Transaction Types Section */}
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
              Transaction Types We Handle
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {transactionTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Sectors We Serve
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Our M&A Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-2">Strategy & Planning</h3>
                <p className="text-indigo-100 text-sm">Define M&A strategy and identify target opportunities</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-2">Due Diligence</h3>
                <p className="text-indigo-100 text-sm">Comprehensive financial, operational, and legal assessment</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-2">Negotiation</h3>
                <p className="text-indigo-100 text-sm">Strategic negotiation and deal structuring</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-2">Execution</h3>
                <p className="text-indigo-100 text-sm">Transaction execution and post-merger integration</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Execute Strategic Transactions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our M&A advisory experts to identify opportunities, structure deals, 
              and execute successful transactions in the maritime industry.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4"
              >
                Discuss M&A Opportunities
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
