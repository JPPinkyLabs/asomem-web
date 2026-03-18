"use client";
import { motion } from "framer-motion";

export default function PrivacidadPage() {
  return (
    <div>
      <section className="page-header">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title mb-4">Política de Privacidad</h1>
            <p className="section-subtitle mx-auto">Última actualización: enero de 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "white", boxShadow: "0 4px 24px rgba(232,160,191,0.12)", border: "1px solid rgba(232,160,191,0.2)" }}>
            <div className="prose" style={{ color: "#3D2C3E" }}>
              {[
                { titulo: "1. Identidad del Responsable", texto: "ASOMEM — Asociación de Mujeres Emprendedoras de Chile, en adelante «ASOMEM», es la entidad responsable del tratamiento de los datos personales recopilados a través del sitio web asomem.cl y la plataforma Conecta ASOMEM. Contacto del encargado de datos: privacidad@asomem.cl." },
                { titulo: "2. Datos que Recopilamos", texto: "Recopilamos los siguientes datos: (a) Datos de registro: nombre completo, correo electrónico, teléfono, región, tipo de emprendimiento y plan de suscripción. (b) Datos de uso: páginas visitadas, tiempo en el sitio, acciones realizadas en la plataforma. (c) Datos de transacción: información de pago procesada de forma segura por terceros certificados. (d) Datos de comunicación: mensajes enviados a través del formulario de contacto o al email institucional." },
                { titulo: "3. Finalidad del Tratamiento", texto: "Usamos tus datos para: gestionar tu membresía y acceso a Conecta ASOMEM; enviarte comunicaciones relevantes sobre la asociación (con tu consentimiento); mejorar nuestros servicios y plataforma; cumplir obligaciones legales y tributarias; prevenir fraudes y garantizar la seguridad." },
                { titulo: "4. Base Legal (Ley 19.628)", texto: "El tratamiento de tus datos se basa en: (a) La ejecución de un contrato de membresía cuando eres socia. (b) Tu consentimiento explícito para comunicaciones de marketing. (c) El cumplimiento de obligaciones legales aplicables en Chile." },
                { titulo: "5. Compartición de Datos", texto: "ASOMEM no vende ni cede datos personales a terceros con fines comerciales. Podemos compartir datos con: proveedores de servicios tecnológicos bajo contrato de confidencialidad (hosting, email, pagos); autoridades chilenas cuando la ley lo exija; partners con quienes tienes convenios activos, solo la información estrictamente necesaria." },
                { titulo: "6. Retención de Datos", texto: "Conservamos tus datos mientras mantengas una cuenta activa. Al cancelar tu membresía, anonimizamos tus datos dentro de 90 días, salvo que la ley exija conservarlos por más tiempo (por ejemplo, registros tributarios por 6 años)." },
                { titulo: "7. Tus Derechos", texto: "Conforme a la Ley 19.628 y su actualización, tienes derecho a: acceder a tus datos personales; rectificar datos inexactos; cancelar o eliminar tus datos; oponerte al tratamiento; portabilidad de datos. Para ejercer estos derechos, escribe a privacidad@asomem.cl con asunto «Ejercicio de derechos ARCO»." },
                { titulo: "8. Cookies", texto: "Usamos cookies propias para mantener tu sesión y mejorar la experiencia de uso. Puedes desactivarlas en la configuración de tu navegador, aunque algunas funciones del sitio podrían verse afectadas." },
                { titulo: "9. Seguridad", texto: "Implementamos medidas técnicas y organizativas para proteger tus datos: cifrado SSL/TLS, acceso restringido por roles, auditorías periódicas de seguridad y backups encriptados." },
                { titulo: "10. Contacto", texto: "Para consultas sobre esta política o ejercer tus derechos: privacidad@asomem.cl | ASOMEM — Asociación de Mujeres Emprendedoras de Chile." },
              ].map((s, i) => (
                <div key={i} className="mb-8">
                  <h2 className="font-playfair font-bold text-xl mb-3" style={{ color: "#C77A9F" }}>{s.titulo}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "#6A5A6C" }}>{s.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
