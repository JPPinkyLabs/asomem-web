"use client";

import { motion } from "framer-motion";
import { Clock, Download } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";

const categorias = ["Todas", "Tips de Negocio", "Historias de Éxito", "Legal y Tributario", "Marketing Digital", "Financiamiento", "Tecnología"];

const articulos = [
  {
    titulo: "5 gastos que no sabías que puedes deducir de impuestos",
    categoria: "Legal y Tributario",
    autora: "Equipo ASOMEM",
    fecha: "15 Mar 2026",
    lectura: 5,
    color: "#E8A0BF",
    bg: "#FDE8F0",
    emoji: "📊",
    desc: "Descubre los gastos más comunes que las emprendedoras no declaran y que podrían reducir significativamente tu carga tributaria.",
  },
  {
    titulo: "Cómo usar Instagram Reels para vender más sin pagar publicidad",
    categoria: "Marketing Digital",
    autora: "Equipo ASOMEM",
    fecha: "10 Mar 2026",
    lectura: 7,
    color: "#DEB6E8",
    bg: "#F0E6F6",
    emoji: "📱",
    desc: "Estrategias probadas por emprendedoras chilenas para crecer orgánicamente en Instagram y convertir seguidores en clientes.",
  },
  {
    titulo: "Guía paso a paso para postular a Capital Abeja de SERCOTEC",
    categoria: "Financiamiento",
    autora: "Equipo ASOMEM",
    fecha: "5 Mar 2026",
    lectura: 10,
    color: "#A7C7E7",
    bg: "#E8F4FD",
    emoji: "💰",
    desc: "Todo lo que necesitas saber para postular con éxito al fondo Capital Abeja, el principal instrumento de financiamiento para mujeres emprendedoras.",
  },
  {
    titulo: "De la cocina de su casa a facturar $3 millones mensuales: la historia de Carolina",
    categoria: "Historias de Éxito",
    autora: "Equipo ASOMEM",
    fecha: "28 Feb 2026",
    lectura: 8,
    color: "#B5D8C7",
    bg: "#E8F5EE",
    emoji: "⭐",
    desc: "Cómo una emprendedora de Rancagua transformó su pasión por la repostería en un negocio que hoy vende a todo Chile.",
  },
  {
    titulo: "SpA, EIRL o persona natural: ¿Qué tipo de empresa te conviene?",
    categoria: "Legal y Tributario",
    autora: "Equipo ASOMEM",
    fecha: "20 Feb 2026",
    lectura: 6,
    color: "#F5D5C8",
    bg: "#FFF0EA",
    emoji: "⚖️",
    desc: "Comparativa completa de las formas jurídicas disponibles para emprender en Chile, con pros, contras y casos de uso reales.",
  },
  {
    titulo: "3 herramientas de IA gratuitas que toda emprendedora debería conocer",
    categoria: "Tecnología",
    autora: "Equipo ASOMEM",
    fecha: "15 Feb 2026",
    lectura: 5,
    color: "#DEB6E8",
    bg: "#F0E6F6",
    emoji: "🤖",
    desc: "Inteligencia artificial al alcance de todas: herramientas gratuitas para crear contenido, gestionar tu negocio y ahorrar tiempo.",
  },
];

const spotlight = {
  nombre: "Karina Sepúlveda",
  rubro: "Confecciones y Moda Sostenible",
  region: "Valdivia, Los Ríos",
  quote: "Mi emprendimiento nació de una necesidad personal: no encontraba ropa que se adaptara a mi cuerpo. Hoy doy trabajo a 5 personas y vendo a todo Chile.",
  color: "#E8A0BF",
  initials: "KS",
};

const recursos = [
  { titulo: "Guía: Cómo formalizar tu emprendimiento en Chile", desc: "Paso a paso para elegir tu tipo de empresa y completar el registro.", emoji: "📄" },
  { titulo: "Checklist tributario mensual para emprendedoras", desc: "No olvides nada: impuestos, boletas, provisiones y más.", emoji: "✅" },
  { titulo: "Template de Plan de Negocio simplificado", desc: "Un modelo claro y práctico para estructurar tu idea de negocio.", emoji: "📋" },
  { titulo: "Calendario fiscal 2026 para Pymes", desc: "Todas las fechas importantes del año tributario en un solo lugar.", emoji: "📅" },
];

export default function BlogPage() {
  const [catActiva, setCatActiva] = useState("Todas");

  const filtrados = catActiva === "Todas" ? articulos : articulos.filter(a => a.categoria === catActiva);

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 30% 50%, #B5D8C7 0%, transparent 60%), radial-gradient(circle at 70% 50%, #A7C7E7 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Blog y Recursos</h1>
            <p className="section-subtitle mx-auto">
              Tips, historias y herramientas para emprendedoras que quieren más.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Filtros */}
          <SectionWrapper>
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCatActiva(cat)}
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                  style={
                    catActiva === cat
                      ? { background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)", color: "white", boxShadow: "0 4px 12px rgba(232,160,191,0.4)" }
                      : { background: "white", color: "#6A5A6C", border: "1px solid rgba(232,160,191,0.3)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrados.map((art, i) => (
              <motion.div
                key={art.titulo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl overflow-hidden cursor-pointer"
                style={{ background: "white", boxShadow: `0 4px 24px ${art.color}20`, border: `1px solid ${art.color}25` }}
              >
                {/* Image placeholder */}
                <div className="h-40 flex items-center justify-center text-5xl" style={{ background: art.bg }}>
                  {art.emoji}
                </div>
                <div className="p-6">
                  <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-3" style={{ background: `${art.color}18`, color: art.color }}>
                    {art.categoria}
                  </span>
                  <h3 className="font-bold text-base leading-snug mb-2" style={{ color: "#3D2C3E" }}>{art.titulo}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#6A5A6C" }}>{art.desc}</p>
                  <div className="flex items-center justify-between text-xs" style={{ color: "#9A8A9C" }}>
                    <span>{art.autora} · {art.fecha}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} /> {art.lectura} min
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Historias de Socias ✨
            </h2>
          </SectionWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ background: "white", boxShadow: "0 12px 50px rgba(232,160,191,0.2)", border: "1px solid rgba(232,160,191,0.25)" }}
          >
            <div className="h-2" style={{ background: "linear-gradient(90deg, #E8A0BF, #DEB6E8, #A7C7E7)" }} />
            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-28 h-28 rounded-full flex items-center justify-center text-3xl font-bold text-white shrink-0"
                style={{ background: `linear-gradient(135deg, ${spotlight.color}, ${spotlight.color}aa)` }}>
                {spotlight.initials}
              </div>
              <div>
                <p className="text-base italic leading-relaxed mb-4" style={{ color: "#3D2C3E" }}>
                  &ldquo;{spotlight.quote}&rdquo;
                </p>
                <p className="font-bold text-base" style={{ color: "#3D2C3E" }}>{spotlight.nombre}</p>
                <p className="text-sm" style={{ color: "#6A5A6C" }}>{spotlight.rubro} · {spotlight.region}</p>
                <button className="mt-4 text-sm font-semibold" style={{ color: spotlight.color }}>
                  Leer historia completa →
                </button>
              </div>
            </div>
          </motion.div>
          <p className="text-center text-sm mt-6" style={{ color: "#6A5A6C" }}>
            Cada mes destacamos a una emprendedora de nuestra comunidad. Su historia, sus desafíos y cómo ASOMEM la acompaña.
          </p>
        </div>
      </section>

      {/* Recursos Descargables */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-4" style={{ color: "#3D2C3E" }}>
              Recursos Gratuitos 📥
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6A5A6C" }}>
              Descarga guías, templates y herramientas diseñadas para emprendedoras chilenas.
            </p>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recursos.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", boxShadow: "0 4px 16px rgba(232,160,191,0.1)", border: "1px solid rgba(232,160,191,0.2)" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: "#FDE8F0" }}>
                  {r.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#3D2C3E" }}>{r.titulo}</h3>
                  <p className="text-xs mb-3" style={{ color: "#6A5A6C" }}>{r.desc}</p>
                  <button className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                    style={{ background: "rgba(232,160,191,0.12)", color: "#C77A9F" }}>
                    <Download size={11} /> Descargar gratis
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
