'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const research = [
  {
    title: 'Indian Port Sector Outlook 2025',
    description: 'Comprehensive analysis of Indian port industry trends, capacity, and growth projections',
    category: 'Market Analysis',
    published: 'Q4 2024'
  },
  {
    title: 'Container Shipping Market Dynamics',
    description: 'Study of global container shipping markets, freight rates, and capacity trends',
    category: 'Shipping',
    published: 'Q3 2024'
  },
  {
    title: 'Port Automation Technologies',
    description: 'Research on emerging automation technologies and their impact on port operations',
    category: 'Technology',
    published: 'Q2 2024'
  }
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Research</h1>
            <p className="text-xl text-blue-100">Industry research reports and market analysis</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {research.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge className="bg-blue-100 text-blue-700 mb-3">{report.category}</Badge>
                        <CardTitle className="text-2xl mb-2">{report.title}</CardTitle>
                        <p className="text-gray-600">{report.description}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white whitespace-nowrap">
                        {report.published}
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

