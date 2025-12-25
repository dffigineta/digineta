'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Users, Target, Award, Globe, Lightbulb } from 'lucide-react'

const stats = [
  { value: '5000+', label: 'Booths Analysed' },
  { value: '200+', label: 'Leaders & Teams Served' },
  { value: '50+', label: 'Election Campaigns' },
  { value: '20+', label: 'States & UTs Covered' }
]

const values = [
  {
    icon: Target,
    title: 'Outcome Focused',
    description: 'Every product, dashboard and campaign is built to deliver political outcomes, not vanity metrics.',
    color: 'from-[#B31942] to-[#002147]'
  },
  {
    icon: Lightbulb,
    title: 'Technology First',
    description: 'Apps, data platforms and automated outreach workflows designed for Indian politics.',
    color: 'from-[#002147] to-[#004080]'
  },
  {
    icon: Users,
    title: 'On-Ground Understanding',
    description: 'Strategies shaped by real constituency realities, not just spreadsheets.',
    color: 'from-[#B31942] to-[#80102D]'
  },
  {
    icon: Award,
    title: 'Trust & Discretion',
    description: 'Long-term relationships with leaders, parties and teams built on confidentiality and integrity.',
    color: 'from-[#002147] to-[#00152e]'
  }
]

const spus = [
  { title: 'Political Intelligence', description: 'Booth, village and ward-level data for sharper strategy.' },
  { title: 'Digital Campaign Platforms', description: 'Mahaneta, Netabanner and leader apps built for visibility and engagement.' },
  { title: 'Content & Social Media Engines', description: 'Always-on content, creative and distribution tuned to local realities.' },
  { title: 'Organisation & Cadre Tools', description: 'Workflows, apps and dashboards that keep teams aligned from HQ to booth.' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-[#002147] via-[#003366] to-[#00152e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#B31942] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#002147] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4">
              About Digineta
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              India&apos;s Political Technology Venture
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Digineta brings together election intelligence, digital products and full-funnel outreach to help
              political leaders, parties and organisations win and govern better in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-[#B31942] to-[#002147] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-black text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-black leading-relaxed">
                <p>
                  Digineta was created with a single belief: Indian politics needs dedicated technology built
                  for its scale, complexity and pace. Generic marketing tools and scattered spreadsheets
                  are not enough for modern election campaigns.
                </p>
                <p>
                  Our team brings together experience across elections, data, digital marketing and product
                  building. We have supported leaders and teams across India with booth-level analytics,
                  mobile apps, content engines and digital outreach.
                </p>
                <p>
                  Today, Digineta works as a long-term political technology partner – helping leaders track
                  ground reality, communicate with citizens and run more organised campaigns cycle after cycle.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {spus.map((spu, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardHeader>
                    <CardTitle className="text-base text-black">{spu.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-black">{spu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#002147]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Digineta Stands For</h2>
            <p className="text-xl text-white">The principles that guide how we build, measure and support political technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-black">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#002147] via-[#003366] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-white leading-relaxed">
                To be the dedicated political technology partner for leaders, parties and organisations across India –
                turning data, apps and digital communication into practical tools that improve campaigns and governance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Globe className="w-10 h-10 mr-4" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-white leading-relaxed">
                To help Indian politics adopt technology that is rooted in local realities – where every leader,
                from village to Parliament, can access the intelligence and digital infrastructure they need.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
  )
}
