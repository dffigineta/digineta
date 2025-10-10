'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FileText, Database, BookOpen, Search, TrendingUp, ArrowRight } from 'lucide-react'

const resources = [
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'In-depth analysis of successful maritime projects',
    count: '50+ Studies',
    color: 'from-blue-500 to-cyan-500',
    href: '/knowledge-centre/case-studies'
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Comprehensive maritime industry data and statistics',
    count: '10+ Databases',
    color: 'from-purple-500 to-pink-500',
    href: '/knowledge-centre/databases'
  },
  {
    icon: BookOpen,
    title: 'Infobank',
    description: 'Maritime knowledge repository and resources',
    count: '100+ Resources',
    color: 'from-orange-500 to-red-500',
    href: '/knowledge-centre/infobank'
  },
  {
    icon: TrendingUp,
    title: 'Research',
    description: 'Industry research reports and market analysis',
    count: '30+ Reports',
    color: 'from-green-500 to-emerald-500',
    href: '/knowledge-centre/research'
  }
]

const caseStudies = [
  {
    title: 'Techno Economic Feasibility Study for Colachel Port',
    description: 'Comprehensive feasibility study for new port development in Tamil Nadu',
    category: 'Port Development'
  },
  {
    title: 'Multi Logistics Park in Ahmedabad',
    description: 'Strategic planning for integrated logistics hub in Gujarat',
    category: 'Logistics'
  },
  {
    title: 'Strategy Report for Indian Port Sector',
    description: 'National port sector analysis and strategic recommendations',
    category: 'Strategy'
  }
]

export default function KnowledgeCentrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Knowledge Centre</h1>
            <p className="text-xl text-blue-100">
              Access comprehensive maritime industry research, data, and insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Resources</h2>
            <p className="text-xl text-gray-600">Comprehensive maritime knowledge at your fingertips</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={resource.href}>
                  <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-2 border-0 shadow-lg group cursor-pointer">
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <resource.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <div className="text-sm font-semibold text-blue-600">{resource.count}</div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600">Learn from our successful projects</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="text-sm text-blue-600 font-semibold mb-2">{study.category}</div>
                        <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                        <p className="text-gray-600">{study.description}</p>
                      </div>
                      <Button variant="outline" className="whitespace-nowrap">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
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

