'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Ship, TrendingUp, Target, Users, BookOpen, Globe, DollarSign } from 'lucide-react'

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
  "Tanker shipping",
  "Container shipping", 
  "Dry/bulk Shipping",
  "Offshore Shipping",
  "Shipping investment and finance",
  "Ro-Ro vessels",
  "Coastal shipping"
]

const practiceAreas = [
  "Ship Valuation",
  "Ship buying and selling",
  "Shipping Disinvestment",
  "Shipping Market entry strategy",
  "Market analysis for Shipping investment",
  "Joint venture and positioning"
]

const shippingSegments = [
  "Container shipping",
  "Ro-Ro",
  "Tanker shipping", 
  "Dry/bulk shipping",
  "LNG shipping",
  "Offshore"
]

const publications = [
  "Indian Shipping Industry Report",
  "Shipping Investment Report", 
  "Equity Research Report",
  "Crude Tanker Report"
]

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
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
                    As shipping consultants in India, i-maritime has been at the forefront in providing 
                    business-consulting solutions to the shipping companies looking for diversification and 
                    business expansion and opportunities for shipping investment. Shipping industry in India 
                    is at its all time high, owing to substantial rise in shipping freight rate at a global level. 
                    Our shipping consultants have carried out market studies in different shipping segments like{' '}
                    <strong>container shipping, Ro-Ro, tanker shipping, dry/bulk shipping, LNG shipping, offshore</strong> etc. 
                    i-maritime has also assisted individual companies in syndicating funds for shipping investment 
                    from financial Institutions & commercial banks.
                  </p>
                  <p>
                    i-maritime&apos;s Shipping Consultants have been carrying out focused research in the sector by 
                    coming out with several publications such as{' '}
                    <strong>Indian Shipping Industry Report, Shipping Investment Report, Equity Research Report, Crude Tanker Report</strong> etc.
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
              Benefits with i-maritime&apos;s shipping consultants
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
              Segments Our Shipping Consultants work on
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
              Practice Area our Shipping consultants work on
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

      {/* Research & Publications */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-700 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Research & Publications
            </h2>
            <p className="text-xl text-purple-100 mb-12">
              Our shipping consultants conduct focused research and publish comprehensive reports 
              covering various aspects of the shipping industry.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {publications.map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <BookOpen className="w-8 h-8 text-purple-200 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{publication}</h3>
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
              Navigate Your Shipping Success
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with India&apos;s leading shipping consultants to optimize your fleet operations, 
              identify investment opportunities, and navigate market challenges.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-purple-50 font-semibold px-8 py-4"
            >
              Get Expert Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
