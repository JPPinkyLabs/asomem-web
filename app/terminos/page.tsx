"use client";
import { motion } from "framer-motion";

export default function TerminosPage() {
  return (
    <div>
      <section className="page-header">
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title mb-4">Términos y Condiciones</h1>
            <p className="section-subtitle mx-auto">Última actualización: enero de 2026</p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-8 md:p-10" style={{ background: "white", boxShadow: "0 4px 24px rgba(222,182,232,0.12)", border: "1px solid rgba(222,182,232,0.2)" }}>
            {[
              { titulo: "1. Aceptación de Términos", texto: "Al acceder y usar el sitio web asomem.cl y la plataforma Conecta ASOMEM, aceptas quedar vinculada por estos Términos y Condiciones. Si no estás de acuerdo, por favor abstente de usar nuestros servicios." },
              { titulo: "2. Descripción del Servicio", texto: "ASOMEM ofrece: (a) Un sitio web informativo sobre la asociación y el emprendimiento femenino en Chile. (b) La plataforma Conecta ASOMEM, accesible en intranet.asomem.cl, con herramientas exclusivas para socias. Los servicios pueden modificarse, suspenderse o discontinuarse con previo aviso." },
              { titulo: "3. Uso Aceptable", texto: "Te comprometes a: usar el servicio solo para fines legales; no publicar contenido falso, ofensivo, discriminatorio o que infrinja derechos de terceros; no realizar spam ni actividades comerciales no autorizadas; no intentar acceder a sistemas o cuentas de terceros; mantener la confidencialidad de tus credenciales de acceso." },
              { titulo: "4. Planes de Suscripción", texto: "Los planes Free, Pro y Premium tienen las características descritas en la sección /planes. Los precios están expresados en pesos chilenos (CLP) e incluyen IVA. ASOMEM se reserva el derecho de modificar precios con al menos 30 días de anticipación." },
              { titulo: "5. Política de Cancelación", texto: "Puedes cancelar tu suscripción en cualquier momento desde tu perfil en Conecta ASOMEM. La cancelación aplica al siguiente ciclo de facturación. No realizamos reembolsos proporcionales por el período no utilizado, salvo en caso de fallo del servicio atribuible a ASOMEM." },
              { titulo: "6. Herramientas de Inteligencia Artificial", texto: "Las herramientas de IA (Consultor Legal IA, Consultor Contable IA, Smart Scan) son orientativas y no reemplazan el asesoramiento profesional. ASOMEM no se hace responsable por decisiones tomadas exclusivamente en base a las sugerencias de estas herramientas. Siempre consulta a un profesional para decisiones importantes." },
              { titulo: "7. Propiedad Intelectual", texto: "Todo el contenido de asomem.cl (textos, diseños, logos, imágenes, código) es propiedad de ASOMEM o sus licenciantes. Queda prohibida su reproducción, distribución o modificación sin autorización escrita previa." },
              { titulo: "8. Limitación de Responsabilidad", texto: "ASOMEM no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso del servicio, incluyendo pérdida de datos, interrupciones del servicio o errores en las herramientas de IA. La responsabilidad máxima de ASOMEM no excederá el valor de la suscripción del último mes pagado." },
              { titulo: "9. Ley Aplicable y Jurisdicción", texto: "Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será sometida a la jurisdicción de los tribunales ordinarios de justicia de Santiago de Chile, salvo que las partes acuerden un mecanismo alternativo de resolución de conflictos." },
              { titulo: "10. Contacto", texto: "Para consultas sobre estos términos: contacto@asomem.cl | ASOMEM — Asociación de Mujeres Emprendedoras de Chile." },
            ].map((s, i) => (
              <div key={i} className="mb-8">
                <h2 className="font-playfair font-bold text-xl mb-3" style={{ color: "#B886C8" }}>{s.titulo}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6A5A6C" }}>{s.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
