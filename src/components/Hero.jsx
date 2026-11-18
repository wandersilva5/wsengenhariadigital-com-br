import { WA } from '../wa';
import { WhatsAppIcon } from './FloatingWhatsApp';

export default function Hero() {
  return (
    <section className="hero wrap" id="inicio">
      <div className="gridbg" />
      <div className="reveal">
        <span className="eyebrow">
          <i className="live" /> TI empresarial • Nova Iguaçu & Baixada
        </span>
        <h1>
          Sua empresa merece uma TI que <span className="grad">não atrapalha.</span>
        </h1>
        <p className="heroText">
          Computadores, rede, suporte, sites e sistemas personalizados — tudo
          conectado a um único parceiro para sua operação continuar em movimento.
        </p>
        <div className="actions">
          <a className="btn btn-wa" href={WA.geral} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Falar com a WS Engenharia Digital
          </a>
          <a className="btn btn-ghost" href="#solucoes">Ver soluções ↓</a>
        </div>
        <div className="proof">
          <span><i>✓</i><b>30+ anos</b> de experiência</span>
          <span><i>✓</i><b>2000+ clientes</b> atendidos</span>
          <span><i>✓</i> atendimento personalizado</span>
        </div>
      </div>

      <div className="visual reveal">
        <div className="orb" />
        <div className="hero-shot">
          <img src="/hero.webp" alt="WS Engenharia Digital — infraestrutura de TI para empresas" />
        </div>
        <div className="floatCard">
          <b>✓ Problema identificado</b>
          <small>Próximo passo: solução personalizada</small>
        </div>
      </div>
    </section>
  );
}
