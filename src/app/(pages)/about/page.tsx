'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Users, Target, Award, TrendingUp, Globe, Lightbulb } from 'lucide-react'

const stats = [
  { value: '1993', label: 'Founded' },
  { value: '30+', label: 'Years of Excellence' },
  { value: '100+', label: 'Global Clients' },
  { value: '200+', label: 'Projects Delivered' }
]

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Committed to delivering exceptional quality in every project',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pioneering solutions for complex maritime challenges',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Building lasting partnerships with our clients',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Upholding the highest ethical standards',
    color: 'from-green-500 to-emerald-500'
  }
]

const spus = [
  { title: 'Business Consulting', description: 'Strategic advisory and market intelligence' },
  { title: 'Technical Design Consulting', description: 'Engineering and design excellence' },
  { title: 'Corporate Finance Advisory', description: 'Financial structuring and investment advisory' },
  { title: 'Global Maritime Knowledge Centre', description: 'Industry research and insights' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 mb-4">
              About Us
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              India's Leading Maritime Consultancy
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Since 1993, we've been transforming the maritime industry with innovative solutions, 
              deep expertise, and unwavering commitment to excellence.
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
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 1993 by Mr. Ramesh Singhal, i-maritime Consultancy has grown 
                  into India's premier maritime consulting firm. Our journey began with a 
                  vision to provide world-class consulting services to the maritime industry.
                </p>
                <p>
                  Today, we serve over 100 clients globally, having successfully delivered 
                  more than 200 projects across ports, shipping, logistics, and shipbuilding sectors.
                </p>
                <p>
                  Our expertise spans the entire maritime value chain, supported by our 
                  Strategic Practice Units and Global Maritime Knowledge Centre.
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
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{spu.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{spu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
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
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
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
              <p className="text-lg text-blue-100 leading-relaxed">
                To provide world-class maritime consulting services that empower our clients 
                to navigate industry complexities and achieve sustainable growth through 
                innovation, expertise, and unwavering commitment to excellence.
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
              <p className="text-lg text-blue-100 leading-relaxed">
                To be the most trusted and respected maritime consulting firm in India and 
                beyond, recognized globally for our expertise, integrity, and transformative 
                impact on the maritime industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
  )
}
