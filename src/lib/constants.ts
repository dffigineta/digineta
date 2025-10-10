import { NavigationItem, Service, Testimonial, CaseStudy, BlogPost, Event, JobOpening } from '@/types'

export const navigation: NavigationItem[] = [
  {
    label: 'About Us',
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
      { label: 'Expertise', href: '/about/expertise' },
      { label: 'People', href: '/about/people' },
      { label: 'Clients', href: '/about/clients' },
      { label: 'Testimonials', href: '/about/testimonials' },
      { label: 'Projects', href: '/about/projects' },
      { label: 'Online Enquiry', href: '/about/online-enquiry' },
    ]
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Industry',
        href: '/services/industry',
        children: [
          { label: 'Ports & Terminals', href: '/services/industry/ports-terminals' },
          { label: 'Shipping', href: '/services/industry/shipping' },
          { label: 'Container Logistics & Warehousing', href: '/services/industry/container-logistics' },
          { label: 'Shipbuilding', href: '/services/industry/shipbuilding' },
          { label: 'Other Infrastructure', href: '/services/industry/infrastructure' },
        ]
      },
      {
        label: 'Practice Area',
        href: '/services/practice-area',
        children: [
          { label: 'Market Research', href: '/services/practice-area/market-research' },
          { label: 'Business Plan', href: '/services/practice-area/business-plan' },
          { label: 'Traffic Studies', href: '/services/practice-area/traffic-studies' },
          { label: 'Feasibility Studies', href: '/services/practice-area/feasibility-studies' },
          { label: 'Fund Syndication', href: '/services/practice-area/fund-syndication' },
          { label: 'Equity Research', href: '/services/practice-area/equity-research' },
          { label: 'Detailed Project Report', href: '/services/practice-area/detailed-project-report' },
          { label: 'Technical Design', href: '/services/practice-area/technical-design' },
          { label: 'Infrastructure Finance Advisory', href: '/services/practice-area/infrastructure-finance' },
          { label: 'M&A Advisory', href: '/services/practice-area/ma-advisory' },
        ]
      },
    ]
  },
  {
    label: 'Knowledge Centre',
    href: '/knowledge-centre',
    children: [
      { label: 'Case Studies', href: '/knowledge-centre/case-studies' },
      {
        label: 'Infobank',
        href: '/knowledge-centre/infobank',
        children: [
          { label: 'Ports', href: '/knowledge-centre/infobank/ports' },
          { label: 'Shipping', href: '/knowledge-centre/infobank/shipping' },
          { label: 'Shipyard', href: '/knowledge-centre/infobank/shipyard' },
          { label: 'Logistics', href: '/knowledge-centre/infobank/logistics' },
          { label: 'Finance', href: '/knowledge-centre/infobank/finance' },
          { label: 'Internet', href: '/knowledge-centre/infobank/internet' },
          { label: 'Trade', href: '/knowledge-centre/infobank/trade' },
          { label: 'Education', href: '/knowledge-centre/infobank/education' },
        ]
      },
      { label: 'Databases', href: '/knowledge-centre/databases' },
      { label: 'Research', href: '/knowledge-centre/research' },
      { label: 'Directory', href: '/knowledge-centre/directory' },
    ]
  },
  {
    label: 'i-deas',
    href: '/ideas',
    children: [
      { label: 'Blogs', href: '/ideas/blogs' },
      { label: 'Events', href: '/ideas/events' },
    ]
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Current Openings', href: '/careers/current-openings' },
      { label: 'Submit Resume', href: '/careers/submit-resume' },
    ]
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]

export const services: Service[] = [
  {
    id: 'ports-terminals',
    title: 'Ports & Terminals',
    description: 'Comprehensive consulting for port development and terminal operations',
    href: '/services/industry/ports-terminals'
  },
  {
    id: 'shipping',
    title: 'Shipping',
    description: 'Strategic advisory for shipping operations and fleet management',
    href: '/services/industry/shipping'
  },
  {
    id: 'container-logistics',
    title: 'Container Logistics & Warehousing',
    description: 'End-to-end logistics solutions and warehouse optimization',
    href: '/services/industry/container-logistics'
  },
  {
    id: 'shipbuilding',
    title: 'Shipbuilding',
    description: 'Technical consulting for ship construction and repair facilities',
    href: '/services/industry/shipbuilding'
  },
  {
    id: 'infrastructure',
    title: 'Other Infrastructure',
    description: 'Maritime infrastructure development and planning',
    href: '/services/industry/infrastructure'
  }
]

export const practiceAreas: Service[] = [
  {
    id: 'market-research',
    title: 'Market Research',
    description: 'Comprehensive market analysis and industry insights',
    href: '/services/practice-area/market-research'
  },
  {
    id: 'business-plan',
    title: 'Business Plan',
    description: 'Strategic business planning and development',
    href: '/services/practice-area/business-plan'
  },
  {
    id: 'traffic-studies',
    title: 'Traffic Studies',
    description: 'Port traffic analysis and forecasting',
    href: '/services/practice-area/traffic-studies'
  },
  {
    id: 'feasibility-studies',
    title: 'Feasibility Studies',
    description: 'Project feasibility and viability assessment',
    href: '/services/practice-area/feasibility-studies'
  },
  {
    id: 'fund-syndication',
    title: 'Fund Syndication',
    description: 'Financial structuring and fund raising',
    href: '/services/practice-area/fund-syndication'
  },
  {
    id: 'equity-research',
    title: 'Equity Research',
    description: 'Investment analysis and equity research',
    href: '/services/practice-area/equity-research'
  },
  {
    id: 'detailed-project-report',
    title: 'Detailed Project Report',
    description: 'Comprehensive project documentation and planning',
    href: '/services/practice-area/detailed-project-report'
  },
  {
    id: 'technical-design',
    title: 'Technical Design',
    description: 'Engineering and technical design services',
    href: '/services/practice-area/technical-design'
  },
  {
    id: 'infrastructure-finance',
    title: 'Infrastructure Finance Advisory',
    description: 'Financial advisory for infrastructure projects',
    href: '/services/practice-area/infrastructure-finance'
  },
  {
    id: 'ma-advisory',
    title: 'M&A Advisory',
    description: 'Mergers and acquisitions consulting',
    href: '/services/practice-area/ma-advisory'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: 'gulf-petrochem',
    name: 'Himadri S. Roy',
    position: 'Financial Controller',
    company: 'Gulf Petrochem FZC, UAE',
    content: 'Gulf Petrochem FZC, UAE, had commissioned i-maritime Consultants Pvt. Ltd., Navi Mumbai, to carry out the Market Feasibility and Techno-Economic Validation studies for our upcoming 320,000 MT Bulk Liquid Storage & Handling Terminal at Pipavav Port, Gujarat. In this connection, we are happy to place on record our sincere appreciation to them for a job well done...'
  },
  {
    id: 'port-authority',
    name: 'John Smith',
    position: 'Port Director',
    company: 'Mumbai Port Authority',
    content: 'i-maritime provided exceptional consulting services for our port modernization project. Their expertise in maritime infrastructure and strategic planning was invaluable in achieving our objectives.'
  },
  {
    id: 'shipping-company',
    name: 'Sarah Johnson',
    position: 'CEO',
    company: 'Ocean Shipping Lines',
    content: 'The team at i-maritime delivered outstanding results for our fleet expansion strategy. Their deep industry knowledge and practical approach helped us make informed decisions.'
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
