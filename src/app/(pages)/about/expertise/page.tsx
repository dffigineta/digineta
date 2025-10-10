'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle, Lightbulb, Target, Users, Award } from 'lucide-react'

export default function ExpertisePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Expertise</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Expertise</h1>
            <p className="text-xl text-blue-100">Deep maritime industry knowledge and experience</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* i-maritime Consultancy Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-3 opacity-10"></div>
                  <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-20 bg-white/20 rounded-lg mx-auto mb-4"></div>
                      <div className="w-12 h-16 bg-white/30 rounded-lg mx-auto mb-2"></div>
                      <div className="w-14 h-18 bg-white/25 rounded-lg mx-auto"></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    i-maritime Consultancy is India&apos;s top maritime and port consultancy
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      i-maritime Consultancy has established itself in almost all <strong>maritime consulting practices</strong>. Starting from business and market research, feasibility and traffic studies, we have diversified to more challenging areas like <strong>Business Plans</strong> and <strong>Detailed Project Reports</strong>. We provide our clients with maritime consulting, port consultancy, etc. Our research division continuously tracks the industries and creates a vast knowledge repository. Outcome of this has been a number of <strong>Maritime Research publications</strong> which have been highly appreciated by the industry.
                    </p>
                    <p>
                      With a highly energetic and talented team, we are never short of innovative ideas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* What Makes Us Different */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What makes us different from other port consultancy services?
              </h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We focus solely on creating value for our clients. To that end, solid ports and shipping industry expertise, unbiased advice, innovation and the delivery of sustainable results are the foundation of every project.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <Users className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We understand our <strong>clients&apos;</strong> industries, their strategic pressures and their competitors.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="flex items-start space-x-4"
                >
                  <Award className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We combine our <strong>deep maritime and port consultancy experience</strong> and insight with forward-thinking strategies, new ideas and innovative thinking.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <Lightbulb className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We bring <strong>innovative thinking</strong> and innovative solutions.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We pride ourselves on our creativity and <strong>unique thinking</strong>; both in the strategies we develop and in the way we deliver our maritime consulting engagements.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    Our maritime consultancy division uses our <strong>industry alliances</strong> to recommend the best partners and solutions for individual client challenges. We don&apos;t merely make recommendations.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <ArrowRight className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600">
                    We work with senior management to implement ideas into workable plans, and strategize to turn those plans into results. Our teams are efficient and productive, so you are not forced into a protracted maritime consulting engagement.
                  </p>
                </motion.div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Testimonials */}
            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <CardTitle className="text-xl">Testimonials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Gulf Petrochem</h4>
                    <p className="text-blue-200 text-sm">Himadri S. Roy</p>
                    <p className="text-blue-200 text-sm">Financial Controller</p>
                  </div>
                  <blockquote className="text-blue-100 italic text-sm leading-relaxed">
                    &ldquo;Gulf Petrochem FZC, UAE, had commissioned i-maritime Consultants Pvt. Ltd., Navi Mumbai, to carry out the Market Feasibility and Techno-Economic Validation studies for our upcoming 320,000 MT Bulk Liquid Storage & Handling Terminal at Pipavav Port, Gujarat. In this connection, we are happy to place on record our sincere appreciation to them for a job well done...&rdquo;
                  </blockquote>
                  <Link href="/about/testimonials">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      More...
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Case Studies */}
            <Card className="bg-gradient-to-br from-purple-900 to-purple-800 text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">📁</span>
                  </div>
                  <CardTitle className="text-xl">Case Studies</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-purple-100 text-sm">
                    Techno Economic Feasibility Study for setting a port at Colachel
                  </div>
                  <div className="text-purple-100 text-sm">
                    Multi Logistics Park in Ahmedabad
                  </div>
                  <div className="text-purple-100 text-sm">
                    Strategy Report for Indian Port sector
                  </div>
                  <Link href="/knowledge-centre/case-studies">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      More...
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

