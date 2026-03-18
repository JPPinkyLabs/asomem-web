"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Nosotras", path: "/nosotras" },
  { label: "Observatorio", path: "/observatorio" },
  { label: "Prensa", path: "/prensa" },
  { label: "Planes", path: "/planes" },
  { label: "Blog", path: "/blog" },
  { label: "Eventos", path: "/eventos" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2 shadow-lg"
            : "py-4"
        }`}
        style={{
          background: scrolled
            ? "rgba(255,245,248,0.95)"
            : "rgba(255,245,248,0.85)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(232,160,191,0.25)" : "1px solid rgba(232,160,191,0.1)",
          boxShadow: scrolled ? "0 4px 24px rgba(232,160,191,0.15)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="relative">
              <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-label="ASOMEM Logo">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8A0BF" />
                    <stop offset="100%" stopColor="#DEB6E8" />
                  </linearGradient>
                </defs>
                <rect width="38" height="38" rx="10" fill="url(#logoGrad)" />
                <path d="M19 8 L27 28 L23 28 L19 18 L15 28 L11 28 Z" fill="white" opacity="0.95"/>
                <circle cx="19" cy="24" r="2" fill="white" opacity="0.7"/>
              </svg>
            </div>
            <span
              className="font-playfair font-bold text-xl tracking-wide"
              style={{ color: "#3D2C3E" }}
            >
              ASOMEM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 font-nunito ${
                  pathname === link.path
                    ? "text-rosa-dark bg-rosa/10"
                    : "text-texto-secondary hover:text-rosa-dark hover:bg-rosa/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://intranet.asomem.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm font-bold whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #E8A0BF 0%, #DEB6E8 100%)",
                boxShadow: "0 4px 16px rgba(232,160,191,0.45)",
              }}
            >
              Acceso Socias
              <span className="ml-0.5">→</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors"
            style={{ color: "#3D2C3E" }}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 lg:hidden"
              style={{ backdropFilter: "blur(2px)" }}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 lg:hidden flex flex-col"
              style={{
                background: "rgba(255,245,248,0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(232,160,191,0.25)",
                boxShadow: "-8px 0 40px rgba(232,160,191,0.15)",
              }}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: "rgba(232,160,191,0.2)" }}>
                <div className="flex items-center gap-2">
                  <svg width="32" height="32" viewBox="0 0 38 38" fill="none">
                    <defs>
                      <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#E8A0BF" />
                        <stop offset="100%" stopColor="#DEB6E8" />
                      </linearGradient>
                    </defs>
                    <rect width="38" height="38" rx="10" fill="url(#logoGrad2)" />
                    <path d="M19 8 L27 28 L23 28 L19 18 L15 28 L11 28 Z" fill="white" opacity="0.95"/>
                    <circle cx="19" cy="24" r="2" fill="white" opacity="0.7"/>
                  </svg>
                  <span className="font-playfair font-bold text-lg" style={{ color: "#3D2C3E" }}>ASOMEM</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg hover:bg-rosa/10" style={{ color: "#6A5A6C" }}>
                  <X size={20} />
                </button>
              </div>

              <div className="p-5">
                <a
                  href="https://intranet.asomem.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-6 rounded-2xl font-bold text-white text-sm flex items-center justify-center gap-2 mb-6"
                  style={{
                    background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)",
                    boxShadow: "0 4px 16px rgba(232,160,191,0.4)",
                  }}
                >
                  Acceso Socias →
                </a>
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 font-nunito ${
                        pathname === link.path
                          ? "text-rosa-dark bg-rosa/10"
                          : "text-texto-secondary hover:text-rosa-dark hover:bg-rosa/8"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-5 border-t" style={{ borderColor: "rgba(232,160,191,0.2)" }}>
                <p className="text-xs text-center" style={{ color: "#9A8A9C" }}>
                  © 2026 ASOMEM Chile
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
