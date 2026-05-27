import { motion, useMotionValue, useReducedMotion, useSpring, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import MagneticButton from "@/components/motion/MagneticButton";
import heroBg from "@/assets/backgrounds/hero-skyline.jpg";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const HeroSection = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    mx.set(x * 24);
    my.set(y * 16);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={onMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        style={{ x: useTransform(sx, (v) => v * -0.3), y: useTransform(sy, (v) => v * -0.2) }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-[0.28]"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsl(220 22% 6% / 0.55) 0%, hsl(220 22% 6% / 0.80) 60%, hsl(220 22% 6%) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(220 22% 6% / 0.90) 0%, hsl(220 22% 6% / 0.35) 60%, transparent 100%)" }} />
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-grid-faint opacity-50"
        style={{ x: useTransform(sx, (v) => v * 0.4), y: useTransform(sy, (v) => v * 0.4) }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, hsl(38 55% 58% / 0.4), transparent)" }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        aria-hidden
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container relative z-10 mx-auto px-6 pt-32 pb-24"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-medium"
            >
              Avaliação de empresas · M&amp;A
            </motion.p>

            <AnimatedHeading
              as="h1"
              delay={0.15}
              stagger={0.07}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tightest mb-10"
            >
              O valor justo da sua empresa, <em className="italic font-normal text-gold">revelado com rigor.</em>
            </AnimatedHeading>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed"
            >
              Mais de duas décadas dedicadas à valuation independente e à intermediação de operações de fusões e aquisições — com método, transparência e visão estratégica.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <MagneticButton
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm tracking-wide uppercase hover:bg-[hsl(38_55%_65%)] transition-colors"
              >
                Solicitar avaliação
                <motion.span
                  aria-hidden
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: useTransform(sx, (v) => v * -0.6), y: useTransform(sy, (v) => v * -0.4) }}
            className="lg:col-span-5"
          >
            <div className="border-soft rounded-sm bg-[hsl(220_18%_8%)]/60 backdrop-blur-sm p-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
                Histórico
              </p>
              <div className="space-y-8">
                <Stat
                  value={300}
                  suffix="+"
                  label="Laudos de avaliação realizados"
                  color="text-gold"
                  duration={2.0}
                  delay={0.7}
                />
                <motion.div
                  className="divider-rule"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
                <Stat
                  value={20}
                  suffix="+"
                  label="Anos em finanças corporativas"
                  duration={1.6}
                  delay={1.0}
                />
                <motion.div
                  className="divider-rule"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
                <Stat
                  value={82}
                  prefix="R$ "
                  suffix=" Mi"
                  label="Em operações de M&A intermediadas"
                  size="md"
                  duration={2.0}
                  delay={1.2}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(220 20% 6%))" }}
        aria-hidden
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Role</span>
        <motion.span
          className="block w-px bg-muted-foreground/60"
          initial={{ height: 0 }}
          animate={{ height: 28 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        />
      </motion.div>
    </section>
  );
};

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color?: string;
  size?: "lg" | "md";
  delay?: number;
  duration?: number;
}

const Stat = ({ value, label, prefix = "", suffix = "+", color = "text-foreground", size = "lg", delay = 0, duration = 1.8 }: StatProps) => {
  const sizeClass = size === "lg" ? "text-6xl md:text-7xl" : "text-5xl md:text-6xl";
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className={`font-display ${sizeClass} font-medium ${color} leading-none`}>
        {prefix}
        <AnimatedCounter to={value} duration={duration} delay={delay} />
        <span className="text-foreground/40 text-3xl md:text-4xl align-top">{suffix}</span>
      </p>
      <p className="text-sm text-muted-foreground mt-3">{label}</p>
    </motion.div>
  );
};

export default HeroSection;
