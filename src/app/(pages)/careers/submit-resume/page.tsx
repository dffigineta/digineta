'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle, Upload } from 'lucide-react'
import { useState, useRef } from 'react'

export default function SubmitResumePage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cellNumber: '',
    phoneNumber: '',
    currentRemuneration: '',
    currentEmployer: '',
    careerGoal: ''
  })
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Validate file type
      const validTypes = [
        'application/msword', 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]
      if (!validTypes.includes(file.type) && !file.name.endsWith('.doc') && !file.name.endsWith('.docx')) {
        alert('Please upload a .doc or .docx file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB')
        return
      }
      
      setSelectedFile(file)
    }
  }

  const handleClear = () => {
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      cellNumber: '',
      phoneNumber: '',
      currentRemuneration: '',
      currentEmployer: '',
      careerGoal: ''
    })
    setSelectedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedFile) {
      alert('Please attach your resume')
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In production, you would use FormData to upload the file:
      // const formDataToSend = new FormData()
      // Object.entries(formData).forEach(([key, value]) => {
      //   formDataToSend.append(key, value)
      // })
      // formDataToSend.append('resume', selectedFile)
      // const response = await fetch('/api/submit-resume', {
      //   method: 'POST',
      //   body: formDataToSend
      // })
      
      console.log('Resume submitted:', { ...formData, fileName: selectedFile.name })
      setSubmitStatus('success')
      
      // Reset form
      handleClear()
      
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
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 font-medium">Thank you! Your resume has been submitted successfully. We will get back to you shortly.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 font-medium">Sorry, there was an error. Please try again.</p>
                  </div>
                )}
                
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Form Fields */}
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <label className="w-full md:w-48 text-sm font-medium text-gray-700 flex-shrink-0">
                        Your Email Address:
                      </label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
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
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
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
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
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
                        name="cellNumber"
                        type="tel"
                        value={formData.cellNumber}
                        onChange={handleChange}
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
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
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
                        name="currentRemuneration"
                        value={formData.currentRemuneration}
                        onChange={handleChange}
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
                        name="currentEmployer"
                        value={formData.currentEmployer}
                        onChange={handleChange}
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
                        name="careerGoal"
                        value={formData.careerGoal}
                        onChange={handleChange}
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
                            ref={fileInputRef}
                            type="file"
                            accept=".doc,.docx"
                            className="hidden"
                            id="resume-upload"
                            onChange={handleFileChange}
                            required
                          />
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="border-gray-300 hover:bg-gray-50 flex items-center space-x-2"
                          >
                            <Upload className="w-4 h-4" />
                            <span>Choose File</span>
                          </Button>
                          <span className="text-sm text-gray-600 font-medium">
                            {selectedFile ? selectedFile.name : 'No file chosen'}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Max file size: 5MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col md:flex-row gap-4 pt-8">
                    <Button 
                      type="submit"
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Apply'}
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      size="lg" 
                      className="flex-1 border-gray-300 hover:bg-gray-50 py-3"
                      onClick={handleClear}
                      disabled={isSubmitting}
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

