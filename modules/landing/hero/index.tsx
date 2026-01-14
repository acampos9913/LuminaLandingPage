import React from 'react';
import { HeroView } from './Hero.view';
import { useHero } from './Hero.hook';

export const Hero: React.FC = () => {
  const { handleDemoClick, handleDocsClick, typedText } = useHero();
  return <HeroView onDemoClick={handleDemoClick} onDocsClick={handleDocsClick} typedText={typedText} />;
};