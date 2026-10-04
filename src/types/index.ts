export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Globe' | 'Code' | 'Layers' | 'ShieldCheck';
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  tags: string[];
  logoSrc?: string;
  logoAlt?: string;
  highlights?: string[];
  status: 'coming_soon' | 'active' | 'in_development';
}

export interface WhyPoint {
  title: string;
  description: string;
  iconName: 'Users' | 'Cpu' | 'TrendingUp';
}
