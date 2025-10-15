'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function PeoplePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">People</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Key People</h1>
            <p className="text-xl text-blue-100">Meet our team of maritime experts</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                i-maritime comprises professionals with diverse functional skills in areas like maritime, international trade, corporate finance advisory, marketing, human resources, logistics and supply chain management.
              </p>
            </motion.section>

            {/* A mix of experience and youthful dynamism */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">A mix of experience and youthful dynamism</h2>
              <p className="text-gray-600 leading-relaxed">
                We believe that experienced professionals provide the necessary knowledge, experience and pragmatism. We also believe that youthful dynamism contributes vitally due to their drive, out-of-the-box thinking and their ease with modern advancements.
              </p>
            </motion.section>

            {/* Profile of a Business Analyst */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile of a Business Analyst</h2>
              <p className="text-gray-600 leading-relaxed">
                A typical i-maritime Analyst is an MBA-technocrat from IIT-IIM-ISB. They work alongside technically experienced professionals from Navy, Shipping etc.
              </p>
            </motion.section>

            {/* Profile of an Associate */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile of an Associate</h2>
              <p className="text-gray-600 leading-relaxed">
                i-maritime has a team of specialized experts from maritime industry and academics who work on project basis to bring in the expertise, management principles and domain knowledge.
              </p>
            </motion.section>

            {/* Key People Profiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ramesh Singhal */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-blue-500 shadow-lg">
                        <Image
                          src="/RameshSinghal2.jpg"
                          alt="Ramesh Singhal"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl mb-2">Ramesh Singhal</CardTitle>
                      <p className="text-blue-600 font-semibold">B.Tech, Naval Architecture, IIT Madras and MBA, IIM Bangalore</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Mr. Ramesh Singhal is the CEO of i-maritime Consultancy and is one of the pioneers of marine consulting in India. He has led more than 450 consulting studies in the maritime sector including leading domestic, international business conglomerates, maritime companies, financial institutions, banks and private equity investors. He works on a wide spectrum of verticals within the maritime sector including ports, shipping, shipbuilding, offshore and logistics sectors.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Vishram Naniwadekar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-purple-500 shadow-lg">
                        <Image
                          src="/Vishram-250x300.jpg"
                          alt="Vishram Naniwadekar"
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl mb-2">Vishram Naniwadekar</CardTitle>
                      <p className="text-purple-600 font-semibold">B. Tech, IIT Madras and MBA, IIM Calcutta</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      Mr. Vishram Naniwadkar, working as Corporate Advisor of i-maritime Consultancy is Co-founder of AppLabs, a 1000 people strong software firm; Presently an IT Advisor for several IT Firms and Government organizations across India, US, Europe and South-East Asia.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Testimonials */}
            <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white border-0 shadow-2xl">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">💬</span>
                  </div>
                  <CardTitle className="text-xl">Testimonials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Gulf Petrochem</h4>
                    <p className="text-blue-200 text-sm">Himadri S. Roy</p>
                    <p className="text-blue-200 text-sm">Financial Controller</p>
                  </div>
                  <blockquote className="text-blue-100 italic text-sm leading-relaxed">
                    &ldquo;Gulf Petrochem FZC, UAE, had commissioned i-maritime Consultants Pvt. Ltd., Navi Mumbai, to carry out the Market Feasibility and Techno-Economic Validation studies for our upcoming 320,000 MT Bulk Liquid Storage & Handling Terminal at Pipavav Port, Gujarat. In this connection, we are happy to place on record our sincere appreciation to them for a job well done...&rdquo;
                  </blockquote>
                  <Link href="/about/testimonials">
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      More...
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

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

