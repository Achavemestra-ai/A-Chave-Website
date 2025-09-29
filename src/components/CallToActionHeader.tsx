// path: src/components/CallToActionHeader.tsx
import { motion } from "framer-motion";
import { BarChart3, Users } from "lucide-react";

export const CallToActionHeader = () => {
  const scrollToNext = () => {
    const el = document.getElementById("solucoes"); // rola até a seção de soluções
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="-mt-8 md:-mt-12 lg:-mt-14 pt-24 pb-32 md:pb-40 bg-white relative overflow-visible">
      {/* Bolhas de fundo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-achave-yellow rounded-full" />
        <div className="absolute top-20 right-20 w-16 h-16 bg-achave-pink rounded-full" />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-achave-orange rounded-full" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-achave-yellow-gold rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título (clamp para não cortar) */}
          <motion.h1
            className="font-morganite font-bold text-achave-black leading-[0.98]
                       text-[clamp(34px,9vw,64px)] md:text-7xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Escalamos qualquer negócio com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Tecnologia e Neuromarketing
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            className="font-sora text-[15px] sm:text-xl md:text-2xl mb-10 sm:mb-12 text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Estruturas personalizadas para sua empresa. Mais eficiência, operação 24/7.
          </motion.p>

          {/* Badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            {/* Business Intelligence */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-sora font-semibold text-achave-black text-sm sm:text-base">
                Business Intelligence
              </span>
            </div>

            {/* Ciência Social */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-sora font-semibold text-achave-black text-sm sm:text-base">
                Ciência Social
              </span>
            </div>
          </motion.div>

          {/* Seta neon (CTA para rolar) */}
          <motion.button
            onClick={scrollToNext}
            aria-label="Ir para a próxima seção"
            className="mx-auto block relative group"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, delay: 0.3 }}
          >
            <span className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.25),transparent_60%)] blur-[6px]" />
            <span className="relative inline-grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl">
              <span className="absolute inset-0 rounded-2xl animate-spin-slow
                               bg-[conic-gradient(from_0deg,rgba(236,72,153,.9),rgba(168,85,247,.9),rgba(245,158,11,.9),rgba(236,72,153,.9))]" />
              <span className="absolute inset-[2px] rounded-[10px] bg-white/5 backdrop-blur-md" />
              <span className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.04))]
                               shadow-[inset_0_0_20px_rgba(255,255,255,.08)] ring-1 ring-white/10
                               grid place-items-center group-hover:scale-[1.03] transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     className="w-6 h-6 sm:w-7 sm:h-7 text-achave-black drop-shadow-[0_0_6px_rgba(236,72,153,.6)] animate-bounce-soft">
                  <path fill="currentColor" d="M12 16a1 1 0 0 1-.7-.3l-5-5a1 1 0 1 1 1.4-1.4L12 13.6l4.3-4.3a1 1 0 1 1 1.4 1.4l-5 5a1 1 0 0 1-.7.3Z"/>
                </svg>
                <span className="pointer-events-none absolute inset-0 rounded-xl bg-pink-500/15 opacity-0
                                 group-hover:opacity-100 animate-ripple" />
              </span>
            </span>
            <span className="mt-3 block text-sm font-sora text-gray-500 group-hover:text-gray-600 transition-colors">
              role para ver mais
            </span>

            <style>{`
              @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              .animate-spin-slow { animation: spin-slow 10s linear infinite; }
              @keyframes bounce-soft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
              .animate-bounce-soft { animation: bounce-soft 1.6s ease-in-out infinite; }
              @keyframes ripple { 0% { transform: scale(1); opacity: .35; } 70% { transform: scale(1.25); opacity: 0; } 100% { transform: scale(1.25); opacity: 0; } }
              .animate-ripple { animation: ripple 1.2s ease-out 1; }
            `}</style>
          </motion.button>
        </div>
      </div>

      {/* Onda sutil animada */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-28 z-0" aria-hidden="true">
        <svg viewBox="0 0 1440 112" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <filter id="achave-blur" x="-10%" y="-50%" width="120%" height="200%">
              <feGaussianBlur stdDeviation="1.8" />
            </filter>
          </defs>
          <g fill="none" strokeLinecap="round" filter="url(#achave-blur)">
            <path id="wave1" d="M0,72 Q240,24 480,72 T960,72 T1440,72" stroke="currentColor" className="text-achave-pink/35" strokeWidth={6}>
              <animate attributeName="d" dur="12s" repeatCount="indefinite"
                values="M0,72 Q240,24 480,72 T960,72 T1440,72;
                        M0,68 Q240,36 480,60 T960,84 T1440,70;
                        M0,72 Q240,24 480,72 T960,72 T1440,72" />
            </path>
            <path id="wave2" d="M0,84 Q240,36 480,84 T960,84 T1440,84" stroke="currentColor" className="text-achave-orange/30" strokeWidth={5}>
              <animate attributeName="d" dur="14s" repeatCount="indefinite"
                values="M0,84 Q240,36 480,84 T960,84 T1440,84;
                        M0,88 Q240,28 480,96 T960,72 T1440,88;
                        M0,84 Q240,36 480,84 T960,84 T1440,84" />
            </path>
            <path id="wave3" d="M0,96 Q240,48 480,96 T960,96 T1440,96" stroke="currentColor" className="text-achave-yellow/25" strokeWidth={4}>
              <animate attributeName="d" dur="16s" repeatCount="indefinite"
                values="M0,96 Q240,48 480,96 T960,96 T1440,96;
                        M0,100 Q240,56 480,88 T960,104 T1440,98;
                        M0,96 Q240,48 480,96 T960,96 T1440,96" />
            </path>
          </g>
        </svg>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          #wave1 animate, #wave2 animate, #wave3 animate { display: none; }
        }
      `}</style>
    </section>
  );
};
