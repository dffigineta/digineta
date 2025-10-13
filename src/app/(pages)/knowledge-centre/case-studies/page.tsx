'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'business-opportunity-coastal-ro-ro-shipping',
    title: 'Business opportunity in Coastal RO-RO shipping',
    category: 'Shipping'
  },
  {
    id: 'bulk-traffic-study-minor-port-orissa',
    title: 'Bulk traffic study at minor port in Orissa',
    category: 'Port Development'
  },
  {
    id: 'business-plan-cement-shipping',
    title: 'Business plan for Cement shipping',
    category: 'Shipping'
  },
  {
    id: 'market-study-cfs-facility-jnpt',
    title: 'Market study for setting CFS facility at JNPT',
    category: 'Logistics'
  },
  {
    id: 'feasibility-study-port-based-multi-product-sez',
    title: 'Feasibility Study for a port based Multi Product SEZ',
    category: 'Port Development'
  },
  {
    id: 'detailed-project-report-shipyard-gujarat',
    title: 'Detailed Project Report for setting up Shipyard facility in Gujarat',
    category: 'Shipbuilding'
  },
  {
    id: 'india-dredging-market-study',
    title: 'India Dredging market study',
    category: 'Dredging'
  },
  {
    id: 'business-opportunities-malaysian-dredging-market',
    title: 'Business opportunities in Malaysian Dredging market',
    category: 'Dredging'
  },
  {
    id: 'market-study-offshore-sector-india',
    title: 'Market study of Offshore sector in India',
    category: 'Offshore'
  },
  {
    id: 'market-study-setting-up-cfs-icd',
    title: 'Market study for setting up CFS/ICD',
    category: 'Logistics'
  },
  {
    id: 'tanker-shipping-entry-strategy',
    title: 'Tanker Shipping Entry strategy',
    category: 'Shipping'
  },
  {
    id: 'techno-economic-feasibility-study-multimodal-transport-coal',
    title: 'Techno Economic Feasibility study on Multimodal Transport of Coal',
    category: 'Transport'
  },
  {
    id: 'term-loan-proposal-acquisition-handymax-bulk-carrier',
    title: 'Term loan proposal for acquisition of second hand Handymax bulk carrier',
    category: 'Finance'
  },
  {
    id: 'india-port-report',
    title: 'India Port Report',
    category: 'Research'
  },
  {
    id: 'study-business-opportunities-dredging-india',
    title: 'Study for business opportunities for dredging in India',
    category: 'Dredging'
  },
  {
    id: 'port-induced-road-traffic-key-sections',
    title: 'Port induced road traffic on key sections of road',
    category: 'Transport'
  },
  {
    id: 'market-feasibility-study-ship-repair-facility-west-coast',
    title: 'Market feasibility study for setting up ship repair facility on west coast of India',
    category: 'Shipbuilding'
  },
  {
    id: 'bulk-cargo-traffic-forecast-state-port-south-gujarat',
    title: 'Bulk cargo traffic forecast for state port in South Gujarat',
    category: 'Port Development'
  },
  {
    id: 'traffic-assessment-minor-port-andhra-pradesh',
    title: 'Traffic assessment for a minor port in Andhra Pradesh',
    category: 'Port Development'
  },
  {
    id: 'study-dry-bulk-traffic-minor-port-orissa',
    title: 'Study of dry bulk traffic at minor port in Orissa',
    category: 'Port Development'
  },
  {
    id: 'development-website-indias-largest-private-port',
    title: 'Development of website for Indias largest private port',
    category: 'Technology'
  },
  {
    id: 'strategy-report-indian-port-sector',
    title: 'Strategy Report for Indian Port sector',
    category: 'Strategy'
  },
  {
    id: 'multi-logistics-park-ahmedabad',
    title: 'Multi Logistics Park in Ahmedabad',
    category: 'Logistics'
  },
  {
    id: 'techno-economic-feasibility-study-port-colachel',
    title: 'Techno Economic Feasibility Study for setting a port at Colachel',
    category: 'Port Development'
  }
]

export default function CaseStudiesPage() {
  const getCategoryColor = (category: string) => {
    const colors = {
      'Shipping': 'from-blue-500 to-cyan-500',
      'Port Development': 'from-green-500 to-emerald-500',
      'Logistics': 'from-orange-500 to-red-500',
      'Shipbuilding': 'from-purple-500 to-pink-500',
      'Dredging': 'from-gray-500 to-slate-500',
      'Offshore': 'from-indigo-500 to-purple-500',
      'Transport': 'from-teal-500 to-cyan-500',
      'Finance': 'from-yellow-500 to-orange-500',
      'Research': 'from-rose-500 to-pink-500',
      'Technology': 'from-violet-500 to-purple-500',
      'Strategy': 'from-emerald-500 to-green-500'
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
            <p className="text-xl text-blue-100">Listed here are case studies of some of our works, which would provide deeper insight about us and our methodology.</p>
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

