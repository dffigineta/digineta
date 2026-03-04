"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"

const services = [
  "Constituency & booth-level diagnostics",
  "Political positioning & narrative definition",
  "Campaign strategy & war-room planning",
  "Organisational structure & role clarity",
  "Digital + on-ground integration plans",
  "Leader reputation & visibility roadmaps",
]

export default function BusinessConsultingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#f97316] via-[#ea6c0a] to-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Political Strategy & Consulting</h1>
            <p className="text-xl text-white leading-relaxed">
              Digineta&apos;s consulting practice works as a political war-room partner – helping leaders and teams
              turn data, feedback and ground signals into clear strategies and execution roadmaps.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black mb-2">From Insight to Campaign Plan</h2>
              <p className="text-lg text-black leading-relaxed">
                We work with leaders, parties and campaign teams to define clear objectives, understand voter
                segments and build practical plans that can be executed by real organisations on the ground.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Our teams combine political experience with analytics, technology and creative thinking – so
                that every strategy document translates into dashboards, apps and communication workflows.
              </p>
            </div>

            <div className="relative w-full h-56 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team-meeting.jpg"
                alt="Digineta team — India's political technology venture"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                      <div className="w-2 h-2 bg-[#f97316] rounded-full mr-3" />
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

