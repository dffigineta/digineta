'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Target, Shirt, Network } from 'lucide-react'

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
            <p className="text-xl text-blue-100">Join Digineta and build your career with India&apos;s political technology venture</p>
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
                Digineta believes employees are our key resources and recruits the best talent across political strategy, 
                data science, product design, and campaign operations. People working at Digineta come from diverse 
                backgrounds - premier institutes, political organizations, tech companies, and field experience. 
                Diversity is a striking feature at Digineta, with people not only coming from diverse cultural backgrounds 
                but also possessing diverse skill sets - from booth-level organizers to data scientists, from campaign 
                veterans to product designers. Apart from full-time professionals, we also have a rich network of 
                associates, field coordinators, and domain experts working on different campaigns and programs. 
                Work culture at Digineta revolves around the principles of honesty, dedication, discretion, and 
                outcome-focused execution.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-lg text-gray-700 font-medium italic">
                  Digineta&apos;s work culture revolves around the principles of honesty, dedication, discretion, and outcome-focused execution.
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
                    Our commitment to our mission drives us towards our goals. At Digineta, we work on campaigns and 
                    programs that are both stimulating and impactful. Our professionals work with leaders, parties, and 
                    organizations across India on a variety of assignments ranging from national election campaigns to 
                    governance communication systems, from booth-level analytics to digital platform development.
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
                    We maintain a professional and disciplined work culture while being flexible to the demands of campaign 
                    cycles and field realities. Our professionalism and discretion are what build our clients&apos; confidence 
                    in us and have earned us a strong reputation among leaders and parties. A friendly and collaborative 
                    work environment facilitates teamwork across strategy, data, product, and field operations.
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

