export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot">
        <img src="/logo-300.webp" alt="WS Engenharia Digital" className="foot-logo" />
        <span>© {new Date().getFullYear()} WS Engenharia Digital. Todos os direitos reservados.</span>
        <span>Desenvolvido por WS Engenharia Digital | Nova Iguaçu, RJ</span>
      </div>
    </footer>
  );
}
