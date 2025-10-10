import { PageContent } from '@/types'
import { Button } from '@/components/ui/Button'
import { Printer, Mail } from 'lucide-react'

interface HeroProps {
  content: PageContent
  showBreadcrumbs?: boolean
  showActions?: boolean
}

export default function Hero({ 
  content, 
  showBreadcrumbs = true, 
  showActions = true 
}: HeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {showBreadcrumbs && content.breadcrumbs && (
          <nav className="text-sm mb-6">
            {content.breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                {index > 0 && ' > '}
                <a 
                  href={crumb.href} 
                  className="hover:text-blue-200 transition-colors"
                >
                  {crumb.label}
                </a>
              </span>
            ))}
          </nav>
        )}
        
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {content.title}
          </h1>
          {content.description && (
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              {content.description}
            </p>
          )}
          
          {showActions && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="flex items-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print this page</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Email to a friend</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
    </section>
  )
}
