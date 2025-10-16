'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { CheckCircle, DollarSign, BarChart, Users, Globe, FileText, Target, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: CheckCircle,
    title: "Project Feasibility Assessment",
    description: "Comprehensive evaluation of project viability, technical feasibility, market potential, and financial sustainability for maritime ventures."
  },
  {
    icon: DollarSign,
    title: "Financial Feasibility Analysis",
    description: "Detailed financial modeling including cost-benefit analysis, ROI calculations, payback periods, and sensitivity analysis."
  },
  {
    icon: BarChart,
    title: "Market Feasibility Studies",
    description: "Market demand analysis, competitive assessment, pricing strategies, and revenue potential evaluation for new projects."
  },
  {
    icon: Users,
    title: "Technical Feasibility Studies",
    description: "Engineering feasibility assessment, technology evaluation, regulatory compliance analysis, and implementation planning."
  },
  {
    icon: Globe,
    title: "Environmental Feasibility",
    description: "Environmental impact assessment, sustainability analysis, regulatory compliance, and risk mitigation strategies."
  },
  {
    icon: FileText,
    title: "Investment Feasibility Reports",
    description: "Comprehensive investment feasibility reports for stakeholders, investors, and financial institutions."
  }
]

const studyTypes = [
  "Port Development Feasibility",
  "Terminal Expansion Feasibility",
  "Shipyard Development Feasibility",
  "Maritime Infrastructure Feasibility",
  "Logistics Hub Feasibility",
  "Maritime Technology Feasibility",
  "Offshore Project Feasibility",
  "Maritime Service Feasibility"
]

const deliverables = [
  "Executive Summary",
  "Market Analysis & Demand Assessment",
  "Technical Feasibility Assessment",
  "Financial Analysis & Projections",
  "Risk Analysis & Mitigation",
  "Implementation Plan & Timeline",
  "Investment Requirements",
  "Recommendations & Next Steps"
]

export default function FeasibilityStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-teal-200 text-sm font-medium px-3 py-1 bg-teal-800/30 rounded-full">
                Services &gt; Practice Area &gt; Feasibility Studies
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Feasibility Studies
            </h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Comprehensive project feasibility and viability assessment to validate 
              maritime investments and ensure successful project implementation.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Feasibility Analysis"
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
                  Strategic Feasibility Assessment
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our feasibility studies provide comprehensive evaluation of maritime project 
                    viability across multiple dimensions including market potential, technical 
                    feasibility, financial sustainability, and risk assessment. We help clients 
                    make informed investment decisions and avoid costly project failures.
                  </p>
                  <p>
                    Our studies combine rigorous analysis with industry expertise to deliver 
                    actionable insights that support strategic decision-making and secure 
                    stakeholder confidence in project investments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Feasibility Study Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive feasibility assessment solutions covering all critical aspects 
              of maritime project evaluation and investment decision-making.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Study Types Section */}
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
              Feasibility Study Types
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {studyTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-teal-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Feasibility Study Deliverables
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-cyan-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Our Feasibility Study Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-teal-200 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-2">Project Scoping</h3>
                <p className="text-teal-100 text-sm">Define project scope, objectives, and evaluation criteria</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-teal-200 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                <p className="text-teal-100 text-sm">Gather market, technical, and financial data</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-teal-200 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-teal-100 text-sm">Comprehensive feasibility analysis across all dimensions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-teal-200 text-teal-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                <p className="text-teal-100 text-sm">Deliver comprehensive feasibility report with recommendations</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-teal-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Validate Your Maritime Investment
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get comprehensive feasibility analysis to ensure your maritime project 
              investment is sound and aligned with market opportunities.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-teal-900 hover:bg-teal-50 font-semibold px-8 py-4"
              >
                Request Feasibility Study
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
