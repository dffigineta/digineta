'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronUp, Anchor, Ship, Building, Container } from 'lucide-react'
import { useState } from 'react'

const projectCategories = [
  {
    id: 'elections-campaigns',
    title: 'Elections & campaigns',
    icon: Anchor,
    color: 'from-[#B31942] to-[#002147]',
    projects: [
      'State assembly election – booth-level influence mapping and targeting',
      'National campaign – narrative design and message discipline across states',
      'Multi-phase election – turnout, persuasion and volunteer programs by phase',
      'By-election – rapid-response field and digital operation'
    ]
  },
  {
    id: 'governance-outreach',
    title: 'Governance & outreach',
    icon: Ship,
    color: 'from-[#002147] to-[#B31942]',
    projects: [
      'Chief Minister\'s Office – flagship program communication framework',
      'State department – citizen feedback and service improvement loop',
      'Government campaign – direct-to-citizen updates on progress and delivery',
      'Public program – grievance redressal tracking and reporting'
    ]
  },
  {
    id: 'digital-platforms',
    title: 'Digital platforms & tools',
    icon: Building,
    color: 'from-[#002147] to-[#002147]',
    projects: [
      'Party data platform – unified voter, volunteer and media view',
      'Leader app – constituency updates, media, and network management',
      'Campaign dashboards – daily performance views for leadership',
      'Field apps – booth-level checklists and reporting workflows'
    ]
  },
  {
    id: 'research-intelligence',
    title: 'Research & intelligence',
    icon: Container,
    color: 'from-[#B31942] to-[#B31942]',
    projects: [
      'Opinion research – tracking favourability and issue salience over time',
      'Sentiment mapping – social, media and field signal integration',
      'Constituency segmentation – typologies and priority clusters for campaigns',
      'Narrative testing – message, creative and channel experiments'
    ]
  },
  {
    id: 'organisation-building',
    title: 'Organisation & capacity building',
    icon: Building,
    color: 'from-[#002147] to-[#B31942]',
    projects: [
      'Cadre training – field operations and reporting practices',
      'War-room setup – roles, rhythms and decision rituals',
      'Internal communications – leadership-to-cadre information flows',
      'Network building – identifying and activating local influencers'
    ]
  }
]

export default function ProjectsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['elections-campaigns'])

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
              <Link href="/about" className="hover:text-white">About Digineta</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Flagship Engagements</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Flagship Engagements</h1>
            <p className="text-xl text-white/80 max-w-3xl">
              A snapshot of the kinds of political, governance and digital engagements Digineta
                leads with parties, leaders and public institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {projectCategories.map((category, categoryIndex) => {
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
                          <p className="text-black/70">{category.projects.length} examples</p>
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
                        className="space-y-3"
                      >
                        {category.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: projectIndex * 0.02 }}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#002147]/5 transition-colors"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-black leading-relaxed">{project}</p>
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

