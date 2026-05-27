import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedHeading from "@/components/motion/AnimatedHeading";

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
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        // width of the first set (we render the list twice for seamless loop)
        setWidth(trackRef.current.scrollWidth / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (reduce || width === 0 || paused) return;
    const speed = 32; // px/s
    let next = x.get() - (speed * delta) / 1000;
    if (next <= -width) next += width;
    x.set(next);
  });

  return (
    <section id="depoimentos" className="py-32 md:py-40 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.3em] text-gold mb-6 font-medium"
        >
          Depoimentos
        </motion.p>
        <div className="max-w-3xl">
          <AnimatedHeading
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest"
          >
            Confiança construída <em className="italic font-normal text-gold">ao longo de duas décadas.</em>
          </AnimatedHeading>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10"
          style={{ background: "linear-gradient(to right, hsl(220 22% 7%), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10"
          style={{ background: "linear-gradient(to left, hsl(220 22% 7%), transparent)" }} />

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-8 md:gap-12 w-max will-change-transform"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <figure
              key={i}
              className="w-[min(85vw,520px)] shrink-0 bg-[hsl(220_18%_8%)]/40 border-soft rounded-sm p-10 md:p-12 flex flex-col"
            >
              <span className="font-display text-6xl text-gold leading-none mb-6" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="font-display text-lg md:text-xl leading-relaxed font-normal text-foreground/95 mb-8 -mt-2">
                {t.text}
              </blockquote>
              <figcaption className="pt-6 border-t border-border mt-auto">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
