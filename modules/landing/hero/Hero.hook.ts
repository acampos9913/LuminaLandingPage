import { useCallback, useState, useEffect } from 'react';
import { WHATSAPP_NUMBER, DEMO_MESSAGE } from '../../../constants';

export const useHero = () => {
  const handleDemoClick = useCallback(() => {
    const encodedMessage = encodeURIComponent(DEMO_MESSAGE);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }, []);

  const handleDocsClick = useCallback(() => {
    const docsElement = document.getElementById('documentation');
    if (docsElement) {
      docsElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Typewriter logic
  const [typedText, setTypedText] = useState("");
  const fullText = "Crea una plataforma SaaS para gestión de inventarios con dashboard analítico, modo oscuro y autenticación biométrica...";
  
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const animateTyping = () => {
      if (!isDeleting) {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
          timeoutId = setTimeout(animateTyping, 40 + Math.random() * 30);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(animateTyping, 3000);
        }
      } else {
        if (index > 0) {
          setTypedText(fullText.slice(0, index - 1));
          index--;
          timeoutId = setTimeout(animateTyping, 20);
        } else {
          isDeleting = false;
          timeoutId = setTimeout(animateTyping, 1000);
        }
      }
    };

    timeoutId = setTimeout(animateTyping, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  return {
    handleDemoClick,
    handleDocsClick,
    typedText
  };
};