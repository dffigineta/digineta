import { WhoIsItForPageLayout } from '@/components/who-is-it-for/WhoIsItForPageLayout'

export const metadata = {
  title: 'For Political Party Workers | Who Is It For | Digineta',
  description:
    'Equip yourself with the digital skills, tools, and campaign knowledge to become an indispensable asset to your party and your leader.',
}

export default function PoliticalPartyWorkersPage() {
  return (
    <WhoIsItForPageLayout
      hero={{
        breadcrumbLabel: 'Who Is It For',
        title: 'For Political Party Workers',
        subtitle:
          'Equip yourself with the digital skills, tools, and campaign knowledge to become an indispensable asset to your party and your leader.',
        cta1Label: 'Explore Training & Tools',
        cta1Href: '/services',
        cta2Label: 'Join the Network',
        cta2Href: '/contact',
      }}
      stats={[
        { number: '5000+', label: 'Party Workers Trained' },
        { number: '50+', label: 'Training Modules Available' },
        { number: '95%', label: 'Completion Rate' },
        { number: 'Pan-India', label: 'Network Coverage' },
      ]}
      offerSection={{
        heading: 'What We Offer',
        subtitle: 'Training, tools, and resources for party workers at every level.',
        cards: [
          {
            title: 'Digital Campaign Training',
            description:
              'Hands-on training in WhatsApp management, social media, content creation, and digital outreach — for party workers at every level.',
            iconIndex: 0,
          },
          {
            title: 'Volunteer Coordination App',
            description:
              'A simple app to receive assignments, report booth activity, and coordinate with the campaign team in real time.',
            iconIndex: 1,
          },
          {
            title: 'Content & Poster Tools',
            description:
              'Access to Netabanner and ready-made political content templates to amplify your leader\'s message instantly.',
            iconIndex: 2,
          },
          {
            title: 'Political Knowledge Resources',
            description:
              "Articles, guides, and analysis from Digineta's research team to help workers understand the evolving political landscape.",
            iconIndex: 3,
          },
        ],
      }}
      servicesSection={{
        heading: 'Our Services',
        services: [
          {
            title: 'Training Programs',
            bullets: [
              'Digital outreach and WhatsApp campaigns',
              'Booth-level operations and management',
              'Counter-misinformation and fact-checking',
            ],
          },
          {
            title: 'Field Tools',
            bullets: [
              'Volunteer app for booth assignments',
              'Reporting and escalation workflows',
              'Ground data collection forms',
            ],
          },
          {
            title: 'Content & Communication',
            bullets: [
              'Pre-designed political poster templates',
              'Party messaging content library',
              'Social media amplification kits',
            ],
          },
        ],
      }}
      testimonialsSection={{
        heading: 'What Party Workers Say',
        items: [
          {
            quote:
              "The training gave me skills I didn't have before. I now manage my leader's WhatsApp campaign for a 3-lakh voter constituency.",
            name: 'Party Worker',
            role: 'Gujarat',
          },
          {
            quote:
              'The volunteer app made polling day seamless. Every booth was covered and every issue was reported instantly.',
            name: 'District-Level Worker',
            role: 'MP',
          },
          {
            quote:
              "I went from door-to-door work only to running digital outreach for 10 booths. Digineta's training changed my role completely.",
            name: 'Party Karyakarta',
            role: 'Maharashtra',
          },
        ],
      }}
      ctaBanner={{
        heading: 'Level Up as a Political Worker',
        subtext: 'The best campaigns run on skilled, digitally-equipped teams. Become one.',
        cta1Label: 'Start Training',
        cta1Href: '/contact',
        cta2Label: 'View Resources',
        cta2Href: '/ideas',
      }}
    />
  )
}
