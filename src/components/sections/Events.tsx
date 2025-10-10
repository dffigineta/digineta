import { Event } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { formatDateShort } from '@/lib/utils'
import Link from 'next/link'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'

interface EventsProps {
  events: Event[]
  title?: string
  showMore?: boolean
  maxItems?: number
}

export default function Events({ 
  events, 
  title = "Upcoming Events",
  showMore = true,
  maxItems = 3
}: EventsProps) {
  const displayEvents = maxItems ? events.slice(0, maxItems) : events

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-blue-600 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{formatDateShort(event.date)}</span>
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                
                <Link 
                  href={event.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {showMore && events.length > maxItems && (
          <div className="text-center mt-8">
            <Link 
              href="/ideas/events" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-lg group"
            >
              View All Events
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
