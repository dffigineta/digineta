'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Anchor, Ship, Container, Building } from 'lucide-react'

const industries = [
  {
    icon: Anchor,
    title: 'Ports & Terminals',
    description: 'Comprehensive consulting for port development, terminal operations, and infrastructure planning. We help optimize port efficiency, design modern terminals, and implement best practices.',
    services: ['Port Master Planning', 'Terminal Design', 'Operations Optimization', 'Infrastructure Development']
  },
  {
    icon: Ship,
    title: 'Shipping',
    description: 'Strategic advisory for shipping operations, fleet management, and maritime logistics. Our experts guide shipping companies in optimizing routes, fleet composition, and operational efficiency.',
    services: ['Fleet Management', 'Route Optimization', 'Operational Strategy', 'Cost Reduction']
  },
  {
    icon: Container,
    title: 'Container Logistics',
    description: 'End-to-end logistics solutions, warehouse optimization, and supply chain management. We design efficient logistics networks and optimize container movement.',
    services: ['Warehouse Design', 'Supply Chain Optimization', 'Distribution Networks', 'Technology Integration']
  },
  {
    icon: Building,
    title: 'Shipbuilding',
    description: 'Technical consulting for ship construction, repair facilities, and modernization. We provide expertise in shipyard development, production planning, and quality systems.',
    services: ['Shipyard Planning', 'Production Systems', 'Quality Management', 'Technology Upgrade']
  }
]

export default function IndustryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry Sectors</h1>
            <p className="text-xl text-blue-100">Specialized expertise across maritime industries</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-4">{industry.title}</CardTitle>
                        <p className="text-lg text-gray-600 leading-relaxed">{industry.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="bg-blue-50 rounded-lg p-4 text-center">
                          <p className="font-semibold text-blue-900">{service}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

