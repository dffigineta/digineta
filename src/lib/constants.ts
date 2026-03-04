import { NavigationItem, Service, Testimonial, CaseStudy, BlogPost, Event, JobOpening } from '@/types'

export const navigation: NavigationItem[] = [
  {
    label: 'Political Platform',
    href: '/political-platform',
  },
  {
    label: 'About Digineta',
    href: '/about',
    children: [
      {
        label: 'Corporate Profile',
        href: '/about/corporate-profile',
        children: [
          { label: 'Business Consulting', href: '/about/business-consulting' },
          { label: 'Technical Design Consulting', href: '/about/technical-design-consulting' },
          { label: 'Corporate Finance Advisory', href: '/about/corporate-finance-advisory' },
          { label: 'Global Maritime Knowledge Center', href: '/about/global-maritime-knowledge-center' },
        ],
      },
      { label: 'Capabilities & Expertise', href: '/about/expertise' },
      { label: 'Leadership & Network', href: '/about/people' },
      { label: 'Campaigns & Partners', href: '/about/clients' },
      { label: 'Testimonials', href: '/about/testimonials' },
      { label: 'Flagship Engagements', href: '/about/projects' },
      { label: 'Partner with Digineta', href: '/about/online-enquiry' },
    ]
  },
  {
    label: 'Our Solutions',
    href: '/services',
    children: [
      { label: 'Political Intelligence & Analytics', href: '/services' },
      { label: 'Campaign Platforms (Mahaneta, Netabanner & Smart Apps)', href: '/services' },
      { label: 'Digital Outreach & Social Media', href: '/services' },
      { label: 'Voter Data & Call Centre Operations', href: '/services' },
    ]
  },
  {
    label: 'Who Is It For',
    href: '/who-is-it-for',
    children: [
      { label: 'Members of Parliament (MPs)', href: '/who-is-it-for/members-of-parliament' },
      { label: 'Members of Legislative Assembly (MLAs)', href: '/who-is-it-for/members-of-legislative-assembly' },
      { label: 'Municipal Corporators', href: '/who-is-it-for/municipal-corporators' },
      { label: 'Panchayat & Local Body Leaders', href: '/who-is-it-for/panchayat-local-body-leaders' },
      { label: 'Political Party Workers', href: '/who-is-it-for/political-party-workers' },
    ]
  },
  {
    label: 'Political Intelligence',
    href: '/knowledge-centre',
    children: [
      { label: 'Research Reports', href: '/knowledge-centre' },
      { label: 'Election Analysis', href: '/knowledge-centre' },
      { label: 'Data Insights', href: '/knowledge-centre' },
      { label: 'Campaign Guides', href: '/knowledge-centre' },
    ]
  },
  {
    label: 'Campaign i-deas',
    href: '/ideas',
    children: [
      { label: 'Blog Posts', href: '/ideas/blogs' },
      { label: 'Opinion & Strategy', href: '/ideas' },
      { label: 'Case Studies', href: '/ideas' },
      { label: 'Trends & Analysis', href: '/ideas' },
    ]
  },
  {
    label: 'Join Our Team',
    href: '/careers',
    children: [
      { label: 'Current Openings', href: '/careers/current-openings' },
      { label: 'Submit Resume', href: '/careers/submit-resume' },
    ]
  },
  {
    label: 'Get in Touch',
    href: '/contact',
  },
]

export const services: Service[] = [
  {
    id: 'ports-terminals',
    title: 'National & state campaigns',
    description: 'End-to-end support for national, state and regional election campaigns',
    href: '/services/industry/ports-terminals'
  },
  {
    id: 'shipping',
    title: 'Leaders & offices',
    description: 'Advisory and execution support for leaders, offices and core teams',
    href: '/services/industry/shipping'
  },
  {
    id: 'container-logistics',
    title: 'Local bodies & city campaigns',
    description: 'Campaigns and governance programs for cities, municipalities and local bodies',
    href: '/services/industry/container-logistics'
  },
  {
    id: 'shipbuilding',
    title: 'Movements & citizen platforms',
    description: 'Support for issue-based movements, coalitions and citizen platforms',
    href: '/services/industry/shipbuilding'
  },
  {
    id: 'infrastructure',
    title: 'Governance & public programs',
    description: 'Design and communication support for governance and public programs',
    href: '/services/industry/infrastructure'
  }
]

export const practiceAreas: Service[] = [
  {
    id: 'market-research',
    title: 'Research & intelligence',
    description: 'Opinion research, sentiment intelligence and issue mapping',
    href: '/services/practice-area/market-research'
  },
  {
    id: 'business-plan',
    title: 'Strategy & roadmapping',
    description: 'Election and governance strategy, scenario planning and roadmaps',
    href: '/services/practice-area/business-plan'
  },
  {
    id: 'traffic-studies',
    title: 'Booth & segment analysis',
    description: 'Booth-level, segment and geography analysis for campaigns',
    href: '/services/practice-area/traffic-studies'
  },
  {
    id: 'feasibility-studies',
    title: 'Program design & feasibility',
    description: 'Design and feasibility assessment for programs and initiatives',
    href: '/services/practice-area/feasibility-studies'
  },
  {
    id: 'fund-syndication',
    title: 'Resource planning & mobilisation',
    description: 'Planning and structuring resources, teams and partner networks',
    href: '/services/practice-area/fund-syndication'
  },
  {
    id: 'equity-research',
    title: 'Reputation & equity tracking',
    description: 'Tracking leadership equity, reputation and narrative over time',
    href: '/services/practice-area/equity-research'
  },
  {
    id: 'detailed-project-report',
    title: 'Execution blueprints',
    description: 'Detailed execution plans for campaigns and governance programs',
    href: '/services/practice-area/detailed-project-report'
  },
  {
    id: 'technical-design',
    title: 'Digital product & UX design',
    description: 'Design of political and governance digital products and tools',
    href: '/services/practice-area/technical-design'
  },
  {
    id: 'infrastructure-finance',
    title: 'Program finance advisory',
    description: 'Advisory on financial structuring for campaigns and public programs',
    href: '/services/practice-area/infrastructure-finance'
  },
  {
    id: 'ma-advisory',
    title: 'Alliances & coalition advisory',
    description: 'Support for alliances, coalitions and structural political moves',
    href: '/services/practice-area/ma-advisory'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 'gulf-petrochem',
    name: 'Himadri S. Roy',
    position: 'Financial Controller',
    company: 'Gulf Petrochem FZC, UAE',
    content: 'Gulf Petrochem FZC, UAE, had commissioned Digineta Consultants Pvt. Ltd., Navi Mumbai, to carry out the Market Feasibility and Techno-Economic Validation studies for our upcoming 320,000 MT Bulk Liquid Storage & Handling Terminal at Pipavav Port, Gujarat. In this connection, we are happy to place on record our sincere appreciation to them for a job well done...'
  },
  {
    id: 'port-authority',
    name: 'John Smith',
    position: 'Port Director',
    company: 'Mumbai Port Authority',
    content: 'Digineta provided exceptional consulting services for our port modernization project. Their expertise in maritime infrastructure and strategic planning was invaluable in achieving our objectives.'
  },
  {
    id: 'shipping-company',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Ocean Shipping Lines',
    content: 'The team at Digineta delivered outstanding results for our fleet expansion strategy. Their deep industry knowledge and practical approach helped us make informed decisions.'
  }
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'colachel-port',
    title: 'Techno Economic Feasibility Study for setting a port at Colachel',
    description: 'Comprehensive feasibility study for new port development',
    href: '/knowledge-centre/case-studies/colachel-port'
  },
  {
    id: 'ahmedabad-logistics',
    title: 'Multi Logistics Park in Ahmedabad',
    description: 'Strategic planning for integrated logistics hub',
    href: '/knowledge-centre/case-studies/ahmedabad-logistics'
  },
  {
    id: 'indian-port-strategy',
    title: 'Strategy Report for Indian Port sector',
    description: 'National port sector analysis and recommendations',
    href: '/knowledge-centre/case-studies/indian-port-strategy'
  },
  {
    id: 'container-terminal',
    title: 'Container Terminal Development Study',
    description: 'Feasibility study for new container terminal facility',
    href: '/knowledge-centre/case-studies/container-terminal'
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: 'maritime-trends-2025',
    title: 'Maritime Industry Trends for 2025',
    excerpt: 'Exploring the latest trends and developments in the maritime sector',
    content: 'The maritime industry is undergoing significant transformation...',
    author: 'Dr. Ramesh Singhal',
    publishedAt: '2025-01-15',
    tags: ['trends', 'industry', 'analysis']
  },
  {
    id: 'port-automation',
    title: 'The Future of Port Automation',
    excerpt: 'How automation is revolutionizing port operations worldwide',
    content: 'Port automation is becoming increasingly important...',
    author: 'Sarah Johnson',
    publishedAt: '2025-01-10',
    tags: ['automation', 'technology', 'ports']
  }
]

export const events: Event[] = [
  {
    id: 'maritime-summit-2025',
    title: 'Maritime Summit 2025',
    description: 'Annual conference on maritime industry developments',
    date: '2025-03-15',
    location: 'Mumbai, India',
    href: '/ideas/events/maritime-summit-2025'
  },
  {
    id: 'port-technology-expo',
    title: 'Port Technology Expo',
    description: 'Exhibition of latest port technologies and solutions',
    date: '2025-04-20',
    location: 'Chennai, India',
    href: '/ideas/events/port-technology-expo'
  }
]

export const jobOpenings: JobOpening[] = [
  {
    id: 'maritime-consultant',
    title: 'Senior Maritime Consultant',
    department: 'Consulting',
    location: 'Mumbai',
    type: 'full-time',
    description: 'We are looking for an experienced maritime consultant to join our team.',
    requirements: ['5+ years experience', 'Maritime industry knowledge', 'MBA preferred'],
    href: '/careers/current-openings/maritime-consultant'
  },
  {
    id: 'research-analyst',
    title: 'Research Analyst',
    department: 'Research',
    location: 'Delhi',
    type: 'full-time',
    description: 'Join our research team to analyze maritime industry data.',
    requirements: ['2+ years experience', 'Data analysis skills', 'Maritime background'],
    href: '/careers/current-openings/research-analyst'
  }
]
