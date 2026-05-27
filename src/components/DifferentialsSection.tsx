import { motion } from "framer-motion";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import marbleBg from "@/assets/backgrounds/differentials-marble.jpg";

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
    <section id="diferenciais" className="relative py-32 md:py-40 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={marbleBg} alt="" className="w-full h-full object-cover opacity-[0.12]" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 20% 6%) 0%, hsl(220 20% 6% / 0.85) 30%, hsl(220 20% 6% / 0.85) 70%, hsl(220 20% 6%) 100%)" }} />
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
            O que nos diferencia
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest"
          >
            Excelência técnica, <em className="italic font-normal text-gold">entregue com calma deliberada.</em>
          </AnimatedHeading>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="bg-background p-10 md:p-12 hover:bg-card transition-colors duration-500 group cursor-default relative overflow-hidden"
            >
              <motion.div
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: (i % 3) * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  originX: 0,
                  background:
                    "linear-gradient(90deg, transparent, hsl(38 55% 58% / 0.5), transparent)",
                }}
                className="absolute top-0 left-0 right-0 h-px"
              />
              <span className="font-display text-sm text-gold mb-6 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-medium mb-4 tracking-tight transition-transform duration-500 group-hover:translate-x-1">
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
