'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Users, Building, Mail, Phone, MapPin, ExternalLink, ChevronLeft, ChevronRight, UserPlus } from 'lucide-react'

const directoryMembers = [
  {
    name: 'b.s.bhatia',
    companyName: 'strainwell',
    companyDescription: 'manufacturer',
    address: '6 DSIDC COMPLEX JHILMIL IND. AREA . DELHI-110095-INDIA',
    website: 'www.strainwell.com',
    email: 'sales at strainwell.com',
    telephone: '911122583488',
    fax: '911122583277',
    category: 'Equipment'
  }
]

const categories = [
  { name: 'Equipment', count: 25, color: 'bg-blue-100 text-blue-700' },
  { name: 'Shipping', count: 18, color: 'bg-green-100 text-green-700' },
  { name: 'Port Services', count: 32, color: 'bg-purple-100 text-purple-700' },
  { name: 'Logistics', count: 15, color: 'bg-orange-100 text-orange-700' },
  { name: 'Consulting', count: 12, color: 'bg-pink-100 text-pink-700' },
  { name: 'Technology', count: 8, color: 'bg-cyan-100 text-cyan-700' }
]

export default function DirectoryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Maritime Directory</h1>
                <p className="text-xl text-blue-100">Our efforts have been to create an exhaustive directory of maritime and related industry.</p>
              </div>
              <Button className="bg-white text-blue-900 hover:bg-gray-100">
                <UserPlus className="w-4 h-4 mr-2" />
                Register Yourself
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Directory Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all cursor-pointer">
                      <CardContent className="p-4">
                        <Badge className={`${category.color} mb-2`}>
                          {category.count}
                        </Badge>
                        <p className="text-sm font-medium text-gray-900">{category.name}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Directory Members */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">List of Register Members</h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">1 of 1</span>
                  <Button variant="outline" size="sm" disabled>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="space-y-6">
                {directoryMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <Badge className="bg-blue-100 text-blue-700">{member.category}</Badge>
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <div className="space-y-2">
                                  <div className="flex items-center text-gray-700">
                                    <Building className="w-4 h-4 mr-2 text-blue-600" />
                                    <span className="font-medium">{member.companyName}</span>
                                  </div>
                                  <p className="text-gray-600 text-sm ml-6">{member.companyDescription}</p>
                                  
                                  <div className="flex items-start text-gray-700">
                                    <MapPin className="w-4 h-4 mr-2 text-blue-600 mt-0.5" />
                                    <span className="text-sm">{member.address}</span>
                                  </div>
                                  
                                  <div className="flex items-center text-gray-700">
                                    <ExternalLink className="w-4 h-4 mr-2 text-blue-600" />
                                    <a href={`https://${member.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                                      {member.website}
                                    </a>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center text-gray-700">
                                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                                    <span className="text-sm">{member.email}</span>
                                  </div>
                                  
                                  <div className="flex items-center text-gray-700">
                                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                                    <span className="text-sm">{member.telephone}</span>
                                  </div>
                                  
                                  <div className="flex items-center text-gray-700">
                                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                                    <span className="text-sm">Fax: {member.fax}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                              View Profile
                            </Button>
                            <Button variant="outline" size="sm">
                              Contact
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Registration Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-8">
                  <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Maritime Directory</h3>
                  <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                    Register your company in our comprehensive maritime directory and connect with industry professionals, 
                    potential clients, and business partners across the maritime sector.
                  </p>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <UserPlus className="w-5 h-5 mr-2" />
                    Register Your Company
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

