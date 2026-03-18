"use client";

import { motion } from "framer-motion";
import { Newspaper, FileText, Download, Mail, Phone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const noticias = [
  {
    medio: "El Mostrador",
    fecha: "Marzo 2026",
    titulo: "ASOMEM lanza plataforma digital con IA para emprendedoras chilenas",
    extracto: "La asociación presentó Conecta ASOMEM, una intranet con herramientas de inteligencia artificial diseñada exclusivamente para socias emprendedoras.",
    color: "#E8A0BF",
    url: "#",
  },
  {
    medio: "La Tercera",
    fecha: "Febrero 2026",
    titulo: "Las redes de mujeres emprendedoras que están cambiando el mapa del negocio en Chile",
    extracto: "Un reportaje sobre las asociaciones que conectan emprendedoras de norte a sur, impulsando el desarrollo económico local.",
    color: "#DEB6E8",
    url: "#",
  },
  {
    medio: "Emol",
    fecha: "Enero 2026",
    titulo: "Emprendimiento femenino post-pandemia: las cifras que nadie esperaba",
    extracto: "Con un 35% de participación, las mujeres emprendedoras chilenas marcan récord en actividad emprendedora según el último informe GEM.",
    color: "#A7C7E7",
    url: "#",
  },
  {
    medio: "BioBioChile",
    fecha: "Diciembre 2025",
    titulo: "ASOMEM supera las 200 socias en su tercer año de vida",
    extracto: "La asociación creció un 60% en 2025 y ya está presente en 16 de las 16 regiones del país, con planes de expansión internacional.",
    color: "#B5D8C7",
    url: "#",
  },
  {
    medio: "Paula",
    fecha: "Noviembre 2025",
    titulo: "Las mujeres que están transformando el emprendimiento chileno desde las regiones",
    extracto: "Un perfil de las emprendedoras del norte y sur de Chile que usan tecnología y redes para crecer sin moverse de sus comunidades.",
    color: "#F5D5C8",
    url: "#",
  },
  {
    medio: "Pulso",
    fecha: "Octubre 2025",
    titulo: "ASOMEM firma convenio con instituciones bancarias para facilitar crédito a emprendedoras",
    extracto: "El acuerdo permite a las socias acceder a condiciones preferenciales de financiamiento, reduciendo la brecha histórica en acceso a crédito.",
    color: "#E8A0BF",
    url: "#",
  },
];

const comunicados = [
  { titulo: "Lanzamiento de Conecta ASOMEM", fecha: "Marzo 2026", url: "#" },
  { titulo: "ASOMEM firma convenio con partner logístico", fecha: "Febrero 2026", url: "#" },
  { titulo: "Resultados del primer año de ASOMEM", fecha: "Diciembre 2025", url: "#" },
  { titulo: "ASOMEM anuncia expansión a 5 nuevas regiones", fecha: "Octubre 2025", url: "#" },
];

export default function PrensaPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 30% 50%, #F5D5C8 0%, transparent 60%), radial-gradient(circle at 70% 50%, #E8A0BF 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">ASOMEM en la Prensa</h1>
            <p className="section-subtitle mx-auto">
              Seguimiento de nuestra presencia en medios y recursos para periodistas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* En los Medios */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              En los Medios
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {noticias.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6"
                style={{
                  background: "white",
                  boxShadow: `0 4px 24px ${n.color}20`,
                  border: `1px solid ${n.color}25`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${n.color}20`, color: n.color }}>
                      <Newspaper size={15} />
                    </div>
                    <span className="font-bold text-sm" style={{ color: n.color }}>{n.medio}</span>
                  </div>
                  <span className="text-xs" style={{ color: "#9A8A9C" }}>{n.fecha}</span>
                </div>
                <h3 className="font-bold text-base leading-snug mb-2" style={{ color: "#3D2C3E" }}>{n.titulo}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6A5A6C" }}>{n.extracto}</p>
                <a href={n.url} className="text-xs font-semibold flex items-center gap-1 hover:opacity-70 transition-opacity" style={{ color: n.color }}>
                  Leer nota completa →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comunicados */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Comunicados de Prensa
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-4">
            {comunicados.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center justify-between gap-4 rounded-2xl p-5"
                style={{ background: "white", boxShadow: "0 2px 16px rgba(232,160,191,0.12)", border: "1px solid rgba(232,160,191,0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDE8F0", color: "#E8A0BF" }}>
                    <FileText size={16} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#3D2C3E" }}>{c.titulo}</p>
                    <p className="text-xs" style={{ color: "#9A8A9C" }}>{c.fecha}</p>
                  </div>
                </div>
                <a href={c.url} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all hover:opacity-80"
                  style={{ background: "rgba(232,160,191,0.12)", color: "#C77A9F" }}>
                  <Download size={12} /> Descargar PDF
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit de Medios */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <div className="rounded-3xl overflow-hidden" style={{ background: "white", boxShadow: "0 8px 40px rgba(232,160,191,0.2)", border: "1px solid rgba(232,160,191,0.25)" }}>
              <div className="h-2" style={{ background: "linear-gradient(90deg, #E8A0BF, #DEB6E8, #A7C7E7)" }} />
              <div className="p-8 md:p-10">
                <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: "#3D2C3E" }}>
                  Kit de Medios
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "#6A5A6C" }}>
                  Descarga nuestros recursos oficiales para publicaciones, notas de prensa y menciones.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Logo ASOMEM en PNG y SVG (versiones color, blanco, negro)",
                    "Guía de marca (colores, tipografías, usos permitidos)",
                    "Fotos oficiales del equipo y eventos",
                    "Datos clave para citar",
                    "Descripción institucional corta y larga",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#6A5A6C" }}>
                      <span style={{ color: "#E8A0BF", marginTop: "2px" }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="btn-primary">
                  <Download size={16} />
                  Descargar Kit de Medios (ZIP)
                </button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* Contacto de Prensa */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #F0E6F6 0%, #FFF5F8 100%)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: "#3D2C3E" }}>
              Contacto de Prensa
            </h2>
            <p className="text-base mb-8" style={{ color: "#6A5A6C" }}>
              Para entrevistas, columnas de opinión o consultas de prensa:
            </p>
            <div className="rounded-3xl p-8" style={{ background: "white", boxShadow: "0 8px 32px rgba(232,160,191,0.15)", border: "1px solid rgba(232,160,191,0.2)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)", color: "white", fontSize: "24px", fontWeight: "bold" }}>
                DP
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "#3D2C3E" }}>Directora de Comunicaciones</h3>
              <p className="text-sm mb-5" style={{ color: "#6A5A6C" }}>Departamento de Prensa y Comunicaciones ASOMEM</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:prensa@asomem.cl" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#C77A9F" }}>
                  <Mail size={16} /> prensa@asomem.cl
                </a>
                <a href="tel:+56900000000" className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#C77A9F" }}>
                  <Phone size={16} /> +56 9 XXXX XXXX
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
