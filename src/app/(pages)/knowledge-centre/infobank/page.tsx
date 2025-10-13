'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { ChevronDown, ChevronUp, Anchor, Wrench, Ship, Building, Users, ArrowUp } from 'lucide-react'
import { useState } from 'react'

const infobankSections = [
  {
    id: 'seaports',
    title: 'Seaports',
    icon: Anchor,
    color: 'from-blue-500 to-cyan-500',
    subsections: [
      {
        id: 'global-scenario',
        title: 'Global Scenario',
        content: `With the growing move for privatisation of the seaports all over the world, private sector participation in operations and infrastructure activities of seaports has increased substantially over the last few years. This has resulted into a radical change in the organizational models of ports, converting from Service port model to Landlord port model, where port authority retains the port infrastructure and fulfills its regulatory functions, while port services are provided by private operators that own the assets conforming to port superstructure and equipments required for service provision.

Major technological changes viz. containerisation of cargo and development of larger and deeper specialised vessels have made revolution in seaport sector across the world leading to fast renovation of existing facilities.

In order to attend to the growing demand for modernisation, seaports industry across the world has felt a strong need for capital investment and private participation appears to be a better alternative to respond to these challenges.`
      },
      {
        id: 'indian-scenario',
        title: 'Indian Scenario',
        content: `The growth in the cargo handled at Indian ports has increased from a level of 19.38 million tons (major ports) in 1950-51 to around 518 million tons (major and minor ports) by FY2005. The share of traffic at major and minor ports stood around 383.7 million tons and 134.7 million tons, respectively during FY2005.

Major ports are bodies formed on the basis of Major Port Trusts Act, 1963 and they provide services to an exclusive hinterland. On the other hand minor ports, under the control of State Maritime Boards, were minor in their role until a few years back and never competed either with the major ports or amongst themselves. However, things have changed in recent times with the opening up of the domestic port sector to private operators. Entrusting private operators to manage certain terminals within the ports through concession agreements has led to the gradual privatisation of Indian major ports.

With intense competition, the role of Indian ports is changing from a Service port model, port owns the infrastructure and superstructure, and also provides services to a Landlord port model. Growing demand for handling of large size vessels through out the world has also made significant impact on the domestic port sector by making it one of the major parameters of competition between existing ports and new ports. While Mundra port in Gujarat has already been commissioned having deep draft to berth large vessels, all the new port projects in the pipeline viz. Dhamra, Orissa; Gangavaram, Andhra Pradesh; Karwar, Karnataka would be deep-water ports.

Owing to greater awareness of increased role of the market forces, steps have been taken to provide greater managerial and operational flexibility to the major ports thus leading to corporatisation.of ports Government has also moved forward with the plan to corporatise all the major ports gradually thereby leading to increased efficiency, financial and operational autonomy and subsequent privatisation. Ennore Port has already been commissioned of at the India's first corporatised port and attempts are on to corporatise other major ports as well.

Keeping with the global trend, nearly Rs. 150 billion investments have been made till date, much of it in the last few years, to modernise facilities in existing ports and build new facilities. Gradual opening up of the Indian economy coupled with the regulatory changes in port sector and a considerable gap between demand and supply of port facilities have encouraged and facilitated such massive investments in this sector.

Indian port sector has shown substantial improvements in the last one decade by way of port facilities and cargo handling. Trade volume of the country has been growing at an annualised rate of 7% over the past decade and cargo traffic at Indian ports is expected to reach around 537 million tons by 2006-07. To meet this huge demand, massive investment is expected for developing new port facilities through private sector participation with a gradual shift to 'Landlord' type of functioning.`
      }
    ]
  },
  {
    id: 'dredging',
    title: 'Dredging',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    subsections: [
      {
        id: 'dredging-overview',
        title: 'Dredging Overview',
        content: `Dredging involves removal of silt or sand from ocean bed or riverbed with the help of barges at or near the port in order to increase the depth of water or to restore the existing depth.

Dredging enables access to a port or a jetty by vessels with deeper draught or allows a vessel to carry a greater weight of cargo. Suction, bucket and grab are the three methods for dredging applied universally. On the basis of activity, dredging service is classified into two distinct types viz. 'maintenance dredging', which involves the maintenance of water depth in the existing navigational channels of ports and 'capital dredging', which is required for developing new port projects.

The size of the Indian dredging industry is estimated to be around Rs 6.0 billion of which Dredging Corporation of India (DCI) is the major player having a market share of nearly 50 per cent. Constant effort by the Government for port sector development has boosted the dredging industry thereby leading to increased demand for capital and maintenance dredging.

Liberalization of the Indian economy has opened up the door to foreign majors leading to increased competition. On the basis of size of operations, the domestic dredging industry is broadly segmented into two sections:

High volume segment- consisting of large players like DCI and other foreign majors. The segment caters to the requirements of existing major ports and upcoming ports and carries out dredging jobs of more than 0.5 million cubic meters. Nearly all the global dredging majors like HAM, Dredging International, Boskalis International, Van Oord ACZ have their active presence in this segment.

Mid volume segment- consisting of medium sized Indian dredging companies like Dharti Dredging and Construction Company, ABC, Maldar Dredgers catering to the dredging requirement of state maritime boards, Inland Waterways Authority, private ports and captive jetty operators with dredging volume ranging from 0.05 million to 0.5 million cubic metres.

It has been observed that for both high and mid volume segments, capital dredging jobs are increasingly being given to private dredging companies, while port authorities and other government agencies are employing DCI mostly for maintenance dredging. Foreign majors, equipped with better infrastructure, manpower and having low cost of operations are increasingly taking the lead role in new dredging activities by reducing the share of DCI.

With more emphasis being given on Inland Waterways, Indian dredging companies active in the mid volume segment can look forward to better opportunities from this sector, banking on their experience. Development activities taken up by existing as well as upcoming ports to enhance channel depth for accommodating large size vessels are likely to bring considerable opportunities and fierce competition in the Indian dredging sector`
      }
    ]
  },
  {
    id: 'lighterage',
    title: 'Lighterage',
    icon: Ship,
    color: 'from-orange-500 to-red-500',
    subsections: [
      {
        id: 'lighterage-overview',
        title: 'Lighterage Overview',
        content: `Lighterage is the combination of several independent activities using small sized barges or lighters for the purpose of carrying cargo discharged from an ocean going vessel in order to lighten or reduce its weight. On the other hand 'Barging', an integral part of the macro process of lighterage activities, involves carrying of cargo consignment in small vessels, where the intention may not be to lighten the mother vessel but to transport cargo from one place to another (e.g. silt barging) or carry potable water to the mother vessel.

Though lighterage and barging are quite different activities, both have been considered under the port sector for simplification.

Lighterage and barging industry in India confined mainly in four regions viz. Gujarat, Goa, Mumbai Harbor and Calcutta. The industry is highly fragmented with the presence of a handful of service providers. The total number of lighterage vessels or barges in India could be around 350-400, whereas the total turnover of lighterage and barging industry in India is assumed to be around Rs. 2.5 billion.

Modernization of ports and increased operation cost has emerged as the most serious threat to Indian lighterage and barging industry. Different regulations like The Coasting Vessels Act, 1838 applicable in Maharashtra and The Inland Vessels Act, 1917 pertinent to the states of Goa and Gujarat, framed long back failed to cater to the requirements of the industry. Moreover, lack of co-ordination and co-operation amongst the active players and the unorganised nature of the industry have added more difficulties towards its combat for survival.`
      },
      {
        id: 'gujarat',
        title: 'Gujarat',
        content: `A large number of minor and intermediate ports active in Gujarat like Navlakhi, Veraval, Bedi and others are dependent upon barges for loading and unloading of cargo and are referred to as lighterage ports. The industry in Gujarat is highly concentrated with few major players dominating the sector.

Gujarat presently has around 8 to 10 major players like United Shippers, Arvind V Joshi & Co, B D Vithalani Shipping Services, H K Dave, Halar Maritime, Shantilal & Company etc with around 150 vessels, in the range of around 200 - 1000 dwt, operating in and around the state.

Despite the presence of a number of active lighterage ports, prospects of the lighterage industry in Gujarat, is difficult to predict mostly due to the emergence of modern ports like Mundra and Pipavav having the potential to take away the lighterage cargo with the help of their sophisticated cargo handling facilities. Moreover, active lighterage ports are also getting themselves modernized to face the competition thereby reducing the scope of lighterage activity. Future outlook of the industry in Gujarat will be much dependent on infrastructure development and application of sophisticated equipment at different ports capable of handling large size vessels.`
      },
      {
        id: 'goa',
        title: 'Goa',
        content: `Barging industry in Goa has evolved in response to the trade needs for carriage of iron ore mined in the interiors of the state to the harbor, through river navigation using barges. Today, it is deeply entrenched in overall Goan economy with about 150 barges operating in the region. Size of the barges over the past decade has increased from 200-600 dwt to around 2500 dwt, in order to reduce operational costs. This has led to a decrease in the number of barges whereas the total number of tonnage handled has increased. Most of barge building is done locally. Exporters like Chowgules, Dempo and Sesa Goa have set up captive shipbuilding facilities to take care of construction of barges. Most of the independent barge operators prefer to build the barges on their own by hiring workshops located along side of the river Zuari and Mandvi.

The future of the barging industry in Goa is likely to depend on the iron ore export volume from the state.`
      },
      {
        id: 'mumbai-harbour',
        title: 'Mumbai Harbour',
        content: `The lighterage industry in Mumbai evolved long back since 1952. The region consists of Mumbai Port, Jawaharlal Nehru Port and various captive jetties and minor ports located in Dharamtar, Dahanu, Uran etc. The industry was concentrated mainly in Mumbai port and gradually spread its activities to other jetties and ports.

The most prominent is the liquid lighterage, especially chemical lighterage. Of the total 1837 thousand tons of imported cargo handled by Mumbai Port, almost 190 thousand tons accounted for chemical products. Out of these, lighterage vessels carry almost an average of 20,000 tons per month.

The industry is highly competitive and consists of players like Shahi Shipping, Seatrans Group, Raj Shipping, Mercator Limited, Coastal Marine, J.Fanuswala etc. However, with the advent of JNPT, demand for lighterage has dwindled, for the multi cargo handling port has managed to divert a subsequent quantity of cargo from the port of Mumbai.`
      },
      {
        id: 'kolkata',
        title: 'Kolkata',
        content: `The lighterage and barging industry in Kolkata was evolved quite long ago. The industry was formed primarily for the movement of jute from the interiors of the state to the harbor through river navigation for the purpose of exports. Transportation of POL cargo from Haldia to Budgebudge has also boosted the industry leading to the involvement of a significantly large number of barges.

However, gradual decrease in jute exports has made significant impact over the industry resulting in the decline in the number of barges as well as shifting of activity for transporting other kinds of cargo like logs, pulses and other commodities. Moreover, inception of oil movement through pipelines had also made negative impression over the growth of the industry.

The situation is likely to be grim despite the commencement of ship-to-ship lighterage of crude at Sandheads / Saugor area near Haldia by The Shipping Corporation of India, which has dynamically changed the requirement of smaller vessels for lighterage as this includes involvement of MR tankers.

Looking at the future of lighterage and barging industry in Kolkata, the prospect is not encouraging unless right steps are taken in the proper direction.`
      }
    ]
  },
  {
    id: 'stevedoring',
    title: 'Stevedoring',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    subsections: [
      {
        id: 'stevedoring-overview',
        title: 'Stevedoring Overview',
        content: `Stevedoring, involves operations relating to loading and discharging of cargo to / from the vessels to docks in the course of import and export trade. The job of stevedoring service providers primarily involves the supply of equipment and labor, direction for the handling of cargo and loading and unloading of vessels in the port. However, a historical difference exists between the job of 'stevedoring' and 'loading' as the operations of moving goods from ship's side until they are safely stored within the vessel is called stevedoring, while loading involves movements of good from berth to ship's side. Stevedores handle only dry cargo of bulk, break bulk and containerized type. Mechanized cargo handling facilities are applied for handling of dry bulk cargo thereby reducing the responsibility of stevedores, break bulk and containerized cargo requires stevedoring.

Indian stevedoring industry shows a highly fragmented picture where the private sector dominates the industry. However, in some ports like Mundra, Pipavav and others, port authority itself does the stevedoring job. Though several stevedores are active all over the country, some leading players share major chunk of the industry at different geographical regions. The industry is presently suffering from various issues relating to labor. Moreover, lack of modern cargo handling equipment at different ports is also an obstacle in the smooth operation of the industry since service is highly dependant on infrastructure requirement and time management.

Changing scenario of the international maritime industry concomitant to severe competition in domestic sector has revolutionized the industry and extended its role from being stevedores to become integrated logistics service provider by consolidating other activities involved in the handling of cargo.`
      },
      {
        id: 'industry-scenario',
        title: 'Industry Scenario',
        content: `Indian stevedoring industry is highly fragmented and dominated by private sector. Though several stevedores are active through out the country, major chunk of the industry is shared by some leading players at different regions. While E.C. Bose & Co., T.P. Roy Chowdhury & Co., Ripley & Co. dominates the Eastern region; Southern region is mostly led by South India Corporation (Agencies) Limited (Sical), Sarat Chatterjee & Co., Pratyusha Associates and others. In West Coast, J.M. Baxi, ABC & Sons and DBC are the leading stevedores. Though in some ports like Mundra, Pipavav and others, port authority itself does the stevedoring job, generally stevedoring is done only by private parties.

Stevedoring job entails hiring of equipment and labor from port authority. However, in some cases large stevedores utilise their own equipments for efficient handling of cargo. Dock Labour Board (DLB) of each port provides the requirement of labor to stevedores and labour charges are pre-determined rate fixed up by port authority in consultation with DLB. Varying rates of different port trusts has led to significant disparity in stevedoring charges at different ports.

The job of stevedoring is dependent primarily on two factors - infrastructure requirement and time management. Adequate infrastructure is very important for handling large volume of cargo and proper time management is crucial as small delays can lead to huge demurrage charges.

Major issues, which have significant impacts over the stevedoring industry, are as follows:

Labor problem - The most important issue regarding the stevedoring job in India relates to the problem of labour. Private stevedores are not permitted to utilise their own labor and bound to take them from Dock Labour Board (DLB) of each port. DLB determines the number of labors to be posted at different gangways and also fixes up the rate. However, lack of well-trained labor and inefficiency of the entire system have detrimental effects on the stevedoring job. Moreover, intervention of politics through different labor unions also add to further problems.

Lack of modern cargo handling equipment - This is one of the major issue concerned not only with the stevedoring job but also affects the efficiency level of different ports. Inappropriate cargo handling equipment concomitant to low efficiency level leads to delay in stevedoring, thereby resulting into unnecessary demurrage charge.`
      },
      {
        id: 'future-outlook',
        title: 'Future Outlook',
        content: `The continuous process of change in the international maritime industry has revolutionized the role of stevedoring from a segmented modal approach towards vertical integration of activities. Severe competition has resulted into a more focused approach towards the job of cargo handling and stevedores are now coming up as an integrated logistics service provider by consolidating other activities involved in the handling of cargo apart from stevedoring.

SICAL has already come up as an integrated logistics service provider for handling of thermal coal transported from coal belts of West Bengal, Bihar, Orissa and Andhra Pradesh to Chennai and Tuticorin through coastal movement on account of Tamil Nadu Electricity Board (TNEB). In a way, it arranges the transportation requirement for moving coal from collieries to coal loading ports of Haldia, Paradip and Visakhapatnam and handles the stevedoring job at loading and unloading ports and re-transportation to TNEB power stations.

Globally, stevedores are also getting involved in other port related services like development of different port infrastructures, operating different port terminals, etc. Stevedore Services of America (SSA) had formed a consortium named International Seaports Private Limited with L&T of India and Precious Shipping of Thailand for development of different port projects in India. SSA is also operating around 120 port terminals across the world.

Therefore, it has been observed that the job of stevedoring all over the world is getting a new dimension. It is not limited only to the handling of cargo to/from the vessel but involves a lot more activities. This has resulted into new growth areas for major players of the industry. With the growing competition, consolidations are expected, which would leave little space for smaller players. The Indian stevedoring industry is also likely to follow steps of global trend by providing efficient, value added service to the maritime industry.`
      }
    ]
  },
  {
    id: 'clearing-forwarding',
    title: 'Clearing and Forwarding',
    icon: Building,
    color: 'from-teal-500 to-cyan-500',
    subsections: [
      {
        id: 'clearing-forwarding-overview',
        title: 'Clearing and Forwarding Overview',
        content: `The job of Customs House Agent (CHA) or Clearing & Forwarding agent is an absolute necessity for any kind of import-export trade, which involves processing of documents with Customs authority. The role of CHA is to pass all the documents required for export import trade through from Customs on behalf of shippers by paying the requisite customs duty.

In India, the sector is highly fragmented with a handful number of CHAs active through out the country, not only in major ports but also in dry ports and other export processing zones. Taking the instance of Mumbai, the number of CHA license is estimated to be around 1400 of which around 300-350 remain active. The all India figure for CHAs would be around 3,000 of which 25 per cent are expected to have active operations. While many of the big export/import houses have their own C&F cell, others have long-term tie-ups with different CHAs for passing of documents.

The Clearing & Forwarding process in India is marred due to cumbersome customs procedures involving high volume of paper works. In order to streamline the Customs formalities, different Port Trusts and Customs Department have come out with the idea of EDI (Electronic Data Interchange) and are implementing the EDI process in selected major ports to reduce the paper works. However, the process could not fructify due to inability of respective personnel in port and Customs to adapt to new technology.

Looking at the prospects of the CHA sector in India, it can be told that with the increase of Exim trade, the importance and volume of the sector is likely to grow. However, applications of IT is an absolute must for trading in future.`
      }
    ]
  }
]

export default function InfobankPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>(['seaports'])
  const [expandedSubsections, setExpandedSubsections] = useState<string[]>(['global-scenario'])

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const toggleSubsection = (subsectionId: string) => {
    setExpandedSubsections(prev => 
      prev.includes(subsectionId) 
        ? prev.filter(id => id !== subsectionId)
        : [...prev, subsectionId]
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-blue-200 mb-4">
              <Link href="/knowledge-centre" className="hover:text-white">Knowledge Centre</Link>
              <span className="mx-2">›</span>
              <span className="text-white">Infobank</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Infobank</h1>
            <p className="text-xl text-blue-100">Information on the maritime sector of India has not traditionally been available readily. The articles in this segment of the knowledge center aims to acquaint the readers with the rudiments of the sector.</p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seaports</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Seaports are the interface between maritime and inland modes of transport for movement of goods and passengers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In broader terms, ports are single organizational units with multi-dimensional activities integrated within the logistics chain for providing services to maritime trade. The prime objective of a seaport is to provide fast and safe transit of goods and passengers through its facilities at minimal cost.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Globally, seaborne trade is handled through more than 2,000 ports, from single berth locations handling a few hundred tons to multipurpose facilities handling up to 300 million tons per annum.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              India has 12 major ports and 185 minor/intermediate ports along its coastline of around 7,517 kms.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              In the new era of liberalisation and privatisation, the concept of a seaport is a mere physical hub of maritime activities to being a link in the larger logistic chain that connects the origin of cargo to its final point of delivery, i.e. the consignee to the consigner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-8">
          {infobankSections.map((section, sectionIndex) => {
            const isExpanded = expandedSections.includes(section.id)
            const IconComponent = section.icon
            
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all">
                  <CardHeader>
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{section.title}</CardTitle>
                          <p className="text-gray-600">{section.subsections.length} subsections</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                          title="Back to top"
                        >
                          <ArrowUp className="w-5 h-5 text-gray-600" />
                        </button>
                        {isExpanded ? (
                          <ChevronUp className="w-6 h-6 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-gray-600" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {isExpanded && (
                  <CardContent>
                      <div className="space-y-6">
                        {section.subsections.map((subsection, _subsectionIndex) => {
                          const isSubExpanded = expandedSubsections.includes(subsection.id)
                          
                          return (
                            <div key={subsection.id} className="border border-gray-200 rounded-lg">
                              <div 
                                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => toggleSubsection(subsection.id)}
                              >
                                <h3 className="text-lg font-semibold text-gray-900">{subsection.title}</h3>
                                {isSubExpanded ? (
                                  <ChevronUp className="w-5 h-5 text-gray-600" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-gray-600" />
                                )}
                              </div>
                              
                              {isSubExpanded && (
                                <div className="px-4 pb-4">
                                  <div className="prose prose-lg max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                      {subsection.content}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
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

