import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Digineta</h3>
              <p className="text-blue-100 text-sm">India&apos;s Political Technology Venture</p>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Apps, analytics and digital outreach solutions for political leaders, parties and organisations across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/political-platform" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Political Platform
              </Link>
              <Link href="/about" className="block text-blue-100 hover:text-white transition-colors text-sm">
                About Digineta
              </Link>
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Our Solutions & Platforms
              </Link>
              <Link href="/knowledge-centre" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Political Intelligence
              </Link>
              <Link href="/ideas" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Campaign i-deas
              </Link>
              <Link href="/careers" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Join Our Team
              </Link>
            </div>
          </div>

          {/* Services / Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Key Solutions</h4>
            <div className="space-y-2">
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Political Intelligence & Analytics
              </Link>
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Campaign Platforms: Mahaneta, Netabanner & Smart Apps
              </Link>
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Digital Outreach & Social Media
              </Link>
              <Link href="/services" className="block text-blue-100 hover:text-white transition-colors text-sm">
                Voter Data & Call Centre Operations
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-200 mt-1 flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <p>Mumbai, Maharashtra</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">+91 0000 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100 text-sm">info@digineta.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-100">
              © 2025 - 2026. Digineta. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm mt-4 md:mt-0">
              <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                Political Technology Solutions
              </Link>
              <span className="text-blue-200">|</span>
              <Link href="/knowledge-centre" className="text-blue-100 hover:text-white transition-colors">
                Political Intelligence
              </Link>
              <span className="text-blue-200">|</span>
              <Link href="/legal" className="text-blue-100 hover:text-white transition-colors">
                Legal Disclaimers
              </Link>
              <span className="text-blue-200">|</span>
              <Link href="/policy" className="text-blue-100 hover:text-white transition-colors">
                Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
