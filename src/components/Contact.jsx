import { useState } from 'react';
import { waLink } from '../wa';
import { WhatsAppIcon } from './FloatingWhatsApp';

export default function Contact() {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    servico: 'Suporte Técnico & Helpdesk',
    mensagem: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.nome || '—'}${
      form.empresa ? `, da empresa ${form.empresa}` : ''
    }. Tenho interesse em: ${form.servico}. ${form.mensagem}`;
    window.open(waLink(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="contact" id="contato">
      <div className="wrap">
        <div className="contactBox reveal">
          <div className="contactInner">
            <div>
              <div className="kicker">Pronto para resolver?</div>
              <h2>
                Seu próximo problema de TI pode ser o último que você resolve
                sozinho.
              </h2>
              <p>
                Fale com a WS, explique o que sua empresa precisa e receba
                orientação sobre o melhor caminho.
              </p>
              <a
                className="btn btn-wa"
                href={waLink('Olá! Quero solicitar um orçamento para minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} /> Solicitar orçamento pelo WhatsApp ↗
              </a>
            </div>
            <div className="contactCard">
              <small>ATENDIMENTO</small>
              <strong>Nova Iguaçu + Baixada Fluminense</strong>
              <small>Seg a Sex: 8h às 18h • Sáb: 8h às 12h</small>
              <a className="btn btn-primary" href="tel:+5521991667712">
                Ligar: (21) 99166-7712
              </a>
              <a
                className="btn btn-ghost"
                style={{ marginTop: 10, width: '100%' }}
                href={waLink('Olá! Preciso de atendimento urgente.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                ⚡ Atendimento urgente
              </a>
            </div>
          </div>

          <form className="contactForm" onSubmit={handleSubmit}>
            <h3>Pedir orçamento grátis</h3>
            <div className="formRow">
              <div className="formGroup">
                <label htmlFor="nome">Seu nome</label>
                <input
                  id="nome"
                  name="nome"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Como podemos te chamar?"
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="empresa">Empresa (opcional)</label>
                <input
                  id="empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>
            <div className="formGroup">
              <label htmlFor="servico">Serviço desejado</label>
              <select id="servico" name="servico" value={form.servico} onChange={handleChange}>
                <option>Suporte Técnico & Helpdesk</option>
                <option>Redes & Infraestrutura</option>
                <option>Manutenção de Micros</option>
                <option>Sistemas Personalizados</option>
                <option>Desenvolvimento de Sites</option>
                <option>Helpdesk Próprio</option>
                <option>IA & Automação / Agentes de IA</option>
                <option>Outro</option>
              </select>
            </div>
            <div className="formGroup">
              <label htmlFor="mensagem">Descreva sua necessidade</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Ex.: 5 computadores lentos, preciso de orçamento para manutenção..."
              />
            </div>
            <button type="submit" className="btn btn-wa" style={{ width: '100%' }}>
              <WhatsAppIcon size={18} /> Enviar pelo WhatsApp
            </button>
            <p className="formNote">
              Ao enviar, você será direcionado ao WhatsApp com a mensagem
              preenchida.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
