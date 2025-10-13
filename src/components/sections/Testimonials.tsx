import { Testimonial } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { Quote, Star } from 'lucide-react'

interface TestimonialsProps {
  testimonials: Testimonial[]
  title?: string
  showMore?: boolean
  maxItems?: number
}

export default function Testimonials({ 
  testimonials, 
  title = "Testimonials",
  showMore = true,
  maxItems
}: TestimonialsProps) {
  const displayTestimonials = maxItems ? testimonials.slice(0, maxItems) : testimonials

  return (
    <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <Quote className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
        </div>
        
        <div className="space-y-6">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="border-b border-blue-200 pb-6 last:border-b-0 last:pb-0">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </blockquote>
              
              <div className="text-sm">
                <div className="font-semibold text-blue-900">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.position}</div>
                <div className="text-gray-600 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        {showMore && testimonials.length > (maxItems || testimonials.length) && (
          <div className="mt-6 pt-4 border-t border-blue-200">
            <a 
              href="/about/testimonials" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center group"
            >
              View All Testimonials
              <Quote className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
