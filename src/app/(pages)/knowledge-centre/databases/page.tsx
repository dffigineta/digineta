'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Database, Ship, Anchor, Container, ChevronRight, Printer, Mail } from 'lucide-react'

const features = [
  {
    icon: Anchor,
    title: 'Ports & Terminals',
    description: 'Comprehensive data on port operations, cargo handling, and terminal performance'
  },
  {
    icon: Container,
    title: 'Container Logistics',
    description: 'Container shipping data, logistics networks, and supply chain analytics'
  },
  {
    icon: Ship,
    title: 'Ship Building and Demolition',
    description: 'Shipyard data, vessel construction trends, and demolition market analysis'
  },
  {
    icon: Database,
    title: 'Shipping',
    description: 'Global shipping routes, vessel movements, and maritime trade statistics'
  }
]

export default function DatabasesPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Database</h1>
                <p className="text-lg sm:text-xl text-blue-100">Exhaustive Database on various sectors of maritime industry</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
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
              </div>
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
                i-maritime research unit supports the consultancy work by collecting various maritime related data. 
                In this process we are able to build exhaustive database for different sectors of maritime arena. 
                This is a paid service since we need to invest in collecting data from both primary and secondary sources.
              </p>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The features of the i-maritime Knowledge Base include..</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-lg text-gray-700">
                The information in the portal is updated at regular intervals to ensure the most up to date 
                information is made available to our subscribers through this unique and industry first initiative in India.
              </p>
            </motion.div>

            {/* Knowledge Base Portal Screenshot Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8 text-center"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">i-maritime Knowledge Base Portal</h3>
                
                {/* Header */}
                <div className="bg-blue-600 text-white p-4 rounded-t-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold">i-maritime</h4>
                      <p className="text-sm">Consultancy Private Limited</p>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <span>Home</span>
                      <span>Knowledge Base</span>
                      <span>News & Information</span>
                      <span>About Us</span>
                      <span>Register | Login</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-white text-gray-600 px-4 py-2 rounded flex items-center">
                      <span>search maritime</span>
                      <Database className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>

                {/* Content Layout */}
                <div className="flex flex-col lg:flex-row">
                  {/* Left Sidebar */}
                  <div className="w-full lg:w-1/4 bg-gray-800 text-white p-3 lg:p-4">
                    <h5 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base">Explore Our Knowledge Base</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 lg:space-y-2 text-xs lg:text-sm">
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Ports & Terminals
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Container Logistics
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Shipbuilding and Demolition
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Shipping
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Tenders
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Maritime Contacts
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                        Events
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-3 lg:p-4">
                    <div className="text-xs lg:text-sm text-gray-500 mb-2">Knowledge Base &gt; Home</div>
                    <h5 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">A World on Knowledge, a click away</h5>
                    
                    {/* Placeholder Images */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3 lg:mb-4">
                      <div className="w-full h-12 lg:h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        Ship Image
                      </div>
                      <div className="w-full h-12 lg:h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        Compass
                      </div>
                      <div className="w-full h-12 lg:h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        Port
                      </div>
                      <div className="w-full h-12 lg:h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                        Container
                      </div>
                    </div>
                    
                    <p className="text-xs lg:text-sm text-gray-700 mb-3 lg:mb-4">
                      i-maritime is a leader in the consulting services across the maritime sector. 
                      i-maritime has established itself in almost all consulting practices for maritime service industry.
                    </p>
                    
                    <h6 className="font-bold mb-2 text-sm lg:text-base">Portal Structure</h6>
                    <p className="text-xs lg:text-sm text-gray-700 mb-2">
                      The maritime database is segmented into four broad heads in sync with the industry classification –
                    </p>
                    <ul className="text-xs lg:text-sm text-gray-700 ml-4 mb-4">
                      <li>• Ports & Terminals</li>
                      <li>• Container Logistics</li>
                      <li>• Ship Building and Demolition</li>
                      <li>• Shipping</li>
                    </ul>
                  </div>

                  {/* Right Sidebar */}
                  <div className="w-full lg:w-1/4 bg-blue-600 text-white p-3 lg:p-4">
                    <h5 className="font-bold mb-3 lg:mb-4 text-sm lg:text-base">Access to a world of knowledge</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1 lg:space-y-2 text-xs lg:text-sm mb-3 lg:mb-4">
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full mr-1 lg:mr-2"></div>
                        Case Studies
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full mr-1 lg:mr-2"></div>
                        Reports
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full mr-1 lg:mr-2"></div>
                        Trade Data
                      </div>
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full mr-1 lg:mr-2"></div>
                        Research Documents & More
                      </div>
                    </div>
                    <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-sm lg:text-base py-2 lg:py-3">
                      Register with us today!
                    </Button>
                    <p className="text-xs mt-2 leading-relaxed">
                      Download information through our exclusive Knowledge Base. 
                      Get in touch with us and we&apos;ll get you started.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

