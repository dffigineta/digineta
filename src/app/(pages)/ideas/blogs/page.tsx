'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const blogs = [
  {
    id: 'maritime-industry-trends-2025',
    title: 'Indian Campaign Trends for 2025',
    excerpt: 'Exploring the latest trends shaping Indian elections including digital-first campaigning, issue-based politics, and data-driven voter engagement strategies.',
    author: 'Digineta Strategy Team',
    date: 'Jan 15, 2025',
    tags: ['Campaigns', 'Trends', 'Analysis']
  },
  {
    id: 'future-of-port-automation',
    title: 'The Future of Campaign Automation',
    excerpt: 'How automation and AI are transforming campaign operations, from voter outreach workflows to booth-level execution systems and decision dashboards.',
    author: 'Digineta Product Team',
    date: 'Jan 10, 2025',
    tags: ['Automation', 'Technology', 'Campaigns']
  },
  {
    id: 'sustainable-shipping-practices',
    title: 'Sustainable Political Campaigning',
    excerpt: 'Building long-term political organizations, ethical digital practices, and governance-focused campaigns that create lasting impact beyond election cycles.',
    author: 'Digineta Research Team',
    date: 'Jan 5, 2025',
    tags: ['Governance', 'Ethics', 'Strategy']
  },
  {
    id: 'container-shipping-market-analysis',
    title: 'Booth & Voter Segment Analysis Playbook',
    excerpt: 'A comprehensive guide to booth-level segmentation, voter analysis, and targeting strategies that drive campaign effectiveness in Indian elections.',
    author: 'Digineta Data Team',
    date: 'Dec 28, 2024',
    tags: ['Booths', 'Segments', 'Analysis']
  }
]

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog Posts</h1>
            <p className="text-xl text-blue-100">Insights and analysis from Digineta&apos;s political technology and campaign teams</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/ideas/blogs/${blog.id}`}>
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer group">
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.map((tag, idx) => (
                          <Badge key={idx} className="bg-blue-100 text-blue-700">{tag}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{blog.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#cbd5e1] mb-4">{blog.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-[#64748b] mb-4">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {blog.date}
                        </div>
                      </div>
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

