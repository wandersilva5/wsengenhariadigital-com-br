const quotes = [
  {
    text: '“A WS transformou nossa infraestrutura de TI. Antes tínhamos quedas de rede toda semana, agora tudo funciona perfeitamente. Atendimento rápido e profissional.”',
    name: 'Roberto Costa',
    role: 'Diretor — Costa & Associados',
  },
  {
    text: '“O sistema personalizado que desenvolveram automatizou todo nosso processo de vendas. Economizamos horas de trabalho manual todo dia.”',
    name: 'Mariana Santos',
    role: 'Gerente — Loja Bella Moda',
  },
  {
    text: '“Contratamos o suporte mensal e a diferença foi imediata. Os chamados são resolvidos rapidamente e o helpdesk próprio nos dá total controle.”',
    name: 'Paulo Lima',
    role: 'CEO — Tech Solutions RJ',
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="clientes">
      <div className="wrap">
        <div className="sectionHead reveal">
          <div className="kicker">Quem já confia</div>
          <h2 className="title">
            Tecnologia é boa quando você sente a diferença na operação.
          </h2>
          <p className="lead">Depoimentos apresentados pela WS Engenharia Digital.</p>
        </div>
        <div className="quoteGrid">
          {quotes.map((q) => (
            <article key={q.name} className="quote reveal">
              <div className="stars">★★★★★</div>
              <p>{q.text}</p>
              <b>{q.name}</b>
              <small>{q.role}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
