'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'business-opportunity-coastal-ro-ro-shipping',
    title: 'Cross-party digital campaign for an urban constituency',
    category: 'Election Campaigns'
  },
  {
    id: 'bulk-traffic-study-minor-port-orissa',
    title: 'Booth-level analytics strategy in a rural district',
    category: 'Campaign Strategy'
  },
  {
    id: 'business-plan-cement-shipping',
    title: 'State assembly election campaign with alliance coordination',
    category: 'Election Campaigns'
  },
  {
    id: 'market-study-cfs-facility-jnpt',
    title: 'Leader reputation and digital presence program',
    category: 'Leader Support'
  },
  {
    id: 'feasibility-study-port-based-multi-product-sez',
    title: 'Chief Minister&apos;s Office governance communication system',
    category: 'Governance'
  },
  {
    id: 'detailed-project-report-shipyard-gujarat',
    title: 'Ward-level turnout and persuasion program for municipal elections',
    category: 'Local Bodies'
  },
  {
    id: 'india-dredging-market-study',
    title: 'Issue-based movement platform and membership system',
    category: 'Movements'
  },
  {
    id: 'business-opportunities-malaysian-dredging-market',
    title: 'National general election campaign with multi-state coordination',
    category: 'Election Campaigns'
  },
  {
    id: 'market-study-offshore-sector-india',
    title: 'Flagship scheme communication and feedback loop',
    category: 'Governance'
  },
  {
    id: 'market-study-setting-up-cfs-icd',
    title: 'Volunteer and cadre mobilisation system for state campaign',
    category: 'Campaign Strategy'
  },
  {
    id: 'tanker-shipping-entry-strategy',
    title: 'Pre-poll research and sentiment mapping for assembly elections',
    category: 'Research'
  },
  {
    id: 'techno-economic-feasibility-study-multimodal-transport-coal',
    title: 'Digital outreach and social media engine for youth mobilization',
    category: 'Digital Campaigns'
  },
  {
    id: 'term-loan-proposal-acquisition-handymax-bulk-carrier',
    title: 'Constituency brand-building and voter engagement program',
    category: 'Leader Support'
  },
  {
    id: 'india-port-report',
    title: 'Election data and booth analytics for Lok Sabha constituency',
    category: 'Research'
  },
  {
    id: 'study-business-opportunities-dredging-india',
    title: 'Urban local body election with ward-by-ward planning',
    category: 'Local Bodies'
  },
  {
    id: 'port-induced-road-traffic-key-sections',
    title: 'Narrative testing and message architecture for national campaign',
    category: 'Campaign Strategy'
  },
  {
    id: 'market-feasibility-study-ship-repair-facility-west-coast',
    title: 'Polling day and GOTV planning for assembly elections',
    category: 'Election Campaigns'
  },
  {
    id: 'bulk-cargo-traffic-forecast-state-port-south-gujarat',
    title: 'Citizen grievance and service-delivery dashboard',
    category: 'Governance'
  },
  {
    id: 'traffic-assessment-minor-port-andhra-pradesh',
    title: 'Hyperlocal listening and mobilisation network',
    category: 'Movements'
  },
  {
    id: 'study-dry-bulk-traffic-minor-port-orissa',
    title: 'Regional alliance coordination across districts',
    category: 'Election Campaigns'
  },
  {
    id: 'development-website-indias-largest-private-port',
    title: 'Mahaneta platform implementation for sitting MLA',
    category: 'Digital Platforms'
  },
  {
    id: 'strategy-report-indian-port-sector',
    title: 'Path-to-victory and seat prioritisation framework',
    category: 'Campaign Strategy'
  },
  {
    id: 'multi-logistics-park-ahmedabad',
    title: 'Network-building program for local leaders across urban wards',
    category: 'Local Bodies'
  },
  {
    id: 'techno-economic-feasibility-study-port-colachel',
    title: 'Rapid-response narrative and war-room setup for by-election',
    category: 'Election Campaigns'
  }
]

export default function CaseStudiesPage() {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Election Campaigns': 'from-blue-500 to-cyan-500',
      'Campaign Strategy': 'from-green-500 to-emerald-500',
      'Leader Support': 'from-orange-500 to-red-500',
      'Governance': 'from-purple-500 to-pink-500',
      'Local Bodies': 'from-gray-500 to-slate-500',
      'Movements': 'from-indigo-500 to-purple-500',
      'Research': 'from-teal-500 to-cyan-500',
      'Digital Campaigns': 'from-yellow-500 to-orange-500',
      'Digital Platforms': 'from-rose-500 to-pink-500',
      'Strategy': 'from-violet-500 to-purple-500'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-slate-500'
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Knowledge Centre</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Case Studies</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100">Real campaign stories from across India. These case studies provide deeper insight into how Digineta supports leaders, parties, and campaigns.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/knowledge-centre/case-studies/${study.id}`}>
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <Badge className={`bg-gradient-to-r ${getCategoryColor(study.category)} text-white`}>
                        {study.category}
                      </Badge>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

