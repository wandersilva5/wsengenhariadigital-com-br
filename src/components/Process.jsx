const steps = [
  {
    num: '01 / DIAGNÓSTICO',
    title: 'Conte o que está acontecendo',
    desc: 'Conversamos sobre sua necessidade e avaliamos a situação sem custo.',
  },
  {
    num: '02 / ORÇAMENTO',
    title: 'Definimos a solução',
    desc: 'Você recebe uma proposta clara, sem taxas escondidas.',
  },
  {
    num: '03 / EXECUÇÃO',
    title: 'Serviço realizado',
    desc: 'Serviço realizado no prazo combinado, presencial ou remoto.',
  },
  {
    num: '04 / SUPORTE CONTÍNUO',
    title: 'Acompanhamento',
    desc: 'Ficamos disponíveis para manter tudo funcionando depois.',
  },
];

export default function Process() {
  return (
    <section className="section dark" id="processo">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div className="kicker">Sem complicação</div>
          <h2 className="title">
            Você conta o problema. A gente encontra o caminho.
          </h2>
          <p className="lead">
            Um processo simples para sair do “precisamos resolver isso” e chegar
            a uma solução clara.
          </p>
        </div>
        <div className="steps">
          {steps.map((s) => (
            <div key={s.num} className="step reveal">
              <div className="num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="process-image reveal">
          <img src="/como-funciona.webp" alt="WS Engenharia Digital — processo de atendimento" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
