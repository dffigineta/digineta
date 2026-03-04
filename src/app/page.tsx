import type { Metadata } from 'next'
import HomePage from './HomePage'

export const metadata: Metadata = {
  title: 'Digineta — For Political Success in the Digital World',
  description:
    "India's dedicated political technology venture. Election data, campaign apps, digital outreach and political intelligence for leaders, parties and organisations across India.",
}

export default function Page() {
  return <HomePage />
}
