'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Database, TrendingUp, Ship, Anchor } from 'lucide-react'

const databases = [
  {
    icon: Ship,
    title: 'Shipping Database',
    description: 'Comprehensive data on global shipping routes, vessel movements, freight rates, and market trends',
    coverage: ['10,000+ Vessels', '500+ Ports', 'Real-time Updates']
  },
  {
    icon: Anchor,
    title: 'Port Statistics',
    description: 'Detailed port performance data, cargo volumes, vessel calls, and operational metrics',
    coverage: ['200+ Ports', 'Monthly Updates', '10+ Years History']
  },
  {
    icon: Database,
    title: 'Trade Data',
    description: 'International maritime trade statistics, commodity flows, and regional analysis',
    coverage: ['Global Coverage', 'Multiple Commodities', 'Quarterly Reports']
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    description: 'Industry trends, market forecasts, competitive analysis, and investment opportunities',
    coverage: ['Real-time Analysis', 'Expert Insights', 'Custom Reports']
  }
]

export default function DatabasesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Databases</h1>
            <p className="text-xl text-blue-100">Comprehensive maritime industry data and statistics</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {databases.map((db, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                      <db.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-3">{db.title}</CardTitle>
                    <p className="text-gray-600">{db.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {db.coverage.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {item}
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

