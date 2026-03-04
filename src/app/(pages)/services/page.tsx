'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import {
  Users,
  Shield,
  Landmark,
  Megaphone,
  Globe2,
  BarChart,
  FileText,
  TrendingUp,
  Target,
  Cpu,
  ArrowRight
} from 'lucide-react'

const whoWeWorkWith = [
  {
    icon: Landmark,
    title: 'National & state campaigns',
    description:
      'End-to-end support for national and state election campaigns – from research and strategy to booth-level execution.',
    color: 'from-[#B31942] to-[#002147]',
    features: ['General elections', 'Assembly campaigns', 'Alliances & coalitions']
  },
  {
    icon: Shield,
    title: 'Leaders & offices',
    description:
      'Support for party leadership, CMs\' offices and key ministries to align intent, information and action.',
    color: 'from-[#002147] to-[#B31942]',
    features: ['Leader reputation', 'Office communication', 'Decision dashboards']
  },
  {
    icon: Users,
    title: 'Local bodies & city campaigns',
    description:
      'Ward and municipality-level campaigns and governance programs focused on turnout, delivery and visibility.',
    color: 'from-[#B31942] to-[#B31942]',
    features: ['Urban local bodies', 'City issue campaigns', 'Ward-level programs']
  },
  {
    icon: Megaphone,
    title: 'Movements & citizen platforms',
    description:
      'Issue-based coalitions, civic movements and citizen platforms that need structure, messaging and technology.',
    color: 'from-[#002147] to-[#002147]',
    features: ['Issue campaigns', 'Membership platforms', 'Volunteer networks']
  },
  {
    icon: Globe2,
    title: 'Governance & public programs',
    description:
      'Flagship schemes and governance initiatives that require sustained communication and feedback loops.',
    color: 'from-[#002147] to-[#B31942]',
    features: ['Scheme communication', 'Feedback systems', 'Program dashboards']
  }
]

const whatWeDeliver = [
  {
    icon: BarChart,
    title: 'Research & intelligence',
    description:
      'Opinion research, sentiment intelligence and constituency mapping that reveal where you stand and why.'
  },
  {
    icon: FileText,
    title: 'Strategy & roadmapping',
    description:
      'Clear strategies and roadmaps that connect high-level goals to concrete milestones and weekly actions.'
  },
  {
    icon: TrendingUp,
    title: 'Booth & segment analysis',
    description:
      'Granular analysis of booths, segments and geographies to prioritise effort and resources.'
  },
  {
    icon: Target,
    title: 'Program design & feasibility',
    description:
      'Design and feasibility of campaigns and governance programs with clear impact hypotheses and metrics.'
  },
  {
    icon: Cpu,
    title: 'Digital platforms & tools',
    description:
      'Apps, dashboards and data infrastructure that connect leaders, cadre, citizens and information in real time.'
  },
  {
    icon: Users,
    title: 'Organisation & capacity building',
    description:
      'Team structures, training and rituals that keep campaigns and programs running at scale.'
  }
]


export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4">
              Our Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Political technology for campaigns and governance
            </h1>
            <p className="text-xl text-white/80">
              Digineta partners with campaigns, leaders and governments to bring together research,
              strategy, technology and field execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we work with */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">Who we work with</h2>
            <p className="text-xl text-black/70">
              From national campaigns and CMs&apos; offices to local bodies, movements and public
              programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whoWeWorkWith.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group border-0 bg-white">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-black">{item.title}</CardTitle>
                    <CardDescription className="text-base text-black/70">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-[#002147] rounded-full mr-2"></div>
                          <span className="text-black/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 bg-gradient-to-br from-[#f9fafb] to-[#e5e7eb]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-black mb-4">What we deliver</h2>
            <p className="text-xl text-black/70">
              Capabilities that combine intelligence, strategy, digital infrastructure and
              organisation-building.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDeliver.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-xl flex items-center justify-center mb-3">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg text-black">{area.title}</CardTitle>
                    <CardDescription className="text-black/70">{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#002147] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Want to partner with Digineta?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Tell us about your campaign, organisation or program and we&apos;ll explore how we can
              work together.
            </p>
            <Link href="/about/online-enquiry">
              <Button size="lg" className="bg-white text-[#002147] hover:bg-white/90">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

