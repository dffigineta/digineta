'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown, ArrowRight } from 'lucide-react'
import { navigation } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleDropdownEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    setActiveDropdown(null)
    setActiveSubmenu(null)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Single Compact Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">i</span>
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                i-maritime
              </span>
              <div className="text-xs text-gray-500 -mt-1">Consultancy</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
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
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  )}
                >
                  <span>{item.label}</span>
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
                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-visible"
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
                                      ? "hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 border border-transparent hover:border-blue-100" 
                                      : "hover:bg-blue-50"
                                  )}
                                >
                                  <span className={cn(
                                    "font-medium transition-colors",
                                    child.children 
                                      ? "text-gray-800 group-hover:text-blue-700" 
                                      : "text-gray-700 group-hover:text-blue-700"
                                  )}>
                                    {child.label}
                                  </span>
                                  {child.children ? (
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs text-gray-400 group-hover:text-blue-500 font-medium">More</span>
                                      <ChevronDown className={cn("w-4 h-4 -rotate-90 text-gray-400 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5")}/>
                                    </div>
                                  ) : (
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
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
                                      className="absolute top-0 left-full ml-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50"
                                      onMouseEnter={() => setActiveSubmenu(child.label)}
                                      onMouseLeave={() => setActiveSubmenu(null)}
                                    >
                                      <div className="mb-2 px-3 py-2 border-b border-gray-100">
                                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                          {child.label}
                                        </span>
                                      </div>
                                      <div className="grid grid-cols-1 gap-1">
                                        {child.children.map((gchild) => (
                                          <Link
                                            key={gchild.href}
                                            href={gchild.href}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 group transition-colors"
                                          >
                                            <span className="text-sm text-gray-700 group-hover:text-blue-700 font-medium">{gchild.label}</span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
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
          <div className="flex items-center space-x-3">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-4"
                  >
                    <input
                      type="text"
                      placeholder="Search maritime topics..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg">
                Get Quote
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <div key={child.href} className="mb-1">
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                            {child.children && (
                              <div className="ml-4">
                                {child.children.map((gchild) => (
                                  <Link
                                    key={gchild.href}
                                    href={gchild.href}
                                    className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
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