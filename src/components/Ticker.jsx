export default function Ticker() {
  const items = ['SUPORTE', 'REDES', 'INFRAESTRUTURA', 'SITES', 'SISTEMAS', 'HELPDESK', 'IA & AUTOMAÇÃO', 'AGENTES DE IA'];
  const seq = [...items, ...items];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="tickerTrack">
        {seq.map((t, i) => (
          <span key={i} className={t === 'SUPORTE' ? 'hl' : undefined}>
            {t === 'SUPORTE' ? <b>SUPORTE</b> : t} •
          </span>
        ))}
      </div>
    </div>
  );
}
