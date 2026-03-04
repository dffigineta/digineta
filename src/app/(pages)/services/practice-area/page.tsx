'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { BarChart, FileText, TrendingUp, Target, Cpu, Users } from 'lucide-react'

const practices = [
  {
    icon: BarChart,
    title: 'Research & intelligence',
    description:
      'Opinion research, sentiment intelligence and constituency mapping that clarify where you stand and why.'
  },
  {
    icon: FileText,
    title: 'Strategy & roadmapping',
    description:
      'Election and governance strategies with clear roadmaps that translate vision into weekly priorities.'
  },
  {
    icon: TrendingUp,
    title: 'Booth & segment analysis',
    description:
      'Granular analysis of booths, segments and geographies to focus resources on the most decisive ground.'
  },
  {
    icon: Target,
    title: 'Program design & feasibility',
    description:
      'Design and feasibility assessment for campaigns and public programs with clear impact metrics.'
  },
  {
    icon: Cpu,
    title: 'Digital platforms & tools',
    description:
      'Design and oversight of data platforms, apps and dashboards that connect leaders, cadre and citizens.'
  },
  {
    icon: Users,
    title: 'Organisation & capacity building',
    description:
      'Structures, training and rituals that keep political and governance organisations executing at scale.'
  },
]

export default function PracticeAreaPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#f97316] via-[#0f172a] to-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">What we deliver</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Core capabilities that combine intelligence, strategy, digital infrastructure and
              organisation-building for campaigns and governance programs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 bg-white">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#0f172a] rounded-2xl flex items-center justify-center mb-4">
                      <practice.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-black">{practice.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black/70">{practice.description}</p>
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

