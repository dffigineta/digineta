import { WhoIsItForPageLayout } from '@/components/who-is-it-for/WhoIsItForPageLayout'

export const metadata = {
  title: 'For Panchayat & Local Body Leaders | Who Is It For | Digineta',
  description:
    'Digital tools scaled for grassroots leaders — helping Sarpanchs, Gram Panchayat members, and block-level representatives connect, communicate, and govern effectively.',
}

export default function PanchayatLocalBodyLeadersPage() {
  return (
    <WhoIsItForPageLayout
      hero={{
        breadcrumbLabel: 'Who Is It For',
        title: 'For Panchayat & Local Body Leaders',
        subtitle:
          'Digital tools scaled for grassroots leaders — helping Sarpanchs, Gram Panchayat members, and block-level representatives connect, communicate, and govern effectively.',
        cta1Label: 'Explore Our Solutions',
        cta1Href: '/services',
        cta2Label: 'Talk to Our Team',
        cta2Href: '/contact',
      }}
      stats={[
        { number: '1000+', label: 'Panchayat Leaders Onboarded' },
        { number: '20+', label: 'States Reached' },
        { number: '2M+', label: 'Rural Voters Reached' },
        { number: 'Simple', label: 'Designed for Low-Tech Users' },
      ]}
      offerSection={{
        heading: 'What We Offer',
        subtitle: 'Simple, accessible tools for every level of Indian democracy.',
        cards: [
          {
            title: 'Simple Digital Identity',
            description:
              'A basic digital presence — WhatsApp channel, Facebook page, and village-level communication hub — set up and managed for you.',
            iconIndex: 0,
          },
          {
            title: 'Voice & Regional Language Support',
            description:
              'All tools and content available in major regional languages, with voice-note and IVR support for low-literacy users.',
            iconIndex: 1,
          },
          {
            title: 'Scheme Awareness Campaigns',
            description:
              'Inform your community about government schemes and entitlements through targeted digital and SMS campaigns.',
            iconIndex: 2,
          },
          {
            title: 'Basic Analytics & Reporting',
            description:
              'Simple, visual dashboards showing outreach numbers, message delivery, and community engagement — no tech expertise needed.',
            iconIndex: 3,
          },
        ],
      }}
      servicesSection={{
        heading: 'Our Services',
        services: [
          {
            title: 'Rural Digital Communication',
            bullets: [
              'Village WhatsApp group management',
              'Regional language content',
              'Scheme and programme announcements',
            ],
          },
          {
            title: 'Grassroots Campaign Tools',
            bullets: [
              'Basic voter outreach workflows',
              'Field volunteer coordination',
              'Polling day support',
            ],
          },
          {
            title: 'Training & Onboarding',
            bullets: [
              'Hands-on onboarding for non-tech users',
              'Regional language training materials',
              'Ongoing support helpline',
            ],
          },
        ],
      }}
      testimonialsSection={{
        heading: 'What Grassroots Leaders Say',
        items: [
          {
            quote:
              "I never thought I could manage a digital campaign from my village. The Digineta team made it easy and local.",
            name: 'Sarpanch',
            role: 'Rural Maharashtra',
          },
          {
            quote:
              "We used the scheme awareness campaign to reach 2,000 families about a government benefit they didn't know about.",
            name: 'Gram Panchayat Member',
            role: 'UP',
          },
          {
            quote: 'The support in Marathi made all the difference. I didn\'t need anyone to translate for me.',
            name: 'Local Body Leader',
            role: 'Konkan',
          },
        ],
      }}
      ctaBanner={{
        heading: 'Grassroots Leadership, Powered by Technology',
        subtext:
          "You don't need to be tech-savvy to use Digineta. We make digital simple for every level of Indian democracy.",
        cta1Label: 'Get Started',
        cta1Href: '/contact',
        cta2Label: 'Learn More',
        cta2Href: '/services',
      }}
    />
  )
}
