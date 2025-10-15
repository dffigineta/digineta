'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Container, TrendingUp, MapPin, Truck, Warehouse, Ship, Package } from 'lucide-react'

const benefits = [
  {
    icon: Container,
    title: "Multimodal Expertise",
    description: "Expertise in multimodal transportation, including inland container logistics."
  },
  {
    icon: MapPin,
    title: "Market Understanding",
    description: "Understanding of growth in existing and upcoming cargo clusters within India."
  },
  {
    icon: Warehouse,
    title: "Regulatory Knowledge",
    description: "Understanding of rules for setting up Container Freight Stations and Inland Container Depots in India."
  },
  {
    icon: Package,
    title: "Technical Excellence",
    description: "Sound technical understanding of material handling equipment."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Robust management tools for understanding container shipping logistics, including origin-destination analysis and cost analysis."
  }
]

const segments = [
  "Container Freight stations",
  "Inland Container Depot",
  "Warehouses",
  "Ro-Ro (Roll-on/Roll-off)",
  "Coal logistics",
  "Mineral logistics",
  "Road and rail logistics"
]

const practiceAreas = [
  "Research report of Container Logistics in India",
  "Business plan",
  "Market study & analysis of Container Logistics",
  "Shipping Logistics cost analysis",
  "Feasibility for Container Freight station (CFS) or Inland container depot (ICD)"
]

const logisticsAreas = [
  "Container logistics",
  "Shipping logistics", 
  "Port feasibility",
  "Warehousing/CFS feasibility studies",
  "Iron ore logistics",
  "Steel logistics",
  "Coal logistics",
  "Automobile logistics"
]

export default function ContainerLogisticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-orange-900 to-red-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-orange-200 text-sm font-medium px-3 py-1 bg-orange-800/30 rounded-full">
                Services &gt; Industry &gt; Container Logistics and Warehousing
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Container Logistics Consulting Services
            </h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              India&apos;s Leading Container and Shipping Logistics Consultant providing end-to-end 
              logistics solutions and warehouse optimization services.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-orange-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/i-consultancy.jpg"
                    alt="Container Logistics Consulting"
                    width={400}
                    height={400}
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
              {/* Leading Container Logistics Consultant */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  We are India&apos;s Leading Container and Shipping Logistics Consultant
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Logistics and warehousing are important for controlling and managing the flow of goods, 
                    streamlining processes, and eliminating non-value-adding activities. The logistics industry 
                    is closely linked to <strong>containers, ports and shipping</strong>, and we have expertise in 
                    <strong>container logistics, shipping logistics, port feasibility, warehousing/CFS feasibility studies</strong>, 
                    and various specific logistics areas like <strong>iron ore, steel, coal, and automobile logistics</strong>.
                  </p>
                  <p>
                    Our comprehensive approach ensures that we provide end-to-end solutions that optimize 
                    supply chain efficiency, reduce costs, and improve operational performance across all 
                    logistics segments.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits with i-maritime&apos;s Container Logistics and Warehousing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines industry expertise with cutting-edge logistics solutions 
              to deliver exceptional results for container and warehousing operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Logistics Areas */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Logistics Expertise Areas
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {logisticsAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Segments of Container and Shipping Logistics
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
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{segment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Practice Area in Shipping and Container Logistics
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
      <section className="py-20 bg-gradient-to-r from-orange-900 to-red-700">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimize Your Container Logistics
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Partner with India&apos;s leading container logistics consultants to streamline your supply chain, 
              optimize warehouse operations, and reduce logistics costs.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-orange-900 hover:bg-orange-50 font-semibold px-8 py-4"
            >
              Get Expert Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
