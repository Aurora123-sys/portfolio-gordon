import { motion } from "framer-motion";
import portrait from "@/assets/fernando-portrait.jpg";
import bookCover from "@/assets/book-cover.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium">
              Fundador
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest mb-3">
              Fernando <span className="italic font-normal text-gold">Cabral</span>
            </h2>
            <p className="text-muted-foreground text-sm uppercase tracking-[0.18em] mb-10">
              Especialista em valuation &middot; M&amp;A
            </p>

            <div className="space-y-6 text-foreground/80 leading-relaxed text-base max-w-xl">
              <p>
                Fernando Dias Cabral atua há mais de duas décadas em finanças corporativas, com foco em avaliação de empresas e operações de fusões e aquisições. Seu trabalho é marcado pelo rigor técnico e por uma abordagem multidisciplinar que vai além dos números.
              </p>
              <p>
                Com histórico em análise de custos, controladoria e construção de dashboards gerenciais, ajuda empresas a entender o valor real de seus ativos — sempre com visão estratégica e linguagem direta.
              </p>
              <p>
                Autor do livro <em>&ldquo;Avaliação de Empresas e os Desafios que Vão Além do Fair Value&rdquo;</em>, publicado pela editora Atlas. A obra confronta teoria e prática de valuation a partir de casos reais.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={portrait}
                alt="Fernando Cabral"
                className="rounded-sm w-full max-w-md h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <img
                src={bookCover}
                alt="Livro Avaliação de Empresas"
                className="absolute -bottom-10 -right-6 w-40 md:w-48 shadow-2xl rounded-sm hidden sm:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
