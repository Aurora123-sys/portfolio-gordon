import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import portrait from "@/assets/fernando-portrait.jpg";
import bookCover from "@/assets/book-cover.png";
import libraryBg from "@/assets/backgrounds/about-library.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const bookY = useTransform(scrollYProgress, [0, 1], [60, -20]);

  return (
    <section id="sobre" className="relative py-32 md:py-40 bg-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={libraryBg} alt="" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 20% 6%) 0%, hsl(220 20% 6% / 0.80) 30%, hsl(220 20% 6% / 0.80) 70%, hsl(220 20% 6%) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(220 20% 6% / 0.92) 0%, hsl(220 20% 6% / 0.50) 50%, hsl(220 20% 6% / 0.80) 100%)" }} />
      </div>
      <div className="container relative mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium"
            >
              Fundador
            </motion.p>
            <AnimatedHeading
              as="h2"
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest mb-3"
            >
              Fernando <em className="italic font-normal text-gold">Cabral</em>
            </AnimatedHeading>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground text-sm uppercase tracking-[0.18em] mb-10"
            >
              Especialista em valuation &middot; M&amp;A
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.15, delayChildren: 0.4 }}
              className="space-y-6 text-foreground/80 leading-relaxed text-base max-w-xl"
            >
              {[
                <>Fernando Dias Cabral atua há mais de duas décadas em finanças corporativas, com foco em avaliação de empresas e operações de fusões e aquisições. Seu trabalho é marcado pelo rigor técnico e por uma abordagem multidisciplinar que vai além dos números.</>,
                <>Com histórico em análise de custos, controladoria e construção de dashboards gerenciais, ajuda empresas a entender o valor real de seus ativos — sempre com visão estratégica e linguagem direta.</>,
                <>Autor do livro <em>&ldquo;Avaliação de Empresas e os Desafios que Vão Além do Fair Value&rdquo;</em>, publicado pela editora Atlas. A obra confronta teoria e prática de valuation a partir de casos reais.</>,
              ].map((p, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ y: imgY }}
              >
                <img
                  src={portrait}
                  alt="Fernando Cabral"
                  className="rounded-sm w-full max-w-md h-[520px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <motion.img
                src={bookCover}
                alt="Livro Avaliação de Empresas"
                initial={{ opacity: 0, y: 30, rotate: -8 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 0, scale: 1.04 }}
                style={{ y: bookY }}
                className="absolute -bottom-10 -right-6 w-40 md:w-48 shadow-2xl rounded-sm hidden sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
