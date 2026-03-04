import { CaseStudy } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { FolderOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface CaseStudiesProps {
  caseStudies: CaseStudy[]
  title?: string
  showMore?: boolean
  maxItems?: number
}

export default function CaseStudies({ 
  caseStudies, 
  title = "Case Studies",
  showMore = true,
  maxItems
}: CaseStudiesProps) {
  const displayCaseStudies = maxItems ? caseStudies.slice(0, maxItems) : caseStudies

  return (
    <Card className="bg-blue-50 border-blue-200 hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <FolderOpen className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-blue-900">{title}</h3>
        </div>
        
        <div className="space-y-4">
          {displayCaseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id} 
              className="border-b border-blue-200 pb-4 last:border-b-0 last:pb-0 group"
            >
              <Link 
                href={caseStudy.href}
                className="block hover:text-blue-600 transition-colors"
              >
                <div className="font-medium text-blue-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {caseStudy.title}
                </div>
                <div className="text-sm text-[#cbd5e1] leading-relaxed">
                  {caseStudy.description}
                </div>
                <div className="flex items-center text-blue-600 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Read more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {showMore && caseStudies.length > (maxItems || caseStudies.length) && (
          <div className="mt-6 pt-4 border-t border-blue-200">
            <Link 
              href="/knowledge-centre/case-studies" 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center group"
            >
              View All Case Studies
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
