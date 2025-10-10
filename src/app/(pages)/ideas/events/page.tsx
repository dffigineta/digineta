'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, MapPin } from 'lucide-react'

const events = [
  {
    title: 'Maritime Summit 2025',
    description: 'Annual conference bringing together maritime industry leaders, policymakers, and innovators to discuss the future of maritime trade and operations.',
    date: 'March 15-17, 2025',
    location: 'Mumbai, India',
    type: 'Conference'
  },
  {
    title: 'Port Technology Expo',
    description: 'Exhibition showcasing the latest port technologies, automation solutions, and digital innovations transforming terminal operations.',
    date: 'April 20-22, 2025',
    location: 'Chennai, India',
    type: 'Exhibition'
  },
  {
    title: 'Shipbuilding Innovation Forum',
    description: 'Forum focused on shipbuilding technology, design innovations, and sustainable ship construction practices.',
    date: 'May 10-11, 2025',
    location: 'Kochi, India',
    type: 'Forum'
  }
]

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events</h1>
            <p className="text-xl text-blue-100">Join us at maritime industry events</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <CardTitle className="text-2xl">{event.title}</CardTitle>
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white whitespace-nowrap">
                        {event.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-6 text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                        {event.location}
                      </div>
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

