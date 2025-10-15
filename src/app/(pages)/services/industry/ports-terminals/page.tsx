'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Anchor, TrendingUp, MapPin, FileText, Users, Target, Building } from 'lucide-react'

const benefits = [
  {
    icon: Anchor,
    title: "Comprehensive Coverage",
    description: "i-maritime has provided port consulting services to almost all ports in India."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Expertise in use of management principles like Game theory in understanding of port competition."
  },
  {
    icon: Users,
    title: "Technical Excellence",
    description: "Strong technical team along with port consulting team to provide single window of services from market feasibility study, detailed project report, Techno economic analysis, etc."
  },
  {
    icon: Building,
    title: "Industry Experience",
    description: "Vast experience in port infrastructure, equipments, warehousing and inland logistics helps realize Port business plan."
  }
]

const segments = [
  "Major Transshipment Ports and Terminals",
  "Private Sector Ports and Terminals", 
  "Port based Special Economic Zones (SEZs)",
  "Container Freight Station (CFS)",
  "Passenger terminal or jetty",
  "Cargo handling jetty"
]

const practiceAreas = [
  "Terminal Traffic Study",
  "Port Feasibility Study",
  "Ports and Terminal Due-Diligence",
  "Port Hinterland analysis",
  "Port and Terminals Detailed Project Report (DPR)",
  "Valuation studies",
  "Techno Economic Studies"
]

export default function PortsTerminalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-blue-200 text-sm font-medium px-3 py-1 bg-blue-800/30 rounded-full">
                Services &gt; Industry &gt; Ports and Terminals
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Port Consulting
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Leading Port Consultants in India providing comprehensive solutions for port development, 
              terminal operations, and maritime infrastructure planning.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-blue-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/i-port.jpg"
                    alt="Port Scene"
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
              {/* Leading Port Consultants */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Leading Port Consultants in India
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    India has an extensive coastline with 13 major ports and over 200 minor ports, 
                    and the private sector is increasingly playing a significant role in port development 
                    and operations. As a leading port consultant in India, i-maritime has conducted 
                    traffic studies for major ports and consulting assignments for developers, investors, 
                    and operators across Indian major and minor ports.
                  </p>
                  <p>
                    As port consultants, i-maritime provides business consulting services including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Port or Terminal traffic and tariff study</li>
                    <li>Feasibility studies of port</li>
                    <li>Due diligence</li>
                    <li>Detailed project report (DPR)</li>
                    <li>Advisory services in bidding</li>
                    <li>Port business plan, etc.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits with i-maritime&apos;s Port Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines industry expertise with cutting-edge analytics 
              to deliver exceptional results for port development projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
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
              Segments of Port Consulting
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{segment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Practice Areas of Port Consulting
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Port Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Partner with India&apos;s leading port consultants to optimize your port infrastructure 
              and maximize operational efficiency.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4"
            >
              Get Expert Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
