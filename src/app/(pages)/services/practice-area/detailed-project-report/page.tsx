'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FileText, CheckCircle, BarChart, Users, DollarSign, Globe, Target, Wrench } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: "Comprehensive DPR Development",
    description: "Detailed project reports covering all aspects of maritime infrastructure projects including technical, financial, and operational planning."
  },
  {
    icon: BarChart,
    title: "Technical Documentation",
    description: "Complete technical specifications, engineering designs, implementation plans, and operational procedures for maritime projects."
  },
  {
    icon: DollarSign,
    title: "Financial Projections",
    description: "Detailed financial modeling including capital expenditure, operational costs, revenue projections, and return on investment analysis."
  },
  {
    icon: Users,
    title: "Project Implementation Planning",
    description: "Comprehensive implementation roadmap including timelines, resource allocation, risk management, and quality assurance protocols."
  },
  {
    icon: Globe,
    title: "Regulatory Compliance",
    description: "Ensuring compliance with maritime regulations, environmental standards, and international best practices for project implementation."
  },
  {
    icon: Target,
    title: "Stakeholder Documentation",
    description: "Preparation of investor-ready documentation, government submissions, and stakeholder presentations for project approval."
  }
]

const components = [
  "Executive Summary",
  "Project Overview & Objectives",
  "Market Analysis & Demand Assessment",
  "Technical Feasibility & Design",
  "Financial Analysis & Projections",
  "Implementation Plan & Timeline",
  "Risk Analysis & Mitigation",
  "Environmental Impact Assessment",
  "Regulatory Compliance Analysis",
  "Operations & Maintenance Plan",
  "Investment Requirements",
  "Appendices & Supporting Documentation"
]

const sectors = [
  "Port Development & Expansion",
  "Terminal Operations & Infrastructure",
  "Shipbuilding & Repair Facilities",
  "Maritime Logistics & Warehousing",
  "Offshore & Energy Infrastructure",
  "Maritime Technology Implementation",
  "Shipping Fleet Development",
  "Maritime Services & Operations"
]

export default function DetailedProjectReportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-gray-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-slate-200 text-sm font-medium px-3 py-1 bg-slate-800/30 rounded-full">
                Services &gt; Practice Area &gt; Detailed Project Report
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Detailed Project Report
            </h1>
            <p className="text-xl text-slate-100 leading-relaxed">
              Comprehensive project documentation and planning services to ensure 
              successful implementation of maritime infrastructure projects and investments.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-slate-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Project Documentation"
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
                  Comprehensive Project Documentation Excellence
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our Detailed Project Reports (DPR) provide comprehensive documentation for 
                    maritime infrastructure projects, covering all aspects from technical design 
                    to financial planning and implementation strategies. We ensure every project 
                    is thoroughly documented and ready for execution.
                  </p>
                  <p>
                    Our DPRs serve as the blueprint for project implementation, providing 
                    detailed specifications, timelines, budgets, and operational procedures 
                    that ensure successful project delivery and stakeholder satisfaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our DPR Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive project documentation solutions designed to ensure successful 
              implementation and stakeholder approval of maritime infrastructure projects.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Components Section */}
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
              DPR Components & Structure
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-slate-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{component}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Sectors We Document
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
                  <div className="w-3 h-3 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Our DPR Development Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-2">Project Scoping</h3>
                <p className="text-slate-100 text-sm">Define project scope, objectives, and documentation requirements</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-2">Data Collection</h3>
                <p className="text-slate-100 text-sm">Gather technical, financial, and operational data</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-2">Analysis & Planning</h3>
                <p className="text-slate-100 text-sm">Comprehensive analysis and detailed planning documentation</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-2">Report Compilation</h3>
                <p className="text-slate-100 text-sm">Final DPR compilation and stakeholder presentation</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-slate-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Document Your Project Success
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our DPR experts to create comprehensive project documentation 
              that ensures successful implementation and stakeholder approval.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-8 py-4"
              >
                Start Your DPR
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
