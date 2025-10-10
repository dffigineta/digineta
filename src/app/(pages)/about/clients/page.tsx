'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronUp, Ship, Anchor, Container, Building, DollarSign, Globe, Wrench } from 'lucide-react'
import { useState } from 'react'

const clientCategories = [
  {
    id: 'shipping',
    title: 'Shipping',
    icon: Ship,
    color: 'from-blue-500 to-cyan-500',
    clients: [
      'Maersk Sealand',
      'MSC Agency (India) Private Limited',
      'Great Eastern Shipping Company',
      'Mitsui OSK Lines',
      'James Mackintosh',
      'Transworld Group',
      'Patvolk',
      'Maldar Catamarans',
      'Chellaram Shipping, Hong Kong',
      'Tolani Group',
      'Alligator Shipping',
      'Shahi Shipping',
      'Amma Lines',
      'Malaysian International Shipping Corporation',
      'Modest Shipping',
      'Forbes Sea Consortium Private Limited',
      'Frank Shipping',
      'Aban Lloyd',
      'Indian Molasses Company',
      'Adsteam',
      'Global Services',
      'Elcome',
      'Safa Marine',
      'United Shipper',
      'Videocon group'
    ]
  },
  {
    id: 'ports',
    title: 'Ports',
    icon: Anchor,
    color: 'from-green-500 to-emerald-500',
    clients: [
      'New Mangalore Port Trust - Feasibility Report for Handling VLGC',
      'V.O Chidambarnar Port Trust - Detailed Project Report for Development of Outer Harbour',
      'Cochin Port Trust - Detailed Project Report for Development of Outer Harbour',
      'Cochin Port Trust - Feasibility study for Q8-Q9',
      'Ultratech - Study of East & West Coast from the perspective',
      'Gulf Petrochem - Market Assessment for Bulk Liquid Cago',
      'Karaikal Port - Techno Economic Feasibility Report for Coal Terminal',
      'Jawaharlal Nehru Port Trust',
      'Ports of Singapore Authority (PSA)',
      'P&O Ports, Australia',
      'Gangavaram Port Limited',
      'Shell Hazira Gas Pvt. Ltd.',
      'American President Lines',
      'CSX World Terminals (USA)',
      'Petronet Adani Bulk Terminal',
      'Adani Port Limited',
      'Sarat Chatterjee & Co. (Bothra Group)',
      'Gammon Infrastructure',
      'Port Klang, Malaysia',
      'Bharat Shell',
      'Kirloskar Consultants',
      'Tata Power'
    ]
  },
  {
    id: 'containers',
    title: 'Containers',
    icon: Container,
    color: 'from-orange-500 to-red-500',
    clients: [
      'Maersk Sealand',
      'JNPT',
      'PSA',
      'P & O',
      'Adani Group',
      'Sea Consortium',
      'CSX World Terminal',
      'Mitsui OSK',
      'Transworld Group',
      'MSC'
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics',
    icon: Building,
    color: 'from-purple-500 to-pink-500',
    clients: [
      'Transworld',
      'Mitsui OSK',
      'Great Eastern Shipping',
      'Tata Power'
    ]
  },
  {
    id: 'shipyard',
    title: 'Shipyard',
    icon: Wrench,
    color: 'from-indigo-500 to-purple-500',
    clients: [
      'Vizag Port - Feasibility Report for Modernisation of ORS Dry Dock',
      'Adani Group',
      'Wartsila',
      'Alcock Ashdown',
      'BHP Marine',
      'Waterways Shipyard Limited',
      'Alang Marine',
      'Nigel Shipyard',
      'A B Marine',
      'Vinayaga Marine Petro'
    ]
  },
  {
    id: 'financial-institutions',
    title: 'Financial Institutions',
    icon: DollarSign,
    color: 'from-yellow-500 to-orange-500',
    clients: [
      'State Bank of India',
      'J M Morgan Stanley',
      'Donaldson Luffkin & Jenrette',
      'ICICI',
      'Infrastructure Leasing and Finance Company (ILFS)',
      '20th Century Mutual Fund',
      'Peregrine',
      'IFFCO Tokio Marine',
      'Infrastructure Development Finance Company',
      'Unit Trust of India',
      'HDFC Mutual funds'
    ]
  },
  {
    id: 'government',
    title: 'Government and Regulatory Bodies',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500',
    clients: [
      'Directorate General of Shipping',
      'Maharashtra Maritime Board',
      'NSA'
    ]
  },
  {
    id: 'dredging',
    title: 'Dredging',
    icon: Anchor,
    color: 'from-gray-500 to-slate-500',
    clients: [
      'Dredging Corporation Of India',
      'Great Lakes Group, USA',
      'Maldar Dredgers'
    ]
  },
  {
    id: 'others',
    title: 'Others',
    icon: Building,
    color: 'from-rose-500 to-pink-500',
    clients: [
      'Altrans Logistics',
      'Gwalior Tankers'
    ]
  }
]

export default function ClientsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['shipping'])

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
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Clients</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Clients</h1>
            <p className="text-xl text-blue-100">We have worked with a number of national and international firms in the port and shipping industry</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              We have worked with a number of national and international firms in the port and shipping industry. 
              The list is comprehensive; some of the clients are listed below.
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
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
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
                          <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                          <p className="text-gray-600">{category.clients.length} clients</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-gray-100"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
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
                            className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-gray-700 leading-relaxed text-sm font-medium">{client}</p>
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

