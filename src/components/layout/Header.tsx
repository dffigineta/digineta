'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react'
import { navigation } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const isWhoIsItForActive = pathname?.startsWith('/who-is-it-for')
  const isPoliticalPlatformActive = pathname === '/political-platform'
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
    <header className="bg-[#0a0a0a] border-b border-white/10 shadow-lg sticky top-0 z-50">
      {/* Single Compact Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-3 py-2 md:py-2">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f97316] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm sm:text-lg">D</span>
            </div>
            <div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[#f97316] transition-colors">
                Digineta
              </span>
              <div className="text-xs text-white -mt-1 hidden sm:block">India&apos;s Political Technology Venture</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center xl:justify-start">

            {navigation.map((item) => {
              const isWhoIsItFor = item.label === 'Who Is It For'
              const isPoliticalPlatform = item.label === 'Political Platform'
              const isAccentItem = isWhoIsItFor || isPoliticalPlatform
              const isActive = isPoliticalPlatform
                ? isPoliticalPlatformActive
                : isWhoIsItFor
                  ? (activeDropdown === item.label || isWhoIsItForActive)
                  : activeDropdown === item.label
              return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 group text-white",
                    isActive && (isAccentItem ? "bg-[var(--who-accent)]" : "bg-[#f97316]"),
                    !isActive && (isAccentItem ? "hover:bg-[var(--who-accent)]" : "hover:bg-[#f97316]")
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

                {/* Mega Dropdown — About Digineta: 3-column mega menu; others: standard dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "absolute top-full left-0 mt-1 bg-[#0f172a] rounded-xl shadow-2xl border border-white/10 overflow-visible",
                          item.label === 'About Digineta'
                            ? "right-0 left-auto w-[min(96vw,720px)] xl:w-[min(88vw,840px)] bg-[#0f172a] border-white/10"
                            : "w-72 xl:w-80 bg-[#0f172a] border-white/10"
                        )}
                        onMouseEnter={() => handleDropdownEnter(item.label)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-4">
                          {item.label === 'About Digineta' ? (
                            <div className="grid grid-cols-3 gap-6 xl:gap-8">
                              {(() => {
                                const ch = item.children!
                                const n = ch.length
                                const perCol = Math.ceil(n / 3)
                                return [0, 1, 2].map((col) => (
                                  <div key={col} className="space-y-1">
                                    {ch.slice(col * perCol, col * perCol + perCol).map((child, index) => (
                                      <motion.div
                                        key={child.href}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (col * perCol + index) * 0.03 }}
                                        className="relative"
                                        onMouseEnter={() => setActiveSubmenu(child.label)}
                                        onMouseLeave={() => setActiveSubmenu(null)}
                                      >
                                        <Link
                                          href={child.href}
                                          className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f97316] group transition-all duration-200"
                                        >
                                          <span className="font-medium text-white group-hover:text-white">
                                            {child.label}
                                          </span>
                                          {child.children ? (
                                            <ChevronDown className="w-4 h-4 -rotate-90 text-white/80 group-hover:text-white" />
                                          ) : (
                                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                                          )}
                                        </Link>
                                        {child.children && (
                                          <div className="mt-1 ml-0 space-y-0.5">
                                            {child.children.map((gchild) => (
                                              <Link
                                                key={gchild.href}
                                                href={gchild.href}
                                                className="flex items-center gap-2 py-2 pl-4 pr-3 rounded-lg hover:bg-[#f97316]/80 text-white/90 hover:text-white text-sm transition-colors"
                                              >
                                                <span>{gchild.label}</span>
                                                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </motion.div>
                                    ))}
                                  </div>
                                ))
                              })()}
                            </div>
                          ) : (
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
                                      isWhoIsItFor ? "hover:bg-[var(--who-accent)]" : "hover:bg-[#f97316]"
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

                                  {/* Second-level flyout (non–About Digineta) */}
                                  <AnimatePresence>
                                    {child.children && activeSubmenu === child.label && (
                                      <motion.div
                                        initial={{ opacity: 0, x: 6 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 6 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-0 left-full ml-2 w-72 xl:w-80 bg-[#0f172a] rounded-xl shadow-2xl border border-white/10 p-3 xl:p-4 z-50"
                                        onMouseEnter={() => setActiveSubmenu(child.label)}
                                        onMouseLeave={() => setActiveSubmenu(null)}
                                      >
                                        <div className="mb-2 px-3 py-2 border-b border-[#f97316]">
                                          <span className="text-xs font-semibold text-white uppercase tracking-wider">
                                            {child.label}
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1">
                                          {child.children.map((gchild) => (
                                            <Link
                                              key={gchild.href}
                                              href={gchild.href}
                                              className="flex items-center justify-between p-3 rounded-lg hover:bg-[#f97316] group transition-colors"
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
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 sm:p-2 text-[#cbd5e1] hover:text-[#f97316] hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-96 bg-[#111827] rounded-xl shadow-2xl border border-white/10 z-50"
                  >
                    <form onSubmit={handleSearchSubmit} className="p-3 sm:p-4">
                      <input
                        type="text"
                        placeholder="Search Digineta platforms, services, insights..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base bg-[#0a0a0a] border border-white/20 rounded-lg text-white placeholder:text-[#64748b] focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                        autoFocus
                      />
                    </form>
                    
                    {searchResults.length > 0 && (
                      <div className="border-t border-white/10 max-h-80 overflow-y-auto">
                        {searchResults.map((result, index) => (
                          <Link
                            key={index}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false)
                              setSearchQuery('')
                            }}
                            className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0"
                          >
                            <div className="text-sm text-[#cbd5e1] hover:text-[#f97316] font-medium">
                              {result.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    
                    {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
                      <div className="px-4 py-6 text-center text-[#64748b] text-sm border-t border-white/10">
                        No results found for &quot;{searchQuery}&quot;
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Hidden on very small screens */}
            <Link href="/contact" className="hidden sm:block">
              <button className="bg-[#f97316] hover:bg-[#ea6c0a] text-white px-3 sm:px-3 py-1.5 sm:py-1.5 rounded-lg text-xs sm:text-xs font-medium transition-all duration-200 hover:shadow-lg">
                Work With Us
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#cbd5e1] hover:text-[#f97316] hover:bg-white/10 rounded-lg transition-all duration-200"
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
              className="lg:hidden border-t border-white/10 bg-[#0f172a] max-h-screen overflow-y-auto"
            >
              <div className="py-3 sm:py-4 space-y-1 sm:space-y-2">
                {/* Mobile CTA Button */}
                <div className="px-4 py-2 sm:hidden">
                  <Link href="/contact">
                    <button 
                      className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg"
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
                      className="block px-3 sm:px-4 py-2.5 sm:py-3 text-[#cbd5e1] hover:bg-white/10 hover:text-[#f97316] rounded-lg transition-colors font-medium text-sm sm:text-base"
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
                              className="block px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#cbd5e1] hover:text-[#f97316] hover:bg-white/10 rounded-lg transition-colors"
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
                                    className="block px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[#64748b] hover:text-[#f97316] hover:bg-white/10 rounded-lg transition-colors"
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