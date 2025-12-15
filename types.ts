import { LucideIcon } from 'lucide-react';

export interface PackageFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

export interface PricingPackage {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  originalPrice?: string; // Original price before discount
  period: string; // e.g., "شهريًا" or "مرة واحدة"
  isPopular: boolean;
  isTrial?: boolean;
  features: PackageFeature[];
  buttonText: string;
  ctaColor?: string;
  description?: string;
}

export interface ServiceAddon {
  title: string;
  price: string;
  icon: LucideIcon;
}

export interface WorkStep {
  number: string;
  title: string;
  description: string;
}