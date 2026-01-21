'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Users, MapPin, Building, Target, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: "Ward-level precision",
    description: "Granular understanding of ward dynamics, voter segments and local issues that drive turnout and outcomes."
  },
  {
    icon: MapPin,
    title: "Local narrative expertise",
    description: "Deep knowledge of city-specific issues, local media ecosystems and community engagement channels."
  },
  {
    icon: Building,
    title: "Municipal governance focus",
    description: "Understanding of urban local body structures, ward committees and citizen participation mechanisms."
  },
  {
    icon: Target,
    title: "Turnout optimization",
    description: "Data-driven strategies to maximize voter turnout and ensure effective ground mobilization."
  },
  {
    icon: TrendingUp,
    title: "Delivery visibility",
    description: "Frameworks to showcase governance delivery, track citizen feedback and build credibility."
  }
]

const segments = [
  "Urban local body elections",
  "Municipal corporation campaigns",
  "Ward-level programs",
  "City issue campaigns",
  "Panchayat elections",
  "Metropolitan area campaigns",
  "Smart city initiatives"
]

const practiceAreas = [
  "Ward-level voter segmentation and targeting",
  "Local narrative and message design",
  "Volunteer and cadre mobilization systems",
  "Citizen engagement and feedback programs",
  "Governance scorecards and delivery tracking"
]

const campaignTypes = [
  "Municipal elections",
  "Ward-level campaigns",
  "City issue movements",
  "Local governance programs",
  "Citizen participation initiatives",
  "Urban development campaigns",
  "Smart city programs",
  "Local body leadership support"
]

export default function LocalBodiesCityCampaignsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-[#B31942] to-[#002147] text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-white/80 text-sm font-medium px-3 py-1 bg-white/10 rounded-full">
                Services &gt; Who we work with &gt; Local bodies & city campaigns
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Local bodies & city campaigns
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Digineta supports urban local bodies, panchayats and city campaigns with ward-level 
              precision, local narrative expertise and governance delivery frameworks.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#B31942]/20 rounded-2xl rotate-3"></div>
                <div className="relative bg-[#002147] p-4 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="w-full h-48 md:h-64 bg-white/10 rounded-xl" />
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
                  Campaigns and governance programs for cities and local bodies
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Local body and city campaigns require a different kind of precision – understanding 
                    ward-level dynamics, local issues, and everyday citizen experience. Digineta brings 
                    together research, strategy and execution frameworks tailored for urban local bodies, 
                    panchayats and city-level campaigns.
                  </p>
                  <p>
                    We help parties and candidates build strong ward-level structures, design local narratives 
                    that resonate, and create governance programs that demonstrate delivery and build trust. 
                    Our approach combines granular data analysis with deep local knowledge to drive turnout, 
                    engagement and electoral success.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Ward-level voter segmentation and targeting</li>
                    <li>Local narrative and message architecture</li>
                    <li>Volunteer and cadre mobilization systems</li>
                    <li>Citizen engagement and feedback programs</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits with Digineta&apos;s local body & city campaign support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach combines local expertise with data-driven strategies 
              to deliver exceptional results for city and local body campaigns.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-2xl flex items-center justify-center mb-4">
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

      {/* Campaign Types Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Campaign Types We Support
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {campaignTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#B31942] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Local Body & City Campaign Segments
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
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{segment}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-orange-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Core Capabilities for Local Body Campaigns
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
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B31942] to-[#002147]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Win Your Local Campaign?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with Digineta to build ward-level precision, local narrative strength 
              and governance delivery frameworks for your city or local body campaign.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[#002147] hover:bg-white/90 font-semibold px-8 py-4"
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
