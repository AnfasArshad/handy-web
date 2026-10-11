import { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why HandySof', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export const WHATSAPP_PHONE_NUMBER = '94726108293';
export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello HandySof team! I would like to inquire about your software development services and discuss a project.';

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SOCIAL_LINKS = {
  email: 'mailto:handysof@outlook.com',
  whatsapp: getWhatsAppUrl(),
  linkedin: 'https://www.linkedin.com/company/handysof',
  github: 'https://github.com/handysof',
};

