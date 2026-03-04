'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { TrendingUp, ArrowLeft } from 'lucide-react'

export default function TradeInfobankPage() {
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
              <span className="text-white">Trade</span>
            </nav>
            <div className="flex items-center gap-4 mb-6">
              <Link href="/knowledge-centre/infobank">
                <ArrowLeft className="w-6 h-6 text-blue-200 hover:text-white transition-colors" />
              </Link>
              <TrendingUp className="w-8 h-8 text-blue-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">International Trade & Maritime Commerce</h1>
            <p className="text-xl text-blue-100">Understanding global trade patterns, regulations, and maritime commerce</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Global Trade Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Global Trade Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  International trade is the exchange of goods and services across borders, and maritime transport is its backbone. Approximately 90% of world trade by volume and over 70% by value is carried by sea, making shipping the most important mode for international commerce.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Global merchandise trade exceeds $20 trillion annually, with major trade routes connecting manufacturing centers in Asia with consumer markets in Europe and North America. The growth of containerization has revolutionized trade by enabling efficient, standardized, and cost-effective cargo transportation.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Key trade commodities include crude oil and petroleum products, iron ore, coal, grain, containerized manufactured goods, chemicals, and LNG. Emerging economies in Asia, particularly China and India, have become major drivers of global trade growth.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* India&apos;s Trade */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">India&apos;s International Trade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  India is one of the world&apos;s fastest-growing major economies with total merchandise trade (exports + imports) exceeding $1 trillion. The country has transformed from an import-substitution model to an export-oriented economy since economic liberalization in 1991.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Major exports include petroleum products, gems & jewelry, pharmaceuticals, engineering goods, textiles, chemicals, and agricultural products. Key imports comprise crude oil, gold, electronics, machinery, coal, and chemicals.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  India&apos;s major trading partners include the USA, China, UAE, Saudi Arabia, Hong Kong, Singapore, and EU countries. The government has been negotiating free trade agreements (FTAs) and comprehensive economic partnership agreements (CEPAs) to boost trade.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Over 95% of India&apos;s international trade by volume moves through seaports, highlighting the critical importance of efficient port infrastructure and maritime connectivity.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Trade Documentation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Trade Documentation & Procedures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  International trade involves complex documentation requirements:
                </p>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Bill of Lading (B/L)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A crucial document serving as a receipt for cargo, evidence of the contract of carriage, and document of title. Can be negotiable or non-negotiable, clean or claused. Electronic bills of lading (eBL) are gaining adoption.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Invoice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Issued by the seller detailing the goods sold, quantities, prices, and terms of sale. Essential for customs clearance and payment processing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Certificate of Origin (CoO)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Certifies the country where goods were manufactured, required for preferential tariffs under trade agreements and compliance with import regulations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Packing List</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Details the contents of each package, weights, dimensions, and marks. Essential for customs inspection and cargo handling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Insurance Certificate</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Provides evidence of marine cargo insurance coverage. Terms often follow Institute Cargo Clauses (ICC) - A, B, or C coverage levels.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Incoterms */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Incoterms (International Commercial Terms)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Incoterms are standardized trade terms published by the International Chamber of Commerce (ICC) defining responsibilities of buyers and sellers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
                  <li><strong>EXW (Ex Works)</strong>: Seller makes goods available at their premises; buyer bears all costs and risks from that point</li>
                  <li><strong>FOB (Free On Board)</strong>: Seller delivers goods on board the vessel; risk transfers when goods cross ship&apos;s rail</li>
                  <li><strong>CFR (Cost and Freight)</strong>: Seller pays freight to destination port; risk transfers on loading</li>
                  <li><strong>CIF (Cost, Insurance, and Freight)</strong>: Like CFR but seller also provides insurance</li>
                  <li><strong>FCA (Free Carrier)</strong>: Seller delivers goods to carrier nominated by buyer</li>
                  <li><strong>CPT (Carriage Paid To)</strong>: Seller pays freight to named destination</li>
                  <li><strong>CIP (Carriage and Insurance Paid To)</strong>: Like CPT with insurance included</li>
                  <li><strong>DAP (Delivered At Place)</strong>: Seller delivers goods ready for unloading at named destination</li>
                  <li><strong>DPU (Delivered at Place Unloaded)</strong>: Seller delivers and unloads goods at destination</li>
                  <li><strong>DDP (Delivered Duty Paid)</strong>: Seller bears all costs and risks to deliver goods cleared for import</li>
                </ul>
              </CardContent>
            </Card>
          </motion.section>

          {/* Trade Regulations */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Trade Regulations & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Customs Procedures</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Customs clearance involves declaration of goods, assessment of duties and taxes, and inspection. India&apos;s customs procedures are governed by the Customs Act, 1962. Digital initiatives like e-Sanchit and SWIFT (Single Window Interface for Facilitating Trade) have streamlined processes.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Trade Agreements</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    India has comprehensive trade agreements with ASEAN, South Korea, Japan, UAE, and others, providing preferential tariffs. Exporters can avail benefits by obtaining relevant certificates of origin.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Incentives</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Government schemes like RoDTEP (Remission of Duties and Taxes on Exported Products), Export Promotion Capital Goods (EPCG), and Special Economic Zones (SEZ) provide incentives to exporters.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance & Regulations</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Exporters and importers must comply with DGFT (Directorate General of Foreign Trade) regulations, Foreign Trade Policy provisions, export/import licenses, and product-specific regulations (food safety, phytosanitary, technical standards).
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}

