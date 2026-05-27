import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Metodologias", href: "#metodologias" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const WHATSAPP_URL = "https://wa.me/551130610923?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <a href="#home" className="font-display text-lg font-semibold tracking-wide text-foreground">
          GORDON<span className="text-gold font-normal italic"> Valuations</span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-gold-soft text-gold text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--gold-foreground))] transition-colors"
        >
          Fale conosco
        </a>

        <button
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden text-foreground p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-20 bg-background z-40"
          >
            <div className="flex flex-col h-full px-6 pt-10 pb-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                    href={link.href}
                    className="py-4 text-2xl font-display text-foreground hover:text-gold transition-colors border-b border-border/40"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto pt-12 space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-sm bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm uppercase tracking-[0.18em]"
                >
                  Fale conosco
                </a>
                <a
                  href="tel:+551130610923"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-sm border border-border text-foreground text-sm"
                >
                  (11) 3061-0923
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
