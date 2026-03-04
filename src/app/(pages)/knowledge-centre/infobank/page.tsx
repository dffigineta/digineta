'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, MapPin, Users, Wifi, MessageCircle, Building, ArrowUp } from 'lucide-react'
import { useState } from 'react'

const infobankSections = [
  {
    id: 'constituency-intelligence',
    title: 'Constituency Intelligence',
    icon: MapPin,
    color: 'from-blue-500 to-cyan-500',
    subsections: [
      {
        id: 'constituency-profile',
        title: 'Constituency Profile',
        content: `Every constituency has its own political memory, identity and evolution. A robust constituency profile looks beyond raw vote shares to capture geography, demographics, economy and institutional landscape.

At Digineta, we break constituencies down into natural clusters – towns, mandals, blocks, wards, booths and habitations. For each, we map population segments, party presence, local influencers, issue history and institutional anchors such as colleges, markets, unions, associations and religious organisations.

The objective is to give leaders and campaign teams a single, coherent picture of where they stand today and what will actually move the needle over the next election cycle.`
      },
      {
        id: 'electoral-history',
        title: 'Electoral History & Swing',
        content: `Electoral history is more than a list of winners. It is a story of alliances, splits, independents, turnout and micro-swings that compound over time.

We track multi-cycle performance at booth, segment and constituency level – margins, turnout, NOTA, third force votes, and the impact of rebels and independents. This helps identify structurally strong pockets, swing zones and risk segments for every campaign.

When combined with qualitative field intelligence and issue mapping, this history layer becomes a powerful guide for targeting, narrative design and resource deployment in the upcoming election.`
      }
    ]
  },
  {
    id: 'voter-segmentation',
    title: 'Voter Segmentation',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    subsections: [
      {
        id: 'segments-overview',
        title: 'Segment Definitions',
        content: `Effective political communication is always segment-first. Instead of treating "voters" as a single block, we work with leadership to define granular segments that reflect ground reality.

Segments can be based on social identity, economic role, geography, age, employment, civic participation or a combination of these. For each segment, we document pain points, aspirations, media habits and preferred contact channels.

This structure then powers targeted communication, differentiated calls-to-action and customised engagement journeys across the campaign lifecycle.`
      },
      {
        id: 'priority-mapping',
        title: 'Priority & Persuasion Mapping',
        content: `Not every segment has the same strategic value. Some consolidate your base, some are swing segments and some are structurally challenging in the short term.

Using past results, field feedback and survey work, we place each segment into clear buckets – strong support, leaning support, competitive, and difficult. For each bucket we define what "success" should look like in this cycle and what effort level is realistic.

The outcome is a practical campaign map that helps allocate leader time, on-ground organisation, communication bandwidth and digital spending to the segments that matter most.`
      }
    ]
  },
  {
    id: 'digital-signals',
    title: 'Digital & Media Signals',
    icon: Wifi,
    color: 'from-orange-500 to-red-500',
    subsections: [
      {
        id: 'social-listening',
        title: 'Social Listening & Narrative Tracking',
        content: `Digital signals provide an early warning system for both emerging risks and opportunities. We track narratives around leaders, parties and key issues across platforms, languages and geographies.

Instead of vanity metrics, our focus is on narrative direction – which frames are gaining traction, which attacks are sticking, and which themes are quietly building in local ecosystems such as WhatsApp and regional media.

These insights feed into daily and weekly routines for communication teams: talking points, counter-content, issue ownership narratives and community-level engagements that reinforce the right stories.`
      },
      {
        id: 'media-footprint',
        title: 'Media Footprint & Visibility',
        content: `Media visibility is only useful when it aligns with strategy. We map a leader&apos;s or party&apos;s presence across television, print, digital and on-ground communication assets.

By overlaying this with constituency maps and voter segments, we can see where visibility is concentrated and where there are silent or under-served zones. This allows teams to rebalance communication between high-noise and high-importance areas.

Over time, this becomes a living dashboard of narrative presence, helping leadership understand whether their story is actually reaching the voters who matter.`
      }
    ]
  },
  {
    id: 'field-organisation',
    title: 'Field Organisation & Feedback',
    icon: MessageCircle,
    color: 'from-purple-500 to-pink-500',
    subsections: [
      {
        id: 'organisation-map',
        title: 'Booth & Organisation Map',
        content: `Every successful campaign stands on a disciplined on-ground organisation. We help build a clear map of committees, conveners, volunteers and partners across villages, wards and booths.

The Infobank captures not just names, but their influence zones, organisational history and reliability. Over time this becomes a single source of truth for both election campaigns and governance outreach.

The same map also highlights gaps – booths without adequate representation, over-stretched functionaries and regions where new talent or allies need to be identified and nurtured.`
      },
      {
        id: 'feedback-pipelines',
        title: 'Feedback Pipelines',
        content: `Structured feedback is as important as structured data. We define and document how information flows from booths and wards to mandal, district and state leadership.

This includes routine feedback (issues, sentiments, local developments), escalation protocols for sensitive matters, and periodic review mechanisms. Wherever possible, we connect these flows into Digineta apps and dashboards so nothing gets lost in translation.

The result is a system where leadership can act on verified ground information quickly, and volunteers feel their work and inputs are visible and valued.`
      }
    ]
  },
  {
    id: 'governance-data',
    title: 'Governance & Program Data',
    icon: Building,
    color: 'from-teal-500 to-cyan-500',
    subsections: [
      {
        id: 'scheme-footprint',
        title: 'Scheme Footprint & Beneficiary Mapping',
        content: `Governance is the most powerful long-term campaign. We track the footprint of key schemes and programs at constituency and booth level – coverage, gaps and stories.

For each flagship initiative we map who has benefited, which segments and geographies are still under-served and what communication has reached them so far. This helps design sharper program communication and grievance redress mechanisms.

The same layer also becomes a foundation for performance storytelling – turning scattered implementation success into coherent narratives that voters can see, feel and verify.`
      },
      {
        id: 'performance-dashboards',
        title: 'Performance Dashboards',
        content: `Leaders and offices need simple, honest dashboards that connect data to decisions. Digineta builds and maintains practical views of governance performance – from project progress and scheme uptake to constituency visits and grievance closures.

The Infobank documents how to read these dashboards, what each metric means and how leadership teams across levels can use them for reviews, planning and communication.

Over time, these dashboards become a shared language between political leadership, administrative teams and campaign operators, ensuring everyone is working off the same reality.`
      }
    ]
  }
]

export default function InfobankPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['seaports'])
  const [expandedSubsections, setExpandedSubsections] = useState<string[]>(['global-scenario'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const toggleSubsection = (subsectionId: string) => {
    setExpandedSubsections(prev => 
      prev.includes(subsectionId) 
        ? prev.filter(id => id !== subsectionId)
        : [...prev, subsectionId]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Political Intelligence</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Infobank</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Infobank</h1>
            <p className="text-xl text-blue-100">
              A structured reference for Digineta&apos;s political intelligence stack – from constituency maps and voter segments
              to digital signals, field organisation and governance data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-[#111827]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-6">How the Infobank Helps Your Team</h2>
            <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6">
              Political intelligence is the foundation of effective campaigns and responsive governance. The Infobank brings
              together definitions, frameworks and working notes that teams can use every day.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed mb-6">
              It covers the full stack – booth-level data, constituency mapping, voter segments, digital and media signals, field
              organisation maps and governance performance views. Each concept is written for practical use by leaders and teams,
              not just analysts.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed">
              Across India, political intelligence is gathered from thousands of booths, villages and wards – from single-seat
              campaigns to multi-state strategies. The Infobank is where this experience is distilled into reusable knowledge.
            </p>
            <p className="text-[#cbd5e1] leading-relaxed mt-4">
              In the digital age, political intelligence has moved from scattered reports and spreadsheets to integrated platforms
              that connect research, data, field feedback and digital signals into one coherent view. Digineta&apos;s Infobank
              reflects this shift.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {infobankSections.map((section, sectionIndex) => {
            const isExpanded = expandedSections.includes(section.id)
            const IconComponent = section.icon
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{section.title}</CardTitle>
                          <p className="text-[#cbd5e1]">{section.subsections.length} subsections</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Back to top"
                        >
                          <ArrowUp className="w-5 h-5 text-[#cbd5e1]" />
                        </button>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-[#cbd5e1]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#cbd5e1]" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                  <CardContent>
                      <div className="space-y-6">
                        {section.subsections.map((subsection) => {
                          const isSubExpanded = expandedSubsections.includes(subsection.id)
                          
                          return (
                            <div key={subsection.id} className="border border-gray-200 rounded-lg">
                              <div 
                                className="flex items-center justify-between p-4 cursor-pointer hover:bg-[#111827] transition-colors"
                                onClick={() => toggleSubsection(subsection.id)}
                              >
                                <h3 className="text-lg font-semibold text-white">{subsection.title}</h3>
                                {isSubExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-[#cbd5e1]" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-[#cbd5e1]" />
                                )}
                              </div>
                              
                              {isSubExpanded && (
                                <div className="px-4 pb-4">
                                  <div className="prose prose-lg max-w-none">
                                    <p className="text-[#cbd5e1] leading-relaxed whitespace-pre-line">
                                      {subsection.content}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
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

