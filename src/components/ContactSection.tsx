import { motion } from "framer-motion";
import AnimatedHeading from "@/components/motion/AnimatedHeading";
import MagneticButton from "@/components/motion/MagneticButton";
import skylineBg from "@/assets/backgrounds/hero-skyline.jpg";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const ContactSection = () => {
  return (
    <section id="contato" className="py-32 md:py-40 bg-gradient-hero relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img src={skylineBg} alt="" className="w-full h-full object-cover opacity-65" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsl(220 22% 7% / 0.45) 0%, hsl(220 22% 6% / 0.92) 90%)" }} />
      </div>
      <motion.div
        className="absolute inset-0 bg-grid-faint opacity-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        aria-hidden
      />
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-medium"
          >
            Contato
          </motion.p>
          <AnimatedHeading
            as="h2"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest mb-8"
          >
            Vamos conversar sobre <em className="italic font-normal text-gold">o valor da sua empresa.</em>
          </AnimatedHeading>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Atendimento direto, confidencial e sem compromisso. Encaminhamos uma proposta personalizada após uma breve conversa inicial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <MagneticButton
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm tracking-[0.18em] uppercase hover:bg-[hsl(38_55%_65%)] transition-colors mb-16"
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

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: 0.12, delayChildren: 0.9 }}
              className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left sm:text-center"
            >
              {[
                { label: "WhatsApp", value: "(11) 3061-0923", href: WHATSAPP_URL, external: true },
                { label: "Telefone", value: "(11) 3061-0923", href: "tel:+551130610923" },
                { label: "E-mail", value: "fernando@avaliacaodeempresa.com.br", href: "mailto:fernando@avaliacaodeempresa.com.br" },
              ].map((c) => (
                <motion.div
                  key={c.label}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{c.label}</p>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-foreground hover:text-gold transition-colors text-sm break-all"
                  >
                    {c.value}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
