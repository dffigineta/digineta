'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { DollarSign, Building, Users, Target, TrendingUp, Globe, FileText } from 'lucide-react'

const services = [
  {
    icon: DollarSign,
    title: "Resource planning strategy",
    description: "Strategic planning and execution of resource mobilization for campaigns and governance programs, including budget allocation and team planning."
  },
  {
    icon: Building,
    title: "Team structuring",
    description: "Optimal team structuring for campaigns and programs including role definition, reporting structures, and capacity planning."
  },
  {
    icon: Users,
    title: "Partner network building",
    description: "Building relationships with volunteers, cadre, partner organizations, and supporter networks for program execution."
  },
  {
    icon: Target,
    title: "Resource mobilization",
    description: "Managing complex resource mobilization processes involving multiple teams, partners, and stakeholders for large-scale campaigns."
  },
  {
    icon: TrendingUp,
    title: "Capacity planning",
    description: "Sophisticated capacity models and projections to support resource planning efforts and stakeholder presentations."
  },
  {
    icon: FileText,
    title: "Resource documentation",
    description: "Preparation of resource planning documentation, team structures, and operational frameworks for campaign execution."
  }
]

const resourceTypes = [
  "Campaign resource planning",
  "Team capacity building",
  "Volunteer mobilization",
  "Partner network development",
  "Cadre training & deployment",
  "Digital infrastructure setup",
  "Field organization building",
  "Stakeholder engagement frameworks"
]

const sectors = [
  "National & state campaigns",
  "Local body & city campaigns",
  "Governance programs",
  "Issue-based movements",
  "Leader offices & teams",
  "Citizen platforms",
  "Coalition management",
  "Public program execution"
]

export default function FundSyndicationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-[#B31942] to-[#002147] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0f172a]/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-white/80 text-sm font-medium px-3 py-1 bg-white/10 rounded-full">
                Our Solutions &gt; What we deliver &gt; Resource planning & mobilisation
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Resource planning & mobilisation
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Planning and structuring resources, teams and partner networks for 
              campaigns and governance programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-[#B31942]/20 rounded-2xl rotate-3"></div>
                <div className="relative bg-[#002147] p-4 rounded-2xl shadow-xl flex items-center justify-center">
                  <div className="w-full h-48 md:h-64 bg-white/10 rounded-xl" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expert Resource Planning & Mobilization
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our resource planning & mobilization services help campaigns and governance programs 
                    secure optimal resource allocation, team structures, and partner networks. We 
                    leverage our extensive experience in campaign operations and program execution to 
                    structure and execute complex resource mobilization.
                  </p>
                  <p>
                    With deep expertise in political organization and governance program management, we provide 
                    end-to-end support from initial planning through successful execution, ensuring efficient 
                    resource allocation and optimal team performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-[#f9fafb] to-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Resource Planning & Mobilization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resource planning services designed to secure optimal resource allocation 
              solutions for campaigns and governance programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#B31942] to-[#002147] rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Resource Solutions We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {resourceTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#002147] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-[#e5e7eb]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Contexts We Work In
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-3 h-3 bg-[#B31942] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-r from-[#B31942] to-[#002147] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">
              Why Choose Our Resource Planning Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Globe className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Extensive Network</h3>
                <p className="text-white/80">Extensive network of volunteers, partners, and supporter organizations</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <Target className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Strategic Allocation</h3>
                <p className="text-white/80">Expert resource assessment and optimal allocation strategies</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <TrendingUp className="w-12 h-12 text-white/80 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Efficient Structures</h3>
                <p className="text-white/80">Design optimal team structures and resource frameworks</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-[#002147]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Plan Your Resources Strategically
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with Digineta&apos;s resource planning experts to secure optimal resource allocation 
              for your campaigns and governance programs.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[#002147] hover:bg-white/90 font-semibold px-8 py-4"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
