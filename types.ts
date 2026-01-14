import React from 'react';

export interface Plan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}