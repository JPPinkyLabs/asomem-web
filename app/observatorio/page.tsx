"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionWrapper from "@/components/SectionWrapper";
import { FileText, ExternalLink } from "lucide-react";
import { useState } from "react";

const kpis = [
  { value: 35, suffix: "%", label: "Mujeres del total de emprendedores en Chile", fuente: "GEM Chile 2023", color: "#E8A0BF" },
  { value: 30, suffix: "%", label: "Tasa de aprobación de créditos para emprendedoras", fuente: "BID", color: "#DEB6E8" },
  { value: 20, suffix: "%", label: "Aporte al PIB de empresas lideradas por mujeres", fuente: "SII Chile", color: "#A7C7E7" },
  { value: 12, suffix: "%", label: "Crecimiento de nuevos negocios femeninos post-pandemia", fuente: "GEM Chile 2023", color: "#B5D8C7", prefix: "+" },
  { value: 35, suffix: "%", label: "Startups tech con al menos una cofundadora mujer", fuente: "Min. Ciencia Chile", color: "#F5D5C8" },
  { value: 40, suffix: "%", label: "Emprendedoras que contratan jóvenes menores de 30 años", fuente: "INE", color: "#E8A0BF" },
  { value: 70, suffix: "%", label: "Emprendedoras que mantuvieron o crecieron sus ingresos en crisis", fuente: "CEE", color: "#DEB6E8" },
  { value: 53, suffix: "%", label: "Intención emprendedora en Chile vs 23% promedio global", fuente: "GEM 2023", color: "#A7C7E7" },
];

const chartData = [
  {
    categoria: "Tasa emprendimiento\nnaciente",
    Chile: 16.8,
    "OCDE promedio": 5.0,
  },
  {
    categoria: "Empleo por\ncuenta propia",
    Chile: 25.0,
    "OCDE promedio": 10.0,
  },
  {
    categoria: "Acceso a\nfinanciamiento",
    Chile: 30.0,
    "OCDE promedio": 55.0,
  },
  {
    categoria: "Participación\nen startups tech",
    Chile: 35.0,
    "OCDE promedio": 22.0,
  },
];

const regionesData = [
  { region: "Aysén", tea: 27, nota: "★ Líder nacional" },
  { region: "Tarapacá", tea: 25, nota: "★ Paridad" },
  { region: "Atacama", tea: 24, nota: "★ Paridad" },
  { region: "Antofagasta", tea: 22 },
  { region: "Metropolitana", tea: 21, nota: "Mayor volumen" },
  { region: "Araucanía", tea: 20 },
  { region: "Valparaíso", tea: 20 },
  { region: "Coquimbo", tea: 19 },
  { region: "Biobío", tea: 19 },
  { region: "Arica", tea: 18 },
  { region: "Maule", tea: 18 },
  { region: "Los Lagos", tea: 18 },
  { region: "O'Higgins", tea: 17 },
  { region: "Los Ríos", tea: 17 },
  { region: "Ñuble", tea: 16 },
  { region: "Magallanes", tea: 15 },
];

const informes = [
  { titulo: "Global Entrepreneurship Monitor Chile 2023", inst: "GEM / UDD", year: "2024", desc: "Análisis completo del ecosistema emprendedor chileno con perspectiva de género.", url: "#" },
  { titulo: "Igualdad de Género en Chile", inst: "OCDE", year: "2021", desc: "Evaluación de las brechas de género en emprendimiento y mercado laboral.", url: "#" },
  { titulo: "Los Emprendedores Perdidos 2021", inst: "OCDE", year: "2021", desc: "Estudio sobre potencial emprendedor femenino no aprovechado en países OCDE.", url: "#" },
  { titulo: "Evaluación Nacional WED Chile", inst: "CPC / Mujeres Empresarias / OIT", year: "2021", desc: "Diagnóstico del emprendimiento femenino a nivel nacional.", url: "#" },
  { titulo: "Informe de Emprendimiento y Género", inst: "Min. Economía Chile", year: "2016", desc: "Primer análisis oficial de las brechas de género en el emprendimiento chileno.", url: "#" },
  { titulo: "Índice de Burocracia 2025", inst: "Adam Smith Center / FIU", year: "2025", desc: "Análisis del impacto de la burocracia en el emprendimiento formal.", url: "#" },
];

const articulos = [
  { titulo: "¿Por qué Chile lidera el emprendimiento pero no el financiamiento femenino?", fecha: "Marzo 2026", tag: "Análisis" },
  { titulo: "Capital Abeja vs Capital Semilla: ¿Cuál te conviene?", fecha: "Febrero 2026", tag: "Guía" },
  { titulo: "Emprendimiento por necesidad vs por oportunidad: lo que los datos no dicen", fecha: "Enero 2026", tag: "Investigación" },
];

export default function ObservatorioPage() {
  const [selectedRegion, setSelectedRegion] = useState<typeof regionesData[0] | null>(null);

  const getRegionColor = (tea: number) => {
    if (tea >= 25) return "#E8A0BF";
    if (tea >= 22) return "#DEB6E8";
    if (tea >= 19) return "#A7C7E7";
    if (tea >= 16) return "#B5D8C7";
    return "#F5D5C8";
  };

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 30% 50%, #A7C7E7 0%, transparent 60%), radial-gradient(circle at 70% 50%, #DEB6E8 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Observatorio del Emprendimiento Femenino</h1>
            <p className="section-subtitle mx-auto">
              Datos, análisis y evidencia para entender y transformar el ecosistema emprendedor de la mujer en Chile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPIs Dashboard */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Cifras Clave del Emprendimiento Femenino
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((k, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-3xl p-5 text-center"
                style={{ background: "white", boxShadow: `0 4px 20px ${k.color}20`, border: `1px solid ${k.color}25` }}
              >
                <div className="text-3xl md:text-4xl font-bold font-playfair mb-1" style={{ color: k.color }}>
                  <AnimatedCounter end={k.value} prefix={k.prefix ?? ""} suffix={k.suffix} />
                </div>
                <p className="text-xs leading-snug font-medium mb-1" style={{ color: "#3D2C3E" }}>{k.label}</p>
                <p className="text-xs" style={{ color: "#9A8A9C" }}>Fuente: {k.fuente}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chile vs OCDE */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-4" style={{ color: "#3D2C3E" }}>
              Chile versus el mundo: ¿cómo estamos?
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: "#6A5A6C" }}>
              Comparativa con el promedio OCDE en indicadores clave de emprendimiento femenino.
            </p>
          </SectionWrapper>
          <div className="rounded-3xl p-6 md:p-8" style={{ background: "white", boxShadow: "0 8px 40px rgba(232,160,191,0.15)" }}>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(232,160,191,0.2)" />
                <XAxis dataKey="categoria" tick={{ fill: "#6A5A6C", fontSize: 11 }} angle={-20} textAnchor="end" interval={0} />
                <YAxis tick={{ fill: "#6A5A6C", fontSize: 11 }} unit="%" />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid rgba(232,160,191,0.3)", boxShadow: "0 4px 20px rgba(232,160,191,0.2)" }}
                  formatter={(value: number) => [`${value}%`]}
                />
                <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }} />
                <Bar dataKey="Chile" fill="#E8A0BF" radius={[6, 6, 0, 0]} />
                <Bar dataKey="OCDE promedio" fill="#C8C8C8" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-center mt-4" style={{ color: "#9A8A9C" }}>
              Fuentes: GEM Chile 2023, OCDE &ldquo;Missing Entrepreneurs 2021&rdquo;, BID, Min. Economía Chile, La Tercera
            </p>
          </div>

          {/* Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { txt: "Chile lidera la OCDE en emprendimiento femenino naciente con una tasa del 16.8%.", color: "#E8A0BF" },
              { txt: "Pero la brecha de género en emprendimiento creció 1.9 puntos, siendo uno de solo 6 países OCDE donde aumentó.", color: "#DEB6E8" },
              { txt: "Chile cayó un 60% en inversión de capital de riesgo 2023 vs 16% promedio EEUU, afectando a emprendedoras tech.", color: "#A7C7E7" },
              { txt: "Las emprendedoras chilenas acceden a crédito solo en un 30% vs 55% en hombres, una de las brechas más grandes de la región.", color: "#B5D8C7" },
            ].map((ins, i) => (
              <div key={i} className="rounded-2xl p-4 flex items-start gap-3"
                style={{ background: `${ins.color}12`, border: `1px solid ${ins.color}30` }}>
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: ins.color }} />
                <p className="text-sm leading-relaxed" style={{ color: "#3D2C3E" }}>{ins.txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Regional */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-4" style={{ color: "#3D2C3E" }}>
              Emprendimiento femenino por región
            </h2>
            <p className="text-center text-sm mb-10" style={{ color: "#6A5A6C" }}>
              Tasa de Actividad Emprendedora (TEA) femenina por región. Haz clic en una región para ver sus datos.
            </p>
          </SectionWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {regionesData.map((r, i) => (
              <motion.button
                key={i}
                onClick={() => setSelectedRegion(selectedRegion?.region === r.region ? null : r)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl p-4 text-left transition-all"
                style={{
                  background: selectedRegion?.region === r.region ? getRegionColor(r.tea) : "white",
                  border: `2px solid ${getRegionColor(r.tea)}`,
                  boxShadow: `0 4px 16px ${getRegionColor(r.tea)}25`,
                  color: selectedRegion?.region === r.region ? "white" : "#3D2C3E",
                }}
              >
                <div className="text-2xl font-bold font-playfair mb-1">{r.tea}%</div>
                <div className="text-xs font-semibold leading-tight">{r.region}</div>
                {r.nota && (
                  <div className="text-xs mt-1 opacity-80">{r.nota}</div>
                )}
              </motion.button>
            ))}
          </div>
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-3xl p-6"
              style={{ background: "white", boxShadow: "0 8px 32px rgba(232,160,191,0.2)", border: "1px solid rgba(232,160,191,0.3)" }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: "#3D2C3E" }}>
                Región {selectedRegion.region}
              </h3>
              <p className="text-sm" style={{ color: "#6A5A6C" }}>
                <strong style={{ color: getRegionColor(selectedRegion.tea) }}>TEA Femenino: {selectedRegion.tea}%</strong>
                {selectedRegion.nota && ` · ${selectedRegion.nota}`}
              </p>
              <p className="text-xs mt-2" style={{ color: "#9A8A9C" }}>Fuente: GEM Chile Regional</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Informes */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #F0E6F6 0%, #FFF5F8 100%)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Biblioteca de Informes
            </h2>
          </SectionWrapper>
          <div className="flex flex-col gap-4">
            {informes.map((inf, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-5 flex items-start gap-4"
                style={{ background: "white", boxShadow: "0 4px 16px rgba(232,160,191,0.1)", border: "1px solid rgba(232,160,191,0.2)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDE8F0", color: "#E8A0BF" }}>
                  <FileText size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: "#3D2C3E" }}>{inf.titulo}</h3>
                  <p className="text-xs mb-1" style={{ color: "#9A8A9C" }}>{inf.inst} · {inf.year}</p>
                  <p className="text-xs" style={{ color: "#6A5A6C" }}>{inf.desc}</p>
                </div>
                <a href={inf.url} className="shrink-0 flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap transition-all hover:opacity-80"
                  style={{ background: "rgba(232,160,191,0.12)", color: "#C77A9F" }}>
                  Ver informe <ExternalLink size={11} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos del Observatorio */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Análisis y Perspectivas
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulos.map((art, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl p-6 cursor-pointer"
                style={{ background: "white", boxShadow: "0 4px 20px rgba(232,160,191,0.12)", border: "1px solid rgba(232,160,191,0.2)" }}
              >
                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-3" style={{ background: "rgba(167,199,231,0.2)", color: "#7AA0C0" }}>
                  {art.tag}
                </span>
                <h3 className="font-bold text-sm leading-snug mb-3" style={{ color: "#3D2C3E" }}>{art.titulo}</h3>
                <p className="text-xs" style={{ color: "#9A8A9C" }}>Equipo ASOMEM · {art.fecha}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
