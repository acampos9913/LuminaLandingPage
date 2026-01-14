import { useCallback } from 'react';
import { WHATSAPP_NUMBER } from '../../../constants';

export const usePricing = () => {
  const handlePlanSelect = useCallback((planName: string) => {
    const message = `Hola, quiero adquirir el paquete de créditos "${planName}" en LUMINA.SH.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }, []);

  return {
    handlePlanSelect
  };
};