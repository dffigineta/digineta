'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

export default function SubmitResumePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/careers" className="hover:text-white">Careers</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Submit Resume</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Submit Resume</h1>
            <p className="text-xl text-blue-100">Submit your resume using the form given below. We will get back to you shortly.</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Mandatory Fields Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-800 font-semibold">All fields are Mandatory</p>
            </div>
          </motion.div>

          {/* Resume Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-50 to-blue-50">
              <CardContent className="p-8">
                <form className="space-y-8">
                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Your Email Address:
                      </label>
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        First Name:
                      </label>
                      <Input 
                        placeholder="Enter your first name"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Last Name:
                      </label>
                      <Input 
                        placeholder="Enter your last name"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Cell Number:
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="Enter your cell number"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Phone Number:
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="Enter your phone number"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Current Renumeration:
                      </label>
                      <Input 
                        placeholder="Enter your current remuneration"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Current Employer:
                      </label>
                      <Input 
                        placeholder="Enter your current employer"
                        className="flex-1"
                        required
                      />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0 pt-2">
                        Career Goal:
                      </label>
                      <Textarea 
                        placeholder="Describe your career goals and aspirations..."
                        rows={6}
                        className="flex-1 resize-y"
                        required
                      />
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Attach Resume (.doc format):
                      </label>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <input
                            type="file"
                            accept=".doc,.docx"
                            className="hidden"
                            id="resume-upload"
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => document.getElementById('resume-upload')?.click()}
                            className="border-gray-300 hover:bg-gray-50"
                          >
                            Choose File
                          </Button>
                          <span className="text-sm text-gray-500">No file chosen</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 pt-8">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3"
                    >
                      Apply
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      size="lg" 
                      className="flex-1 border-gray-300 hover:bg-gray-50 py-3"
                    >
                      Clear
                    </Button>
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

