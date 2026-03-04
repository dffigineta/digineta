'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { TrendingUp, BarChart, Target, Users, DollarSign, FileText } from 'lucide-react'

const services = [
  {
    icon: TrendingUp,
    title: "Leader reputation tracking",
    description: "Comprehensive reputation analysis of leaders using multiple methodologies including sentiment analysis, media tracking, and public opinion research."
  },
  {
    icon: BarChart,
    title: "Equity analysis",
    description: "In-depth analysis of leadership equity, vote share trends, and performance benchmarking for leaders and political entities."
  },
  {
    icon: Target,
    title: "Narrative tracking",
    description: "Strategic narrative tracking with detailed analysis of message performance, narrative shifts, and positioning recommendations."
  },
  {
    icon: Users,
    title: "Segment analysis",
    description: "Comprehensive analysis of voter segments including demographic groups, issue-based clusters, and geographic patterns with equity trends."
  },
  {
    icon: DollarSign,
    title: "Risk assessment",
    description: "Detailed risk analysis including reputation risk, narrative risk, competitive risk, and electoral risk assessment for strategic decisions."
  },
  {
    icon: FileText,
    title: "Tracking reports",
    description: "Detailed reputation and equity tracking reports covering leader performance, narrative trends, and strategic opportunities."
  }
]

const researchTypes = [
  "Leader reputation baseline reports",
  "Quarterly equity tracking analysis",
  "Narrative trend reports",
  "Coalition & alliance analysis",
  "Campaign performance research",
  "Segment movement analysis",
  "Competitive positioning analysis",
  "Issue-based equity analysis"
]

const sectors = [
  "National & state leaders",
  "Local body leaders",
  "Party leadership",
  "Ministry & department heads",
  "Constitutional office holders",
  "Movement leaders",
  "Coalition partners",
  "Emerging leaders"
]

export default function EquityResearchPage() {
  return (
    <div className="min-h-screen bg-white">
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
                Our Solutions &gt; What we deliver &gt; Reputation & equity tracking
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Reputation & equity tracking
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Tracking leadership equity, reputation and narrative over time to identify 
              trends and drive informed strategic decisions.
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
                  Strategic Reputation & Equity Tracking
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our reputation & equity tracking services provide comprehensive analysis and 
                    monitoring expertise for leaders and political entities. We combine sentiment 
                    analysis with political expertise to deliver actionable insights and recommendations.
                  </p>
                  <p>
                    Our tracking covers leader reputation, narrative performance, equity trends, 
                    and strategic recommendations, helping campaigns, parties, and leadership teams 
                    make informed decisions about positioning and communication.
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
              Our Reputation & Equity Tracking Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tracking solutions designed to identify reputation trends 
              and support informed strategic decisions for leaders and campaigns.
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

      {/* Research Types Section */}
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
              Types of Tracking We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {researchTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Leaders & Entities We Track
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
                  <div className="w-3 h-3 bg-[#B31942] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
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
              Why Choose Our Reputation & Equity Tracking?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <BarChart className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Deep Political Knowledge</h3>
                <p className="text-white/80">Extensive political and electoral expertise and insights</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
                <p className="text-white/80">Clear strategic recommendations with narrative guidance</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <TrendingUp className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Trend Analysis</h3>
                <p className="text-white/80">Comprehensive trend assessment for informed strategic decisions</p>
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
              Track Your Reputation & Equity
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with Digineta&apos;s tracking experts to monitor reputation trends 
              and make informed strategic decisions for leaders and campaigns.
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
