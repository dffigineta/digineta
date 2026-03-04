'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BarChart, TrendingUp, MapPin, Clock, Target, Users } from 'lucide-react'

const services = [
  {
    icon: BarChart,
    title: "Booth-level analysis",
    description: "Comprehensive analysis of booth-level voting patterns, demographic composition, and electoral performance to identify priority booths."
  },
  {
    icon: TrendingUp,
    title: "Segment targeting",
    description: "Advanced segmentation models to identify voter segments, their preferences, and movement patterns for targeted outreach."
  },
  {
    icon: MapPin,
    title: "Geographic analysis",
    description: "Detailed analysis of constituency geography, voter distribution, and regional voting patterns to optimize campaign resource allocation."
  },
  {
    icon: Target,
    title: "Voter segmentation",
    description: "Analysis of voter segments by demographics, issues, and voting behavior to design targeted messaging and outreach strategies."
  },
  {
    icon: Users,
    title: "Influence network mapping",
    description: "Mapping of key influencers, community leaders, and opinion makers at booth and segment levels for effective mobilization."
  },
  {
    icon: Clock,
    title: "Turnout analysis",
    description: "Identification of turnout patterns, peak voting periods, and mobilization opportunities for GOTV (Get Out The Vote) planning."
  }
]

const methodologies = [
  "Historical voting data analysis",
  "Statistical modeling & forecasting",
  "Voter surveys & opinion research",
  "Booth-level performance tracking",
  "Demographic & segment mapping",
  "Voter turnout analysis",
  "Peak voting period analysis",
  "Seasonal & temporal pattern analysis",
  "Vote share projections",
  "Competitive analysis & swing mapping"
]

const applications = [
  "Campaign resource allocation",
  "Booth prioritization & targeting",
  "Volunteer & cadre deployment",
  "Message customization by segment",
  "GOTV planning & execution",
  "Constituency-level strategy",
  "Competitive positioning & response",
  "Voter outreach optimization"
]

export default function TrafficStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-[#f97316] to-[#0f172a] text-white overflow-hidden">
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
                Our Solutions &gt; What we deliver &gt; Booth & segment analysis
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Booth & segment analysis
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Granular analysis of booths, segments and geographies to prioritize effort 
              and resources for maximum electoral impact.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#f97316]/20 rounded-2xl rotate-3"></div>
                <div className="relative bg-[#0f172a] p-4 rounded-2xl shadow-xl flex items-center justify-center">
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
                <h2 className="text-3xl font-bold text-white mb-6">
                  Granular Booth & Segment Analysis
                </h2>
                <div className="space-y-4 text-[#cbd5e1] leading-relaxed">
                  <p>
                    Our booth & segment analysis provides critical insights into voter behavior, helping 
                    campaigns optimize resource allocation, prioritize booths, and design targeted outreach. 
                    We combine advanced analytical techniques with deep political and electoral expertise.
                  </p>
                  <p>
                    Our analysis covers booth-level voting patterns, voter segmentation, geographic 
                    distribution, and turnout analysis to support strategic decision-making for campaigns, 
                    parties, and candidates.
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
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Booth & Segment Analysis Services
            </h2>
            <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto">
              Comprehensive analysis solutions designed to optimize campaign resource allocation 
              and support strategic targeting decisions.
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
                    <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#0f172a] rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#cbd5e1] leading-relaxed">{service.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Analysis Methodologies
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
                  <div className="w-3 h-3 bg-[#0f172a] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#cbd5e1] font-medium">{method}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Applications for Campaigns
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
                  <div className="w-3 h-3 bg-[#f97316] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#cbd5e1] font-medium">{application}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-r from-[#f97316] to-[#0f172a] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Booth & Segment Analysis?
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
                <h3 className="text-lg font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-white/80">Advanced analytics and modeling for accurate voter behavior predictions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Strategic Targeting</h3>
                <p className="text-white/80">Support for campaign resource allocation and targeting decisions</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Users className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Electoral Expertise</h3>
                <p className="text-white/80">Deep political and electoral knowledge with proven methodologies</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[#0f172a]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimize Your Campaign Targeting
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get comprehensive booth & segment analysis to maximize campaign efficiency, 
              prioritize resources, and drive electoral success.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[#0f172a] hover:bg-white/90 font-semibold px-8 py-4"
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
