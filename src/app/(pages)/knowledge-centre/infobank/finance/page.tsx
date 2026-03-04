'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { DollarSign, ArrowLeft } from 'lucide-react'

export default function FinanceInfobankPage() {
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
              <span className="text-white">Finance</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <DollarSign className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Maritime Finance</h1>
            <p className="text-xl text-blue-100">Ship financing, trade finance, and maritime banking solutions</p>
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
                <CardTitle className="text-3xl text-gray-900">Maritime Finance Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime finance is a specialized sector dealing with funding for ships, ports, offshore structures, and maritime infrastructure. It is one of the most capital-intensive industries, with a single large vessel costing hundreds of millions of dollars.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The sector encompasses ship acquisition financing, working capital for shipping operations, trade finance for cargo transactions, port development funding, and project finance for maritime infrastructure.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime finance involves unique risks including vessel value fluctuation, freight rate volatility, counterparty risks, and regulatory changes. Specialized financial institutions and banks with maritime expertise provide these services globally.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Ship Financing */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Ship Financing Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bank Loans</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Traditional term loans with the vessel as collateral (mortgage). Typically covers 60-80% of vessel value with repayment periods of 5-15 years. Banks conduct detailed due diligence on the vessel, borrower, and market conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lease Financing</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Financial lease or operating lease structures where a lessor purchases the vessel and leases it to the operator. Provides off-balance-sheet financing and tax advantages. Popular for new vessels and fleet expansion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Bond Markets</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Large shipping companies and port operators raise funds through corporate bonds or securitized bonds backed by vessel portfolios. Provides access to capital markets and diversifies funding sources.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Equity & IPOs</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Private equity funds and public listings provide equity capital for fleet acquisition and expansion. Several shipping companies are listed on stock exchanges in Norway, Greece, Singapore, and Hong Kong.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Credit Agencies (ECAs)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Government-backed agencies in shipbuilding nations provide financing or guarantees for vessel construction. ECAs like Korea Eximbank, China Exim Bank, and European ECAs support national shipbuilding industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Trade Finance */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Trade Finance in Shipping</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Trade finance facilitates international cargo movements by providing working capital and payment guarantees:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>Letters of Credit (LC)</strong>: Bank guarantee ensuring payment upon presentation of compliant documents, reducing counterparty risk for exporters and importers</li>
                  <li><strong>Documentary Collections</strong>: Banks act as intermediaries for payment collection against shipping documents</li>
                  <li><strong>Bank Guarantees</strong>: Performance guarantees, payment guarantees, and bid bonds for maritime contracts</li>
                  <li><strong>Cargo Finance</strong>: Pre-shipment and post-shipment financing for commodity traders</li>
                  <li><strong>Receivables Financing</strong>: Factoring and invoice discounting for shipping companies</li>
                  <li><strong>Structured Trade Finance</strong>: Complex financing for large commodity trades with warehouse receipts and inventory financing</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Indian Maritime Finance */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Maritime Finance in India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Indian banks and financial institutions have traditionally been cautious in maritime lending due to volatility and sector-specific risks. However, several initiatives have been launched to promote shipping finance:
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Reserve Bank of India (RBI) has provided guidelines for ship financing, and banks like SBI, PNB, and Bank of India have specialized shipping finance divisions. EXIM Bank of India provides export credit for shipbuilding and maritime equipment.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The government&apos;s Shipbuilding Financial Assistance Policy provides subsidies to bridge the cost gap between Indian and foreign shipyards, making financing more attractive for domestically-built vessels.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime India Vision 2030 aims to increase credit availability for shipping and port sectors through policy reforms, credit guarantee schemes, and fostering partnerships between banks and shipping companies.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Financial Analysis */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Risk Assessment & Due Diligence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Maritime finance requires comprehensive risk assessment:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>Vessel Valuation</strong>: Independent appraisals considering age, condition, specifications, and market values</li>
                  <li><strong>Market Analysis</strong>: Freight rate trends, supply-demand dynamics, and sector outlook</li>
                  <li><strong>Credit Assessment</strong>: Borrower&apos;s financial strength, management experience, and track record</li>
                  <li><strong>Charter Analysis</strong>: Review of time charter agreements, counterparty credit quality, and cash flow projections</li>
                  <li><strong>Technical Due Diligence</strong>: Vessel inspection, classification society certificates, and maintenance records</li>
                  <li><strong>Legal Review</strong>: Flag state regulations, maritime liens, ownership verification, and documentation</li>
                  <li><strong>Insurance Coverage</strong>: Hull & machinery insurance, P&I (Protection & Indemnity) coverage, and war risk insurance</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

