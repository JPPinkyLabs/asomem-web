"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Lock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import Link from "next/link";

const proximos = [
  {
    titulo: "Taller: Marketing Digital para Emprendedoras",
    fecha: "15 de abril 2026",
    hora: "10:00 - 12:00",
    modalidad: "Online",
    desc: "Aprende a crear contenido que vende sin invertir en publicidad. Estrategias probadas para Instagram, TikTok y WhatsApp Business.",
    publico: true,
    color: "#E8A0BF",
    bg: "#FDE8F0",
    emoji: "📱",
  },
  {
    titulo: "Networking: Café de Emprendedoras Santiago",
    fecha: "22 de abril 2026",
    hora: "18:00 - 20:00",
    modalidad: "Presencial",
    lugar: "Santiago, RM",
    desc: "Conecta con emprendedoras de la Región Metropolitana en un ambiente distendido. Trae tus tarjetas y muchas ganas de hacer red.",
    publico: false,
    color: "#DEB6E8",
    bg: "#F0E6F6",
    emoji: "☕",
  },
  {
    titulo: "Webinar: Fondos CORFO 2026 — Todo lo que necesitas saber",
    fecha: "5 de mayo 2026",
    hora: "11:00 - 12:30",
    modalidad: "Online",
    desc: "Repaso completo de las líneas de financiamiento CORFO disponibles este año. Con preguntas y respuestas en vivo.",
    publico: true,
    color: "#A7C7E7",
    bg: "#E8F4FD",
    emoji: "💸",
  },
  {
    titulo: "Feria de Emprendedoras ASOMEM Valparaíso",
    fecha: "20 de mayo 2026",
    hora: "10:00 - 18:00",
    modalidad: "Presencial",
    lugar: "Valparaíso",
    desc: "La feria de emprendimiento femenino más grande del litoral central. Expone tus productos, conecta con otras socias y vende.",
    publico: false,
    color: "#B5D8C7",
    bg: "#E8F5EE",
    emoji: "🏪",
  },
  {
    titulo: "Masterclass: Inteligencia Artificial para tu Negocio",
    fecha: "10 de junio 2026",
    hora: "15:00 - 17:00",
    modalidad: "Online",
    desc: "Cómo usar IA para automatizar tareas, crear contenido y tomar mejores decisiones en tu emprendimiento. Sin conocimientos técnicos previos.",
    publico: true,
    color: "#DEB6E8",
    bg: "#F0E6F6",
    emoji: "🤖",
  },
  {
    titulo: "Encuentro Nacional de Socias ASOMEM 2026",
    fecha: "25 de julio 2026",
    hora: "09:00 - 18:00",
    modalidad: "Híbrido",
    lugar: "Santiago + Streaming",
    desc: "El evento más importante del año de ASOMEM. Conferencias, paneles, networking y la premiación anual a las emprendedoras del año.",
    publico: false,
    color: "#E8A0BF",
    bg: "#FDE8F0",
    emoji: "🏆",
  },
];

const pasados = [
  { titulo: "Feria de Emprendedoras ASOMEM 2025", fecha: "Diciembre 2025", fotos: 12, emoji: "🎪", color: "#E8A0BF" },
  { titulo: "Taller de Tributación para Pymes", fecha: "Noviembre 2025", fotos: 8, emoji: "📊", color: "#DEB6E8" },
  { titulo: "Primer Networking Nacional Online", fecha: "Octubre 2025", fotos: 6, emoji: "🌐", color: "#A7C7E7" },
  { titulo: "Lanzamiento Conecta ASOMEM", fecha: "Septiembre 2025", fotos: 15, emoji: "🚀", color: "#B5D8C7" },
  { titulo: "Webinar: Cómo exportar tus productos", fecha: "Agosto 2025", fotos: 4, emoji: "✈️", color: "#F5D5C8" },
  { titulo: "Taller de Branding Personal", fecha: "Julio 2025", fotos: 9, emoji: "✨", color: "#E8A0BF" },
];

export default function EventosPage() {
  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 30% 50%, #DEB6E8 0%, transparent 60%), radial-gradient(circle at 70% 50%, #B5D8C7 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Eventos y Capacitaciones</h1>
            <p className="section-subtitle mx-auto">
              Aprende, conecta y crece junto a la comunidad ASOMEM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-12" style={{ color: "#3D2C3E" }}>
              Próximos Eventos
            </h2>
          </SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proximos.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "white",
                  boxShadow: `0 4px 24px ${ev.color}20`,
                  border: `1px solid ${ev.color}25`,
                }}
              >
                {/* Header colorido */}
                <div className="h-20 flex items-center px-6 gap-4" style={{ background: ev.bg }}>
                  <span className="text-3xl">{ev.emoji}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ background: ev.color, color: "white" }}
                      >
                        {ev.modalidad}
                      </span>
                      {!ev.publico && (
                        <span className="text-xs font-semibold flex items-center gap-1 px-2 py-1 rounded-full"
                          style={{ background: "rgba(61,44,62,0.08)", color: "#6A5A6C" }}>
                          <Lock size={9} /> Solo socias
                        </span>
                      )}
                      {ev.publico && (
                        <span className="text-xs font-semibold px-2 py-1 rounded-full"
                          style={{ background: "rgba(181,216,199,0.3)", color: "#8AB5A0" }}>
                          Abierto
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-base leading-snug mb-2" style={{ color: "#3D2C3E" }}>{ev.titulo}</h3>
                  <div className="flex flex-wrap gap-3 text-xs mb-3" style={{ color: "#6A5A6C" }}>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} style={{ color: ev.color }} /> {ev.fecha}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} style={{ color: ev.color }} /> {ev.hora}
                    </span>
                    {ev.lugar && (
                      <span className="flex items-center gap-1">
                        <MapPin size={11} style={{ color: ev.color }} /> {ev.lugar}
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#6A5A6C" }}>{ev.desc}</p>
                  {ev.publico ? (
                    <button
                      className="text-xs font-bold px-4 py-2 rounded-full transition-all hover:opacity-80"
                      style={{ background: `${ev.color}18`, color: ev.color, border: `1px solid ${ev.color}30` }}
                    >
                      Más información →
                    </button>
                  ) : (
                    <Link
                      href="/planes"
                      className="text-xs font-bold px-4 py-2 rounded-full transition-all hover:opacity-80 inline-block"
                      style={{ background: "rgba(61,44,62,0.06)", color: "#6A5A6C", border: "1px solid rgba(61,44,62,0.1)" }}
                    >
                      <Lock size={9} className="inline mr-1" />
                      Exclusivo socias → Ver planes
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de Eventos Pasados */}
      <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #FDE8F0 0%, #F0E6F6 100%)" }}>
        <div className="max-w-5xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold text-center mb-4" style={{ color: "#3D2C3E" }}>
              Así vivimos nuestros eventos 📸
            </h2>
            <p className="text-center text-sm mb-12" style={{ color: "#6A5A6C" }}>
              Una comunidad que se encuentra, aprende y crece junta.
            </p>
          </SectionWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pasados.map((ev, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{ boxShadow: `0 4px 20px ${ev.color}20` }}
              >
                <div
                  className="h-28 flex items-center justify-center text-4xl"
                  style={{ background: `linear-gradient(135deg, ${ev.color}30, ${ev.color}15)`, border: `1px solid ${ev.color}25` }}
                >
                  {ev.emoji}
                </div>
                <div className="p-3" style={{ background: "white" }}>
                  <p className="font-semibold text-xs leading-snug mb-1" style={{ color: "#3D2C3E" }}>{ev.titulo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#9A8A9C" }}>{ev.fecha}</span>
                    <span className="text-xs font-semibold" style={{ color: ev.color }}>{ev.fotos} fotos</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <SectionWrapper>
            <h2 className="font-playfair text-3xl font-bold mb-4" style={{ color: "#3D2C3E" }}>
              ¿Quieres acceso a todos los eventos?
            </h2>
            <p className="text-base mb-8" style={{ color: "#6A5A6C" }}>
              Las socias Pro y Premium tienen acceso a todos los eventos, capacitaciones exclusivas y cupo garantizado en eventos con aforo limitado.
            </p>
            <Link href="/planes" className="btn-primary">
              Ver planes y suscribirme →
            </Link>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
