'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BarChart, TrendingUp, Target, Users, Globe, FileText, Search } from 'lucide-react'

const services = [
  {
    icon: BarChart,
    title: 'Opinion & sentiment research',
    description:
      'Surveys, focus groups and sentiment analysis that reveal how voters and citizens think, feel and prioritise issues.'
  },
  {
    icon: TrendingUp,
    title: 'Electoral & program forecasting',
    description:
      'Models to estimate vote share, turnout and program impact across geographies and segments.'
  },
  {
    icon: Target,
    title: 'Competitive & narrative intelligence',
    description:
      'Understanding how opponents are positioned, what narratives are moving and where there is space to lead.'
  },
  {
    icon: Users,
    title: 'Constituency & segment mapping',
    description:
      'Segmenting constituencies, booths and groups to identify priority clusters and influence networks.'
  },
  {
    icon: Globe,
    title: 'Channel & media insights',
    description:
      'Insights on which channels, formats and messengers are most effective for different audiences.'
  },
  {
    icon: FileText,
    title: 'Custom research programs',
    description:
      'Multi-wave research programs designed around specific campaign or governance questions.'
  }
]

const methodologies = [
  "Primary Research & Surveys",
  "Secondary Data Analysis", 
  "Statistical Modeling",
  "Market Sizing & Forecasting",
  "Competitive Benchmarking",
  "SWOT Analysis",
  "PEST Analysis",
  "Industry Expert Interviews"
]

const sectors = [
  'National and state elections',
  'Urban local bodies and panchayats',
  'Leaders and constitutional offices',
  'Flagship schemes and governance programs',
  'Issue-based campaigns and movements',
  'Digital and media ecosystems',
]

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-white">
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
                Services &gt; What we deliver &gt; Research & intelligence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research & intelligence
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Deep, continuous intelligence for campaigns and governance – from baseline research to
              tracking and narrative testing.
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
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#B31942] rounded-2xl rotate-3"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-xl">
                  <Image
                    src="/home-i-img-services.png"
                    alt="Research & intelligence"
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
                  Strategic Research & Intelligence
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our research & intelligence services provide deep insights into campaign and governance dynamics, 
                    helping leaders make informed strategic decisions. We combine advanced analytical 
                    methodologies with industry expertise to deliver actionable intelligence.
                  </p>
                  <p>
                    Our research covers opinion & sentiment analysis, electoral & program forecasting, 
                    competitive & narrative intelligence, constituency & segment mapping, and channel & media insights.
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
            <h2 className="text-4xl font-bold text-black mb-6">
              Our research & intelligence services
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Research programs that give leaders a clear, regular sense of reality on the ground
              and in the media.
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/80 leading-relaxed">{service.description}</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Research Methodologies
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
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-black font-medium">{method}</p>
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
            <h2 className="text-4xl font-bold text-black mb-12 text-center">
              Contexts we work in
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
                  <p className="text-black font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why choose Digineta research?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Search className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Grounded in reality</h3>
                <p className="text-white/80">Continuous listening across surveys, field reports and digital signals</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <BarChart className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Clear, simple analytics</h3>
                <p className="text-white/80">Models that are rigorous, but presented in formats leaders can act on</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-indigo-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Linked to execution</h3>
                <p className="text-white/80">Every recommendation is tied to concrete changes in campaign or program execution</p>
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
              Bring research to the centre of your decisions
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with our research and intelligence team to make every major political or
              governance decision evidence-led.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-semibold px-8 py-4"
              >
                Request Research & Intelligence
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
