import { BlogPost } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface BlogPostsProps {
  posts: BlogPost[]
  title?: string
  showMore?: boolean
  maxItems?: number
}

export default function BlogPosts({ 
  posts, 
  title = "Latest Blog Posts",
  showMore = true,
  maxItems = 3
}: BlogPostsProps) {
  const displayPosts = maxItems ? posts.slice(0, maxItems) : posts

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-[#64748b] mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.publishedAt)}</span>
                  <span>•</span>
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#cbd5e1] mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link 
                  href={`/ideas/blogs/${post.id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {showMore && posts.length > maxItems && (
          <div className="text-center mt-8">
            <Link 
              href="/ideas/blogs" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg group"
            >
              View All Blog Posts
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
