import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const ContactSection = () => {
  return (
    <section id="contato" className="py-32 md:py-40 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-50" aria-hidden />
      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8 font-medium">
              Contato
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tightest mb-8">
              Vamos conversar sobre
              <span className="italic font-normal text-gold"> o valor da sua empresa.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
              Atendimento direto, confidencial e sem compromisso. Encaminhamos uma proposta personalizada após uma breve conversa inicial.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm tracking-[0.18em] uppercase hover:bg-[hsl(38_55%_65%)] transition-colors mb-16"
            >
              Solicitar avaliação
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left sm:text-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gold transition-colors text-sm">
                  (11) 3061-0923
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Telefone</p>
                <a href="tel:+551130610923" className="text-foreground hover:text-gold transition-colors text-sm">
                  (11) 3061-0923
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">E-mail</p>
                <a href="mailto:fernando@avaliacaodeempresa.com.br" className="text-foreground hover:text-gold transition-colors text-sm break-all">
                  fernando@avaliacaodeempresa.com.br
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
