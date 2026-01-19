'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DollarSign, Building, Users, Target, TrendingUp, FileText, Globe, Shield } from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: "Fund Raising Strategy",
    description: "Strategic planning and execution of fund raising campaigns for maritime infrastructure projects, including debt and equity financing."
  },
  {
    icon: Building,
    title: "Financial Structuring",
    description: "Optimal financial structuring for maritime projects including debt-equity ratios, repayment schedules, and risk allocation."
  },
  {
    icon: Users,
    title: "Investor Relations",
    description: "Building relationships with financial institutions, private equity firms, and infrastructure funds for project financing."
  },
  {
    icon: Target,
    title: "Syndication Management",
    description: "Managing complex syndication processes involving multiple lenders and investors for large-scale maritime projects."
  },
  {
    icon: TrendingUp,
    title: "Financial Modeling",
    description: "Sophisticated financial models and projections to support fund raising efforts and investor presentations."
  },
  {
    icon: FileText,
    title: "Documentation & Compliance",
    description: "Preparation of financial documentation, due diligence materials, and regulatory compliance for funding transactions."
  }
]

const fundingTypes = [
  "Project Finance",
  "Corporate Finance",
  "Infrastructure Finance",
  "Private Equity",
  "Debt Syndication",
  "Mezzanine Financing",
  "Export Credit Agency (ECA) Financing",
  "Multilateral Development Bank Financing"
]

const sectors = [
  "Port Development & Expansion",
  "Terminal Operations & Infrastructure",
  "Shipbuilding & Repair Facilities",
  "Maritime Logistics & Warehousing",
  "Offshore & Energy Infrastructure",
  "Maritime Technology & Innovation",
  "Shipping Fleet Acquisition",
  "Maritime Services & Operations"
]

export default function FundSyndicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-amber-900 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-amber-200 text-sm font-medium px-3 py-1 bg-amber-800/30 rounded-full">
                Services &gt; Practice Area &gt; Fund Syndication
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fund Syndication
            </h1>
            <p className="text-xl text-amber-100 leading-relaxed">
              Strategic financial structuring and fund syndication services to secure 
              optimal financing for maritime infrastructure projects and investments.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-amber-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Fund Syndication"
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
                  Expert Financial Structuring & Syndication
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our fund syndication services help maritime companies secure optimal financing 
                    for infrastructure projects, fleet acquisitions, and business expansion. We 
                    leverage our extensive network of financial institutions and investors to 
                    structure and execute complex funding transactions.
                  </p>
                  <p>
                    With deep expertise in maritime finance and infrastructure funding, we provide 
                    end-to-end support from initial structuring through successful fund raising, 
                    ensuring competitive terms and optimal risk allocation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Fund Syndication Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial services designed to secure optimal funding 
              solutions for maritime infrastructure projects and business growth.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Funding Types Section */}
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
              Funding Solutions We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {fundingTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Sectors We Finance
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
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Fund Syndication Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Globe className="w-12 h-12 text-amber-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-amber-100">Extensive network of international financial institutions and investors</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Shield className="w-12 h-12 text-amber-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
                <p className="text-amber-100">Expert risk assessment and optimal risk allocation strategies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-amber-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Competitive Terms</h3>
                <p className="text-amber-100">Negotiate optimal financing terms and conditions</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-amber-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Optimal Financing
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our fund syndication experts to secure competitive financing 
              for your maritime infrastructure projects and business expansion initiatives.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-amber-900 hover:bg-amber-50 font-semibold px-8 py-4"
              >
                Discuss Funding Options
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
