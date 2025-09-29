import { motion } from "framer-motion";
import { useEffect } from "react";

export const CalcomBooking = () => {
  // Carrega o script do Calendly uma vez
  useEffect(() => {
    const exists = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!exists) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <>
      {/* âncora extra para quem usar #contato */}
      <span id="contato" className="block h-0 w-0 overflow-hidden scroll-mt-28" />
      <section id="lead-form" className="scroll-mt-28 py-20 relative overflow-hidden">
        {/* Fundo animado com gradiente da A Chave */}
        <div className="absolute inset-0 opacity-90">
          <div
            className="absolute inset-0 bg-gradient-primary"
            style={{
              backgroundSize: "400% 400%",
              animation: "gradientShift 8s ease-in-out infinite",
              filter: "url(#noise)",
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <filter id="noise">
                <feTurbulence baseFrequency="0.9" numOctaves="3" seed="1" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                <feComposite in2="SourceGraphic" operator="multiply" />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-white text-center mb-12">
            <motion.h2
              className="font-morganite text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Agende sua Consultoria
            </motion.h2>

            <motion.p
              className="font-sora text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              Descubra como a IA pode transformar seu negócio em uma conversa de 30 minutos
            </motion.p>
          </div>

          {/* Card em 2 colunas: esquerda “glass”, direita branca (Calendly) */}
          <motion.div
            className="
              rounded-2xl max-w-6xl mx-auto overflow-hidden
              ring-1 ring-white/10 bg-transparent
            "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <div className="grid md:grid-cols-[360px,1fr]">
              {/* Painel de marca — “glass” */}
              <div className="hidden md:flex relative items-center justify-center p-10 md:rounded-l-2xl">
                <div className="absolute inset-0 bg-white/6 backdrop-blur-md md:rounded-l-2xl" />
                <div className="absolute inset-0 ring-1 ring-white/10 md:rounded-l-2xl" />

                <div className="relative z-10 text-center text-white">
                  <div className="mx-auto mb-6 grid place-items-center">
                    <img
                      src="/achave-logo-white.png"
                      alt="A Chave"
                      className="h-16 w-16 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-morganite text-3xl font-bold tracking-wide">
                    A Chave
                  </h3>
                  <p className="font-sora text-white/90 mt-2 text-sm">
                    Consultoria e automação com IA
                  </p>

                  <div className="mt-8 space-y-2 text-left text-white/95">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90" />
                      <span className="text-sm">Chamada de 30 minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90" />
                      <span className="text-sm">Entenda seu cenário e objetivos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/90" />
                      <span className="text-sm">Roteiro personalizado de próximos passos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly */}
              <div className="relative min-h[720px] md:min-h-[720px] bg-white md:rounded-r-2xl">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/a-chave-mestra/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "720px" }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* animação do gradiente do fundo */}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </>
  );
};
