'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { 
  Ship, Anchor, Container, Building, TrendingUp, FileText, 
  BarChart, DollarSign, Wrench, Globe, ArrowRight 
} from 'lucide-react'

const industries = [
  {
    icon: Anchor,
    title: 'Ports & Terminals',
    description: 'Comprehensive consulting for port development, terminal operations, and infrastructure planning',
    color: 'from-blue-500 to-cyan-500',
    features: ['Port Development', 'Terminal Operations', 'Infrastructure Planning']
  },
  {
    icon: Ship,
    title: 'Shipping',
    description: 'Strategic advisory for shipping operations, fleet management, and maritime logistics',
    color: 'from-purple-500 to-pink-500',
    features: ['Fleet Management', 'Route Optimization', 'Operations Strategy']
  },
  {
    icon: Container,
    title: 'Container Logistics',
    description: 'End-to-end logistics solutions, warehouse optimization, and supply chain management',
    color: 'from-orange-500 to-red-500',
    features: ['Warehouse Design', 'Supply Chain', 'Logistics Planning']
  },
  {
    icon: Building,
    title: 'Shipbuilding',
    description: 'Technical consulting for ship construction, repair facilities, and modernization',
    color: 'from-green-500 to-emerald-500',
    features: ['Facility Design', 'Technology Integration', 'Quality Systems']
  }
]

const practiceAreas = [
  { icon: BarChart, title: 'Market Research', description: 'Comprehensive market analysis and industry insights' },
  { icon: FileText, title: 'Business Planning', description: 'Strategic business planning and development' },
  { icon: TrendingUp, title: 'Feasibility Studies', description: 'Project feasibility and viability assessment' },
  { icon: DollarSign, title: 'Financial Advisory', description: 'Infrastructure finance and investment advisory' },
  { icon: Wrench, title: 'Technical Design', description: 'Engineering and technical design services' },
  { icon: Globe, title: 'M&A Advisory', description: 'Mergers and acquisitions consulting' }
]


export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4">
              Our Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Maritime Solutions for Every Challenge
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive consulting services across all segments of the maritime industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600">Deep specialization across maritime sectors</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-0 bg-gradient-to-br from-white to-gray-50">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{industry.title}</CardTitle>
                    <CardDescription className="text-base">{industry.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {feature}
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

      {/* Practice Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Areas</h2>
            <p className="text-xl text-gray-600">Specialized consulting services</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-3">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Expert Maritime Consulting?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your maritime operations
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

