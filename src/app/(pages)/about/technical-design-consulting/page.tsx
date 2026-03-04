"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"

const services = [
  "Design of leader, cadre and citizen apps",
  "Data pipelines from booth to dashboards",
  "Permissions, roles and workflows for teams",
  "Integration with party CRMs and call centres",
  "Notification, outreach and feedback systems",
  "Security, privacy and access control design",
]

export default function TechnicalDesignConsultingPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#f97316] via-[#ea6c0a] to-[#0f172a] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Political Tech & Product Design</h1>
            <p className="text-xl text-white leading-relaxed">
              We design the technology stack that powers modern political organisations – from leader apps to
              back-office dashboards and outreach engines.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black mb-2">Designing the Digineta Stack</h2>
              <p className="text-lg text-black leading-relaxed">
                Our teams bring together product, UX and engineering thinking to design tools that work for
                Indian political realities – low bandwidth, multilingual users and complex organisations.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Every module is planned so that leaders, staff and volunteers know exactly what to do when they
                open an app or dashboard – reducing complexity and increasing adoption.
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

