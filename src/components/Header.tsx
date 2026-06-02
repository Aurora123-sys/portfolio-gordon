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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 pt-5">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`flex items-center justify-between h-[88px] px-6 lg:px-8 rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "bg-[hsl(220_22%_8%_/_0.85)] backdrop-blur-xl border-[hsl(220_15%_22%)] shadow-[0_20px_50px_-20px_hsl(0_0%_0%_/_0.6)]"
              : "bg-[hsl(220_22%_8%_/_0.55)] backdrop-blur-md border-[hsl(220_15%_22%_/_0.55)] shadow-[0_12px_40px_-20px_hsl(0_0%_0%_/_0.5)]"
          }`}
        >
          <a href="#home" className="font-display text-lg font-semibold tracking-wide text-foreground">
            GORDON<span className="text-gold font-normal italic"> Valuations</span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
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
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gold-soft text-gold text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--gold-foreground))] transition-colors"
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
        </motion.div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-28 bg-background z-40"
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
                  className="flex items-center justify-center w-full px-6 py-4 rounded-lg bg-[hsl(var(--gold))] text-[hsl(var(--gold-foreground))] font-semibold text-sm uppercase tracking-[0.18em]"
                >
                  Fale conosco
                </a>
                <a
                  href="tel:+551130610923"
                  className="flex items-center justify-center w-full px-6 py-4 rounded-lg border border-border text-foreground text-sm"
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
