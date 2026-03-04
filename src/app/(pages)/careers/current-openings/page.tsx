'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react'

export default function CurrentOpeningsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/careers" className="hover:text-white">Join Our Team</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Current Opening</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Current Openings</h1>
            <p className="text-xl text-blue-100">Want to join the Digineta team? Here are our current openings in political technology, research, and campaign operations. Pick the one which suits you and submit your resume.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Want to join the Digineta team? Here are our current openings in political technology, 
              research, and campaign operations. Pick the one which suits you and submit your resume.
            </p>
          </motion.div>

          {/* Job Openings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Sample Job Opening 1 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3">Senior Campaign Strategist</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Lead multi-state election campaigns, design path-to-victory strategies, and work with party leadership 
                      on narrative and booth-level execution. Experience in Indian politics and data-driven campaigning required.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Strategy
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Delhi / Remote
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <Link href="/careers/submit-resume">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>

            {/* Sample Job Opening 2 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3">Political Research & Data Analyst</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Analyze polling data, voter sentiment, and constituency-level trends. Build dashboards and models 
                      for vote share forecasting and segment analysis. Experience with survey research and statistical modeling preferred.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Research
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Bengaluru / Remote
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <Link href="/careers/submit-resume">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>

            {/* Sample Job Opening 3 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3">Product Designer (Political Platforms)</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Design user experiences for leader apps, voter management tools, and campaign dashboards. 
                      Work on Mahaneta, Netabanner and other Digineta platforms. Experience with mobile-first design and Indian language interfaces preferred.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Design
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Remote
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <Link href="/careers/submit-resume">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>

            {/* Sample Job Opening 4 */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-3">Program Finance & Operations Analyst</CardTitle>
                    <p className="text-gray-600 mb-4">
                      Support campaign and governance program budgeting, resource allocation, and financial planning. 
                      Work with teams on program feasibility and cost optimization. Experience with political campaigns or public programs preferred.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        Finance
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Delhi / Remote
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Full-time
                      </div>
                    </div>
                  </div>
                  <Link href="/careers/submit-resume">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 whitespace-nowrap">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
            </Card>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don&apos;t see a suitable position?</h3>
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for talented professionals. Submit your resume and we&apos;ll get back to you when a suitable opportunity arises.
              </p>
              <Link href="/careers/submit-resume">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white">
                  Submit Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

