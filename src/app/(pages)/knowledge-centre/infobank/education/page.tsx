'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { GraduationCap, ArrowLeft } from 'lucide-react'

export default function EducationInfobankPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Political Intelligence</Link>
              <span className="mx-2">›</span>
              <Link href="/knowledge-centre/infobank" className="hover:text-white">Infobank</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Education</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <GraduationCap className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maritime Education & Training</h1>
            <p className="text-xl text-blue-100">Comprehensive guide to maritime education, training, and career pathways</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Maritime Education Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Maritime education and training prepare professionals for careers in shipping, ports, logistics, shipbuilding, and maritime services. The sector offers diverse career opportunities both at sea and ashore, with competitive salaries and global exposure.
                </p>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  Maritime training is highly regulated, governed by international standards set by the International Maritime Organization (IMO) through the STCW (Standards of Training, Certification and Watchkeeping for Seafarers) Convention.
                </p>
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  India is one of the largest suppliers of seafarers globally, with approximately 200,000 Indian seafarers working on international vessels. The country has a well-established maritime education infrastructure with numerous training institutes approved by the Directorate General of Shipping (DGS).
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Merchant Navy Courses */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Merchant Navy Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Deck Officer Programs</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    <strong>B.Sc. Nautical Science:</strong> 3-year degree program leading to certification as a Deck Officer. Covers navigation, ship handling, cargo operations, and maritime law. Graduates complete sea time to progress through ranks: Third Officer → Second Officer → Chief Officer → Master (Captain).
                  </p>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed mt-2">
                    Entry requirements typically include completion of Class 12 with Physics, Chemistry, and Mathematics, age 17-25, and passing physical fitness tests including eyesight standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marine Engineering Programs</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    <strong>B.E./B.Tech Marine Engineering:</strong> 4-year degree program for ship engine room officers. Covers marine engines, auxiliary machinery, electrical systems, and ship operations. Career progression: Fourth Engineer → Third Engineer → Second Engineer → Chief Engineer.
                  </p>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed mt-2">
                    Also available: <strong>Graduate Marine Engineering (GME)</strong> - 1-year program for engineering graduates; <strong>Diploma in Marine Engineering (DME)</strong> - post-10th diploma program.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Ratings & Support Staff Training</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    <strong>GP Rating Course:</strong> 6-month program for entry-level positions. Covers basic seamanship, safety, and shipboard operations.
                  </p>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed mt-2">
                    Specialized courses available for Able Seaman, Engine Room Rating, Saloon Rating (for cruise ships), and STCW safety courses (Basic Safety Training, Advanced Fire Fighting, Medical First Aid).
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Shore-based Education */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Shore-based Maritime Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Port & Shipping Management</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    MBA/PGDM programs in Shipping & Logistics prepare professionals for managerial roles in shipping companies, port operators, freight forwarders, and logistics firms. Curriculum covers maritime economics, port operations, supply chain management, and shipping law.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Naval Architecture & Ocean Engineering</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    B.Tech/M.Tech programs in Naval Architecture focus on ship design, structural analysis, hydrodynamics, and marine systems. Graduates work in shipyards, classification societies, consultancies, and research organizations. IIT Madras and IIT Kharagpur offer premier programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Maritime Law</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    LLM programs in Maritime Law cover admiralty law, shipping regulations, marine insurance, and international conventions. Maritime lawyers work in law firms, shipping companies, insurance companies, and international organizations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Marine Biology & Oceanography</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    B.Sc./M.Sc. programs in Marine Biology, Oceanography, and Coastal & Marine Science. Career opportunities in research institutions, environmental consulting, fisheries management, and ocean conservation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Maritime Universities */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Premier Maritime Institutions in India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Indian Maritime University (IMU)</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    Central university with campuses across India offering undergraduate, postgraduate, and doctoral programs in maritime disciplines. Main campus in Chennai with regional campuses in Mumbai, Kolkata, Kochi, and Visakhapatnam.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">BITS Pilani - Goa Campus</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    Offers B.E. in Mechanical Engineering with specialization in Maritime Engineering, combining core engineering with maritime technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tolani Maritime Institute (TMI), Pune</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    Autonomous institute offering B.Sc. Nautical Science, B.Tech Marine Engineering, and MBA Maritime Management. Known for excellent infrastructure and training facilities.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AMET University, Chennai</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    Private university offering comprehensive maritime programs including merchant navy training, marine engineering, and shipping management.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Samundra Institute of Maritime Studies (SIMS)</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed">
                    Premium training institute in Mumbai and Lonavala offering pre-sea and post-sea training programs. Affiliated with MAERSK Training.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Career Opportunities */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Maritime Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-[#cbd5e1] leading-relaxed">
                  The maritime sector offers diverse career paths:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Sea-going Careers</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#cbd5e1]">
                      <li>Deck Officers & Captains</li>
                      <li>Marine Engineers</li>
                      <li>Electro-Technical Officers</li>
                      <li>Ship Crew & Ratings</li>
                      <li>Cruise Ship Personnel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Shore-based Careers</h4>
                    <ul className="list-disc pl-5 space-y-1 text-[#cbd5e1]">
                      <li>Shipping Management</li>
                      <li>Port Operations & Management</li>
                      <li>Freight Forwarding & Logistics</li>
                      <li>Ship Brokering & Chartering</li>
                      <li>Marine Insurance & P&I Clubs</li>
                      <li>Classification Societies (Surveyors)</li>
                      <li>Shipyard Management</li>
                      <li>Maritime Consultancy</li>
                      <li>Marine Research & Academia</li>
                      <li>Maritime Administration & Regulators</li>
                    </ul>
                  </div>
                </div>
                <p className="text-lg text-[#cbd5e1] leading-relaxed mt-4">
                  Maritime careers offer competitive compensation, global exposure, tax-free income for seafarers, and opportunities for rapid career advancement. The industry actively promotes women in maritime and provides equal opportunities.
                </p>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

