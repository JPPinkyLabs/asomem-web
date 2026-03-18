"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Handshake, Bot, Users, Calendar, ClipboardList, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionWrapper from "@/components/SectionWrapper";
import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: <ShoppingBag size={28} />,
    title: "Mall Virtual",
    desc: "Publica tus productos y servicios en nuestra vitrina digital. Conecta con otras socias y sus clientes a través de WhatsApp Business.",
    color: "#E8A0BF",
    bg: "#FDE8F0",
  },
  {
    icon: <Handshake size={28} />,
    title: "Convenios Exclusivos",
    desc: "Accede a descuentos y beneficios negociados con partners en banca, logística, legal, salud, marketing y más.",
    color: "#DEB6E8",
    bg: "#F0E6F6",
  },
  {
    icon: <Bot size={28} />,
    title: "Herramientas con IA",
    desc: "Escanea tus boletas automáticamente, consulta a nuestro abogado y contador virtual, y encuentra fondos públicos para tu negocio.",
    color: "#A7C7E7",
    bg: "#E8F4FD",
  },
  {
    icon: <Users size={28} />,
    title: "Directorio de Confianza",
    desc: "Encuentra a otras emprendedoras verificadas por rubro y región. Colabora, compra y crea alianzas.",
    color: "#B5D8C7",
    bg: "#E8F5EE",
  },
  {
    icon: <Calendar size={28} />,
    title: "Eventos y Capacitaciones",
    desc: "Talleres, webinars, ferias y networking. Aprende de expertas y conecta con la comunidad en todo Chile.",
    color: "#DEB6E8",
    bg: "#F0E6F6",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Clasificados y Oportunidades",
    desc: "Publica lo que ofreces o lo que necesitas. Intercambia insumos, busca colaboraciones o remata stock entre socias.",
    color: "#F5D5C8",
    bg: "#FFF0EA",
  },
];

const testimonials = [
  {
    quote: "Desde que me uní a ASOMEM, mis ventas crecieron un 40%. El Mall Virtual me conectó con clientas que nunca habría encontrado sola.",
    name: "Carolina Muñoz",
    role: "Alimentación Artesanal",
    region: "Región Metropolitana",
    initials: "CM",
    color: "#E8A0BF",
  },
  {
    quote: "El Consultor Contable IA me salvó horas de trabajo. Ahora entiendo mis impuestos y sé exactamente qué gastos puedo deducir.",
    name: "Valentina Soto",
    role: "Servicios de Diseño",
    region: "Valparaíso",
    initials: "VS",
    color: "#DEB6E8",
  },
  {
    quote: "Gracias al Buscador de Fondos postulé a Capital Abeja de SERCOTEC y fui seleccionada. Sin ASOMEM no habría sabido ni que existía.",
    name: "Francisca Riquelme",
    role: "Artesanía Textil",
    region: "Araucanía",
    initials: "FR",
    color: "#A7C7E7",
  },
  {
    quote: "Lo más valioso es la red. En los eventos conocí a mi actual socia de negocio. Juntas facturamos el triple.",
    name: "Macarena Torres",
    role: "Tecnología Educativa",
    region: "Biobío",
    initials: "MT",
    color: "#B5D8C7",
  },
];

const partners = [
  "Banco Partner", "Logística Express", "Estudio Legal Mujer", "Salud Integral",
  "TechPyme", "Capacita Pro", "Seguros Emprende", "Marketing Digital CL",
  "Banco Partner", "Logística Express", "Estudio Legal Mujer", "Salud Integral",
  "TechPyme", "Capacita Pro", "Seguros Emprende", "Marketing Digital CL",
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const t = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <motion.div
        key={current}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl p-8 md:p-10 text-center"
        style={{
          background: "white",
          boxShadow: `0 8px 40px ${t.color}30`,
          border: `1px solid ${t.color}30`,
        }}
      >
        {/* Avatar */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-bold text-xl"
          style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
        >
          {t.initials}
        </div>
        <blockquote className="text-lg md:text-xl italic leading-relaxed mb-6" style={{ color: "#3D2C3E" }}>
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div>
          <p className="font-bold text-base" style={{ color: "#3D2C3E" }}>{t.name}</p>
          <p className="text-sm" style={{ color: "#6A5A6C" }}>
            {t.role} · {t.region}
          </p>
        </div>
      </motion.div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "white", boxShadow: "0 4px 16px rgba(232,160,191,0.25)", color: "#C77A9F" }}
        aria-label="Anterior"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: "white", boxShadow: "0 4px 16px rgba(232,160,191,0.25)", color: "#C77A9F" }}
        aria-label="Siguiente"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? t.color : `${t.color}40`,
            }}
            aria-label={`Testimonio ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const stats = [
  { value: 250, prefix: "+", suffix: "", label: "Socias activas en todo Chile", color: "#E8A0BF" },
  { value: 16, prefix: "", suffix: "", label: "Regiones representadas", color: "#DEB6E8" },
  { value: 500, prefix: "+", suffix: "", label: "Emprendimientos conectados", color: "#A7C7E7" },
  { value: 120, prefix: "$", suffix: "M CLP", label: "En beneficios canalizados a socias", color: "#B5D8C7" },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #FFF5F8 0%, #FDE8F0 30%, #F0E6F6 60%, #E8F4FD 100%)",
          }}
        />
        {/* Decorative blobs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #E8A0BF, transparent)", filter: "blur(40px)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #DEB6E8, transparent)", filter: "blur(50px)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #A7C7E7, transparent)", filter: "blur(60px)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-widest"
              style={{ background: "rgba(232,160,191,0.15)", color: "#C77A9F", border: "1px solid rgba(232,160,191,0.3)" }}
            >
              ✨ Asociación de Mujeres Emprendedoras de Chile
            </span>

            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span style={{ color: "#3D2C3E" }}>Emprende con red,</span>
              <br />
              <span className="gradient-text">crece con propósito</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#6A5A6C" }}>
              ASOMEM conecta a mujeres emprendedoras de todo Chile con herramientas, comunidad y oportunidades reales para hacer crecer sus negocios.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/planes"
                className="btn-primary text-base px-8 py-4 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                Conoce nuestros planes
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/nosotras"
                className="text-base font-semibold border-b-2 pb-0.5 transition-colors hover:opacity-70"
                style={{ color: "#C77A9F", borderColor: "#E8A0BF" }}
              >
                Descubre quiénes somos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CIFRAS DE IMPACTO ─── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-3xl p-6 md:p-8 text-center"
                  style={{
                    background: "white",
                    boxShadow: `0 8px 32px ${stat.color}25`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <div
                    className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-2"
                    style={{ color: stat.color }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-xs md:text-sm leading-snug font-medium" style={{ color: "#6A5A6C" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* ─── QUÉ ES CONECTA ASOMEM ─── */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FFF5F8 0%, #FDE8F0 100%)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-14">
              <h2 className="section-title mb-4">Tu ecosistema digital para emprender</h2>
              <p className="section-subtitle mx-auto">
                Conecta ASOMEM es la plataforma exclusiva para nuestras socias. Estas son las herramientas que ponemos a tu disposición:
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl p-7 cursor-default"
                style={{
                  background: "white",
                  boxShadow: `0 4px 24px ${f.color}20`,
                  border: `1px solid ${f.color}25`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: f.bg, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "#3D2C3E" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6A5A6C" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIOS ─── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <div className="text-center mb-12">
              <h2 className="section-title mb-4">Lo que dicen nuestras socias</h2>
              <p className="section-subtitle mx-auto">
                Historias reales de emprendedoras que están haciendo crecer sus negocios con ASOMEM.
              </p>
            </div>
          </SectionWrapper>
          <SectionWrapper delay={0.1}>
            <TestimonialCarousel />
          </SectionWrapper>
        </div>
      </section>

      {/* ─── PARTNERS ─── */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, #F0E6F6 0%, #FFF5F8 100%)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3" style={{ color: "#3D2C3E" }}>
                Alianzas que impulsan tu negocio
              </h2>
              <p className="text-sm md:text-base" style={{ color: "#6A5A6C" }}>
                Beneficios exclusivos negociados para las socias de ASOMEM.
              </p>
            </div>
          </SectionWrapper>

          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-scroll-left" style={{ width: "max-content" }}>
              {partners.map((p, i) => (
                <div
                  key={i}
                  className="shrink-0 px-6 py-3 rounded-2xl font-semibold text-sm"
                  style={{
                    background: "white",
                    color: "#6A5A6C",
                    border: "1px solid rgba(222,182,232,0.3)",
                    boxShadow: "0 2px 12px rgba(222,182,232,0.15)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL + NEWSLETTER ─── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #C77A9F 0%, #B886C8 50%, #7AA0C0 100%)" }}
        />
        <div className="absolute inset-0 opacity-10"
          style={{ background: "radial-gradient(circle at 30% 50%, white 0%, transparent 60%)" }} />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Lista para impulsar tu emprendimiento?
            </h2>
            <p className="text-white/85 text-lg mb-8">
              Únete a la comunidad de mujeres emprendedoras más activa de Chile.
            </p>

            <Link
              href="/planes"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white font-bold text-base mb-10 transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: "#C77A9F", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
            >
              Ver planes y suscribirme
              <ArrowRight size={18} />
            </Link>

            {/* Newsletter */}
            <div className="rounded-3xl p-6 md:p-8" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)" }}>
              <p className="text-white font-semibold mb-4 flex items-center justify-center gap-2">
                📩 Recibe tips, oportunidades y novedades cada semana
              </p>
              {subscribed ? (
                <p className="text-white font-bold text-lg">
                  ✅ ¡Te suscribiste! Pronto recibirás noticias de ASOMEM.
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-3 rounded-2xl text-sm font-medium outline-none"
                    style={{ background: "rgba(255,255,255,0.95)", color: "#3D2C3E" }}
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-2xl font-bold text-sm text-white whitespace-nowrap transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
                  >
                    Suscribirme
                  </button>
                </form>
              )}
              <p className="text-white/60 text-xs mt-3">
                Sin spam. Puedes desuscribirte en cualquier momento.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
