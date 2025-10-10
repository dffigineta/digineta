'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, User } from 'lucide-react'

const blogs = [
  {
    title: 'Maritime Industry Trends for 2025',
    excerpt: 'Exploring the latest trends and developments shaping the maritime sector including digitalization, sustainability initiatives, and emerging technologies.',
    author: 'Dr. Ramesh Singhal',
    date: 'Jan 15, 2025',
    tags: ['Trends', 'Industry', 'Analysis']
  },
  {
    title: 'The Future of Port Automation',
    excerpt: 'How automation and AI are revolutionizing port operations, improving efficiency, and reducing costs across global maritime terminals.',
    author: 'Sarah Johnson',
    date: 'Jan 10, 2025',
    tags: ['Automation', 'Technology', 'Ports']
  },
  {
    title: 'Sustainable Shipping Practices',
    excerpt: 'Environmental considerations and green technologies in modern maritime operations, including alternative fuels and emission reduction strategies.',
    author: 'Michael Chen',
    date: 'Jan 5, 2025',
    tags: ['Sustainability', 'Environment']
  },
  {
    title: 'Container Shipping Market Analysis',
    excerpt: 'Deep dive into current container shipping market dynamics, freight rates, and future outlook for global trade.',
    author: 'Dr. Ramesh Singhal',
    date: 'Dec 28, 2024',
    tags: ['Shipping', 'Market', 'Analysis']
  }
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Posts</h1>
            <p className="text-xl text-blue-100">Insights and analysis from maritime experts</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blog.tags.map((tag, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-700">{tag}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
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
    </div>
  )
}

