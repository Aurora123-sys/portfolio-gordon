import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 bg-grid-faint opacity-60" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 55% 58% / 0.4), transparent)" }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-medium">
              Avaliação de empresas · M&amp;A
            </p>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tightest mb-10">
              O valor justo da sua empresa,
              <br className="hidden md:block" />
              <span className="italic font-normal text-gold"> revelado com rigor.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed">
              Mais de duas décadas dedicadas à valuation independente e à intermediação de operações de fusões e aquisições — com método, transparência e visão estratégica.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(38_55%_65%)] transition-colors"
            >
              Solicitar avaliação
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="border-soft rounded-sm bg-[hsl(220_18%_8%)]/60 backdrop-blur-sm p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Histórico
              </p>
              <div className="space-y-8">
                <div>
                  <p className="font-display text-6xl md:text-7xl font-medium text-gold leading-none">
                    300<span className="text-foreground/40 text-4xl align-top">+</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Laudos de avaliação realizados
                  </p>
                </div>
                <div className="divider-rule" />
                <div>
                  <p className="font-display text-6xl md:text-7xl font-medium text-foreground leading-none">
                    20<span className="text-foreground/40 text-4xl align-top">+</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Anos em finanças corporativas
                  </p>
                </div>
                <div className="divider-rule" />
                <div>
                  <p className="font-display text-5xl md:text-6xl font-medium text-foreground leading-none">
                    R$ 82<span className="text-foreground/40 text-3xl align-top"> Mi</span>
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Em operações de M&amp;A intermediadas
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 6%))" }}
        aria-hidden
      />
    </section>
  );
};

export default HeroSection;
