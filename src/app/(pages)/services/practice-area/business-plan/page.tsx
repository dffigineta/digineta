'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { FileText, Target, TrendingUp, Users, DollarSign, Globe, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: "Election strategy development",
    description: "Comprehensive election strategies covering path-to-victory frameworks, seat prioritization, and campaign roadmaps for political parties and candidates."
  },
  {
    icon: Target,
    title: "Governance roadmaps",
    description: "Strategic roadmaps for governance programs, policy implementation, and public service delivery with clear milestones and metrics."
  },
  {
    icon: TrendingUp,
    title: "Scenario planning",
    description: "Strategic scenario planning for different electoral outcomes, coalition possibilities, and governance challenges."
  },
  {
    icon: Users,
    title: "Campaign planning",
    description: "Detailed campaign plans covering organizational structure, resource allocation, timeline, and execution frameworks."
  },
  {
    icon: DollarSign,
    title: "Resource planning",
    description: "Strategic resource planning including budget allocation, team structure, and partner network planning."
  },
  {
    icon: Globe,
    title: "Strategic positioning",
    description: "Comprehensive strategies for positioning leaders, parties, and movements in competitive political landscapes."
  }
]

const components = [
  "Executive Summary",
  "Campaign or Program Overview & Vision",
  "Political Landscape & Opportunity Analysis",
  "Competitive Positioning & Opposition Analysis",
  "Message & Narrative Architecture",
  "Outreach & Engagement Strategy",
  "Operational Plan & Structure",
  "Team & Organization Design",
  "Resource Planning & Budget",
  "Risk Analysis & Mitigation",
  "Implementation Timeline & Milestones",
  "Success Metrics & KPIs"
]

const sectors = [
  "National & state election campaigns",
  "Local body & city campaigns",
  "Governance programs & schemes",
  "Issue-based movements",
  "Leader positioning & reputation",
  "Party strategy & positioning",
  "Coalition & alliance planning",
  "Public program design"
]

export default function BusinessPlanPage() {
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
                Our Solutions &gt; What we deliver &gt; Strategy & roadmapping
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Strategy & roadmapping
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Election and governance strategies with clear roadmaps that translate vision 
              into weekly priorities and concrete actions.
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
                  Strategic Planning & Roadmapping Excellence
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our strategy & roadmapping services help campaigns, parties and governments develop 
                    comprehensive strategies that clearly articulate their vision, path-to-victory, and 
                    execution roadmap. We combine political expertise with proven strategic planning 
                    methodologies to create actionable plans that drive electoral success and governance impact.
                  </p>
                  <p>
                    Whether you&apos;re running an election campaign, designing a governance program, or planning 
                    a movement strategy, our roadmaps provide the strategic foundation and detailed execution 
                    plan needed for success in political and governance contexts.
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
              Our Strategy & Roadmapping Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive strategic planning solutions tailored to the unique requirements 
              and challenges of campaigns, governance programs and political movements.
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
              Strategy & Roadmap Components
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
                  <CheckCircle className="w-6 h-6 text-[#002147] mt-1 flex-shrink-0" />
                  <p className="text-gray-700 font-medium">{component}</p>
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
              Contexts We Work In
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
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Strategy & Roadmapping Process
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                <p className="text-white/80 text-sm">Understanding your vision, goals, and political context</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                <h3 className="text-lg font-semibold mb-2">Analysis</h3>
                <p className="text-white/80 text-sm">Research, competitive analysis, and opportunity assessment</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                <h3 className="text-lg font-semibold mb-2">Strategy</h3>
                <p className="text-white/80 text-sm">Developing comprehensive strategy and execution roadmap</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                <h3 className="text-lg font-semibold mb-2">Delivery</h3>
                <p className="text-white/80 text-sm">Presenting comprehensive strategy with detailed implementation roadmap</p>
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
              Transform Your Vision Into Action
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with Digineta&apos;s strategy team to create compelling, 
              actionable roadmaps that drive electoral success and governance impact.
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
