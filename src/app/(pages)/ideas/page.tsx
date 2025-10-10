'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, User, ArrowRight } from 'lucide-react'

const blogs = [
  {
    title: 'Maritime Industry Trends for 2025',
    excerpt: 'Exploring the latest trends and developments shaping the maritime sector',
    author: 'Dr. Ramesh Singhal',
    date: 'Jan 15, 2025',
    tags: ['Trends', 'Industry', 'Analysis']
  },
  {
    title: 'The Future of Port Automation',
    excerpt: 'How automation is revolutionizing port operations worldwide',
    author: 'Sarah Johnson',
    date: 'Jan 10, 2025',
    tags: ['Automation', 'Technology', 'Ports']
  },
  {
    title: 'Sustainable Shipping Practices',
    excerpt: 'Environmental considerations in modern maritime operations',
    author: 'Michael Chen',
    date: 'Jan 5, 2025',
    tags: ['Sustainability', 'Environment']
  }
]

const events = [
  {
    title: 'Maritime Summit 2025',
    description: 'Annual conference on maritime industry developments',
    date: 'Mar 15, 2025',
    location: 'Mumbai, India'
  },
  {
    title: 'Port Technology Expo',
    description: 'Exhibition of latest port technologies and solutions',
    date: 'Apr 20, 2025',
    location: 'Chennai, India'
  }
]

export default function IdeasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">i-deas</h1>
            <p className="text-xl text-blue-100">
              Insights, trends, and thought leadership from the maritime industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Blogs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-xl text-gray-600">Stay updated with maritime industry insights</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {blog.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {blog.date}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Join us at industry events and conferences</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                      <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white whitespace-nowrap">
                        {event.date}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{event.location}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

