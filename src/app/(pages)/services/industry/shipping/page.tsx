'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TrendingUp, Target, Users, BookOpen } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: "Domain Expertise",
    description: "Extensive domain knowledge, to understand shipping industry concerns and suggest optimal shipping business consulting solutions."
  },
  {
    icon: TrendingUp,
    title: "Flexible Solutions",
    description: "Enable flexibility in choosing alternative business/choice models."
  },
  {
    icon: BookOpen,
    title: "Customized Research",
    description: "Customized market and business research solutions to meet client's specific requirements"
  },
  {
    icon: Users,
    title: "Industry Network",
    description: "Advantage of access to various shipping industry professionals, experts and cross industry expertise through our shipping consultants network."
  }
]

const segments = [
  "Party leadership and CMs' offices",
  "Key ministries and departments",
  "Constitutional offices",
  "Core political teams",
  "Strategic advisory groups",
  "Decision support systems",
  "Office communication frameworks"
]

const practiceAreas = [
  "Leader reputation tracking and management",
  "Office communication systems",
  "Decision support dashboards",
  "Stakeholder engagement frameworks",
  "Strategic planning and roadmapping",
  "Crisis management and response"
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-purple-200 text-sm font-medium px-3 py-1 bg-purple-800/30 rounded-full">
                Services &gt; Industry &gt; Shipping
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shipping Consulting Services
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Leading Shipping Consultant in India providing strategic advisory for shipping operations, 
              fleet management, and maritime investment opportunities.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-purple-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Cargo Ship"
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
              {/* Leading Shipping Consultant */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Leading Shipping Consultant in India
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Shipping is a global industry and its prospects are associated with the level of global 
                    economic and industrial activity. However, the shipping market is known to be cyclical 
                    in nature with volatile freight rates.
                  </p>
                  <p>
                    Digineta provides strategic advisory and execution support for leaders, offices and core teams 
                    across India. Our team brings together deep political experience, data expertise and digital 
                    capabilities to help leaders make informed decisions, communicate effectively and build stronger 
                    organizations. We work with party leadership, Chief Ministers&apos; offices, key ministries and 
                    constitutional offices to align intent, information and action.
                  </p>
                  <p>
                    Digineta&apos;s leadership advisory services include reputation management, office communication 
                    systems, decision support dashboards and strategic planning. We have supported leaders across 
                    levels with research, intelligence and execution frameworks that improve governance and campaign outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits with Digineta&apos;s leadership advisory
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines industry expertise with cutting-edge analytics 
              to deliver exceptional results for shipping operations and investments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Section */}
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
              Leaders & Offices We Support
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{segment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-purple-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Core Capabilities for Leaders & Offices
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Strengthen Your Leadership & Office
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with Digineta to build stronger leadership reputation, clearer communication 
              systems and better decision support for your office or team.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-4"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
