export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

export interface ReasonItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface NavLink {
  label: string;
  href: string;
}