'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react'
import { navigation } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Array<{label: string, href: string}>>([])

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
    setActiveSubmenu(null)
  }

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([])
      return
    }

    const results: Array<{label: string, href: string}> = []
    const query = searchQuery.toLowerCase()

    // Search through navigation items
    navigation.forEach((item) => {
      if (item.label.toLowerCase().includes(query)) {
        results.push({ label: item.label, href: item.href })
      }
      
      if (item.children) {
        item.children.forEach((child) => {
          if (child.label.toLowerCase().includes(query)) {
            results.push({ label: `${item.label} > ${child.label}`, href: child.href })
          }
          
          if (child.children) {
            child.children.forEach((gchild) => {
              if (gchild.label.toLowerCase().includes(query)) {
                results.push({ label: `${item.label} > ${child.label} > ${gchild.label}`, href: gchild.href })
              }
            })
          }
        })
      }
    })

    setSearchResults(results.slice(0, 8)) // Limit to 8 results
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      router.push(searchResults[0].href)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="bg-[#002147] shadow-lg sticky top-0 z-50">
      {/* Single Compact Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-3 py-2 md:py-2">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B31942] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm sm:text-lg">D</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#B31942] transition-colors">
                Digineta
              </span>
              <div className="text-xs text-white -mt-1 hidden sm:block">India&apos;s Political Technology Venture</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center xl:justify-start">

            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 group",
                    activeDropdown === item.label
                      ? "bg-[#B31942] text-white"
                      : "text-white hover:bg-[#B31942] hover:text-white"
                  )}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Mega Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-72 xl:w-80 bg-[#002147] rounded-xl shadow-2xl border border-[#002147] overflow-visible"
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-1">
                            {item.children.map((child, index) => (
                              <motion.div
                                key={child.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="relative"
                                onMouseEnter={() => setActiveSubmenu(child.label)}
                                onMouseLeave={() => setActiveSubmenu(null)}
                              >
                                <Link
                                  href={child.href}
                                  className={cn(
                                    "flex items-center justify-between p-3 rounded-lg group transition-all duration-200",
                                    child.children 
                                      ? "hover:bg-[#B31942]" 
                                      : "hover:bg-[#B31942]"
                                  )}
                                >
                                  <span className={cn(
                                    "font-medium transition-colors",
                                    child.children 
                                      ? "text-white group-hover:text-white" 
                                      : "text-white group-hover:text-white"
                                  )}>
                                    {child.label}
                                  </span>
                                  {child.children ? (
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs text-white font-medium">More</span>
                                      <ChevronDown className={cn("w-4 h-4 -rotate-90 text-white transition-transform group-hover:translate-x-0.5")}/>
                                    </div>
                                  ) : (
                                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                                  )}
                                </Link>

                                {/* Second-level flyout */}
                                <AnimatePresence>
                                  {child.children && activeSubmenu === child.label && (
                                    <motion.div
                                      initial={{ opacity: 0, x: 6 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: 6 }}
                                      transition={{ duration: 0.15 }}
                                      className="absolute top-0 left-full ml-2 w-72 xl:w-80 bg-[#002147] rounded-xl shadow-2xl border border-[#002147] p-3 xl:p-4 z-50"
                                      onMouseEnter={() => setActiveSubmenu(child.label)}
                                      onMouseLeave={() => setActiveSubmenu(null)}
                                    >
                                      <div className="mb-2 px-3 py-2 border-b border-[#B31942]">
                                        <span className="text-xs font-semibold text-white uppercase tracking-wider">
                                          {child.label}
                                        </span>
                                      </div>
                                      <div className="grid grid-cols-1 gap-1">
                                        {child.children.map((gchild) => (
                                          <Link
                                            key={gchild.href}
                                            href={gchild.href}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-[#B31942] group transition-colors"
                                          >
                                            <span className="text-sm text-white group-hover:text-white font-medium">{gchild.label}</span>
                                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                                          </Link>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 sm:p-2 text-gray-600 hover:text-[#B31942] hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50"
                  >
                    <form onSubmit={handleSearchSubmit} className="p-3 sm:p-4">
                      <input
                        type="text"
                        placeholder="Search Digineta platforms, services, insights..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4169E1] focus:border-transparent"
                        autoFocus
                      />
                    </form>
                    
                    {searchResults.length > 0 && (
                      <div className="border-t border-gray-100 max-h-80 overflow-y-auto">
                        {searchResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="block px-4 py-3 hover:bg-[#fef2f5] transition-colors border-b border-gray-50 last:border-b-0"
                          >
                            <div className="text-sm text-gray-700 hover:text-[#B31942] font-medium">
                              {result.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                      <div className="px-4 py-6 text-center text-gray-500 text-sm border-t border-gray-100">
                        No results found for &quot;{searchQuery}&quot;
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Hidden on very small screens */}
            <Link href="/contact" className="hidden sm:block">
              <button className="bg-[#B31942] hover:bg-[#8F1333] text-white px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-lg text-xs sm:text-xs font-medium transition-all duration-200 hover:shadow-lg">
                Talk to Our Team
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:text-[#B31942] hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white max-h-screen overflow-y-auto"
            >
              <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
                {/* Mobile CTA Button */}
                <div className="px-4 py-2 sm:hidden">
                  <Link href="/contact">
                    <button 
                      className="w-full bg-[#B31942] hover:bg-[#8F1333] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Quote
                    </button>
                  </Link>
                </div>
                
                {navigation.map((item) => (
                  <div key={item.label} className="px-2 sm:px-0">
                    <Link
                      href={item.href}
                      className="block px-3 sm:px-4 py-2.5 sm:py-3 text-gray-700 hover:bg-gray-50 hover:text-[#B31942] rounded-lg transition-colors font-medium text-sm sm:text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-2 sm:ml-4 space-y-0.5 sm:space-y-1">
                        {item.children.map((child) => (
                          <div key={child.href} className="mb-0.5 sm:mb-1">
                            <Link
                              href={child.href}
                              className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 hover:text-[#B31942] hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <div className="ml-2 sm:ml-4">
                                {child.children.map((gchild) => (
                                  <Link
                                    key={gchild.href}
                                    href={gchild.href}
                                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-500 hover:text-[#B31942] hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {gchild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}