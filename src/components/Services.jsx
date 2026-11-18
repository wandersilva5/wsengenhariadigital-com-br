import { WA } from '../wa';

const services = [
  {
    icon: '⚡',
    title: 'Suporte Técnico & Helpdesk',
    desc: 'Atendimento remoto ou presencial com contrato fixo para empresas que precisam de previsibilidade e resposta.',
    items: ['Suporte remoto', 'Contratos mensais de TI', 'Atendimento presencial', 'Gestão de equipamentos'],
    link: WA.suporte,
    big: true,
  },
  {
    icon: '⌁',
    title: 'Redes & Infraestrutura',
    desc: 'Rede cabeada e Wi-Fi estáveis para sua operação não ficar refém da tecnologia.',
    link: WA.redes,
  },
  {
    icon: '▣',
    title: 'Manutenção de Micros',
    desc: 'Preventiva, upgrades, otimização e assistência para desktops e notebooks.',
    link: WA.manutencao,
  },
  {
    icon: '◇',
    title: 'Sistemas Personalizados',
    desc: 'Automatize processos, integre ferramentas e transforme tarefas manuais em fluxo digital.',
    link: WA.sistemas,
  },
  {
    icon: '◩',
    title: 'Sites que representam sua empresa',
    desc: 'Sites institucionais, landing pages e lojas virtuais responsivos e focados em performance.',
    link: WA.sites,
  },
  {
    icon: '◎',
    title: 'Helpdesk Próprio',
    desc: 'Chamados, histórico, relatórios e indicadores para acompanhar sua TI com clareza.',
    link: WA.suporte,
  },
];

const stats = [
  { n: '30+', l: 'anos de experiência' },
  { n: '2000+', l: 'serviços realizados' },
  { n: '24h', l: 'tempo médio de resposta' },
  { n: '1', l: 'parceiro para sua tecnologia' },
];

export default function Services() {
  return (
    <section className="section dark" id="solucoes">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div className="kicker">O que a WS resolve</div>
          <h2 className="title">
            Tecnologia feita para o seu negócio — não para complicar sua rotina.
          </h2>
          <p className="lead">
            Escolha a solução que você precisa hoje. Se não souber qual é, conte
            o problema e nós ajudamos a encontrar o caminho.
          </p>
        </div>

        <div className="bento">
          {services.map((s) => (
            <article key={s.title} className={`service reveal${s.big ? ' big' : ''}`}>
              <div className="sicon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.items && (
                <ul>
                  {s.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              )}
              <a className="arrow" href={s.link} target="_blank" rel="noopener noreferrer" aria-label={`Orçamento: ${s.title}`}>↗</a>
            </article>
          ))}
        </div>

        <div className="stats reveal">
          {stats.map((s) => (
            <div key={s.l} className="stat">
              <b>{s.n}</b>
              <span>{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
