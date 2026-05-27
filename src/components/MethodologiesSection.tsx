import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const methods = [
  {
    num: "I",
    title: "Avaliação contábil",
    subtitle: "Valor baseado nos ativos físicos",
    desc: "Calcula o valor da empresa a partir do patrimônio registrado, considerando custo histórico ou valor de mercado dos ativos. Adequada para negócios com forte base patrimonial material.",
  },
  {
    num: "II",
    title: "Múltiplos de mercado",
    subtitle: "Comparação com pares do setor",
    desc: "Utiliza referências de transações recentes e empresas comparáveis para refletir o valor relativo do negócio em seu segmento, com base em indicadores setoriais.",
  },
  {
    num: "III",
    title: "Fluxo de caixa descontado",
    subtitle: "Valor pelo potencial de geração",
    desc: "Projeta os fluxos de caixa futuros e os traz ao valor presente. Mede o valor econômico real da empresa pelas perspectivas de crescimento e geração de caixa.",
  },
];

const MethodologiesSection = () => {
  return (
    <section id="metodologias" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
            Metodologias
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest">
            Três abordagens,
            <span className="italic font-normal text-gold"> uma leitura completa de valor.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12 }}
              className="bg-background p-10 md:p-12 flex flex-col"
            >
              <span className="font-display text-3xl text-gold mb-8">{m.num}</span>
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-3 tracking-tight">
                {m.title}
              </h3>
              <p className="text-gold/80 text-xs uppercase tracking-[0.2em] font-medium mb-6">
                {m.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-10">
                {m.desc}
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] uppercase text-foreground border-b border-border pb-2 self-start hover:text-gold hover:border-[hsl(var(--gold))] transition-colors"
              >
                Saiba mais
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologiesSection;
