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
    description: 'In-depth analysis of maritime projects and solutions',
    href: '/knowledge-centre/case-studies'
  },
  {
    icon: Database,
    title: 'Infobank',
    description: 'Comprehensive maritime data and information repository',
    href: '/knowledge-centre/infobank'
  },
  {
    icon: Search,
    title: 'Research',
    description: 'Cutting-edge maritime research and analysis',
    href: '/knowledge-centre/research'
  }
]

const stats = [
  { icon: TrendingUp, value: '30+', label: 'Years Experience' },
  { icon: Users, value: '100+', label: 'Clients Worldwide' },
  { icon: Award, value: '200+', label: 'Projects Completed' },
  { icon: Globe, value: '15+', label: 'Countries Served' }
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20">
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
                India&apos;s Top Maritime, Port and Shipbuilding Consultant
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Welcome to
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                i-maritime
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              i-maritime has established itself in almost all consulting practices for maritime service industry. With matchless expertise, vast maritime knowledge and database, we provide quality consulting and research-based maritime services to a wide pool of Indian and international clients.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/services">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-6 group">
                  Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                  Read More About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maritime Services Section */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-3 opacity-10"></div>
              <Image
                src="/home-i-img-services.png"
                alt="Maritime Services"
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
                Maritime Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                i-maritime&apos;s focus has been on consulting assignments covering the entire maritime industry and its related practice areas. i-maritime not only provides in-depth knowledge but also provides assessment and analysis that address the demands of the client. Our maritime services run deep in the following segments of maritime industry:
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Ports and terminals',
                  'Shipping',
                  'Container Logistics and warehousing',
                  'Shipbuilding and Ship repair',
                  'Other maritime and port infrastructure'
                ].map((item, index) => (
          <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{item}</span>
          </motion.div>
                ))}
              </div>
              
              <Link href="/services">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-6 group sm:px-8 sm:py-4">
                  More about port, maritime and shipping consulting services...
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
        </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
          </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl transform rotate-2 opacity-10"></div>
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
                      <CardTitle className="text-2xl text-gray-900">Knowledge Centre</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    i-maritime takes a lot of physical and mental challenge to gather maritime data and convert this into information and subsequently knowledge.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {knowledgeCenterItems.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 group-hover:text-blue-600 font-medium">{item.title}</span>
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl transform -rotate-2 opacity-10"></div>
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
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">India Port Report</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Multi Logistics Park in Ahmedabad</span>
                    </div>
                  </div>
                  <Link href="/knowledge-centre/case-studies">
                    <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50 group">
                      More...
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
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
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
                Testimonials
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
            </div>
            
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Gulf Petrochem</h3>
                  <p className="text-blue-600 font-medium">Himadri S. Roy, Financial Controller</p>
                      </div>
                <blockquote className="text-lg text-gray-700 italic leading-relaxed text-center">
                  &ldquo;Gulf Petrochem FZC, UAE, had commissioned i-maritime Consultants Pvt. Ltd., Navi Mumbai, to carry out the Market Feasibility and Techno-Economic Validation studies for our upcoming 320,000 MT Bulk Liquid Storage & Handling Terminal at Pipavav Port, Gujarat. In this connection, we are happy to place on record our sincere appreciation to them for a job well done...&rdquo;
                </blockquote>
                <div className="text-center mt-6">
                  <Link href="/about/testimonials">
                    <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 group">
                      More...
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
              Ready to Partner with India&apos;s Leading Maritime Consultants?
          </h2>
            <p className="text-xl text-gray-600 mb-10">
              While focusing solely on creating value for our client through deep understanding of the maritime industry and unique thinking, we stand as ideal choice as maritime consultant, shipbuilding consultant and port consultant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6">
              Learn More About Us
                </Button>
              </Link>
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
