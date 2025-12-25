'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Landmark, Shield, Users, Megaphone, Globe2 } from 'lucide-react'

const audiences = [
  {
    icon: Landmark,
    title: 'National & state campaigns',
    description:
      'Parties and alliances contesting national and state elections that need integrated research, strategy and execution.',
    services: ['General election campaigns', 'Assembly elections', 'Alliance coordination', 'War-room design'],
    color: 'from-[#B31942] to-[#002147]'
  },
  {
    icon: Shield,
    title: 'Leaders & offices',
    description:
      'Leaders, CMs\' offices and core political teams that require clarity, communication and decision support.',
    services: ['Leader reputation tracking', 'Office communication systems', 'Decision dashboards', 'Stakeholder engagement'],
    color: 'from-[#002147] to-[#B31942]'
  },
  {
    icon: Users,
    title: 'Local bodies & city campaigns',
    description:
      'Urban local bodies, panchayats and city campaigns focused on turnout, delivery and everyday citizen experience.',
    services: ['Ward-level planning', 'Local narrative and media', 'Volunteer and cadre programs', 'Governance scorecards'],
    color: 'from-[#B31942] to-[#B31942]'
  },
  {
    icon: Megaphone,
    title: 'Movements & citizen platforms',
    description:
      'Issue-based coalitions, advocacy groups and citizen platforms building awareness and organised participation.',
    services: ['Issue campaign design', 'Membership and communities', 'Digital mobilisation', 'Coalition alignment'],
    color: 'from-[#002147] to-[#002147]'
  },
  {
    icon: Globe2,
    title: 'Governance & public programs',
    description:
      'Governments and departments running flagship schemes and reforms that need communication, feedback and iteration.',
    services: ['Scheme communication frameworks', 'Citizen feedback loops', 'Program dashboards', 'Change management'],
    color: 'from-[#002147] to-[#B31942]'
  },
]

export default function IndustryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Who we work with</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Digineta partners with campaigns, leaders, institutions and movements across the political
              and governance spectrum.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <audience.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-4 text-black">{audience.title}</CardTitle>
                        <p className="text-lg text-black leading-relaxed">{audience.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {audience.services.map((service, idx) => (
                        <div key={idx} className="bg-[#002147]/5 rounded-lg p-4 text-center">
                          <p className="font-semibold text-black text-sm">{service}</p>
                        </div>
                      ))}
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

