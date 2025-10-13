'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronDown, ChevronUp, Anchor, Ship, Building, Container } from 'lucide-react'
import { useState } from 'react'

const projectCategories = [
  {
    id: 'ports-terminals',
    title: 'Ports & Terminals',
    icon: Anchor,
    color: 'from-blue-500 to-cyan-500',
    projects: [
      'Adani Group : Traffic study for new Port facility at Dahej, Gujrat',
      'Gammon India : Traffic study for Kandla container terminal',
      'JNPT : Container Traffic Study',
      'Port Klang : Study of Container Traffic for MBPT',
      'Hutchison Port : Traffic Study for Mumbai',
      'World Bank Ltd. : India Port Strategy - Demand & Capacity Assessment Study',
      'Adani Group : Deep iron-ore berth Traffic Study for Paradip Port',
      'Adani Group : Origin Destination Study of containers for immediate hinterland of Dahej Port & impact of the port on the extent and pattern of industrialization in the hinterland',
      'Adani Group : Ennore Port- Facilities & Traffic study',
      'Adani Group : Traffic potential of wooden Logs & Iron & steel scrap at Mundra Port',
      'CSX World Terminal : Independent traffic study for CSX world terminal for Mumbai/ JNPT',
      'CSX World Terminal : Traffic study for ICTT for Vallarpadam',
      'Gangavaram Port Ltd. : Traffic Forecast at Gangavaram Port till 2037',
      'GESCO : Forecasting crude oil & petro product demand in India till 2005',
      'ICICI : Traffic Study for Dahej Port',
      'IDFC : Traffic Assessment of Vishakha Container Terminal',
      'IDFC Asset Management : Dry Bulk/ Container Traffic Study at Gujrat Pipavav Port Limited (GPPL)',
      'Adani Group : Traffic study for new Port facility at Dahej, Gujrat (Update)',
      'Gammon India : Study of Port Induced Road Traffic Study',
      'Gammon India : Preparing plan to bid Vizinjham port',
      'Hazira Port : Traffic & Tariff Study 2006 - for Hazira Port',
      'Integrax Berhad : Traffic study for Bulk Cargo at Aware Port',
      'Adsteam : Financing Options for Bidding for Ennore Project',
      'Amma Lines : Financial package for Gangavaram Project',
      'JM Morgan Stanley : Retainer Consultant to advise on Mundra Port Project',
      'Research Projects : India Port Report',
      'Global Services (Jackie Matai) : Demand supply analysis of Lighterage industry in Mumbai harbour',
      'Kirloskar Consultant : Survey of socio economic impact of Mormugao Port in Goa',
      'ILFS : Feasibility of Vizinjam Port Report',
      'Shell Hazira : Feasibility study of container terminal at Hazira Port for HPPL',
      'APL Limited : Independent assessment of the feasibility of ACTL',
      'Forbes Patvok : Fesibility study for setting up a CFS near JNPT',
      'ICICI : IBA Draft Report for ACTL',
      'James Mackintosh : Due diligence Report on CWC(NS)L CFS facility',
      'JNPT : Port channel - DPR for deepening and widening of Main harbour and JN port channel :traffic & shipping forecast',
      'JNPT : Port channel - DPR for deepening and widening of Main harbour and JN port :Financial Study',
      'Sarat Chatterjee : Feasibility study for setting up a port equipment system for handling of bulk commodities at one berth in outer harbour of Vishakhapatnam Port',
      'TM International : Techno Commercial viability for construction of clean cargo Berths at Paradip',
      'BHP Billition : Gopalpur port project - Technical input for Bid Preparation',
      'BHP Billition : Gopalpur port project - Traffic Study',
      'CMA CGM : Tonnage tax',
      'Dhamra Port Company Ltd. : Dhamra Port-Traffic & Tariff Study',
      'Dhamra Port Company Ltd. : Dry Bulk / Break Bulk - Traffic & Tariff Study',
      'Dharamsee Morarjee : DPR for Navlakhi Port',
      'Hindalco Industries : Logistics & Port layout study',
      'Mahagenco : Consultancy Towards Techo-Economic Feasibility study - Ratnagiri Port',
      'Mahagenco : Consultancy Towards Techo-Economic Feasibility study - Ratnagiri Port',
      'TM International : Techno Economic Feasibility Report - Redi Maharashtra',
      'TM International : Techno Economic Feasibility Report - Okha',
      'GMB : Engineering Pre Feasibility Study for Mahuva Port',
      'Mahagenco : TEFR for Dhopawe Port',
      'Amma Lines : Information memorandum for Investors for Rewas Port',
      'JNPT : Preparing presentation for Shipping Ministry',
      'Adani Group : Development of Mundra Port Website',
      'TM International : Feasibility Report from Port Project in Bangladesh'
    ]
  },
  {
    id: 'shipping',
    title: 'Shipping',
    icon: Ship,
    color: 'from-purple-500 to-pink-500',
    projects: [
      'GESCO : Crude oil shipping in India- analysing opportunity & risks',
      'James Mackintosh : Commodity traffic study between North-West ports and Gulf countries',
      'Sarat Chatterjee : Traffic study',
      'Transworld Group : Indian subcontinent trade analysis for Crescent Shipping (23 Dec 2003)',
      'Transworld Group : Crude tankers report (update)',
      'Natraj Logistiscs : Traffic Study for Ro-Ro Service Between Bhavnagar & Dahej',
      'Parekh Marine Agencies Pvt. Ltd. : Study on Tanker Shipping',
      'Adsteam : Integration for NTA fleet & Indian manning - A Strategy Report',
      'Research projects : Perception of shipping stocks by mutual funds in India',
      'Research projects : Indian Shipping Industry Report-2000',
      'GESCO : Financial analysis for 50 years (OLD)',
      'HDFC : Advise on Shipping stocks',
      'GESCO : Market Survey for identifying business opportunities in 16 countries- for offshore division',
      'ITTS (R. Kotak) / Altrans Logistics Pvt. Ltd. : Opportunity in Indian Container Market-presented by Altrans Logistics Private Limited',
      'Shell Marine (Project Blueburn) : Bunkering of Marine fuels and lubricants in India- Strategic Market Review Report',
      'Transworld Group : Market study for requirements of tankers in India',
      'BLA Industries : Shipping Analysis',
      'Chellaram Shipping : Market study for shipping opportunity in Bulk trade in India',
      'Chellaram Shipping : Business opportunity study for Ro-Ro in India',
      'GESCO : Business Opportunity for Offshore Sector',
      'Parekh Marine Agencies Pvt. Ltd. : India Liquid Chemical Tanker and Product Tanker Trade Report',
      'Wartsila : India LNG Prospects',
      'Wartsila : LNG Note (Presentation)',
      'IT : Shipping Personnel Information Management System',
      'Adsteam : Financing of Tugs',
      'Dharti Dredging : Proposal for finance for acquisition for hopper barges',
      'Alligator Shipping : Project feasibility for passenger / cruise vessel Ship service between Bombay & Gulf',
      'GESCO : Carrying out entry strategy into Tanker shipping in India till 2005',
      'Safa Marine : Feasibility study for a chemical / product tanker',
      'Adani Group : Coastal Shipping',
      'Frank Shipping : Proposal for high speed catamaran services for Tamil Nadu Maritime Board',
      'Frank Shipping : Proposal for high speed catamaran services for JNPT',
      'Sarat Chatterjee : Shipping Report (Shift in import of cocking coal from Handymax to Capesize/ Panamax)',
      'HPCL : Advisory Service for Preparing a Business plan on Shipping Sector',
      'Transworld Group : India LNG Prospects for MISC/Crescent Shipping',
      'Amma Lines : Feasibility report submmited to IDBI for acquisition of coal, carriers, hopper barges, loaders & tippers',
      'Videocon Group : Divestment of SCI- Shipping Consultancy',
      'Research projects : Shipping Invesment Report',
      'Maharashtra Maritime Board : Report for Residual policy',
      'Sirius Shipping (Teledata) : Website updation',
      'James Mackintosh : Study on identification of new business opportunity in shipping',
      'Sea Consortium : Business Oppurtunity Assessment for a coastal container feeder service between Kandla and Mumbai(Kandla-Pipavav-JNPT-Kandla)',
      'Transworld Group : Developing a detail report on possible business study in the dry bulk sector in India for MISC',
      'Aban Loyds : Privatisation of SCI - A strategic opportunity for Aban-Qatar',
      'Chellaram Shipping : Business opportunity Study- Phase 1',
      'Elcome Surveys Pvt. Ltd. : Business Consultancy Report for restructuring the group (Elcom Surveys private limited)',
      'Transworld Group : "Trade & commodity analysis & a business plan for proposed national shipping line in the Sultanate of Oman"'
    ]
  },
  {
    id: 'shipbuilding',
    title: 'Shipbuilding',
    icon: Building,
    color: 'from-green-500 to-emerald-500',
    projects: [
      'State Bank of India : Financial appraisal of Nigel Shipyard (West Coast Shipyard)',
      'Bharti Shipyard : Shipyard Industry Report',
      'Wartsila : Comparative Study for Ship Repair Yard',
      'Parekh Marine Agencies Pvt. Ltd. : Market Study for setting up Shipbuilding Facilities',
      'Research Projects : India Shipbuilding Report - 2005',
      'Wartsila : Preliminary information report on Mumbai Port',
      'Waterways Shipyard : Market analysis for setting up a Shiprepair facility',
      'Adani Group : Detailed Project Report on Ship building and Ship repair',
      'Jessop : Pre Feasibility Study for Shipyard',
      'Adani Group : Market feasibility for setting up a new Ship Repair facility at Mundra',
      'BHP Marine : Feasibility study for setting up a shiprepair unit at Dharamtar',
      'Wartsila : Market feasibility for Ship Repair business in India',
      'Vinayaga Marine Petro : Feasibility study for development of Shipyard facility',
      'ILFS : Cost Due Diligence - Pipavav Shipyard',
      'State Bank of India : Shipbuilding of barges for Goa\'s Iron ore Trade',
      'Adani Group : Entry strategy for setting up a shipbuilding yard at Mundra port',
      'Adani Group : Update of Market feasibility for setting up a new Ship Repair facility at Mundra',
      'Shahi Shipping : Proposal for setting up of a shipbreaking project at Alang',
      'Alang Marine Limited : Market Assessment Study (Augmentation of Ship Repair facilities at Gogha Shipyard',
      'Amma Lines : Project Report of Ship Repair and Ship building facility at Khopta (Uran)',
      'Maharashtra Maritime Board : Feasibility Study for setting up Marine Park at Thane Creek',
      'Wartsila : Investment assessment report on Mumbai Port',
      'Parekh Marine Agencies Pvt. Ltd. : Entry Strategy Study for Indian Shipbuilding Industy',
      'Bharti Shipyard : Website Design and Development',
      'Alang Marine Limited : Information memorandum for Strategic Investment on Alang Marine Ltd.',
      'ICICI Venture : Due Dilligence for Tebma Shipyard Ltd.',
      'ISBA : Ship Repair Report',
      'Bharti Shipyard : NSDRC Revival Report',
      'Black Stone : Due Dilligence for Pipavav Shipyard'
    ]
  },
  {
    id: 'container-logistics',
    title: 'Container Warehousing and Logistics',
    icon: Container,
    color: 'from-orange-500 to-red-500',
    projects: [
      'Adani Group : National Container Database',
      'CSX World Terminal : National Container Database',
      'IDFC Asset Management : National Container Database',
      'JNPT : National Container Database',
      'Maersk : National Container Database',
      'Mitsui OSK : National Container Database',
      'Sea Consortium : Container traffic forecast for Mumbai region till 2010 - 11',
      'Sea Consortium : National Container Database',
      'Transworld Group : National Container Database',
      'P & O : National Container Database',
      'Gammon India : Traffic study for Chennai Container Terminal',
      'Mitsui OSK : Economic Review (05 Jan, 2004), Liner Study and Logistics Study',
      'Transworld Group : Comparative analysis of logistics/supply chain management portals',
      'ICICI : Valuation of Container Report',
      'Transworld Group : Logistics market analysis for the proposed joint venture between Transworld & MISC',
      'CTS : Opportunities in Indian Container Market',
      'Forbes Sea Consortium : Business Opportunity Assesment for a coastal container Feeder Services between Kandla-Pipavav - JNPT - Kandla (Presentation)',
      'ILFS : India Container Report',
      'Katra Wlihelson : Market & Port Logistics Study on finished vehicles & farm equipment',
      'Katra Wlihelson : Automotive Logistic Study',
      'PSA : India logistics Study',
      'Transworld Group : For setting up a joint venturre for providing nationwide integrated logistics services in India',
      'Transworld Group : Business plan for proposed joint venture to provide logistics services',
      'Aban Loyds : Feasibility study of CFS near Chennai',
      'Allcargo : Feasibility study - New CFS Study at Mundra',
      'Casby Logistics : Techno-Economic Feasibility report for Container Freight Station at JNPT',
      'P&O Port Ltd. (NSICT ) : Market Study for Setting up ICD in Gurgaon',
      'Tata Power : Location analysis to setup jetty and work out integrated logistics cost for coal handling',
      'Adani Group : Containers Manufacturing Plant at Mundra SEZ',
      'Transworld Group : Feasibility study for Coastal domestic Container service',
      'Allcargo : CFS Study - Feasibility of Raoad-fed ICD',
      'Bengal Tiger Line (India) Pvt. Ltd. : Feasibility Study-CFS between Chennai & Ennore',
      'Gateway Terminal : Gateway CFS Project',
      'Gwalior Tanks : CFS Near JNPT',
      'Neelkanth Group (Peninsular) : Market Study for Setting up CFS/ICD at Kandla, JNPt & Delhi',
      'Premier Liquor (India) Ltd. (MR. Deewan) : Market Study for setting up a CFS near JNPT',
      'Chakiat Agencies : Preparation of Presentation on Containers',
      'GESCO : Partnership for providing marine logistics services( for Reliance Group)',
      'Reliance Infrastructure P Ltd. : Business Plan for Container Train Business'
    ]
  },
  {
    id: 'other-infrastructure',
    title: 'Other Infrastructure',
    icon: Building,
    color: 'from-indigo-500 to-purple-500',
    projects: [
      'AB Marine : Project Report for Cyber Marine Technologies Pvt. Ltd for borrowing Rs. 27 Lacs',
      'Sirius Shipping (Teledata) : Bank Loan',
      'Kothari overseas : Financial appraisal of Kothari overseas Pvt Ltd for a term loan facility from SBI',
      'Maldar Dredgers : Financial proposal for acquisition of a new built Cutter Section Dredger',
      'Shahi Shipping : Syndication of loan of Rs. 2279 Lacs to State Bank of India, Bombay (Part I & II)',
      'Maldar Catamarans Limited : Information memorandum for private equity investors & financial institutions to participate in the funding of Maldar Catamarans Limited',
      'Transworld Group : Strategy formulation for developing a B2B information and transaction portal for logistics and container shipping industry',
      'Iffco Tokio : Marine Hull & Machinery, P & I Insurance Market study in India',
      'GSMS Maritime Training Institute (Warsash) : Assessing the potential market for post-graduate level maritime education in India',
      'Aban Loyds : Dredging Proposal',
      'Casby Logistics : Paradip Iron Ore Trade Research',
      'Thompson Clark : Data Collection for Iron and steel exports',
      'TM International : Bid Tender Preparation',
      'Great Lakes : Indian Dredging Market Information report',
      'Alcock Ashdown : Financial Syndication',
      'Dhamra Port Company Ltd. : Engagement for carrying for Feasibility Study for Multi-product SEZ in Dhamra',
      'ILFS : Techno-Economic Feasibility Study for Multimodal Transport of Coal for NTPC. (Farrakka)',
      'Maharashtra Maritime Board : Design of Tariff policy',
      'Dredging Coorporation of India : Competitive Policy Framework for the Indian Dredging Industry',
      'AB Marine : Presentation on Private Placement of equity of Marine Technology Limited',
      'MISC : Disinvestment of SCI - Shipping Consultancy',
      'Maharashtra Maritime Board : Design of Admin Report 2004-2005',
      'Maharashtra Maritime Board : Design of Admin Report 2002-2003',
      'Maharashtra Maritime Board : Design of Admin Report 2003-2004',
      'United Shipper : Presentation module enhancing corporate valuation(transition to United ports limited)',
      'GESCO : Setting up the corporate website',
      'INSA : Website Design and Development',
      'Tolani Group : Development of the group website',
      'SCI : Biography of C.P.Srivastava',
      'Seatrans : Divestment of D\'Cruz family stake in Seatrans Group',
      'Dredging Coorporation of India : Identifying business opportunities in Malaysia',
      'Modest Shipping (Sadhna Shipping) : Entry Strategy of Sadhana technical Works into Dredging Industry',
      'The Royal Norwegian Embassy : Commercial Opportunities for Norwegian Marine equipment suppliers',
      'Wartsila : Dredging Opportunities in India',
      'JSW Steel : Demand and Traffic Analysis with SEZ Perspective',
      'Maersk : Monthly Reserch',
      'Maharashtra Maritime Board : Design of Admin Report',
      'Sara Group and Gopalpur Port Limited : Business Plan with Traffic and Financial Study'
    ]
  }
]

export default function ProjectsPage() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['ports-terminals'])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/about" className="hover:text-white">About Us</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Projects</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
            <p className="text-xl text-blue-100">Our extensive portfolio of maritime consulting projects</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {projectCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(category.id)
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{category.title}</CardTitle>
                          <p className="text-gray-600">{category.projects.length} projects</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-gray-100"
                      >
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                    <CardContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-3"
                      >
                        {category.projects.map((project, projectIndex) => (
                          <motion.div
                            key={projectIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: projectIndex * 0.02 }}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-gray-700 leading-relaxed">{project}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

