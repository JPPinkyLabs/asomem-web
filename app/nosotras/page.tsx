"use client";

import { motion } from "framer-motion";
import { Target, Telescope, Gem, Linkedin } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const timeline = [
  {
    year: "2022",
    title: "El inicio",
    desc: "Un grupo de emprendedoras de distintas regiones de Chile se une con una visión común: crear una red de apoyo real, no solo teórica, para mujeres que emprenden en el país.",
  },
  {
    year: "2023",
    title: "Formalización",
    desc: "ASOMEM se constituye formalmente como asociación. Se definen los pilares de trabajo: conexión, herramientas, comunidad y visibilidad. Las primeras 50 socias se suman al proyecto.",
  },
  {
    year: "2024",
    title: "Crecimiento",
    desc: "La asociación supera las 150 socias en 12 regiones. Se firman los primeros convenios con partners de banca, logística y capacitación. Se realizan los primeros eventos presenciales y virtuales.",
  },
  {
    year: "2025",
    title: "Conecta ASOMEM",
    desc: "Se lanza la plataforma digital Conecta ASOMEM: Mall Virtual, herramientas de IA, directorio de confianza y mucho más. ASOMEM se posiciona como referente del emprendimiento femenino en Chile.",
  },
  {
    year: "2026",
    title: "El futuro",
    desc: "Expansión a todas las regiones, lanzamiento del Observatorio de Emprendimiento Femenino, nuevos convenios y alianzas internacionales.",
  },
];

const valores = [
  { icon: <Target size={32} />, label: "Misión", color: "#E8A0BF", bg: "#FDE8F0", text: "Potenciar el crecimiento de la mujer emprendedora en Chile a través de herramientas digitales, comunidad activa y oportunidades concretas de negocio." },
  { icon: <Telescope size={32} />, label: "Visión", color: "#DEB6E8", bg: "#F0E6F6", text: "Ser la red de emprendedoras más influyente y colaborativa de Chile, donde cada mujer que emprende encuentre apoyo, visibilidad y camino al éxito." },
  {
    icon: <Gem size={32} />, label: "Valores", color: "#A7C7E7", bg: "#E8F4FD", text: null,
    bullets: [
      "Colaboración por sobre la competencia",
      "Equidad de acceso sin importar la región",
      "Innovación con herramientas que realmente sirven",
      "Transparencia en todo lo que hacemos",
      "Comunidad como motor de crecimiento",
    ],
  },
];

const equipo = [
  { nombre: "María González", cargo: "Presidenta", initials: "MG", color: "#E8A0BF", bio: "Emprendedora con 15 años de experiencia en retail y moda sostenible. Fundadora de ASOMEM con una visión clara de impacto nacional." },
  { nombre: "Sofía Ramírez", cargo: "Vicepresidenta", initials: "SR", color: "#DEB6E8", bio: "Especialista en desarrollo de negocios y ecosistemas de emprendimiento. Lidera estrategias de expansión regional." },
  { nombre: "Camila Fuentes", cargo: "Directora de Comunidad", initials: "CF", color: "#A7C7E7", bio: "Psicóloga organizacional y coach de emprendimiento. Construye los lazos que hacen de ASOMEM una comunidad real." },
  { nombre: "Andrea Vidal", cargo: "Directora de Alianzas", initials: "AV", color: "#B5D8C7", bio: "Especialista en negociación corporativa. Gestiona los convenios y partnerships que crean valor para todas las socias." },
  { nombre: "Valentina Cruz", cargo: "Directora de Tecnología", initials: "VC", color: "#F5D5C8", bio: "Ingeniera en sistemas y emprendedora tech. Lidera el desarrollo de Conecta ASOMEM y las herramientas de IA." },
];

const alianzas = [
  "CORFO", "SERCOTEC", "FOSIS", "ProChile",
  "Ministerio de la Mujer", "Ministerio de Economía",
  "Universidad de Chile", "Pontificia UC",
  "Cámara Comercio RM", "Cámara Comercio Valparaíso",
];

export default function NosotrasPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 25% 50%, #E8A0BF 0%, transparent 60%), radial-gradient(circle at 75% 50%, #DEB6E8 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Quiénes Somos</h1>
            <p className="section-subtitle mx-auto">
              Nacimos para que ninguna emprendedora chilena camine sola.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-14" style={{ color: "#3D2C3E" }}>
              Nuestra Historia
            </h2>
          </SectionWrapper>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style={{ background: "linear-gradient(180deg, #E8A0BF, #DEB6E8, #A7C7E7)" }} />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row pl-16 md:pl-0`}
              >
                {/* Dot */}
                <div
                  className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full border-4 border-white -translate-x-1/2 top-1 shrink-0 z-10"
                  style={{ background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)", boxShadow: "0 0 0 4px rgba(232,160,191,0.2)" }}
                />
                <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                  <span className="text-xs font-bold uppercase tracking-widest mb-1 block" style={{ color: "#C77A9F" }}>{item.year}</span>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#3D2C3E" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6A5A6C" }}>{item.desc}</p>
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión Visión Valores */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Misión, Visión y Valores
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl p-8"
                style={{ background: "white", boxShadow: `0 8px 32px ${v.color}20`, border: `1px solid ${v.color}25` }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: v.bg, color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="font-playfair font-bold text-xl mb-3" style={{ color: "#3D2C3E" }}>{v.label}</h3>
                {v.text && <p className="text-sm leading-relaxed" style={{ color: "#6A5A6C" }}>{v.text}</p>}
                {v.bullets && (
                  <ul className="space-y-2">
                    {v.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "#6A5A6C" }}>
                        <span style={{ color: v.color, marginTop: "2px" }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo Directivo */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Equipo Directivo
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipo.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-7 text-center"
                style={{ background: "white", boxShadow: `0 4px 24px ${m.color}20`, border: `1px solid ${m.color}25` }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${m.color}, ${m.color}aa)` }}
                >
                  {m.initials}
                </div>
                <h3 className="font-bold text-base mb-0.5" style={{ color: "#3D2C3E" }}>{m.nombre}</h3>
                <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: m.color }}>{m.cargo}</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6A5A6C" }}>{m.bio}</p>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:opacity-80"
                  style={{ background: `${m.color}15`, color: m.color }}>
                  <Linkedin size={13} /> LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alianzas Institucionales */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #F0E6F6 0%, #FFF5F8 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-4" style={{ color: "#3D2C3E" }}>
              Trabajamos junto a quienes impulsan el emprendimiento en Chile
            </h2>
            <p className="text-center mb-12 text-sm" style={{ color: "#6A5A6C" }}>
              Alianzas institucionales que potencian el trabajo de ASOMEM en todo el país.
            </p>
          </SectionWrapper>
          <div className="flex flex-wrap gap-3 justify-center">
            {alianzas.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-2xl text-sm font-semibold"
                style={{ background: "white", color: "#6A5A6C", border: "1px solid rgba(232,160,191,0.25)", boxShadow: "0 2px 12px rgba(232,160,191,0.1)" }}
              >
                {a}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
