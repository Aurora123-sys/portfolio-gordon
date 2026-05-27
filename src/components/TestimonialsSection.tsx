import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Os serviços prestados pela Gordon Valuations se destacaram de forma única. Desde o primeiro contato, percebi o cuidado, a seriedade e o profundo conhecimento com que tratam cada detalhe. Oferecem uma visão estratégica que vai além dos números.",
    name: "Jose Benedito",
    role: "Empresário",
  },
  {
    text: "A Gordon Valuations avaliou nossa empresa e nos forneceu um trabalho de alta excelência com detalhamento minucioso dos números. Sem o trabalho dele não teríamos conhecimento do valor justo do nosso negócio.",
    name: "Sérgio Makoto Kurauchi",
    role: "Premier Logística e Transporte",
  },
  {
    text: "Fizemos valuation e assessoria para a saída de um sócio com Fernando Cabral. Atendeu-nos em todas as etapas das quais, sem ele, não teríamos tido êxito.",
    name: "Luiz Fernando Doin",
    role: "BTS Traduções",
  },
  {
    text: "O trabalho dele é sempre muito preciso e detalhado, proporcionando uma visão clara do valor real das empresas. Essa expertise tem sido fundamental para orientar nossos clientes em decisões estratégicas importantes.",
    name: "Paulo Di Madeo",
    role: "CDM Contabilidade",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-32 md:py-40 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest">
            Confiança construída
            <span className="italic font-normal text-gold"> ao longo de duas décadas.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 2) * 0.1 }}
              className="flex flex-col"
            >
              <span className="font-display text-6xl text-gold leading-none mb-6" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="font-display text-xl md:text-2xl leading-relaxed font-normal text-foreground/95 mb-8 -mt-2">
                {t.text}
              </blockquote>
              <figcaption className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
