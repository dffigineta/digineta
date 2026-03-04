import { Service } from '@/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Link from 'next/link'
import { ArrowRight, Ship, Anchor, Container, Wrench, Building } from 'lucide-react'

interface ServicesProps {
  services: Service[]
  title?: string
  description?: string
  showIcons?: boolean
}

const serviceIcons = {
  'ports-terminals': Anchor,
  'shipping': Ship,
  'container-logistics': Container,
  'shipbuilding': Wrench,
  'infrastructure': Building,
  'default': Ship
}

export default function Services({ 
  services, 
  title = "Our Services",
  description,
  showIcons = true
}: ServicesProps) {
  return (
    <section className="py-16 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-xl text-[#cbd5e1] max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = showIcons 
              ? (serviceIcons[service.id as keyof typeof serviceIcons] || serviceIcons.default)
              : null
            
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader>
                  {showIcons && IconComponent && (
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                  <CardTitle className="text-xl text-blue-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#cbd5e1] mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-all"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
