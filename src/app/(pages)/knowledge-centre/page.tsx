'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FileText, Database, BookOpen, TrendingUp, ArrowRight } from 'lucide-react'

const resources = [
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'In-depth analysis of winning campaigns and governance programs',
    count: '40+ Stories',
    color: 'from-blue-500 to-cyan-500',
    href: '/knowledge-centre/case-studies'
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Structured political, electoral and demographic data',
    count: '15+ Databases',
    color: 'from-purple-500 to-pink-500',
    href: '/knowledge-centre/databases'
  },
  {
    icon: BookOpen,
    title: 'Infobank',
    description: 'Political intelligence glossary, concepts and playbooks',
    count: '120+ Resources',
    color: 'from-orange-500 to-red-500',
    href: '/knowledge-centre/infobank'
  },
  {
    icon: TrendingUp,
    title: 'Research',
    description: 'Constituency, voter and narrative research for campaigns',
    count: '25+ Reports',
    color: 'from-green-500 to-emerald-500',
    href: '/knowledge-centre/research'
  }
]

const caseStudies = [
  {
    title: 'Booth-Level Strategy for a Three-Term MLA',
    description: 'Redesigned the booth strategy using voter segments, turnout patterns and local issues to secure a decisive victory margin.',
    category: 'Booth & Ground Strategy'
  },
  {
    title: 'Digital Reputation Management for an Urban Leader',
    description: 'Combined social listening, content strategy and rapid response to reshape narrative in a high-noise urban constituency.',
    category: 'Digital & Media'
  },
  {
    title: 'Program Communication for a Flagship Governance Initiative',
    description: 'Designed full-funnel communication and citizen touchpoints for a large-scale public program across multiple districts.',
    category: 'Governance Programs'
  }
]

export default function KnowledgeCentrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Knowledge Centre</h1>
              <p className="text-xl text-blue-100">
                Access Digineta&apos;s political intelligence, election data and campaign insights
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/i-kc.gif"
                alt="Knowledge Centre"
                width={400}
                height={300}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Resources</h2>
            <p className="text-lg sm:text-xl text-gray-600">Political intelligence, data and learnings for leaders and teams</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-lg sm:text-xl text-gray-600">Learn from our successful projects</p>
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

