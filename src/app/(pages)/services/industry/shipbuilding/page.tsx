'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Building, TrendingUp, Target, Users, Ship, Wrench, Globe } from 'lucide-react'

const benefits = [
  {
    icon: TrendingUp,
    title: "Market Understanding",
    description: "Understanding of the relationship between shipping market and shipbuilding and ship repair industry, Technological changes happening in Shipbuilding industry."
  },
  {
    icon: Globe,
    title: "Global Database",
    description: "Vast database of shipbuilding activities at various shipyards across the globe."
  },
  {
    icon: Target,
    title: "Port Integration",
    description: "Understanding of port business plans and role of shipbuilding in development of a port."
  },
  {
    icon: Building,
    title: "Risk Management",
    description: "Understanding of cyclical nature of shipping industry and expertise in alternative business models to reduce the risk in the cyclical industry."
  }
]

const segments = [
  "Ship building and Shipyard",
  "Dry dock",
  "Ship repair"
]

const practiceAreas = [
  "Detailed Project report of Shipyard facility",
  "Feasibility study of Shipyard",
  "Due diligence of Shipbuilding facility",
  "Joint venture with Shipbuilder",
  "Disinvestment in Shipbuilding and Ship repair facility"
]

export default function ShipbuildingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-emerald-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-green-200 text-sm font-medium px-3 py-1 bg-green-800/30 rounded-full">
                Services &gt; Industry &gt; Shipbuilding and Ship repair
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shipyard and Shipbuilding Consulting
            </h1>
            <p className="text-xl text-green-100 leading-relaxed">
              India&apos;s leading Shipyard Consultants providing technical expertise for ship construction, 
              repair facilities, and maritime infrastructure development.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-green-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Shipyard Scene"
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
              {/* Leading Shipyard Consultants */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  India&apos;s leading Shipyard Consultants
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Shipbuilding industry</strong> is driven by the fortunes of the international shipping. 
                    The increasing demand, low cost labour and shipbuilding expertise in India has paved way 
                    for development of India shipbuilding industry.
                  </p>
                  <p>
                    <strong>Ship repair</strong> is a regular requirement of the shipping industry. India has a long coastline, 
                    located along the major shipping trade routes of the world, and is provided with the required 
                    infrastructure, can emerge as a leading player in Ship-Repair.
                  </p>
                </div>
              </div>

              {/* i-maritime Expertise */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Shipyard Consulting Expertise
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    As a shipyard consultants, i-maritime has been forefront in bringing the opportunities 
                    in Indian shipbuilding industry.
                  </p>
                  <p>
                    i-maritime has been a preferred Shipbuilding and Shipyard Consultants for its numerous clients. 
                    We have helped our clients from the industry to venture into shipbuilding and allied activities. 
                    With the extensive understanding of future of the shipping market and with team of technical 
                    people from ship design and shipyard design, i-maritime&apos;s shipyard consultants are the obvious 
                    choice for shipyard, ship repair and shipbuilding consulting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits with i-maritime&apos;s Shipyard & Shipbuilding Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines industry expertise with technical excellence 
              to deliver exceptional results for shipyard and shipbuilding projects.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
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
              Segments for Shipyard and Shipbuilding Consulting
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{segment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Practice Area our Shipbuilding and Shipyard Consultants work
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
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-emerald-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Technical Excellence in Shipbuilding
            </h2>
            <p className="text-xl text-green-100 mb-12">
              Our team of technical experts brings together ship design and shipyard design expertise 
              to provide comprehensive solutions for all shipbuilding and ship repair needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Ship className="w-12 h-12 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ship Design</h3>
                <p className="text-green-100">Advanced ship design capabilities for various vessel types</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Building className="w-12 h-12 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Shipyard Design</h3>
                <p className="text-green-100">Complete shipyard facility planning and design</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Wrench className="w-12 h-12 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ship Repair</h3>
                <p className="text-green-100">Specialized ship repair facility consulting</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Build Your Shipbuilding Success
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with India&apos;s leading shipyard consultants to develop world-class shipbuilding 
              facilities and optimize your ship repair operations.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-green-900 hover:bg-green-50 font-semibold px-8 py-4"
              >
                Get Expert Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
