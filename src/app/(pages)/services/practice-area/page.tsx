'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { BarChart, FileText, TrendingUp, DollarSign, Wrench, Globe } from 'lucide-react'

const practices = [
  { icon: BarChart, title: 'Market Research', description: 'Comprehensive market analysis, competitive intelligence, and industry trends assessment' },
  { icon: FileText, title: 'Business Planning', description: 'Strategic business planning, development roadmaps, and growth strategies' },
  { icon: TrendingUp, title: 'Feasibility Studies', description: 'Project feasibility assessment, viability analysis, and risk evaluation' },
  { icon: DollarSign, title: 'Financial Advisory', description: 'Infrastructure finance, fund syndication, and investment advisory services' },
  { icon: Wrench, title: 'Technical Design', description: 'Engineering design, technical specifications, and infrastructure planning' },
  { icon: Globe, title: 'M&A Advisory', description: 'Mergers and acquisitions consulting, valuation, and transaction support' }
]

export default function PracticeAreaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Practice Areas</h1>
            <p className="text-xl text-blue-100">Specialized consulting services across maritime domains</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                      <practice.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{practice.description}</p>
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

