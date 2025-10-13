'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader } from '@/components/ui/Card'
import { Building, Calendar, Users, Award } from 'lucide-react'

export default function CorporateProfilePage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Corporate Profile</h1>
            <p className="text-xl text-blue-100">Leading maritime consultancy since 1993</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About i-maritime</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  i-maritime Consultancy Private Limited was founded in 1993 by Mr. Ramesh Singhal with a vision to provide comprehensive maritime consulting services. Over three decades, we have established ourselves as India&apos;s premier maritime consulting firm.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our services span the entire maritime value chain including ports and terminals, shipping, container logistics, shipbuilding, and maritime infrastructure. We serve over 100 clients globally and have successfully delivered more than 200 projects.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With Strategic Practice Units in Business Consulting, Technical Design, Corporate Finance Advisory, and a Global Maritime Knowledge Centre, we provide integrated solutions for complex maritime challenges.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { icon: Calendar, title: 'Founded', value: '1993' },
                { icon: Users, title: 'Clients', value: '100+' },
                { icon: Award, title: 'Projects', value: '200+' },
                { icon: Building, title: 'Locations', value: 'Pan-India' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-600">{item.title}</div>
                          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

