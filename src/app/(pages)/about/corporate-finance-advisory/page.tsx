"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/Card"

const services = [
  "Campaign budgeting and phasing",
  "Resource allocation across constituencies",
  "Media, digital and field spend optimisation",
  "Vendor and partner structuring",
  "Measurement frameworks and KPIs",
  "Scenario planning across election cycles",
]

export default function CorporateFinanceAdvisoryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#8F1333] to-[#002147] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Political Finance & Campaign Planning</h1>
            <p className="text-xl text-white leading-relaxed">
              We help leaders and organisations plan how resources are invested across time, media and geography so
              that every rupee supports a clear political objective.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black mb-2">Structuring Campaign Investments</h2>
              <p className="text-lg text-black leading-relaxed">
                Digineta works with leaders and finance teams to translate political priorities into practical
                budgets, phasing and vendor plans – backed by historical data and ground feedback.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Our frameworks help clarify trade-offs between visibility, organisation building and long-term
                relationship work with citizens.
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

