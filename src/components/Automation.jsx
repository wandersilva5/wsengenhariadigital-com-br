import { WA } from '../wa';

const items = [
  {
    icon: '✦',
    title: 'Assistentes de IA',
    desc: 'Agentes e assistentes para atendimento, suporte interno, pesquisa, documentos e tarefas operacionais.',
    tags: ['Chatbots', 'Agentes', 'Base de conhecimento'],
  },
  {
    icon: '⚡',
    title: 'Automação inteligente',
    desc: 'Fluxos que conectam formulários, planilhas, sistemas, APIs, e-mail, CRM e IA para executar tarefas automaticamente.',
    tags: ['Workflows', 'APIs', 'Integrações'],
  },
  {
    icon: '◎',
    title: 'IA para documentos',
    desc: 'Extração, classificação, resumo, consulta e organização de informações em documentos e arquivos.',
    tags: ['PDF', 'OCR', 'RAG'],
  },
  {
    icon: '◈',
    title: 'IA para atendimento',
    desc: 'Triagem, respostas, qualificação de leads e encaminhamento para equipes sem perder o controle humano.',
    tags: ['WhatsApp', 'Web', 'CRM'],
  },
  {
    icon: '▣',
    title: 'Aplicações web sob medida',
    desc: 'Ferramentas internas, dashboards e apps em nuvem para digitalizar processos que não cabem em soluções prontas.',
    tags: ['Web Apps', 'Dashboards', 'Cloud'],
  },
  {
    icon: '⌁',
    title: 'IA local e privada',
    desc: 'Quando privacidade e controle importam, avaliamos arquiteturas locais ou privadas para determinados fluxos de IA.',
    tags: ['LLMs', 'Privacidade', 'Infraestrutura'],
  },
];

const ondeAtuar = [
  'Automação administrativa',
  'Atendimento e suporte',
  'Qualificação de leads',
  'Relatórios automáticos',
  'Documentos e contratos',
  'Integração entre sistemas',
  'Sistemas internos',
  'Dashboards e dados',
  'Infraestrutura em nuvem',
  'Consultoria tecnológica',
];

const metodo = [
  {
    n: '01 — DESCOBRIR',
    t: 'Mapear',
    d: 'Entender rotina, equipe, sistemas e tarefas que consomem tempo.',
  },
  {
    n: '02 — PRIORIZAR',
    t: 'Encontrar',
    d: 'Selecionar oportunidades de maior impacto e menor complexidade inicial.',
  },
  {
    n: '03 — CONSTRUIR',
    t: 'Implementar',
    d: 'Desenvolver e integrar a solução com segurança e foco em uso real.',
  },
];

export default function Automation() {
  return (
    <section className="section automation" id="automacao">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div className="kicker">Novo — IA & Automação</div>
          <h2 className="title">
            IA não precisa ser complicada. Precisa gerar resultado.
          </h2>
          <p className="lead">
            Camada nova de serviços da WS: encontramos processos que podem ficar
            mais rápidos, inteligentes e escaláveis — sem trocar nada do que
            você já usa hoje. O objetivo não é colocar “IA” no site: é eliminar
            trabalho repetitivo.
          </p>
        </div>

        <div className="autoGrid">
          {items.map((s) => (
            <article key={s.title} className="autoCard reveal">
              <div className="sicon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="tagList">
                {s.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <a
                className="arrow"
                href={WA.automacao}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Orçamento: ${s.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>

        <div className="autoBand reveal">
          <div className="autoBandMain">
            <div className="kicker">Onde podemos atuar</div>
            <h3>Do primeiro processo automatizado até uma operação digital completa.</h3>
            <div className="autoChecks">
              {ondeAtuar.map((c) => (
                <span key={c} className="autoCheck">✓ {c}</span>
              ))}
            </div>
          </div>
          <div className="autoSteps">
            {metodo.map((m) => (
              <div key={m.n} className="autoStep">
                <span className="num">{m.n}</span>
                <h4>{m.t}</h4>
                <p>{m.d}</p>
              </div>
            ))}
            <a
              className="btn btn-wa"
              href={WA.automacao}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: 14 }}
            >
              Quero automatizar minha empresa →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
