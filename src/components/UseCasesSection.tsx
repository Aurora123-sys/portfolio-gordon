import { motion } from "framer-motion";

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
    <section className="py-32 md:py-40 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
            Quando avaliar
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest">
            Momentos em que valuation
            <span className="italic font-normal text-gold"> muda a decisão.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-10 gap-y-12">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 5) * 0.05 }}
              className="border-t border-border pt-6"
            >
              <h3 className="font-display text-lg font-medium mb-3 tracking-tight">
                {uc.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-wide text-gold border-b border-gold-soft pb-1 hover:border-[hsl(var(--gold))] transition-colors"
          >
            Converse com nossa equipe
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCasesSection;
