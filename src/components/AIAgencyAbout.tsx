"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

export const AIAgencyAbout = () => {
  const aiLogos = [
    { name: "Facebook",      src: "/faacebook.png" }, // corrija p/ /facebook.png se necessário
    { name: "Instagram",     src: "/instagram.png" },
    { name: "WhatsApp",      src: "/whatsapp.png" },
    { name: "Google Agenda", src: "/google_agenda.png" },
    { name: "Google Drive",  src: "/google_drive.png" },
    { name: "Google Sheets", src: "/google_sheets.png" },
    { name: "Google Docs",   src: "/GOOGLE_DOCS.png" },
    { name: "OpenAI",        src: "/OPEN_AI.png" },
  ];

  const originalBullets = [
    { strong: "Robôs Conversacionais Avançados", tail: "Para maximizar leads e conversões." },
    { strong: "Fluxos Automatizados Inteligentes", tail: "Para otimizar operações complexas." },
    { strong: "Conectividade Total de Sistemas", tail: "Para centralizar o controle empresarial." },
  ];

  const addedBullets = [
    { strong: "Business intelligence", tail: "para transformar dados reais em decisões claras." },
    { strong: "Neuromarketing aplicado", tail: "gatilhos de decisão e prova social sem depender de desconto." },
    { strong: "Ciência social", tail: "programas educativos que aumentam frequência e ticket." },
  ];

  // ----- ORBITA RESPONSIVA
  const wrapRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(130); // fallback

  useEffect(() => {
    if (!wrapRef.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      // raio = metade do menor lado - margem de segurança
      const r = Math.max(80, Math.min(150, Math.min(width, height) / 2 - 28));
      setRadius(r);
    });
    ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // velocidade da órbita
  const ANIM_DURATION = 12;
  const CONNECT_GAP = 30;

  return (
    <>
      {/* âncora com offset para o header fixo */}
      <span id="solucoes" className="block h-0 -mt-28 pt-28" aria-hidden="true" />

      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* BG suave */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-achave-yellow rounded-full" />
          <div className="absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 bg-achave-pink rounded-full" />
          <div className="absolute top-32 right-20 w-12 sm:w-16 h-12 sm:h-16 bg-achave-orange rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Texto */}
              <div>
                <div className="mb-4 sm:mb-6">
                  <span className="font-sora text-xs sm:text-sm font-semibold text-achave-orange uppercase tracking-wider bg-achave-orange/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                    Nossas soluções
                  </span>
                </div>

                <h2 className="font-morganite text-[clamp(1.75rem,5.5vw,2.8rem)] md:text-5xl font-bold mb-3 sm:mb-4 text-achave-black leading-tight">
                  Transformamos seus clientes em vendedores para sua empresa com{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    tecnologia e ciência social
                  </span>
                </h2>

                {/* Bullets */}
                <div className="space-y-4 sm:space-y-6 mb-8">
                  {[...originalBullets, ...addedBullets].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-achave-yellow mt-1 flex-shrink-0" />
                      <span className="font-sora text-base sm:text-lg text-gray-700 leading-relaxed max-w-[52ch] md:max-w-[60ch]">
                        <strong className="capitalize">{item.strong}</strong> {item.tail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anel de logos girando (responsivo) */}
              <div className="flex justify-center">
                <div
                  ref={wrapRef}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
                >
                  {/* centro */}
                  <div className="absolute inset-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                    <img
                      src="/achave-logo-white.png"
                      alt="A Chave"
                      className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* orbitas */}
                  {aiLogos.map((logo, index) => {
                    const angle = (index * 360) / aiLogos.length;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={logo.name}
                        className="absolute w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                        style={{
                          left: `calc(50% + ${x}px - 20px)`,
                          top: `calc(50% + ${y}px - 20px)`,
                          animation: `rotate-around ${ANIM_DURATION}s linear infinite`,
                          animationDelay: `${-(ANIM_DURATION / aiLogos.length) * index}s`,
                        }}
                        title={logo.name}
                        aria-label={logo.name}
                      >
                        <img
                          src={logo.src}
                          alt={logo.name}
                          className="w-8 h-8 sm:w-10 sm:h-10 object-contain pointer-events-none select-none"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                        />
                      </div>
                    );
                  })}

                  {/* pinos */}
                  <div className="absolute inset-0 opacity-20">
                    {aiLogos.map((_, index) => {
                      const angle = (index * 360) / aiLogos.length;
                      const startRadius = radius - CONNECT_GAP;
                      const endRadius = radius;
                      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
                      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
                      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
                      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;

                      return (
                        <div
                          key={index}
                          className="absolute w-px bg-gradient-primary"
                          style={{
                            left: `calc(50% + ${startX}px)`,
                            top: `calc(50% + ${startY}px)`,
                            height: `${endRadius - startRadius}px`,
                            transform: `rotate(${angle}deg)`,
                            transformOrigin: "top",
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* fim anel */}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes rotate-around {
            from { transform: rotate(0deg) translateX(${radius}px) rotate(0deg); }
            to   { transform: rotate(360deg) translateX(${radius}px) rotate(-360deg); }
          }
        `}</style>
      </section>
    </>
  );
};
