'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BarChart, TrendingUp, MapPin, Ship, Container, Clock, Target, Users } from 'lucide-react'

const services = [
  {
    icon: BarChart,
    title: "Port Traffic Analysis",
    description: "Comprehensive analysis of current port traffic patterns, vessel movements, cargo volumes, and operational efficiency metrics."
  },
  {
    icon: TrendingUp,
    title: "Traffic Forecasting",
    description: "Advanced forecasting models to predict future traffic volumes, growth trends, and capacity requirements for port facilities."
  },
  {
    icon: MapPin,
    title: "Origin-Destination Studies",
    description: "Detailed analysis of cargo flows, trade routes, and hinterland connectivity to optimize port operations and infrastructure planning."
  },
  {
    icon: Ship,
    title: "Vessel Traffic Studies",
    description: "Analysis of vessel types, sizes, call patterns, and turnaround times to optimize port capacity and service levels."
  },
  {
    icon: Container,
    title: "Container Traffic Analysis",
    description: "Specialized studies on container throughput, handling patterns, and terminal efficiency for container port optimization."
  },
  {
    icon: Clock,
    title: "Peak Hour Analysis",
    description: "Identification of peak traffic periods, congestion patterns, and capacity bottlenecks for operational planning."
  }
]

const methodologies = [
  "Historical Data Analysis",
  "Statistical Modeling & Forecasting",
  "Origin-Destination Surveys",
  "Vessel Tracking & AIS Data Analysis",
  "Cargo Flow Mapping",
  "Capacity Utilization Studies",
  "Peak Hour Traffic Analysis",
  "Seasonal Pattern Analysis",
  "Growth Rate Projections",
  "Competitive Traffic Analysis"
]

const applications = [
  "Port Master Planning",
  "Terminal Capacity Planning",
  "Infrastructure Investment Decisions",
  "Operational Optimization",
  "Tariff Setting & Revenue Planning",
  "Hinterland Connectivity Planning",
  "Competitive Positioning Analysis",
  "Environmental Impact Assessment"
]

export default function TrafficStudiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-cyan-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-cyan-200 text-sm font-medium px-3 py-1 bg-cyan-800/30 rounded-full">
                Services &gt; Practice Area &gt; Traffic Studies
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Traffic Studies
            </h1>
            <p className="text-xl text-cyan-100 leading-relaxed">
              Comprehensive port traffic analysis and forecasting to optimize operations, 
              plan infrastructure, and maximize port efficiency and capacity.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-cyan-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Traffic Analysis"
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
                  Advanced Traffic Analysis & Forecasting
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our traffic studies provide critical insights into port operations, helping 
                    optimize capacity utilization, plan infrastructure investments, and improve 
                    operational efficiency. We combine advanced analytical techniques with 
                    deep maritime industry expertise.
                  </p>
                  <p>
                    Our studies cover current traffic patterns, future forecasting, origin-destination 
                    analysis, and capacity planning to support strategic decision-making for port 
                    authorities, terminal operators, and infrastructure investors.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Traffic Study Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive traffic analysis solutions designed to optimize port operations 
              and support strategic infrastructure planning decisions.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
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
              Traffic Study Methodologies
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
                  <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{method}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Traffic Study Applications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{application}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Traffic Studies?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <BarChart className="w-12 h-12 text-cyan-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-cyan-100">Advanced analytics and modeling for accurate traffic predictions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-cyan-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Strategic Planning</h3>
                <p className="text-cyan-100">Support for infrastructure investment and operational decisions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Users className="w-12 h-12 text-cyan-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Industry Expertise</h3>
                <p className="text-cyan-100">Deep maritime industry knowledge and proven methodologies</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-cyan-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimize Your Port Operations
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get comprehensive traffic analysis and forecasting to maximize port efficiency, 
              plan infrastructure investments, and drive operational excellence.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-cyan-900 hover:bg-cyan-50 font-semibold px-8 py-4"
              >
                Request Traffic Study
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
