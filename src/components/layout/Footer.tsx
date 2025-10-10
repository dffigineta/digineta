import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">i-maritime</h3>
              <p className="text-blue-200 text-sm">Consultancy Private Limited</p>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              India's top maritime, port and shipbuilding consultant providing quality consulting and research-based maritime services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-blue-200 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/services" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Services
              </Link>
              <Link href="/knowledge-centre" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Knowledge Centre
              </Link>
              <Link href="/ideas" className="block text-blue-200 hover:text-white transition-colors text-sm">
                i-deas
              </Link>
              <Link href="/careers" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Careers
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <div className="space-y-2">
              <Link href="/services/industry/ports-terminals" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Ports & Terminals
              </Link>
              <Link href="/services/industry/shipping" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Shipping
              </Link>
              <Link href="/services/industry/container-logistics" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Container Logistics
              </Link>
              <Link href="/services/industry/shipbuilding" className="block text-blue-200 hover:text-white transition-colors text-sm">
                Shipbuilding
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <div className="text-blue-200 text-sm">
                  <p>Navi Mumbai, Maharashtra</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+91 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@imaritime.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-blue-200">
              © 2025 - 2026. i-maritime. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm mt-4 md:mt-0">
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Marine Consultants
              </Link>
              <span className="text-blue-400">|</span>
              <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                Maritime Services
              </Link>
              <span className="text-blue-400">|</span>
              <Link href="/knowledge-centre" className="text-blue-200 hover:text-white transition-colors">
                Knowledge Centre
              </Link>
              <span className="text-blue-400">|</span>
              <Link href="/legal" className="text-blue-200 hover:text-white transition-colors">
                Legal Disclaimers
              </Link>
              <span className="text-blue-400">|</span>
              <Link href="/policy" className="text-blue-200 hover:text-white transition-colors">
                Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
