import { WA } from '../wa';

const checks = [
  {
    t: 'Um único parceiro',
    d: 'Infraestrutura, suporte, sites e sistemas no mesmo lugar.',
  },
  {
    t: 'Atendimento local',
    d: 'Base em Nova Iguaçu e atendimento nas cidades da região: Belford Roxo, Duque de Caxias, São João de Meriti, Queimados, Mesquita e mais.',
  },
  {
    t: 'Quando o pronto não serve, criamos',
    d: 'Sistemas sob medida para processos específicos da sua empresa.',
  },
  {
    t: 'TI tradicional + IA e automação',
    d: 'Suporte e infraestrutura que você já conhece, agora com agentes de IA, automação de tarefas e integração de sistemas.',
  },
];

export default function Diferenciais() {
  return (
    <section className="section" id="diferenciais">
      <div className="wrap split">
        <div className="stickyBox reveal">
          <div className="network">
            <div className="node n1">💻</div>
            <div className="node n2">☁</div>
            <div className="node n3">📊</div>
            <div className="node n4">WS</div>
            <i className="netLine l1" />
            <i className="netLine l2" />
            <i className="netLine l3" />
            <i className="pulseLine" />
          </div>
        </div>
        <div className="reveal">
          <div className="kicker">Por que a WS</div>
          <h2 className="title">
            Pare de apagar incêndios. Comece a ter tecnologia trabalhando a favor.
          </h2>
          <p className="lead">
            A ideia é simples: você cuida do negócio; a WS cuida da tecnologia
            que sustenta a operação.
          </p>
          <div className="checks">
            {checks.map((c) => (
              <div key={c.t} className="check">
                <span className="checkmark">✓</span>
                <div>
                  <b>{c.t}</b>
                  <p>{c.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="actions" style={{ marginTop: 24 }}>
            <a className="btn btn-primary" href={WA.geral} target="_blank" rel="noopener noreferrer">
              Conversar com a WS →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
