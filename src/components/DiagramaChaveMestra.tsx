import React from "react";

const DiagramaChaveMestra = () => {
  return (
    <section
      id="diagrama"
      className="py-16 md:py-20 bg-background scroll-mt-28 md:scroll-mt-32"
    >
      <div className="container mx-auto px-4">
        {/* TÍTULO */}
        <h2
          className="font-morganite inline-flex items-baseline gap-3
                     whitespace-normal sm:whitespace-nowrap w-full justify-center text-center
                     leading-[0.96] font-bold
                     text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]
                     mb-8 md:mb-12"
        >
          <span className="text-white/90">DIAGRAMA</span>
          <span className="bg-gradient-primary bg-clip-text text-transparent">"CHAVE MESTRA"</span>
        </h2>

        {/* layout 2 colunas: diagrama (esq) + vídeo (dir) */}
        <div className="grid grid-cols-1 xl:grid-cols-[58%_42%] gap-8 xl:gap-12">
          {/* COLUNA ESQUERDA — DIAGRAMA */}
          <div className="w-full">
            <div className="w-full">
              <svg
                viewBox="0 0 800 600"
                className="w-full h-auto"
                role="img"
                aria-label="Diagrama Chave Mestra — relação entre Tecnologia e Ciência Social para fidelização e escala."
              >
                <defs>
                  <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF2E88" />
                    <stop offset="100%" stopColor="#FFC400" />
                  </linearGradient>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF2E88" />
                    <stop offset="100%" stopColor="#FFC400" />
                  </linearGradient>
                </defs>

                {/* CONEXÕES TECNOLOGIA (pontilhado animado) */}
                <path
                  className="conn"
                  d="M 400 110 L 400 142
                     M 200 142 L 600 142
                     M 200 142 L 200 166
                     M 400 142 L 400 166
                     M 600 142 L 600 166"
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* CONEXÕES CIÊNCIA SOCIAL (pontilhado animado) */}
                <path
                  className="conn"
                  d="M 400 330 L 400 358
                     M 200 358 L 600 358
                     M 200 358 L 200 380
                     M 400 358 L 400 380
                     M 600 358 L 600 380"
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Estudo → Fidelização */}
                <path
                  className="conn"
                  d="M 200 430 L 200 466
                     Q 200 474 208 474
                     L 232 474
                     Q 240 474 240 482
                     L 240 480"
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Doutrinação → Escala */}
                <path
                  className="conn"
                  d="M 600 430 L 600 466
                     Q 600 474 592 474
                     L 568 474
                     Q 560 474 560 482
                     L 560 480"
                  stroke="url(#connectionGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Pílulas principais */}
                <rect x="220" y="60" width="360" height="50" rx="25" fill="url(#headerGradient)" className="pill-float" />
                <text
                  x="400"
                  y="90"
                  textAnchor="middle"
                  className="fill-white"
                  style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "0.02em" }}
                >
                  TECNOLOGIA
                </text>

                <rect x="220" y="280" width="360" height="50" rx="25" fill="url(#headerGradient)" className="pill-float" />
                <text
                  x="400"
                  y="310"
                  textAnchor="middle"
                  className="fill-white"
                  style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "0.02em" }}
                >
                  CIÊNCIA SOCIAL
                </text>

                {/* Subpílulas — TECNOLOGIA */}
                <rect x="120" y="166" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="200" y="196" textAnchor="middle" className="fill-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Análise de Dados
                </text>

                <rect x="320" y="166" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="400" y="190" textAnchor="middle" className="fill-foreground" style={{ fontSize: "13px", fontWeight: 600 }}>
                  <tspan x="400" dy="0">Inteligência</tspan>
                  <tspan x="400" dy="14">Artificial</tspan>
                </text>

                <rect x="520" y="166" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="600" y="190" textAnchor="middle" className="fill-foreground" style={{ fontSize: "13px", fontWeight: 600 }}>
                  <tspan x="600" dy="0">Automação de</tspan>
                  <tspan x="600" dy="14">Processos</tspan>
                </text>

                {/* Subpílulas — CIÊNCIA SOCIAL */}
                <rect x="120" y="380" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="200" y="400" textAnchor="middle" className="fill-foreground" style={{ fontSize: "12px", fontWeight: 600 }}>
                  <tspan x="200" dy="0">Estudo de Micro e</tspan>
                  <tspan x="200" dy="14">Média Sociedades</tspan>
                </text>

                <rect x="320" y="380" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="400" y="410" textAnchor="middle" className="fill-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Educação
                </text>

                <rect x="520" y="380" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="600" y="410" textAnchor="middle" className="fill-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Doutrinação
                </text>

                {/* Netos */}
                <rect x="160" y="480" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="240" y="510" textAnchor="middle" className="fill-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Fidelização
                </text>

                <rect x="480" y="480" width="160" height="50" rx="25" fill="hsl(var(--background))" stroke="#FF8A3C" strokeWidth="2" />
                <text x="560" y="510" textAnchor="middle" className="fill-foreground" style={{ fontSize: "14px", fontWeight: 600 }}>
                  Escala
                </text>
              </svg>
            </div>
          </div>

          {/* COLUNA DIREITA — VÍDEO + BOTÃO */}
          <div className="flex flex-col items-center xl:items-start">
            <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_30px_-12px_rgba(236,72,153,0.35)]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jTAmvpDkfCU?si=UN34rdb0kAE1v38W&controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* BOTÃO: Assista completo */}
            <a
              href="https://www.youtube.com/watch?v=kLu3q0O44Cw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 sm:mt-12 mx-auto block w-max select-none
                         rounded-full px-6 py-3 text-sm font-semibold text-white
                         shadow-lg hover:shadow-pink-500/30 transition-all duration-300
                         hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-pink-400/60"
              style={{
                background: "linear-gradient(45deg,#f97316,#a855f7,#ec4899)",
                backgroundSize: "180% 180%",
                animation: "achaveGradient 10s ease infinite",
              }}
            >
              Assista completo
            </a>
          </div>
        </div>
      </div>

      {/* ESTILOS */}
      <style>{`
        /* pontilhado mais rápido (2x) */
        .conn {
          stroke-dasharray: 8 10;
          animation: dash-move 0.75s linear infinite;
        }
        @keyframes dash-move {
          to { stroke-dashoffset: -18; }
        }

        .pill-float {
          animation: pill-float 4.5s ease-in-out infinite;
          transform-origin: center;
        }
        @keyframes pill-float {
          0%   { transform: translateY(0px) }
          50%  { transform: translateY(-3px) }
          100% { transform: translateY(0px) }
        }

        @keyframes achaveGradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
};

export default DiagramaChaveMestra;
