'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Wrench, Building, Ship, Anchor, Target, Users, Globe, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: "Engineering Design",
    description: "Comprehensive engineering design services for maritime infrastructure including ports, terminals, and shipbuilding facilities."
  },
  {
    icon: Building,
    title: "Infrastructure Planning",
    description: "Strategic infrastructure planning and design for maritime facilities, ensuring optimal layout and operational efficiency."
  },
  {
    icon: Ship,
    title: "Marine Engineering",
    description: "Specialized marine engineering services including vessel design, port engineering, and offshore structure design."
  },
  {
    icon: Anchor,
    title: "Port & Terminal Design",
    description: "Complete port and terminal design services including berth design, cargo handling systems, and port infrastructure."
  },
  {
    icon: Target,
    title: "Technical Specifications",
    description: "Detailed technical specifications, engineering drawings, and construction documentation for maritime projects."
  },
  {
    icon: Users,
    title: "Design Optimization",
    description: "Design optimization services to enhance operational efficiency, reduce costs, and improve sustainability."
  }
]

const designAreas = [
  "Port Layout & Design",
  "Terminal Infrastructure Design",
  "Berth & Wharf Design",
  "Cargo Handling Systems",
  "Shipyard & Dry Dock Design",
  "Maritime Building Design",
  "Offshore Structure Design",
  "Marine Equipment Design"
]

const deliverables = [
  "Engineering Drawings & Plans",
  "Technical Specifications",
  "Design Calculations",
  "Construction Documentation",
  "Equipment Specifications",
  "Safety & Compliance Documentation",
  "Cost Estimation",
  "Implementation Guidelines"
]

export default function TechnicalDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-rose-900 to-pink-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-rose-200 text-sm font-medium px-3 py-1 bg-rose-800/30 rounded-full">
                Services &gt; Practice Area &gt; Technical Design
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Technical Design
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed">
              Engineering and technical design services for maritime infrastructure, 
              ensuring optimal functionality, efficiency, and compliance with industry standards.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-rose-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Technical Design"
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
                  Engineering Excellence in Maritime Design
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our technical design services provide comprehensive engineering solutions 
                    for maritime infrastructure projects. We combine advanced engineering 
                    principles with maritime industry expertise to deliver designs that are 
                    both technically sound and operationally efficient.
                  </p>
                  <p>
                    Our team of experienced engineers and designers work closely with clients 
                    to develop innovative solutions that meet project requirements while 
                    ensuring compliance with international standards and best practices.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Technical Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering and design solutions for maritime infrastructure 
              projects, ensuring optimal performance and compliance with industry standards.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Design Areas Section */}
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
              Technical Design Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {designAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-rose-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Design Deliverables
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
                  <CheckCircle className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-rose-900 to-pink-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Technical Design Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Wrench className="w-12 h-12 text-rose-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Engineering Excellence</h3>
                <p className="text-rose-100">Advanced engineering principles and maritime industry expertise</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Globe className="w-12 h-12 text-rose-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">International Standards</h3>
                <p className="text-rose-100">Compliance with international maritime standards and best practices</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-rose-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovative Solutions</h3>
                <p className="text-rose-100">Cutting-edge design solutions for optimal performance and efficiency</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-rose-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Design Your Maritime Future
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our technical design experts to create innovative, efficient, 
              and compliant maritime infrastructure solutions.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-rose-900 hover:bg-rose-50 font-semibold px-8 py-4"
              >
                Discuss Design Requirements
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
