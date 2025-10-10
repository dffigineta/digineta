'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Quote, Star } from 'lucide-react'

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Testimonials</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl text-blue-100">Here are some of the testimonial were recived from our clients</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Testimonial 1 - Tata Power */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-500 mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    &ldquo;Overall work done by i-maritime Consultancy is satisfactory and we wish them all the best in their future consulting projects in India and abroad.&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-lg">D. Raina, Dy. General Manager</h4>
                    <p className="text-blue-600 font-medium">Tata Power</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 - Adani Group */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-green-500 mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    &ldquo;The overall DPR done by i-maritime Consultancy Private Ltd. is satisfactory. i-maritime team has been thoroughly professsional with attention to detail and strict adherence to timelines. We wish them all the best in their future consulting projects in India and abroad.&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Adani Group</h4>
                    <p className="text-green-600 font-medium">Gujrat Adani Port Ltd., Mundra</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
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

