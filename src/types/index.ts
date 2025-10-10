export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image?: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  href: string;
}

export interface PageContent {
  title: string;
  description?: string;
  content: string;
  image?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image?: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
  href: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  href: string;
}
