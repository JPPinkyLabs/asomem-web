"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";
import Link from "next/link";

const planes = [
  {
    nombre: "Free",
    emoji: "🌱",
    descripcion: "Para emprendedoras que recién comienzan y quieren conocer la comunidad.",
    mensual: 0,
    anual: 0,
    color: "#B5D8C7",
    highlight: false,
    features: [
      { label: "Explorar el Mall Virtual (sin publicar)", included: true },
      { label: "Ver y usar convenios exclusivos", included: true },
      { label: "1 clasificado por mes en el muro", included: true },
      { label: "Acceso a noticias y eventos públicos", included: true },
      { label: "Perfil básico en el Directorio", included: true },
      { label: "Publicar en el Mall Virtual", included: false },
      { label: "Herramientas de IA", included: false },
      { label: "Smart Scan de gastos", included: false },
      { label: "Consultores IA (Legal y Contable)", included: false },
      { label: "Buscador de Fondos Públicos", included: false },
    ],
    cta: "Comenzar gratis",
  },
  {
    nombre: "Pro",
    emoji: "⭐",
    descripcion: "Para emprendedoras activas que quieren crecer con herramientas profesionales.",
    mensual: 9990,
    anual: 95900,
    color: "#E8A0BF",
    highlight: true,
    badge: "Más popular",
    features: [
      { label: "Todo lo del plan Free", included: true },
      { label: "Hasta 10 productos en el Mall Virtual", included: true },
      { label: "Badge ✓ Verificada en el Directorio", included: true },
      { label: "Smart Scan IA (20 boletas/mes)", included: true },
      { label: "Consultor Legal IA", included: true },
      { label: "Consultor Contable IA", included: true },
      { label: "Buscador de Fondos Públicos", included: true },
      { label: "Clasificados ilimitados", included: true },
      { label: "Publicaciones ilimitadas en Mall", included: false },
      { label: "Soporte prioritario", included: false },
    ],
    cta: "Elegir plan Pro",
  },
  {
    nombre: "Premium",
    emoji: "👑",
    descripcion: "Para emprendedoras que quieren el máximo de visibilidad, herramientas y soporte.",
    mensual: 19990,
    anual: 191900,
    color: "#DEB6E8",
    highlight: false,
    features: [
      { label: "Todo lo del plan Pro", included: true },
      { label: "Publicaciones ilimitadas + productos destacados", included: true },
      { label: "Smart Scan ilimitado", included: true },
      { label: "Consultores IA sin límite de consultas", included: true },
      { label: "Reporte mensual de gastos automático (PDF)", included: true },
      { label: "Acceso anticipado a eventos y capacitaciones", included: true },
      { label: "Soporte prioritario", included: true },
      { label: "Badge ⭐ Premium en el Directorio", included: true },
      { label: "Posicionamiento prioritario en búsquedas", included: true },
      { label: "Todo incluido", included: true },
    ],
    cta: "Elegir plan Premium",
  },
];

const modulos = [
  {
    emoji: "🛍️",
    titulo: "Mall Virtual",
    contenido: "Free: puedes explorar productos pero no publicar. Pro: hasta 10 publicaciones activas con fotos, precio y botón de WhatsApp. Premium: publicaciones ilimitadas + tus productos aparecen destacados y primeros en las búsquedas.",
  },
  {
    emoji: "🤖",
    titulo: "Herramientas de Inteligencia Artificial",
    contenido: "Free: sin acceso. Pro: Smart Scan de boletas (20/mes), Consultor Legal IA, Consultor Contable IA, Buscador de Fondos Públicos. Premium: todo ilimitado + reportes mensuales automáticos en PDF.",
  },
  {
    emoji: "👩‍💼",
    titulo: "Directorio de Confianza",
    contenido: "Free: perfil básico sin badge. Pro: badge \"Verificada\" visible en tu perfil. Premium: badge \"Premium\" + posicionamiento prioritario en búsquedas del directorio.",
  },
  {
    emoji: "📋",
    titulo: "Clasificados",
    contenido: "Free: 1 publicación por mes. Pro y Premium: publicaciones ilimitadas en el Muro de Oportunidades.",
  },
  {
    emoji: "📅",
    titulo: "Eventos y Capacitaciones",
    contenido: "Free: acceso a eventos públicos. Pro: acceso completo a todos los eventos. Premium: acceso anticipado + cupo garantizado en eventos con aforo limitado.",
  },
];

const faqs = [
  {
    q: "¿Puedo cambiar de plan en cualquier momento?",
    a: "Sí. Puedes subir o bajar de plan desde tu perfil en Conecta ASOMEM. El cambio se aplica en tu próximo ciclo de facturación.",
  },
  {
    q: "¿Hay compromiso de permanencia?",
    a: "No. Todos los planes son mes a mes (o año si eliges el plan anual). Puedes cancelar cuando quieras.",
  },
  {
    q: "¿Cómo pago?",
    a: "Aceptamos tarjetas de crédito y débito, y transferencia bancaria. Al suscribirte recibes una boleta electrónica.",
  },
  {
    q: "¿Qué pasa si cancelo mi suscripción?",
    a: "Mantienes acceso a tu plan hasta el final del período pagado. Después pasas automáticamente al plan Free y conservas tu perfil y datos.",
  },
  {
    q: "¿Puedo probar el plan Pro antes de pagar?",
    a: "Ofrecemos 7 días de prueba gratuita del plan Pro para que conozcas todas las herramientas antes de decidir.",
  },
  {
    q: "¿Emiten boleta o factura?",
    a: "Sí. Emitimos boleta electrónica automática. Si necesitas factura para tu empresa, escríbenos a contacto@asomem.cl.",
  },
];

const testimoniosPlan = [
  {
    plan: "Free",
    quote: "Me inscribí en el plan Free para conocer la comunidad y en dos semanas ya tenía 3 contactos nuevos de negocio.",
    nombre: "Andrea Pérez",
    rubro: "plan Free",
    region: "Coquimbo",
    color: "#B5D8C7",
    initials: "AP",
  },
  {
    plan: "Pro",
    quote: "El Consultor Legal IA me ayudó a entender qué tipo de empresa me convenía formar. Me ahorré $200.000 en asesoría.",
    nombre: "Camila Reyes",
    rubro: "plan Pro",
    region: "Metropolitana",
    color: "#E8A0BF",
    initials: "CR",
  },
  {
    plan: "Premium",
    quote: "Como Premium mis productos siempre aparecen primero en el Mall. Ese posicionamiento vale cada peso.",
    nombre: "Daniela Fuentes",
    rubro: "plan Premium",
    region: "Valparaíso",
    color: "#DEB6E8",
    initials: "DF",
  },
];

function formatCLP(n: number) {
  if (n === 0) return "Gratis";
  return `$${n.toLocaleString("es-CL")} / mes`;
}

export default function PlanesPage() {
  const [anual, setAnual] = useState(false);
  const [openModulo, setOpenModulo] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 25% 50%, #E8A0BF 0%, transparent 60%), radial-gradient(circle at 75% 50%, #DEB6E8 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Planes para cada etapa de tu emprendimiento</h1>
            <p className="section-subtitle mx-auto">
              Desde tu primer paso hasta la consolidación de tu negocio, tenemos un plan para ti.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Toggle */}
          <SectionWrapper>
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="text-sm font-semibold" style={{ color: !anual ? "#3D2C3E" : "#9A8A9C" }}>Mensual</span>
              <button
                onClick={() => setAnual(!anual)}
                className="relative w-14 h-7 rounded-full transition-colors duration-300"
                style={{ background: anual ? "linear-gradient(135deg, #E8A0BF, #DEB6E8)" : "rgba(232,160,191,0.3)" }}
              >
                <span
                  className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white transition-transform duration-300 shadow-sm"
                  style={{ transform: anual ? "translateX(28px)" : "translateX(0)" }}
                />
              </button>
              <span className="text-sm font-semibold" style={{ color: anual ? "#3D2C3E" : "#9A8A9C" }}>
                Anual{" "}
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: "rgba(181,216,199,0.3)", color: "#8AB5A0" }}>
                  Ahorra 20%
                </span>
              </span>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {planes.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl relative ${plan.highlight ? "md:-mt-4 md:-mb-4" : ""}`}
                style={{
                  background: plan.highlight ? "linear-gradient(180deg, white 0%, white 100%)" : "white",
                  boxShadow: plan.highlight
                    ? `0 16px 60px ${plan.color}40`
                    : `0 4px 24px ${plan.color}20`,
                  border: plan.highlight
                    ? `2px solid ${plan.color}`
                    : `1px solid ${plan.color}30`,
                }}
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                    style={{ background: `linear-gradient(135deg, ${plan.color}, #DEB6E8)` }}
                  >
                    {plan.badge}
                  </div>
                )}
                <div className="p-7 md:p-8">
                  <div className="text-3xl mb-2">{plan.emoji}</div>
                  <h3 className="font-playfair font-bold text-2xl mb-1" style={{ color: "#3D2C3E" }}>
                    {plan.nombre}
                  </h3>
                  <p className="text-xs mb-5 leading-snug" style={{ color: "#6A5A6C" }}>{plan.descripcion}</p>

                  <div className="mb-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={anual ? "anual" : "mensual"}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="font-playfair font-bold text-3xl"
                        style={{ color: plan.color }}
                      >
                        {plan.mensual === 0
                          ? "Gratis"
                          : anual
                          ? `$${Math.floor(plan.anual / 12).toLocaleString("es-CL")} / mes`
                          : `$${plan.mensual.toLocaleString("es-CL")} / mes`}
                      </motion.div>
                    </AnimatePresence>
                    {plan.mensual > 0 && anual && (
                      <p className="text-xs mt-1" style={{ color: "#9A8A9C" }}>
                        ${plan.anual.toLocaleString("es-CL")} / año
                      </p>
                    )}
                  </div>

                  <ul className="space-y-2 mb-7">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2.5 text-sm">
                        {f.included ? (
                          <Check size={14} className="shrink-0" style={{ color: plan.color }} />
                        ) : (
                          <X size={14} className="shrink-0 opacity-30" style={{ color: "#6A5A6C" }} />
                        )}
                        <span style={{ color: f.included ? "#3D2C3E" : "#9A8A9C" }}>{f.label}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://intranet.asomem.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-2xl font-bold text-sm flex items-center justify-center transition-all hover:scale-105 hover:shadow-lg"
                    style={
                      plan.highlight
                        ? {
                            background: `linear-gradient(135deg, ${plan.color}, #DEB6E8)`,
                            color: "white",
                            boxShadow: `0 4px 20px ${plan.color}40`,
                          }
                        : {
                            background: `${plan.color}15`,
                            color: plan.color,
                            border: `1.5px solid ${plan.color}40`,
                          }
                    }
                  >
                    {plan.cta} →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalle por Módulo (Accordion) */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-3xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              ¿Qué incluye cada herramienta?
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-3">
            {modulos.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(232,160,191,0.2)", boxShadow: "0 2px 12px rgba(232,160,191,0.08)" }}
              >
                <button
                  onClick={() => setOpenModulo(openModulo === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-rosa/5"
                >
                  <span className="flex items-center gap-3 font-semibold text-sm" style={{ color: "#3D2C3E" }}>
                    <span className="text-xl">{m.emoji}</span>
                    {m.titulo}
                  </span>
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-200 shrink-0"
                    style={{
                      color: "#C77A9F",
                      transform: openModulo === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <AnimatePresence>
                  {openModulo === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6A5A6C", borderTop: "1px solid rgba(232,160,191,0.15)" }}>
                        <div className="pt-4">{m.contenido}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Preguntas Frecuentes
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(222,182,232,0.25)", boxShadow: "0 2px 12px rgba(222,182,232,0.1)" }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold text-sm pr-4" style={{ color: "#3D2C3E" }}>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-200 shrink-0"
                    style={{ color: "#B886C8", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#6A5A6C", borderTop: "1px solid rgba(222,182,232,0.15)" }}>
                        <div className="pt-4">{faq.a}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios por Plan */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #F0E6F6 0%, #FFF5F8 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Socias que ya lo están viviendo
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimoniosPlan.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl p-6"
                style={{ background: "white", boxShadow: `0 4px 24px ${t.color}20`, border: `1px solid ${t.color}30` }}
              >
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-4" style={{ background: `${t.color}20`, color: t.color }}>
                  Plan {t.plan}
                </span>
                <p className="text-sm italic leading-relaxed mb-4" style={{ color: "#3D2C3E" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#3D2C3E" }}>{t.nombre}</p>
                    <p className="text-xs" style={{ color: "#9A8A9C" }}>{t.region}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
