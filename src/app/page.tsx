'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, TrendingUp, Users, Award, Globe, FileText, Database, Search } from 'lucide-react'

const knowledgeCenterItems = [
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real campaign stories from across India',
    href: '/knowledge-centre/case-studies'
  },
  {
    icon: Database,
    title: 'Election Analytics',
    description: 'Booth and village-level insights for your constituency',
    href: '/knowledge-centre/databases'
  },
  {
    icon: Search,
    title: 'Research & Insights',
    description: 'Daily political intelligence and issue tracking',
    href: '/knowledge-centre/research'
  }
]

const stats = [
  { icon: TrendingUp, value: '5000+', label: 'Booths Analysed' },
  { icon: Users, value: '200+', label: 'Leaders & Teams Served' },
  { icon: Award, value: '50+', label: 'Election Campaigns Supported' },
  { icon: Globe, value: '20+', label: 'States & UTs Covered' }
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002147] via-[#003366] to-[#00152e] py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm">
                India&apos;s Political Technology Venture
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              For Political Success
              <span className="block text-[#B31942]">
                in the Digital World
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Digineta is India&apos;s dedicated political technology venture. We combine deep election data, powerful apps and full-funnel digital outreach to help political leaders, parties and organisations win and govern better in the digital age.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <Button size="lg" className="bg-[#B31942] text-white hover:bg-[#8F1333] text-lg px-8 py-6 group">
                  Talk to Our Political Tech Team
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/knowledge-centre/case-studies">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  View Campaign Case Studies
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platforms & Solutions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#B31942] rounded-2xl transform rotate-3 opacity-10"></div>
              <Image
                src="/home-i-img-services.png"
                alt="Digineta Platforms"
                width={600}
                height={400}
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </motion.div>
            
        <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Platforms for Political Success
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Digineta brings together a suite of political technology platforms designed for leaders at every level. From hyper-local visibility to national narrative control, our solutions are built for Indian politics.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Mahaneta – public profile & performance showcase',
                  'Netabanner – one-stop promotion & poster engine',
                  'Smart Apps – Sarpanch, Corporator, MLA/MP & more',
                  'Voter Search & management tools',
                  'Party, association and social group platforms'
                ].map((item, index) => (
          <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-[#B31942] rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
          </motion.div>
                ))}
              </div>
              
              <Link href="/services">
                <Button className="bg-[#B31942] hover:bg-[#8F1333] text-white px-6 py-6 group sm:px-8 sm:py-4">
                  Explore all Digineta platforms and solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
        </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#B31942] rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
          </div>
                <div className="text-4xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-black">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Knowledge Centre & Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Knowledge Centre */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#002147] rounded-2xl transform rotate-2 opacity-10"></div>
              <Card className="relative z-10 h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/i-img-knowledgecenter.jpg"
                      alt="Knowledge Centre"
                      width={80}
                      height={60}
                      className="rounded-lg shadow-lg"
                    />
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Political Intelligence & Knowledge Centre</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-black leading-relaxed">
                    Daily political updates, election data and campaign learnings curated for leaders, party teams and spokespersons across India.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {knowledgeCenterItems.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#002147]/5 transition-colors group">
                          <div className="w-8 h-8 bg-[#B31942] rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-black group-hover:text-black font-medium">{item.title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#B31942] rounded-2xl transform -rotate-2 opacity-10"></div>
              <Card className="relative z-10 h-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/i-img-casestudies.jpg"
                      alt="Case Studies"
                      width={80}
                      height={60}
                      className="rounded-lg shadow-lg"
                    />
                    <div>
                      <CardTitle className="text-2xl text-gray-900">Case Studies</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f2ff] transition-colors">
                      <div className="w-2 h-2 bg-[#B31942] rounded-full"></div>
                      <span className="text-black font-medium">Cross-party digital campaign for an urban constituency</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-[#f3f2ff] transition-colors">
                      <div className="w-2 h-2 bg-[#B31942] rounded-full"></div>
                      <span className="text-black font-medium">Booth-level analytics strategy in a rural district</span>
                    </div>
                  </div>
                  <Link href="/knowledge-centre/case-studies">
                    <Button variant="outline" className="border-[#002147]/30 text-[#002147] hover:bg-[#002147]/5 group">
                      View all political case studies
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#B31942]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 px-4 py-2 text-sm mb-4">
                Proof of Political Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Leaders Say About Digineta</h2>
            </div>
            
            <Card className="bg-white border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-black mb-2">Sitting MLA, Western India</h3>
                  <p className="text-black font-medium">Name withheld, multi-term legislator</p>
                </div>
                <blockquote className="text-lg text-black italic leading-relaxed text-center">
                  &ldquo;Digineta&apos;s team helped us turn scattered data into clear booth-level strategy. Their apps and digital communication support ensured that every message reached the right voter segment at the right time.&rdquo;
                </blockquote>
                <div className="text-center mt-6">
                  <Link href="/about/testimonials">
                    <Button variant="outline" className="border-[#B31942]/30 text-[#B31942] hover:bg-white group">
                      Read more leader testimonials
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                      </div>
                    </CardContent>
                  </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Partner with India&apos;s Political Technology Venture?
          </h2>
            <p className="text-xl text-gray-600 mb-10">
              From booth-level analytics to full-funnel digital communication, Digineta becomes your dedicated political technology partner for the next election and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-[#B31942] hover:bg-[#8F1333] text-white text-lg px-8 py-6">
                  Schedule a Strategy Call
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6">
              Explore Services & Platforms
                </Button>
              </Link>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
