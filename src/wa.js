const WA_NUMBER = '5521991667712';

export const waLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA = {
  geral: waLink(
    'Olá! Quero falar com um especialista da WS Engenharia Digital.'
  ),
  manutencao: waLink(
    'Olá! Preciso de assistência técnica / manutenção de computadores. Podem me passar um orçamento?'
  ),
  redes: waLink(
    'Olá! Preciso de serviços de redes e infraestrutura de TI. Podem me passar um orçamento?'
  ),
  sites: waLink(
    'Olá! Quero um orçamento para desenvolvimento de site / loja virtual.'
  ),
  sistemas: waLink(
    'Olá! Preciso de um sistema personalizado (web). Podem me orçar?'
  ),
  suporte: waLink(
    'Olá! Tenho interesse em suporte técnico / helpdesk para minha empresa. Podem me atender?'
  ),
  automacao: waLink(
    'Olá! Quero avaliar como IA e automação podem ajudar minha empresa. Podem me orientar?'
  ),
};
