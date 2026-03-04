import { WhoIsItForPageLayout } from '@/components/who-is-it-for/WhoIsItForPageLayout'

export const metadata = {
  title: 'For Members of Parliament | Who Is It For | Digineta',
  description:
    "Strengthen your presence, connect with constituents, and lead with data — purpose-built political technology for India's elected MPs.",
}

export default function MembersOfParliamentPage() {
  return (
    <WhoIsItForPageLayout
      hero={{
        breadcrumbLabel: 'Who Is It For',
        title: 'For Members of Parliament',
        subtitle:
          "Strengthen your presence, connect with constituents, and lead with data — purpose-built political technology for India's elected MPs.",
        cta1Label: 'Explore Our Solutions',
        cta1Href: '/services',
        cta2Label: 'Talk to Our Team',
        cta2Href: '/contact',
      }}
      stats={[
        { number: '120+', label: 'MPs & Legislators Served' },
        { number: '98%', label: 'Constituent Satisfaction Rate' },
        { number: '500K+', label: 'Voter Touchpoints Delivered' },
        { number: '24/7', label: 'Campaign Support' },
      ]}
      offerSection={{
        heading: 'What We Offer',
        subtitle: 'Purpose-built tools for MPs to govern and campaign effectively.',
        cards: [
          {
            title: 'Constituency Intelligence Dashboard',
            description:
              'Real-time analytics on voter sentiment, booth performance, and issue tracking across your entire constituency.',
            iconIndex: 0,
          },
          {
            title: 'Digital Presence Management',
            description:
              'End-to-end management of your website, social media, and WhatsApp channels to keep constituents informed and engaged.',
            iconIndex: 1,
          },
          {
            title: 'Grievance & Communication Platform',
            description:
              'Structured digital workflows to receive, track, and resolve constituent grievances at scale.',
            iconIndex: 2,
          },
          {
            title: 'Media & Reputation Monitoring',
            description:
              "Track how you're covered across print, digital, and social media — with alerts, reports, and response support.",
            iconIndex: 3,
          },
        ],
      }}
      servicesSection={{
        heading: 'Our Services',
        services: [
          {
            title: 'Political Intelligence & Analytics',
            bullets: [
              'Booth-level voter data and segmentation',
              'Sentiment analysis and issue mapping',
              'Turnout prediction and swing analysis',
            ],
          },
          {
            title: 'Digital Outreach & Campaigns',
            bullets: [
              'Multilingual social media content',
              'WhatsApp broadcast management',
              'Video production and distribution',
            ],
          },
          {
            title: 'Constituency Relationship Management',
            bullets: [
              'Constituent database and CRM',
              'Event and programme management',
              'Ground team coordination tools',
            ],
          },
        ],
      }}
      testimonialsSection={{
        heading: 'What MPs Say',
        items: [
          {
            quote:
              'Digineta gave us a real-time view of every booth in my constituency. We could respond to issues before they became problems.',
            name: 'Senior MP',
            role: 'Western India',
          },
          {
            quote:
              "Our WhatsApp outreach used to be chaotic. Now it's structured, trackable, and far more effective.",
            name: 'MP',
            role: 'North India, Class of 2024',
          },
          {
            quote: 'The media monitoring tool alone saved us hours every week and kept our communication sharp.',
            name: 'MP',
            role: 'Southern Constituency',
          },
        ],
      }}
      ctaBanner={{
        heading: 'Ready to Lead Your Constituency with Technology?',
        subtext:
          'Join elected representatives across India who use Digineta to govern smarter and campaign stronger.',
        cta1Label: 'Get Started Today',
        cta1Href: '/contact',
        cta2Label: 'View All Solutions',
        cta2Href: '/services',
      }}
    />
  )
}
