import { motion } from "framer-motion";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import cityBg from "@/assets/backgrounds/usecases-city.jpg";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const useCases = [
  { title: "Expansão de negócios", desc: "Identificamos as melhores rotas para crescer, por expansão orgânica ou via aquisições." },
  { title: "Compra e venda", desc: "Avaliações que sustentam negociações justas em operações de compra ou alienação." },
  { title: "Disputas entre sócios", desc: "Valor de referência claro para acordos equilibrados em reestruturações societárias." },
  { title: "Combinação de empresas", desc: "Análise de ativos e ajuste de valor com clareza para incorporações e fusões." },
  { title: "Reavaliação de ativos", desc: "Asseguramos que os ativos estejam corretamente representados no balanço patrimonial." },
  { title: "Economia tributária", desc: "Laudos que apoiam o reconhecimento de ganhos e perdas, com eficiência fiscal." },
  { title: "Joint ventures", desc: "Identificamos sinergias e oportunidades de ganho na formação de parcerias estratégicas." },
  { title: "Benchmark setorial", desc: "Posicionamento da sua empresa frente a comparáveis do setor com dados de mercado." },
  { title: "Controle de desempenho", desc: "Monitoramos as alavancas que aumentam o valor da empresa para sócios e acionistas." },
  { title: "Política de dividendos", desc: "Definimos diretrizes de distribuição alinhadas às metas de crescimento da companhia." },
];

const UseCasesSection = () => {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-hero overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={cityBg} alt="" className="w-full h-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 22% 7%) 0%, hsl(220 22% 7% / 0.75) 25%, hsl(220 22% 7% / 0.85) 75%, hsl(220 22% 7%) 100%)" }} />
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
            Quando avaliar
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest"
          >
            Momentos em que valuation <em className="italic font-normal text-gold">muda a decisão.</em>
          </AnimatedHeading>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-12"
        >
          {useCases.map((uc) => (
            <motion.div
              key={uc.title}
              variants={{
                hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="group border-t border-border pt-6 transition-all duration-500 hover:border-[hsl(38_55%_58%_/_0.6)]"
            >
              <h3 className="font-display text-lg font-medium mb-3 tracking-tight transition-colors group-hover:text-gold">
                {uc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm tracking-wide text-gold border-b border-gold-soft pb-1 hover:border-[hsl(var(--gold))] transition-colors"
          >
            Converse com nossa equipe
            <motion.span
              aria-hidden
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
