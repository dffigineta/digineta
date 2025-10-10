'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const caseStudies = [
  {
    title: 'Techno Economic Feasibility Study for Colachel Port',
    description: 'Comprehensive feasibility study for developing a new deep-water port at Colachel, Tamil Nadu, including market analysis, technical design, and financial viability assessment.',
    category: 'Port Development',
    scope: ['Market Research', 'Technical Design', 'Financial Analysis', 'Environmental Study']
  },
  {
    title: 'Multi Logistics Park in Ahmedabad',
    description: 'Strategic planning and development of integrated logistics hub in Ahmedabad, Gujarat, including warehouse design, connectivity analysis, and operational planning.',
    category: 'Logistics',
    scope: ['Site Selection', 'Master Planning', 'Infrastructure Design', 'Operations Strategy']
  },
  {
    title: 'Strategy Report for Indian Port Sector',
    description: 'National-level port sector analysis and strategic recommendations for capacity enhancement, modernization, and competitiveness improvement.',
    category: 'Strategy',
    scope: ['Industry Analysis', 'Competitive Benchmarking', 'Policy Recommendations', 'Growth Strategy']
  },
  {
    title: 'Container Terminal Development Study',
    description: 'Feasibility study and design for new container terminal facility including capacity planning, equipment selection, and financial modeling.',
    category: 'Terminals',
    scope: ['Capacity Planning', 'Equipment Selection', 'Layout Design', 'Financial Modeling']
  }
]

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100">Learn from our successful maritime projects</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <Badge className="bg-blue-100 text-blue-700 mb-3">{study.category}</Badge>
                        <CardTitle className="text-2xl mb-3">{study.title}</CardTitle>
                        <p className="text-gray-600 leading-relaxed">{study.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Project Scope:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {study.scope.map((item, idx) => (
                          <div key={idx} className="bg-blue-50 rounded-lg px-4 py-2 text-sm text-center">
                            {item}
                          </div>
                        ))}
                      </div>
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

