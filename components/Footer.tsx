import Link from "next/link";
import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-label="TikTok">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.16a8.11 8.11 0 0 0 4.76 1.52V7.23a4.85 4.85 0 0 1-1-.54z"/>
  </svg>
);

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotras", href: "/nosotras" },
  { label: "Observatorio", href: "/observatorio" },
  { label: "Prensa", href: "/prensa" },
  { label: "Planes", href: "/planes" },
  { label: "Blog", href: "/blog" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer
      className="relative mt-20 pt-16 pb-8"
      style={{
        background: "linear-gradient(180deg, #FFF5F8 0%, #FDE8F0 50%, #F0E6F6 100%)",
        borderTop: "1px solid rgba(232,160,191,0.2)",
      }}
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #E8A0BF, #DEB6E8, #A7C7E7, #B5D8C7, #F5D5C8)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-label="ASOMEM Logo">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8A0BF" />
                    <stop offset="100%" stopColor="#DEB6E8" />
                  </linearGradient>
                </defs>
                <rect width="38" height="38" rx="10" fill="url(#footerLogoGrad)" />
                <path d="M19 8 L27 28 L23 28 L19 18 L15 28 L11 28 Z" fill="white" opacity="0.95"/>
                <circle cx="19" cy="24" r="2" fill="white" opacity="0.7"/>
              </svg>
              <span className="font-playfair font-bold text-xl" style={{ color: "#3D2C3E" }}>ASOMEM</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6A5A6C" }}>
              Asociación de Mujeres Emprendedoras de Chile. Conectando, empoderando y haciendo crecer a las emprendedoras de todo el país.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram size={18} />, href: "https://instagram.com/asomem.cl", label: "Instagram" },
                { icon: <Linkedin size={18} />, href: "https://linkedin.com/company/asomem-chile", label: "LinkedIn" },
                { icon: <Facebook size={18} />, href: "https://facebook.com/asomem.chile", label: "Facebook" },
                { icon: <TikTokIcon />, href: "https://tiktok.com/@asomem.cl", label: "TikTok" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "rgba(232,160,191,0.12)",
                    color: "#C77A9F",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #E8A0BF, #DEB6E8)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(232,160,191,0.12)";
                    e.currentTarget.style.color = "#C77A9F";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#C77A9F" }}>
              Navegación
            </h4>
            <nav className="flex flex-col gap-2">
              {links.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-rosa-dark"
                  style={{ color: "#6A5A6C" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#C77A9F" }}>
              Más
            </h4>
            <nav className="flex flex-col gap-2">
              {links.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-rosa-dark"
                  style={{ color: "#6A5A6C" }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://intranet.asomem.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold transition-colors duration-200"
                style={{ color: "#C77A9F" }}
              >
                Acceso Socias →
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: "#C77A9F" }}>
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@asomem.cl"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-rosa-dark"
                style={{ color: "#6A5A6C" }}
              >
                <Mail size={15} className="shrink-0" style={{ color: "#E8A0BF" }} />
                contacto@asomem.cl
              </a>
              <a
                href="mailto:prensa@asomem.cl"
                className="flex items-center gap-2 text-sm transition-colors duration-200 hover:text-rosa-dark"
                style={{ color: "#6A5A6C" }}
              >
                <Mail size={15} className="shrink-0" style={{ color: "#E8A0BF" }} />
                prensa@asomem.cl
              </a>
              <div className="mt-2">
                <a
                  href="https://intranet.asomem.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)",
                    boxShadow: "0 4px 12px rgba(232,160,191,0.35)",
                  }}
                >
                  Acceso Socias →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(232,160,191,0.2)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "#9A8A9C" }}>
            © 2026 ASOMEM — Asociación de Mujeres Emprendedoras de Chile. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="text-xs transition-colors hover:text-rosa-dark" style={{ color: "#9A8A9C" }}>
              Privacidad
            </Link>
            <Link href="/terminos" className="text-xs transition-colors hover:text-rosa-dark" style={{ color: "#9A8A9C" }}>
              Términos
            </Link>
            <a
              href="https://www.perplexity.ai/computer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-rosa-dark"
              style={{ color: "#B8A0BC" }}
            >
              Creado con Perplexity Computer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
