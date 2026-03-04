'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function OnlineEnquiryPage() {
  const [formData, setFormData] = useState({
    serviceType: 'Internship',
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Enquiry form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        serviceType: 'Internship',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#f97316] via-[#0f172a] to-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/70 mb-4">
              <Link href="/about" className="hover:text-white">About Digineta</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Partner with Digineta</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Partner with Digineta</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Share a few details about your campaign, organisation or governance program and our
              team will get in touch.
            </p>
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
            <p className="text-lg text-black leading-relaxed mb-4">
              Tell us where you are in your journey – preparing for an election, running a
              government program, building a digital platform or exploring research – and we will
              route your enquiry to the right team.
            </p>
            <p className="text-sm text-black/70">
              Your information will not be shared with anyone else. Please read our{' '}
              <Link href="/policy" className="text-[#0f172a] hover:text-[#f97316] underline">
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
            <Card className="border-0 shadow-2xl bg-white">
              <CardContent className="p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-[#0f172a]/5 border border-[#0f172a]/30 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#0f172a]" />
                    <p className="text-black font-medium">Thank you! Your enquiry has been submitted successfully. We will get back to you shortly.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-[#f97316]/5 border border-[#f97316]/30 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-[#f97316]" />
                    <p className="text-black font-medium">Sorry, there was an error. Please try again.</p>
                  </div>
                )}
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* How can we help section */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-semibold text-white mb-6">How can we help:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        'Election campaigns',
                        'Governance & policy outreach',
                        'Digital platforms & tools',
                        'Research & intelligence',
                        'Internship',
                        'Other'
                      ].map((option, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="serviceType"
                            value={option}
                            checked={formData.serviceType === option}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#f97316] bg-gray-100 border-gray-300 focus:ring-[#f97316]"
                          />
                          <span className="text-black font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#cbd5e1] mb-2">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name" 
                          className="w-full" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#cbd5e1] mb-2">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name" 
                          className="w-full" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="block text-sm font-medium text-[#cbd5e1] mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address" 
                          className="w-full" 
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#cbd5e1] mb-2">
                          Mobile <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          name="mobile"
                          type="tel"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter your mobile number" 
                          className="w-full" 
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <label className="block text-sm font-medium text-[#cbd5e1] mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your enquiry or project requirements..."
                        rows={6}
                        className="w-full resize-y"
                        required
                      />
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        type="submit"
                        size="lg" 
                        className="w-full bg-gradient-to-r from-[#f97316] to-[#0f172a] hover:from-[#f97316] hover:to-[#0f172a] text-white py-4 text-lg font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
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

