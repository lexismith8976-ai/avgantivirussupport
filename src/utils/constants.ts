import { Feature, PricingPlan } from '../types';

export const SUPPORT_LINK = "https://getchatsupport.live/";

export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Support', path: '/support' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Real-Time Protection",
    description: "24/7 monitoring against viruses, malware, and ransomware",
    icon: "🛡️"
  },
  {
    id: 2,
    title: "Advanced Firewall",
    description: "Blocks unauthorized access to your network",
    icon: "🔥"
  },
  {
    id: 3,
    title: "Email Shield",
    description: "Scans all incoming emails for threats",
    icon: "📧"
  },
  {
    id: 4,
    title: "Web Protection",
    description: "Safe browsing with malicious URL blocking",
    icon: "🌐"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 29.99,
    features: ['Real-Time Protection', 'Firewall', 'Email Shield']
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 49.99,
    features: ['All Basic Features', 'Web Protection', 'Parental Control', 'VPN'],
    isPopular: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: 79.99,
    features: ['All Pro Features', 'Identity Protection', 'Password Manager', 'Secure Backup']
  }
];