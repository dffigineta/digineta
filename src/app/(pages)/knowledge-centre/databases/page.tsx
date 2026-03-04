'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
// import { Button } from '@/components/ui/Button'
import { Database, Ship, Anchor, Container } from 'lucide-react'

const features = [
  {
    icon: Anchor,
    title: 'Ports & Terminals',
    description: 'Comprehensive data on port operations, cargo handling, and terminal performance'
  },
  {
    icon: Container,
    title: 'Container Logistics',
    description: 'Container shipping data, logistics networks, and supply chain analytics'
  },
  {
    icon: Ship,
    title: 'Ship Building and Demolition',
    description: 'Shipyard data, vessel construction trends, and demolition market analysis'
  },
  {
    icon: Database,
    title: 'Shipping',
    description: 'Global shipping routes, vessel movements, and maritime trade statistics'
  }
]

export default function DatabasesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Database</h1>
                <p className="text-lg sm:text-xl text-blue-100">Exhaustive Database on various sectors of maritime industry</p>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900 text-sm">
                  <Printer className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Print this page</span>
                  <span className="sm:hidden">Print</span>
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Email to a friend</span>
                  <span className="sm:hidden">Email</span>
                </Button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 mb-8">
                Digineta research unit supports the consultancy work by collecting various maritime related data. 
                In this process we are able to build exhaustive database for different sectors of maritime arena. 
                This is a paid service since we need to invest in collecting data from both primary and secondary sources.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The features of the Digineta Knowledge Base include..</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700">
                The information in the portal is updated at regular intervals to ensure the most up to date 
                information is made available to our subscribers through this unique and industry first initiative in India.
              </p>
            </motion.div>

            {/* Portal Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12"
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <CardTitle className="text-2xl">Shipbuilding Database Portal</CardTitle>
                  <p className="text-blue-100 mt-2">Access comprehensive shipbuilding industry data and analytics</p>
                </CardHeader>
                <div className="p-4 bg-gray-50">
                  <div className="relative rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/analytics-data.jpg"
                      alt="Political research and campaign intelligence — Digineta"
                      width={1200}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-center text-gray-600 mt-4 text-sm">
                    Screenshot of Digineta&apos;s Shipbuilding Database Portal
                  </p>
                </div>
              </Card>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

