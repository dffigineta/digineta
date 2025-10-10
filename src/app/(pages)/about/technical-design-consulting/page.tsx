'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'

const services = [
  'Port Master Planning',
  'Terminal Layout Design',
  'Infrastructure Engineering',
  'Equipment Selection',
  'Technology Integration',
  'Operational Design'
]

export default function TechnicalDesignConsultingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Technical Design Consulting</h1>
            <p className="text-xl text-blue-100">Engineering excellence for maritime infrastructure</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Technical Design Consulting practice delivers comprehensive engineering and design services for maritime infrastructure. We provide innovative solutions combining technical expertise with practical operational considerations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <p className="font-semibold text-gray-900">{service}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

