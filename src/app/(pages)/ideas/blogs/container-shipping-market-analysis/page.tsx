'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react'

export default function ContainerShippingMarketAnalysisBlogPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/ideas" className="hover:text-white">Campaign i-deas</Link>
              <span className="mx-2">›</span>
              <Link href="/ideas/blogs" className="hover:text-white">Blogs</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Booth & Voter Segment Analysis Playbook</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/ideas/blogs">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-blue-500 text-white">Booths</Badge>
              <Badge className="bg-blue-500 text-white">Segments</Badge>
              <Badge className="bg-blue-500 text-white">Analysis</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Booth & Voter Segment Analysis Playbook</h1>
            <div className="flex flex-wrap items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Digineta Data Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Dec 28, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Winning Indian elections increasingly comes down to one thing: knowing your voter. Booth-level analysis and voter segmentation have moved from advanced tactics to baseline requirements for competitive campaigns.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">1. Understanding Booth-Level Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each polling booth represents a micro-community with its own demographic profile, caste composition, historical turnout, and swing patterns. A winning campaign maps every booth — identifying strongholds to consolidate, weak booths to recover, and swing booths to contest aggressively.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">2. Voter Segmentation Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Effective segmentation goes beyond caste and religion. Modern campaigns segment voters by: age group and first-time voter status, urban vs. rural concerns, economic profile and employment type, past voting behavior and party alignment, and engagement level (active supporters, persuadable, or opposition-leaning).
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">3. Targeting Strategies by Segment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Each segment demands a different communication approach. Persuadable voters need issue-based outreach with local relevance. Loyal supporters need mobilization and motivation. Opposition voters may not be worth direct investment — but preventing their turnout through counter-mobilization in key booths can shift margins.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">4. Ground-Truthing with Field Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Quantitative booth data must be validated with field intelligence. Booth-level workers and local leaders hold contextual knowledge that no dataset captures — a feud between community leaders, a recently completed infrastructure project, or a new factory that&apos;s created local employment. Integrating this qualitative layer makes segmentation far more accurate.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
            <Card className="border-0 shadow-xl mb-12">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">5. Continuous Refinement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Voter segment analysis is not a one-time pre-election exercise. Campaigns that track sentiment shifts, monitor local incidents, and update their booth maps throughout the campaign cycle make better tactical decisions and avoid being caught off guard by late-breaking dynamics.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
            <Card className="border-0 shadow-xl mb-12 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Conclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The playbook is clear: treat every booth as a unique battleground, treat every voter segment as a distinct audience, and let data inform — but not replace — the human judgment of experienced ground teams.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

