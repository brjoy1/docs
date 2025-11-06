/**
 * Script de integração WhatsApp - Base Nobre
 * Gerencia abertura de chat e tracking
 */

// Configuração do WhatsApp
const WHATSAPP_CONFIG = {
  number: '5511999999999', // ALTERE PARA SEU NÚMERO
  defaultMessage: 'Olá! Gostaria de solicitar um orçamento para higienização de carpetes.',
};

/**
 * Abre o chat do WhatsApp
 * @param customMessage - Mensagem personalizada (opcional)
 * @param trackingData - Dados de rastreamento (opcional)
 */
export function abrirChatBaseNobre(
  customMessage?: string,
  trackingData?: { source?: string; campaign?: string }
): void {
  const message = customMessage || WHATSAPP_CONFIG.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodedMessage}`;

  // Tracking opcional
  if (trackingData) {
    console.log('📊 Tracking:', trackingData);
    // Aqui você pode adicionar integração com Google Analytics, Meta Pixel, etc.
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: trackingData.source || 'hero',
        value: 1,
      });
    }
  }

  // Abre em nova aba
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Inicializa a função globalmente para uso inline
 */
if (typeof window !== 'undefined') {
  (window as any).abrirChatBaseNobre = abrirChatBaseNobre;
}
