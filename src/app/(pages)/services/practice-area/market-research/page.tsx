'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BarChart, TrendingUp, Target, Users, Globe, FileText, Search } from 'lucide-react'

const services = [
  {
    icon: BarChart,
    title: "Industry Analysis",
    description: "Comprehensive analysis of maritime industry trends, market dynamics, and competitive landscape to identify opportunities and challenges."
  },
  {
    icon: TrendingUp,
    title: "Market Forecasting",
    description: "Advanced forecasting models to predict market trends, demand patterns, and future growth prospects in maritime sectors."
  },
  {
    icon: Target,
    title: "Competitive Intelligence",
    description: "In-depth competitive analysis including market positioning, pricing strategies, and competitive advantages of key players."
  },
  {
    icon: Users,
    title: "Customer Research",
    description: "Market segmentation and customer behavior analysis to understand target audiences and their preferences."
  },
  {
    icon: Globe,
    title: "Global Market Studies",
    description: "International market research covering global trade patterns, regional differences, and cross-border opportunities."
  },
  {
    icon: FileText,
    title: "Custom Research Reports",
    description: "Tailored research reports addressing specific client needs and industry requirements with actionable insights."
  }
]

const methodologies = [
  "Primary Research & Surveys",
  "Secondary Data Analysis", 
  "Statistical Modeling",
  "Market Sizing & Forecasting",
  "Competitive Benchmarking",
  "SWOT Analysis",
  "PEST Analysis",
  "Industry Expert Interviews"
]

const sectors = [
  "Port & Terminal Operations",
  "Shipping & Maritime Logistics",
  "Shipbuilding & Repair",
  "Container & Cargo Handling",
  "Maritime Finance & Insurance",
  "Maritime Technology & Innovation",
  "Offshore & Energy",
  "Maritime Law & Regulation"
]

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-indigo-200 text-sm font-medium px-3 py-1 bg-indigo-800/30 rounded-full">
                Services &gt; Practice Area &gt; Market Research
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Market Research
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed">
              Comprehensive market analysis and industry insights to drive strategic decision-making 
              in the maritime and logistics sectors.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Market Research"
                    width={400}
                    height={300}
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
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Strategic Market Intelligence
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our market research services provide deep insights into maritime industry dynamics, 
                    helping clients make informed strategic decisions. We combine advanced analytical 
                    methodologies with industry expertise to deliver actionable intelligence.
                  </p>
                  <p>
                    Our research covers market sizing, trend analysis, competitive landscape assessment, 
                    and forecasting across various maritime sectors including ports, shipping, logistics, 
                    and shipbuilding.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Market Research Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research solutions designed to provide strategic insights and 
              competitive advantages in the maritime industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies Section */}
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
              Research Methodologies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{method}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Industry Sectors We Cover
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Market Research?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Search className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Deep Industry Knowledge</h3>
                <p className="text-indigo-100">Extensive maritime industry expertise and access to proprietary databases</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <BarChart className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-indigo-100">Sophisticated analytical tools and forecasting models</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-indigo-100">Clear, actionable recommendations for strategic decision-making</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get Strategic Market Insights
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our market research experts to gain competitive intelligence 
              and make data-driven decisions for your maritime business.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4"
              >
                Request Market Research
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
