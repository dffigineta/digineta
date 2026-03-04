"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"

const services = [
  "Election data and constituency intelligence",
  "Issue tracking and narrative monitoring",
  "Booth and segment-level analytics",
  "Leader and organisation knowledge bases",
  "Daily political briefings and alerts",
  "Campaign learnings and playbooks",
]

export default function GlobalMaritimeKnowledgeCenterPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#8F1333] to-[#002147] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Political Intelligence & Knowledge Centre</h1>
            <p className="text-xl text-white leading-relaxed">
              The Digineta Knowledge Centre curates data, research and daily political intelligence to keep leaders
              and teams ahead of narratives and ground reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black mb-2">Making Sense of Political Data</h2>
              <p className="text-lg text-black leading-relaxed">
                Our teams bring together election results, survey inputs, digital signals and field reports to help
                leaders understand what is really happening in their constituencies.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Insights are delivered through daily briefings, dashboards and structured playbooks, so that busy
                leaders and teams can act quickly.
              </p>
            </div>

            <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/research-reading.jpg"
                alt="Political research and campaign intelligence — Digineta"
                fill
                className="object-cover"
              />
            </div>
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
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="pt-6">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#B31942] rounded-full mr-3" />
                      <p className="font-semibold text-black">{service}</p>
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

