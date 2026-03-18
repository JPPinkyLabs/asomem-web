"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Linkedin, Facebook, Send, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { useState } from "react";

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.16a8.11 8.11 0 0 0 4.76 1.52V7.23a4.85 4.85 0 0 1-1-.54z"/>
  </svg>
);

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <div>
      {/* Header */}
      <section className="page-header">
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 30% 50%, #F5D5C8 0%, transparent 60%), radial-gradient(circle at 70% 50%, #E8A0BF 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="section-title mb-4">Conversemos</h1>
            <p className="section-subtitle mx-auto">
              ¿Tienes preguntas, propuestas o quieres ser parte de ASOMEM? Escríbenos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Formulario */}
            <div className="lg:col-span-3">
              <SectionWrapper>
                <div className="rounded-3xl p-8" style={{ background: "white", boxShadow: "0 8px 40px rgba(232,160,191,0.15)", border: "1px solid rgba(232,160,191,0.2)" }}>
                  {sent ? (
                    <div className="text-center py-10">
                      <CheckCircle size={56} className="mx-auto mb-4" style={{ color: "#B5D8C7" }} />
                      <h3 className="font-playfair font-bold text-2xl mb-2" style={{ color: "#3D2C3E" }}>¡Mensaje enviado!</h3>
                      <p className="text-base" style={{ color: "#6A5A6C" }}>Te responderemos dentro de 48 horas hábiles.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <h2 className="font-playfair font-bold text-2xl mb-2" style={{ color: "#3D2C3E" }}>Envíanos un mensaje</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6A5A6C" }}>Nombre completo *</label>
                          <input
                            type="text"
                            required
                            value={form.nombre}
                            onChange={e => setForm({ ...form, nombre: e.target.value })}
                            placeholder="Tu nombre"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#FFF5F8", border: "1.5px solid rgba(232,160,191,0.3)", color: "#3D2C3E" }}
                            onFocus={e => e.target.style.borderColor = "#E8A0BF"}
                            onBlur={e => e.target.style.borderColor = "rgba(232,160,191,0.3)"}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6A5A6C" }}>Email *</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ background: "#FFF5F8", border: "1.5px solid rgba(232,160,191,0.3)", color: "#3D2C3E" }}
                            onFocus={e => e.target.style.borderColor = "#E8A0BF"}
                            onBlur={e => e.target.style.borderColor = "rgba(232,160,191,0.3)"}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6A5A6C" }}>Asunto *</label>
                        <select
                          required
                          value={form.asunto}
                          onChange={e => setForm({ ...form, asunto: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                          style={{ background: "#FFF5F8", border: "1.5px solid rgba(232,160,191,0.3)", color: form.asunto ? "#3D2C3E" : "#9A8A9C" }}
                        >
                          <option value="">Selecciona un motivo</option>
                          <option value="consulta">Consulta general</option>
                          <option value="socia">Quiero ser socia</option>
                          <option value="alianza">Propuesta de alianza o convenio</option>
                          <option value="prensa">Prensa y medios</option>
                          <option value="soporte">Soporte técnico</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#6A5A6C" }}>Mensaje *</label>
                        <textarea
                          required
                          value={form.mensaje}
                          onChange={e => setForm({ ...form, mensaje: e.target.value })}
                          placeholder="Cuéntanos en qué podemos ayudarte..."
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                          style={{ background: "#FFF5F8", border: "1.5px solid rgba(232,160,191,0.3)", color: "#3D2C3E" }}
                          onFocus={e => e.target.style.borderColor = "#E8A0BF"}
                          onBlur={e => e.target.style.borderColor = "rgba(232,160,191,0.3)"}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary flex items-center justify-center gap-2 w-full py-4"
                        style={{ opacity: loading ? 0.7 : 1 }}
                      >
                        {loading ? "Enviando..." : (<><Send size={16} /> Enviar mensaje</>)}
                      </button>
                    </form>
                  )}
                </div>
              </SectionWrapper>
            </div>

            {/* Info de contacto */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <SectionWrapper delay={0.1}>
                <div className="rounded-3xl p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(232,160,191,0.12)", border: "1px solid rgba(232,160,191,0.2)" }}>
                  <h3 className="font-bold text-base mb-4" style={{ color: "#3D2C3E" }}>Información de contacto</h3>
                  <div className="flex flex-col gap-3">
                    <a href="mailto:contacto@asomem.cl" className="flex items-center gap-3 text-sm group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDE8F0", color: "#E8A0BF" }}>
                        <Mail size={15} />
                      </div>
                      <span className="group-hover:underline" style={{ color: "#3D2C3E" }}>contacto@asomem.cl</span>
                    </a>
                    <a href="mailto:prensa@asomem.cl" className="flex items-center gap-3 text-sm group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDE8F0", color: "#E8A0BF" }}>
                        <Mail size={15} />
                      </div>
                      <div>
                        <span className="group-hover:underline block" style={{ color: "#3D2C3E" }}>prensa@asomem.cl</span>
                        <span className="text-xs" style={{ color: "#9A8A9C" }}>Para medios de comunicación</span>
                      </div>
                    </a>
                    <a href="tel:+56900000000" className="flex items-center gap-3 text-sm group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "#FDE8F0", color: "#E8A0BF" }}>
                        <Phone size={15} />
                      </div>
                      <span className="group-hover:underline" style={{ color: "#3D2C3E" }}>+56 9 XXXX XXXX</span>
                    </a>
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.15}>
                <div className="rounded-3xl p-6" style={{ background: "white", boxShadow: "0 4px 24px rgba(222,182,232,0.12)", border: "1px solid rgba(222,182,232,0.2)" }}>
                  <h3 className="font-bold text-base mb-4" style={{ color: "#3D2C3E" }}>Síguenos en redes</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: <Instagram size={18} />, label: "Instagram", handle: "@asomem.cl", color: "#E8A0BF", href: "https://instagram.com/asomem.cl" },
                      { icon: <Linkedin size={18} />, label: "LinkedIn", handle: "ASOMEM Chile", color: "#DEB6E8", href: "#" },
                      { icon: <Facebook size={18} />, label: "Facebook", handle: "ASOMEM Chile", color: "#A7C7E7", href: "#" },
                      { icon: <TikTokIcon />, label: "TikTok", handle: "@asomem.cl", color: "#B5D8C7", href: "https://tiktok.com/@asomem.cl" },
                    ].map((s, i) => (
                      <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-xl transition-all hover:-translate-y-0.5"
                        style={{ background: `${s.color}12`, border: `1px solid ${s.color}25` }}>
                        <span style={{ color: s.color }}>{s.icon}</span>
                        <div>
                          <p className="text-xs font-bold" style={{ color: "#3D2C3E" }}>{s.label}</p>
                          <p className="text-xs" style={{ color: "#9A8A9C" }}>{s.handle}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </SectionWrapper>

              <SectionWrapper delay={0.2}>
                <div className="rounded-3xl p-6" style={{ background: "linear-gradient(135deg, #E8A0BF20, #DEB6E820)", border: "1px solid rgba(232,160,191,0.25)" }}>
                  <p className="text-xs leading-relaxed" style={{ color: "#6A5A6C" }}>
                    <strong style={{ color: "#C77A9F" }}>Tiempo de respuesta:</strong> Respondemos todas las consultas dentro de <strong>48 horas hábiles</strong>. Para urgencias o prensa, contáctanos directamente a nuestro email de prensa.
                  </p>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
