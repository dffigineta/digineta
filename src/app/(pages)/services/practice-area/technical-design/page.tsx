'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Building, Target, Users, Globe, CheckCircle, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: Target,
    title: "Digital product design",
    description: "Comprehensive digital product design services for political and governance platforms including campaign apps, dashboards, and citizen engagement tools."
  },
  {
    icon: Building,
    title: "UX/UI design",
    description: "Strategic user experience and interface design for political platforms, ensuring optimal usability and engagement."
  },
  {
    icon: Users,
    title: "User research",
    description: "Specialized user research services including voter journey mapping, usability testing, and citizen feedback analysis."
  },
  {
    icon: CheckCircle,
    title: "Platform design",
    description: "Complete platform design services including campaign management systems, volunteer platforms, and governance dashboards."
  },
  {
    icon: Globe,
    title: "Design specifications",
    description: "Detailed design specifications, wireframes, and design documentation for political and governance digital products."
  },
  {
    icon: TrendingUp,
    title: "Design optimization",
    description: "Design optimization services to enhance user engagement, improve conversion rates, and maximize platform effectiveness."
  }
]

const designAreas = [
  "Campaign management platforms",
  "Volunteer & cadre apps",
  "Citizen engagement platforms",
  "Governance dashboards",
  "Leader communication tools",
  "Data visualization platforms",
  "Voter outreach systems",
  "Feedback & survey platforms"
]

const deliverables = [
  "User journey maps & wireframes",
  "Design specifications",
  "Prototype designs",
  "Design system documentation",
  "UI component libraries",
  "Accessibility & compliance guidelines",
  "Design handoff documentation",
  "Implementation guidelines"
]

export default function TechnicalDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-[#B31942] to-[#002147] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-white/80 text-sm font-medium px-3 py-1 bg-white/10 rounded-full">
                Our Solutions &gt; What we deliver &gt; Digital product & UX design
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Digital product & UX design
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Design of political and governance digital products and tools that connect 
              leaders, cadre, citizens and information in real time.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-rose-200 rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Technical Design"
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
                  Design Excellence for Political Technology
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our digital product & UX design services provide comprehensive design solutions 
                    for political and governance platforms. We combine advanced design principles 
                    with political and electoral expertise to deliver products that are 
                    both user-friendly and strategically effective.
                  </p>
                  <p>
                    Our team of experienced designers and UX researchers work closely with clients 
                    to develop innovative solutions that meet campaign and governance requirements while 
                    ensuring optimal user experience and engagement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Digital Product & UX Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design solutions for political and governance digital products, 
              ensuring optimal user experience and strategic effectiveness.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-2xl flex items-center justify-center mb-4">
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

      {/* Design Areas Section */}
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
              Digital Product Types We Design
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {designAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{area}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-rose-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Design Deliverables
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-[#002147] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{deliverable}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-[#B31942] to-[#002147] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Digital Product & UX Design Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Design Excellence</h3>
                <p className="text-white/80">Advanced design principles and political technology expertise</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Users className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">User-Centered Design</h3>
                <p className="text-white/80">Compliance with UX best practices and accessibility standards</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <CheckCircle className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Strategic Solutions</h3>
                <p className="text-white/80">Cutting-edge design solutions for optimal engagement and impact</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[#002147]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Design Your Digital Platform
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with Digineta&apos;s design experts to create innovative, user-friendly, 
              and strategically effective political and governance digital products.
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
