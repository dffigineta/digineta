import { WhoIsItForPageLayout } from '@/components/who-is-it-for/WhoIsItForPageLayout'

export const metadata = {
  title: 'For Municipal Corporators | Who Is It For | Digineta',
  description:
    'Build ward-level digital presence, manage constituent expectations, and stay visible between elections with tools designed for urban local body leaders.',
}

export default function MunicipalCorporatorsPage() {
  return (
    <WhoIsItForPageLayout
      hero={{
        breadcrumbLabel: 'Who Is It For',
        title: 'For Municipal Corporators',
        subtitle:
          'Build ward-level digital presence, manage constituent expectations, and stay visible between elections with tools designed for urban local body leaders.',
        cta1Label: 'Explore Our Solutions',
        cta1Href: '/services',
        cta2Label: 'Talk to Our Team',
        cta2Href: '/contact',
      }}
      stats={[
        { number: '300+', label: 'Corporators & Ward Leaders Served' },
        { number: '5X', label: 'Increase in Constituent Reach' },
        { number: '50+', label: 'Cities Covered' },
        { number: '10K+', label: 'Ward-Level Campaigns Run' },
      ]}
      offerSection={{
        heading: 'What We Offer',
        subtitle: 'Ward-level tools for urban local body leaders.',
        cards: [
          {
            title: 'Ward Digital Presence',
            description:
              "Your own branded ward website, WhatsApp channel, and social profiles — all managed by Digineta's team.",
            iconIndex: 0,
          },
          {
            title: 'Hyperlocal Issue Tracker',
            description:
              'Log, track, and communicate progress on ward-level infrastructure and civic issues directly to residents.',
            iconIndex: 1,
          },
          {
            title: 'Event & Programme Management',
            description:
              'Plan, promote, and document ward events, health camps, and public meetings digitally.',
            iconIndex: 2,
          },
          {
            title: 'Community Engagement Tools',
            description:
              'Build and nurture resident groups, collect feedback, and respond at scale with structured communication workflows.',
            iconIndex: 3,
          },
        ],
      }}
      servicesSection={{
        heading: 'Our Services',
        services: [
          {
            title: 'Ward-Level Digital Setup',
            bullets: [
              'WhatsApp community management',
              'Social media profile creation and posting',
              'Ward website or landing page',
            ],
          },
          {
            title: 'Constituency Communication',
            bullets: [
              'Festive and event poster generation (Netabanner)',
              'SMS and broadcast campaigns',
              'Multilingual content for urban communities',
            ],
          },
          {
            title: 'Performance & Visibility Reporting',
            bullets: [
              'Monthly reach and engagement reports',
              'Work completion documentation',
              'Resident satisfaction tracking',
            ],
          },
        ],
      }}
      testimonialsSection={{
        heading: 'What Corporators Say',
        items: [
          {
            quote:
              "My ward's WhatsApp channel went from 200 to 4,000 members in three months. Digineta made it happen.",
            name: 'Municipal Corporator',
            role: 'Mumbai',
          },
          {
            quote:
              'I can now show residents exactly what work has been done in the ward, with photos and updates. Trust has gone up.',
            name: 'Corporator',
            role: 'Pune',
          },
          {
            quote:
              'The poster and banner tool means I can put up a festive greeting or programme notice in minutes, not days.',
            name: 'Corporator',
            role: 'Thane',
          },
        ],
      }}
      ctaBanner={{
        heading: 'Stay Visible, Stay Connected in Your Ward',
        subtext:
          'Digineta helps corporators build the kind of consistent, trust-based presence that wins re-election.',
        cta1Label: 'Set Up Your Ward Presence',
        cta1Href: '/contact',
        cta2Label: 'View Solutions',
        cta2Href: '/services',
      }}
    />
  )
}
