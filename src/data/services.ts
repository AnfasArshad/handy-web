import { ServiceItem } from '@/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive and high-performance websites and web applications.',
    iconName: 'Globe',
    features: [
      'Responsive design across all devices',
      'Modern web frameworks & clean architecture',
      'Fast loading speeds & SEO optimization',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Software solutions designed around specific business requirements.',
    iconName: 'Code',
    features: [
      'Tailored to your specific workflows',
      'Scalable backend systems & APIs',
      'Secure, maintainable codebases',
    ],
  },
  {
    id: 'business-systems',
    title: 'Business Management Systems',
    description: 'Digital systems that help organizations simplify and manage their operations.',
    iconName: 'Layers',
    features: [
      'Intuitive admin dashboards & controls',
      'Centralized operational records & reporting',
      'Role-based permissions & security',
    ],
  },
  {
    id: 'support-maintenance',
    title: 'Software Support & Maintenance',
    description: 'Ongoing improvements, maintenance and technical support for software solutions.',
    iconName: 'ShieldCheck',
    features: [
      'Continuous performance monitoring',
      'Bug fixes & system updates',
      'Reliable technical assistance',
    ],
  },
];
