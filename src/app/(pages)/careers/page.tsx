'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { MapPin, Briefcase, Clock, ArrowRight, Users, Target, Shirt, Network } from 'lucide-react'

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/careers" className="hover:text-white">Careers</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Career</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Career</h1>
            <p className="text-xl text-blue-100">Join i-maritime and build your career with India's leading maritime consultancy</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                i-maritime consultancy believes employees as its key resources and hence recruits the best talent around. 
                People working at i-maritime come from premier institutes of India or are those who have proven their 
                talent in business areas. Diversity is the striking feature which would be observed working at i-maritime, 
                with people not only coming from diverse cultural background but also possessing diverse skill sets. 
                Apart from the full time professionals, we also have rich network of associates and institutes of repute 
                working for different projects along with i-maritime. Work culture at i-maritime revolves around the 
                principles of honesty, dedication and sincerity.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-lg text-gray-700 font-medium italic">
                  The i-maritime work culture revolves around the principles of honesty, dedication and sincerity.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Work Culture Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Work towards goals */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Work towards goals. We value commitment</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Our commitment to our mission drives us towards our goals. At i-maritime, we work on projects and 
                    assignments that are both stimulating and challenging. Our professionals work with national as well 
                    as international clients on a variety of assignments ranging from corporate restructuring to e-business consulting.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Formal in attire */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Shirt className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Formal in attire. Informal by access</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    We insist on a formal and disciplined work culture that is characterised by our formal dress code. 
                    Our professionalism is what builds our clients&apos; confidence in us and has earned us a good reputation 
                    among our clients. A friendly and informal work environment facilities teamwork.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* No hierarchy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Network className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">No hierarchy. Ours is a flat structure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ours is a flat, seamless organisation where communication does not follow rigorous protocols. 
                    We place high value on delivery and therefore do not attach much importance to designations. 
                    We believe that respect comes from knowledge and achievement rather than years of experience.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We encourage a formal but friendly and professional environment fostering a strong sense of 
                    camaraderie and fairplay in all our relationships.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

