'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { FileText, Target, TrendingUp, Users, DollarSign, Globe, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: "Strategic Business Plans",
    description: "Comprehensive business plans covering market analysis, financial projections, operational strategies, and growth plans for maritime ventures."
  },
  {
    icon: Target,
    title: "Investment Proposals",
    description: "Detailed investment proposals and pitch decks for attracting investors and securing funding for maritime infrastructure projects."
  },
  {
    icon: TrendingUp,
    title: "Growth Strategies",
    description: "Strategic planning for business expansion, market entry, diversification, and scaling operations in the maritime sector."
  },
  {
    icon: Users,
    title: "Operational Planning",
    description: "Detailed operational plans covering organizational structure, staffing, processes, and performance metrics for maritime businesses."
  },
  {
    icon: DollarSign,
    title: "Financial Modeling",
    description: "Sophisticated financial models including revenue projections, cost analysis, cash flow forecasting, and ROI calculations."
  },
  {
    icon: Globe,
    title: "Market Entry Strategies",
    description: "Comprehensive strategies for entering new markets, establishing operations, and building competitive advantages in maritime sectors."
  }
]

const components = [
  "Executive Summary",
  "Company Overview & Vision",
  "Market Analysis & Opportunity",
  "Competitive Analysis",
  "Products & Services Portfolio",
  "Marketing & Sales Strategy",
  "Operational Plan",
  "Management & Organization",
  "Financial Projections",
  "Risk Analysis & Mitigation",
  "Implementation Timeline",
  "Funding Requirements"
]

const sectors = [
  "Port Development & Operations",
  "Shipping & Maritime Logistics",
  "Shipbuilding & Repair",
  "Container Terminal Operations",
  "Maritime Technology Solutions",
  "Offshore & Energy Services",
  "Maritime Finance & Insurance",
  "Maritime Consulting Services"
]

export default function BusinessPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-900 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-emerald-200 text-sm font-medium px-3 py-1 bg-emerald-800/30 rounded-full">
                Services &gt; Practice Area &gt; Business Plan
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Business Plan
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Strategic business planning and development services to transform your maritime 
              vision into actionable, investor-ready business plans.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Business Planning"
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
                  Strategic Business Planning Excellence
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our business plan services help maritime companies develop comprehensive, 
                    investor-ready business plans that clearly articulate their vision, strategy, 
                    and growth potential. We combine industry expertise with proven business planning 
                    methodologies to create compelling documents that drive investment and growth.
                  </p>
                  <p>
                    Whether you&apos;re launching a new venture, seeking investment, or planning expansion, 
                    our business plans provide the strategic foundation and detailed roadmap needed 
                    for success in the maritime industry.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-green-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Business Planning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive business planning solutions tailored to the unique requirements 
              and challenges of the maritime industry.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Business Plan Components */}
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
              Comprehensive Business Plan Components
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {components.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{component}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Maritime Sectors We Serve
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
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-900 to-green-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Our Business Planning Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-emerald-100 text-sm">Understanding your vision, goals, and market context</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-emerald-100 text-sm">Market research, competitive analysis, and opportunity assessment</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-emerald-100 text-sm">Developing comprehensive strategy and financial models</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-2">Delivery</h3>
                <p className="text-emerald-100 text-sm">Presenting investor-ready business plan with implementation roadmap</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-emerald-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our business planning experts to create compelling, 
              investor-ready business plans that drive growth and success in the maritime industry.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold px-8 py-4"
              >
                Start Your Business Plan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
