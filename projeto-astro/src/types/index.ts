/**
 * Tipos TypeScript - Base Nobre
 * Definições de tipos para componentes
 */

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  icon?: string;
  href?: string;
  onClick?: string;
  dataTrack?: string;
  class?: string;
}

export interface HighlightItem {
  icon: string;
  text: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface CTAButton {
  text: string;
  icon: string;
  onClick: string;
  dataTrack?: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: CTAButton;
  secondaryCta?: CTAButton;
  highlights?: HighlightItem[];
  stats?: StatItem[];
}

export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
}

export interface TrackingData {
  source?: string;
  campaign?: string;
}
