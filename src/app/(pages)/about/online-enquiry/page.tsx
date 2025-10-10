'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, MessageSquare } from 'lucide-react'

export default function OnlineEnquiryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Online Enquiry</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Online Enquiry</h1>
            <p className="text-xl text-blue-100">Contact us for questions about our services, solutions, or i-maritime Consultancy Pvt. Ltd.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Please contact us if you have questions about our services, solutions, or i-maritime Consultancy Pvt. Ltd. 
              The information provided will be used to route your request to the appropriate person for a faster response.
            </p>
            <p className="text-sm text-gray-500">
              Your information will not be shared with anyone else. Please read our{' '}
              <Link href="/policy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{' '}
              for more information.
            </p>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* How can we help section */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">How can we help:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        'Business Consulting',
                        'Research',
                        'Technical Design',
                        'Corporate Finance Advisory',
                        'Internship',
                        'Other'
                      ].map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceType"
                            value={option}
                            defaultChecked={option === 'Internship'}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                          />
                          <span className="text-gray-700 font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder="Enter your first name" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input placeholder="Enter your last name" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input type="email" placeholder="Enter your email address" className="w-full" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <Input type="tel" placeholder="Enter your mobile number" className="w-full" />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        placeholder="Please describe your enquiry or project requirements..."
                        rows={6}
                        className="w-full resize-y"
                      />
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-4 text-lg font-semibold"
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

