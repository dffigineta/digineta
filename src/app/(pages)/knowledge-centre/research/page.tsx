'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Download} from 'lucide-react'

const researchReports = [
  {
    title: 'India Political Intelligence Report',
    description:
      'A comprehensive view of India’s political landscape covering parliamentary, assembly and local body levels. The report brings together constituency archetypes, voter segment behaviour, turnout patterns, narrative trends and governance expectations from across the country. Built from Digineta’s work with leaders, offices and teams, it helps campaigns and administrations move from anecdotal understanding to structured, data-backed decision-making.',
    category: 'Flagship Report',
    type: 'Political Intelligence',
    features: [
      'National, state and constituency-level views',
      'Voter and segment behaviour patterns',
      'Turnout and margin archetypes',
      'Narrative and media trend analysis',
      'Implications for campaigns and governance'
    ]
  },
  {
    title: 'Constituency Playbook Series',
    description:
      'A set of deep-dive briefs that document how different types of constituencies behave – urban vs rural, multi-cornered vs bipolar contests, high-migration belts, border and coastal districts, and more. Each playbook focuses on structure, risks and proven levers.',
    category: 'Playbook Series',
    type: 'Campaign Strategy',
    features: [
      'Archetype-wise risk and opportunity mapping',
      'Practical lessons from past campaigns',
      'Booth and segment design principles',
      'Sample timelines and activity calendars',
      'Checklists for leaders and teams'
    ]
  },
  {
    title: 'Digital & Media Influence Study',
    description:
      'An analysis of how digital, regional media and hyper-local channels shape political narratives. The study maps which voter groups are most influenced by which channels and what that means for message design and budgeting.',
    category: 'Insight Study',
    type: 'Media & Communication',
    features: [
      'Channel-wise influence maps',
      'Segment-specific media habits',
      'Narrative spread and decay patterns',
      'Guidelines for digital and creative teams',
      'Measurement and optimisation frameworks'
    ]
  }
]

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
                  Political Intelligence & Research
                </h1>
                <p className="text-lg sm:text-xl text-blue-100">
                  Research reports and working papers to support campaigns and governance decisions.
                </p>
              </div>
              {/* <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900 text-sm">
                  <Printer className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Print this page</span>
                  <span className="sm:hidden">Print</span>
                </Button>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-blue-900 text-sm">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Email to a friend</span>
                  <span className="sm:hidden">Email</span>
                </Button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 mb-8">
                As part of Digineta&apos;s ongoing political intelligence, research and consulting assignments, we generate
                structured research outputs for leaders, offices and campaign teams. Some of these are restricted, while others
                are made available as reference material and primers.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Below is a curated list of Digineta research documents and series. For access to specific reports, please reach
                out to our team.
              </p>
            </motion.div>

            <div className="space-y-8">
              {researchReports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <Badge className="bg-blue-100 text-blue-700 mb-3 text-xs sm:text-sm">{report.category}</Badge>
                          <CardTitle className="text-xl sm:text-2xl lg:text-3xl mb-4 text-blue-900">{report.title}</CardTitle>
                        </div>
                        <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white whitespace-nowrap text-xs sm:text-sm self-start">
                          {report.type}
                        </Badge>
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-6 leading-relaxed">
                        {report.description}
                      </p>
                      
                      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
                        <h4 className="text-base sm:text-lg font-semibold text-blue-900 mb-3 sm:mb-4">Key Features:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {report.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6">
                        <Button 
                          className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base"
                          onClick={() => {
                            // Placeholder: wire this to actual report access flow
                            alert('Please contact the Digineta team to access this research report.');
                          }}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Request Access
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Additional Research Reports Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-4">Additional Research Reports</CardTitle>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Port Sector Analysis 2024</h4>
                          <p className="text-sm text-gray-600">Quarterly market analysis</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Container Logistics Trends</h4>
                          <p className="text-sm text-gray-600">Annual industry report</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Shipping Market Outlook</h4>
                          <p className="text-sm text-gray-600">Bi-annual forecast</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-700">Coming Soon</Badge>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Maritime Technology Trends</h4>
                          <p className="text-sm text-gray-600">Innovation analysis</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Environmental Compliance Guide</h4>
                          <p className="text-sm text-gray-600">Regulatory framework</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700">Available</Badge>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-semibold text-gray-900">Investment Opportunities</h4>
                          <p className="text-sm text-gray-600">Sector investment guide</p>
                        </div>
                        <Badge className="bg-yellow-100 text-yellow-700">Coming Soon</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

