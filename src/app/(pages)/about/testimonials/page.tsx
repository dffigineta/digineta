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
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Testimonials</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimonials</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              What campaign teams, leaders and governance partners say about working with Digineta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Testimonial 1 - National campaign */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-white">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-[#B31942] mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    &ldquo;Digineta turned our campaign into a disciplined machine. Every week we had
                    clarity on focus segments, booth performance and next actions. Leadership could see
                    the ground as clearly as the war-room.&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Campaign Director</h4>
                    <p className="text-gray-700 font-medium">National election campaign</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 - Governance partner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-white">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-[#002147] mr-2" />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic mb-6">
                    &ldquo;For our governance programs, Digineta created a simple structure – listen, act,
                    communicate. Citizens could see and feel the change, and we could track issues
                    before they became crises.&rdquo;
                  </blockquote>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 text-lg">Principal Secretary</h4>
                    <p className="text-gray-700 font-medium">State government department</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Case Studies */}
            <Card className="bg-[#002147] text-white border-0 shadow-2xl">
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
                  <div className="text-white/80 text-sm">
                    State-wide campaign: war-room and field coordination across districts
                  </div>
                  <div className="text-white/80 text-sm">
                    Governance program: citizen feedback and communication setup
                  </div>
                  <div className="text-white/80 text-sm">
                    Digital platform: unified data for leadership decisions
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

