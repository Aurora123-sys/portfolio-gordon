import { motion } from "framer-motion";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import cityNight from "@/assets/backgrounds/methodologies-city.jpg";

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
    <section id="metodologias" className="relative py-32 md:py-40 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={cityNight} alt="" className="w-full h-full object-cover opacity-55" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 20% 6%) 0%, hsl(220 20% 6% / 0.45) 25%, hsl(220 20% 6% / 0.55) 75%, hsl(220 20% 6%) 100%)" }} />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium"
          >
            Metodologias
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest"
          >
            Três abordagens, <em className="italic font-normal text-gold">uma leitura completa de valor.</em>
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {methods.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="bg-background p-10 md:p-12 flex flex-col group transition-colors duration-500 hover:bg-card cursor-default"
            >
              <motion.span
                className="font-display text-3xl text-gold mb-8 inline-block"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                {m.num}
              </motion.span>
              <h3 className="font-display text-2xl md:text-3xl font-medium mb-3 tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5">
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
