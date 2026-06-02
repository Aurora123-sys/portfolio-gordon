const FooterSection = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-display text-xl font-semibold tracking-wide mb-4">
              GORDON<span className="text-gold font-normal italic"> Valuations</span>
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Avaliação independente de empresas e intermediação em fusões e aquisições.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contato</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>(11) 3061-0923</li>
              <li className="whitespace-nowrap text-xs sm:text-sm">fernando@avaliacaodeempresa.com.br</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Navegação</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="text-foreground/80 hover:text-gold transition-colors">Sobre</a></li>
              <li><a href="#diferenciais" className="text-foreground/80 hover:text-gold transition-colors">Diferenciais</a></li>
              <li><a href="#metodologias" className="text-foreground/80 hover:text-gold transition-colors">Metodologias</a></li>
              <li><a href="#contato" className="text-foreground/80 hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Gordon Valuations. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs tracking-wide">São Paulo &middot; Brasil</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
