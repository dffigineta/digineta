'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronUp, Ship, Anchor, Container, Building, Globe } from 'lucide-react'
import { useState } from 'react'

const clientCategories = [
  {
    id: 'national-parties',
    title: 'National parties & alliances',
    icon: Ship,
    color: 'from-[#B31942] to-[#002147]',
    clients: [
      'National party – multi-state general election campaign',
      'Pre-poll alliance – shared message and seat strategy support',
      'National leadership office – continuous governance and reputation tracking',
      'Issue-based platform – nationwide membership and volunteer program'
    ]
  },
  {
    id: 'state-leaders',
    title: 'State leaders & CMs\' offices',
    icon: Anchor,
    color: 'from-[#002147] to-[#B31942]',
    clients: [
      'Chief Minister\'s Office – flagship program communication and feedback loop',
      'State party – assembly election campaign with booth-level planning',
      'Regional alliance – coordination across districts and media markets',
      'Young leader – constituency brand-building and digital presence'
    ]
  },
  {
    id: 'local-bodies',
    title: 'Local bodies & city campaigns',
    icon: Container,
    color: 'from-[#B31942] to-[#B31942]',
    clients: [
      'Urban civic body election – ward-by-ward turnout and persuasion program',
      'City-level issue campaign – public transport and infrastructure narrative',
      'Mayor\'s office – citizen grievance and service-delivery dashboard',
      'Civic volunteers network – hyperlocal listening and mobilisation'
    ]
  },
  {
    id: 'movements',
    title: 'Movements & citizen platforms',
    icon: Building,
    color: 'from-[#002147] to-[#002147]',
    clients: [
      'Issue-based coalition – nationwide petition and mobilisation drive',
      'Youth movement – campus and digital organising support',
      'Civil society platform – structured engagement with policymakers'
    ]
  },
  {
    id: 'governance',
    title: 'Governance & public programs',
    icon: Globe,
    color: 'from-[#002147] to-[#B31942]',
    clients: [
      'State department – direct-to-citizen communication for welfare schemes',
      'Public agency – service feedback and transparency dashboard',
      'Flagship program – ground research and narrative design',
      'Administrative reforms – internal communication and adoption support'
    ]
  }
]

export default function ClientsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['national-parties'])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#B31942] via-[#002147] to-[#00152e] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Campaigns &amp; Partners</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Campaigns &amp; Partners</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Digineta works with parties, leaders, governments and citizen platforms across levels –
              from national campaigns to city-level initiatives and issue-based movements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-black leading-relaxed">
              The examples below are anonymised, but representative of the kinds of campaigns and
              partners we support – spanning elections, governance, narrative-building and
              mobilisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {clientCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(category.id)
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all bg-white">
                  <CardHeader>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-black">{category.title}</CardTitle>
                          <p className="text-black/70">{category.clients.length} examples</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-[#002147]/5"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-black" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-black" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        {category.clients.map((client, clientIndex) => (
                          <motion.div
                            key={clientIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: clientIndex * 0.02 }}
                            className="flex items-start space-x-3 p-4 rounded-lg hover:bg-[#002147]/5 transition-colors border border-[#002147]/10 bg-white"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-black leading-relaxed text-sm font-medium">{client}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

