'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { DollarSign, Building, Users, Target, TrendingUp, Globe, Shield, FileText } from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: "Infrastructure Finance Advisory",
    description: "Strategic financial advisory services for large-scale maritime infrastructure projects including funding strategy and financial structuring."
  },
  {
    icon: Building,
    title: "Project Finance Solutions",
    description: "Comprehensive project finance solutions for port development, terminal construction, and maritime infrastructure investments."
  },
  {
    icon: Users,
    title: "Investor Relations",
    description: "Building and managing relationships with infrastructure investors, pension funds, and sovereign wealth funds for project funding."
  },
  {
    icon: Target,
    title: "Financial Structuring",
    description: "Optimal financial structuring for maritime infrastructure projects including debt-equity optimization and risk allocation."
  },
  {
    icon: TrendingUp,
    title: "Capital Market Access",
    description: "Access to capital markets including bond issuance, equity placement, and alternative financing solutions for infrastructure projects."
  },
  {
    icon: Globe,
    title: "International Finance",
    description: "International financing solutions including export credit agency financing, multilateral development bank funding, and cross-border transactions."
  }
]

const financingTypes = [
  "Project Finance",
  "Infrastructure Bonds",
  "Private Equity",
  "Sovereign Wealth Fund Investment",
  "Export Credit Agency Financing",
  "Multilateral Development Bank Funding",
  "Commercial Bank Lending",
  "Alternative Financing Solutions"
]

const sectors = [
  "Port Development & Expansion",
  "Terminal Infrastructure",
  "Shipbuilding & Repair Facilities",
  "Maritime Logistics Infrastructure",
  "Offshore Energy Infrastructure",
  "Maritime Technology Infrastructure",
  "Shipping Fleet Investment",
  "Maritime Services Infrastructure"
]

export default function InfrastructureFinancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-sky-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-sky-200 text-sm font-medium px-3 py-1 bg-sky-800/30 rounded-full">
                Services &gt; Practice Area &gt; Infrastructure Finance Advisory
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Infrastructure Finance Advisory
            </h1>
            <p className="text-xl text-sky-100 leading-relaxed">
              Strategic financial advisory services for maritime infrastructure projects, 
              providing access to capital markets and optimal financing solutions.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-sky-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Infrastructure Finance"
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
                  Strategic Infrastructure Finance Solutions
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our infrastructure finance advisory services provide strategic financial 
                    solutions for large-scale maritime infrastructure projects. We help clients 
                    access capital markets, structure optimal financing arrangements, and secure 
                    funding from diverse sources including institutional investors, development 
                    banks, and commercial lenders.
                  </p>
                  <p>
                    With deep expertise in maritime infrastructure finance and extensive relationships 
                    with global financial institutions, we deliver comprehensive advisory services 
                    that ensure successful project financing and optimal financial outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Infrastructure Finance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial advisory solutions designed to secure optimal funding 
              for maritime infrastructure projects and ensure successful financial outcomes.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Financing Types Section */}
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
              Financing Solutions We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {financingTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-sky-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Infrastructure Sectors
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
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-sky-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Infrastructure Finance Advisory?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Globe className="w-12 h-12 text-sky-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Network</h3>
                <p className="text-sky-100">Extensive network of international financial institutions and investors</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Shield className="w-12 h-12 text-sky-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Risk Management</h3>
                <p className="text-sky-100">Expert risk assessment and optimal risk allocation strategies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-sky-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Optimal Structuring</h3>
                <p className="text-sky-100">Strategic financial structuring for maximum efficiency and returns</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-sky-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Infrastructure Funding
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our infrastructure finance experts to secure optimal funding 
              solutions for your maritime infrastructure projects and achieve financial success.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-sky-900 hover:bg-sky-50 font-semibold px-8 py-4"
              >
                Discuss Financing Options
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
