import { WhoIsItForPageLayout } from '@/components/who-is-it-for/WhoIsItForPageLayout'

export const metadata = {
  title: 'For Members of Legislative Assembly | Who Is It For | Digineta',
  description:
    'Purpose-built digital tools and political intelligence for MLAs to engage voters, track constituency issues, and build lasting political presence.',
}

export default function MembersOfLegislativeAssemblyPage() {
  return (
    <WhoIsItForPageLayout
      heroImageSrc="/images/state-assembly.jpg"
      heroImageAlt="State Assembly — Digineta for MLAs"
      hero={{
        breadcrumbLabel: 'Who Is It For',
        title: 'For Members of Legislative Assembly',
        subtitle:
          'Purpose-built digital tools and political intelligence for MLAs to engage voters, track constituency issues, and build lasting political presence.',
        cta1Label: 'Explore Our Solutions',
        cta1Href: '/services',
        cta2Label: 'Talk to Our Team',
        cta2Href: '/contact',
      }}
      stats={[
        { number: '200+', label: 'MLAs & State Leaders Served' },
        { number: '85%', label: 'Improvement in Voter Engagement' },
        { number: '1M+', label: 'Constituency Messages Delivered' },
        { number: '30+', label: 'States Covered' },
      ]}
      offerSection={{
        heading: 'What We Offer',
        subtitle: 'Tools built for the scale and complexity of assembly elections.',
        cards: [
          {
            title: 'Voter Segment Mapping',
            description:
              'Deep demographic and psychographic profiling of your assembly constituency\'s voter base, updated in real time.',
            iconIndex: 0,
          },
          {
            title: 'Multilingual Content Engine',
            description:
              'Generate and distribute campaign content in regional languages tailored to local issues and community sentiments.',
            iconIndex: 1,
          },
          {
            title: 'Booth Management App',
            description:
              'Assign and coordinate booth-level workers, track on-ground activity, and escalate issues instantly on election day.',
            iconIndex: 2,
          },
          {
            title: 'Opposition Monitoring',
            description:
              'Track competitor campaigns, messaging, and ground activity to stay one step ahead throughout the campaign cycle.',
            iconIndex: 3,
          },
        ],
      }}
      servicesSection={{
        heading: 'Our Services',
        services: [
          {
            title: 'Voter Data & Analytics',
            bullets: [
              'Assembly segment profiling',
              'Historical voting pattern analysis',
              'Real-time field data collection',
            ],
          },
          {
            title: 'Campaign Platforms',
            bullets: [
              'Mahaneta constituency management app',
              'Netabanner digital display tools',
              'Smart Apps for field teams',
            ],
          },
          {
            title: 'Call Centre & Direct Outreach',
            bullets: [
              'Trained political call centre teams',
              'IVR and voice broadcast campaigns',
              'Feedback collection and reporting',
            ],
          },
        ],
      }}
      testimonialsSection={{
        heading: 'What MLAs Say',
        items: [
          {
            quote:
              "Digineta's booth app transformed how our ground team operated on polling day. Nothing was missed.",
            name: 'MLA',
            role: 'Central India',
          },
          {
            quote:
              'The multilingual content helped us speak directly to communities in their own language. Votes showed it.',
            name: 'MLA',
            role: 'South India',
          },
          {
            quote:
              'Having opposition monitoring built in meant we were never caught off guard by their messaging.',
            name: 'MLA',
            role: 'Eastern State',
          },
        ],
      }}
      ctaBanner={{
        heading: 'Win Your Assembly Seat with Smarter Campaigning',
        subtext: "Digineta's tools are built specifically for the complexity and scale of Indian assembly elections.",
        cta1Label: 'Start Your Campaign',
        cta1Href: '/contact',
        cta2Label: 'See Our Platforms',
        cta2Href: '/services',
      }}
    />
  )
}
