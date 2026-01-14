import React from 'react';
import { PricingView } from './Pricing.view';
import { usePricing } from './Pricing.hook';
import { PLANS } from '../../../constants';

export const Pricing: React.FC = () => {
  const { handlePlanSelect } = usePricing();
  
  return (
    <PricingView 
      plans={PLANS} 
      onPlanSelect={handlePlanSelect} 
    />
  );
};