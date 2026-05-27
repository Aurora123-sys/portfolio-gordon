import { motion } from "framer-motion";

const differentials = [
  {
    title: "Rigor técnico",
    desc: "Laudos com fundamentação sólida e metodologia reconhecida internacionalmente — aderente às melhores práticas de mercado.",
  },
  {
    title: "Análise profunda",
    desc: "Vamos além dos números. Consideramos ativos intangíveis, posicionamento competitivo e o valor real percebido pelo mercado.",
  },
  {
    title: "Intermediação em M&A",
    desc: "Assessoria completa em operações de compra e venda de empresas, com confidencialidade e foco em resultado.",
  },
  {
    title: "Visão estratégica",
    desc: "Diagnósticos que iluminam decisões críticas — sucessão, captação, reestruturação societária e expansão.",
  },
  {
    title: "Confidencialidade",
    desc: "Atendimento direto com o sócio responsável e protocolo rigoroso de sigilo em todas as etapas do processo.",
  },
  {
    title: "Independência",
    desc: "Análises livres de conflito de interesse, apresentadas com transparência e linguagem acessível.",
  },
];

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
            O que nos diferencia
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest">
            Excelência técnica,
            <span className="italic font-normal text-gold"> entregue com calma deliberada.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className="bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500"
            >
              <span className="font-display text-sm text-gold mb-6 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
