// path: src/components/sections/ProjectsSection.tsx
import * as React from "react";
import { motion } from "framer-motion";
import { Key } from "lucide-react";

type NodeLogo = {
  label: string;
  x: string;
  y: string;
  src?: string;
  alt?: string;
};

const pills = [
  "Mapeamos necessidades",
  "Desenhamos a solução",
  "Automatizamos fluxos",
  "Integramos sistemas",
  "Medimos & otimizamos",
  "Entendendo o seu negócio",
];

const nodeLogos: NodeLogo[] = [
  { label: "ChatGPT", x: "18%", y: "62%", src: "https://framerusercontent.com/images/57c3jLS9yfVFNCq8S4owst7iiE.png", alt: "ChatGPT" },
  { label: "Robô",    x: "32%", y: "36%", src: "/robot-white.svg", alt: "Robô" },
  { label: "n8n",     x: "68%", y: "36%", src: "https://framerusercontent.com/images/xK6LaLguEpIeD5eyTomAZ0F558Q.svg", alt: "n8n" },
  { label: "Make",    x: "82%", y: "62%", src: "https://framerusercontent.com/images/CrDNG9qNdRNmLJTMXxyMkdaeFj4.svg", alt: "Make" },
];

export const ProjectsSection: React.FC = () => {
  const [active, setActive] = React.useState(false);
  const [hoverTriangle, setHoverTriangle] = React.useState(false);

  // Detecta ambiente touch / mobile para garantir animação sem hover
  const [isTouch, setIsTouch] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      setIsTouch(window.matchMedia("(hover: none)").matches || "ontouchstart" in window);
    }
  }, []);

  // Em telas touch, ativa estados por padrão
  React.useEffect(() => {
    if (isTouch) {
      setActive(true);
      setHoverTriangle(true);
    }
  }, [isTouch]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-morganite leading-tight font-bold text-white
                         text-[clamp(34px,8vw,44px)] md:text-7xl">
            <span className="mr-2">Estratégia, Automação e</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Influência</span>
          </h2>
          <p className="font-sora text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            Unimos IA aplicada e marketing ideológico para destravar operações, escalar vendas e consolidar autoridade.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2">
          {/* ESQUERDA */}
          <div className="relative rounded-[28px] border border-white/10 surface p-6 md:p-8">
            <div
              className="relative aspect-[4/3] w-full"
              onMouseEnter={() => setHoverTriangle(true)}
              onMouseLeave={() => setHoverTriangle(false)}
              onTouchStart={() => setHoverTriangle((v) => !v)}
            >
              <svg viewBox="0 0 340 260" className="absolute inset-0 w-full h-full" aria-hidden="true">
                <defs>
                  <linearGradient id="achave-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%"  stopColor="hsl(var(--achave-pink))" />
                    <stop offset="50%" stopColor="hsl(var(--achave-orange))" />
                    <stop offset="100%" stopColor="hsl(var(--achave-yellow))" />
                    <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5" dur="18s" repeatCount="indefinite" />
                  </linearGradient>
                  <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="0" dy="3" />
                    <feComponentTransfer><feFuncA type="linear" slope="0.35" /></feComponentTransfer>
                    <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <g transform="translate(30,18) scale(0.74)">
                  <path
                    d="M170 20 Q162 30 154 44 L38 238 Q34 246 42 248 L298 248 Q306 246 302 238 L186 44 Q178 30 170 20 Z"
                    fill="url(#achave-g)" filter="url(#soft)"
                  />
                </g>
              </svg>

              <div className="absolute top-[48%] left-[46%] -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="font-morganite text-[clamp(18px,2vw,24px)] text-white drop-shadow-[0_1px_0_rgba(0,0,0,.2)] whitespace-nowrap">
                  Seu Negócio
                </div>
              </div>

              <div className="absolute inset-0">
                {pills.map((p, i) => {
                  const posMap: React.CSSProperties[] = [
                    { top: "6%",  left: "8%"   },
                    { top: "12%", right:"6%"   },
                    { bottom: "22%", left:"4%" },
                    { bottom: "8%", right:"12%"},
                    { top: "46%", left:"2%"    },
                    { top: "46%", right:"2%"   },
                  ];
                  const pos = posMap[i] ?? { top: "50%", left: "50%" };

                  return (
                    <motion.div
                      key={p}
                      style={pos}
                      className="absolute"
                      initial={false}
                      animate={(hoverTriangle || isTouch) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 220, damping: 18, delay: (hoverTriangle || isTouch) ? i * 0.12 + 0.05 : 0 }}
                    >
                      <div className="select-none rounded-full bg-white/6 px-3 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/10 backdrop-blur">
                        {p}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* DIREITA */}
          <div className="relative rounded-[28px] border border-white/10 surface p-6 md:p-8">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              <CenterLogo active={active || isTouch} />
              {nodeLogos.map((n, idx) => (<Node key={idx} {...n} active={active || isTouch} />))}
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.8" result="coloredBlur" />
                    <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                <AnimatedLine d="M18 62 H82" active={active || isTouch} delay={0.05} />
                <AnimatedLine d="M32 36 H68" active={active || isTouch} delay={0.10} />
                <AnimatedLine d="M32 36 V60" active={active || isTouch} delay={0.15} />
                <AnimatedLine d="M68 36 V60" active={active || isTouch} delay={0.20} />
                <AnimatedLine d="M32 60 H68" active={active || isTouch} delay={0.25} />
                <AnimatedLine d="M50 22 V74" active={active || isTouch} delay={0.30} />
              </svg>

              <div className="absolute left-1/2 top-[85%] -translate-x-1/2">
                <button
                  type="button"
                  aria-label="Ativar conexões"
                  onMouseEnter={() => setActive(true)}
                  onMouseLeave={() => setActive(false)}
                  onTouchStart={() => setActive((v) => !v)}
                  className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-white/85 shadow-inner backdrop-blur transition"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                    <Key className={`h-4 w-4 transition ${active || isTouch ? "text-achave-yellow" : "text-white"}`} />
                  </span>
                  <span className="font-sora text-sm">A Chave</span>
                  <span className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-achave-yellow/20 px-2 py-0.5 text-xs text-white/95 ring-1 ring-achave-yellow/30 opacity-0 translate-y-1 transition ${(active || isTouch) ? "opacity-100 translate-y-0" : ""}`}>A Chave</span>
                  <span className={`absolute -inset-1 rounded-full blur transition ${(active || isTouch) ? "bg-achave-yellow/30" : "bg-transparent"}`} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        :root { --ps-dash-speed: 1.1s; }
        @media (max-width: 640px) {
          :root { --ps-dash-speed: 0.8s; }
        }
        @media (prefers-reduced-motion: reduce) {
          #achave-g animateTransform { display: none; }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;

/* -------- Subcomponentes -------- */

function Node({ label, x, y, src, alt, active }: NodeLogo & { active: boolean }) {
  const initials = label.split(" ").map(p => p[0]).join("").slice(0, 2);
  const isRobot = label === "Robô";
  const fallbackRobot = "/pngwing.com.png";

  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }} title={label}>
      <div className={`relative grid h-16 w-16 place-items-center rounded-full bg-white/8 text-white ring-1 ring-white/15 transition ${active ? "shadow-[0_0_30px_rgba(255,214,0,.25)]" : ""}`}>
        {src ? (
          <img
            src={src}
            onError={(e) => { if (isRobot) (e.currentTarget as HTMLImageElement).src = fallbackRobot; }}
            alt={alt || label}
            className={`h-9 w-9 object-contain select-none ${isRobot ? "filter invert" : ""}`}
            draggable={false}
            loading="lazy"
          />
        ) : (
          <span className="font-sora text-[12px]">{initials}</span>
        )}
        <span className={`pointer-events-none absolute -inset-1 rounded-full blur ${active ? "bg-achave-yellow/20" : "bg-transparent"}`} />
      </div>
    </div>
  );
}

function CenterLogo({ active }: { active: boolean }) {
  return (
    <div className="absolute left-1/2 top-[18%] -translate-x-1/2 -translate-y-1/2" title="A Chave">
      <img src="/achave-logo-white.png" alt="A Chave" className="h-12 w-12 object-contain select-none" draggable={false} />
      <span className={`pointer-events-none absolute inset-0 -z-10 blur-sm ${active ? "bg-achave-yellow/10" : "bg-transparent"}`} aria-hidden="true" />
    </div>
  );
}

function AnimatedLine({ d, active, delay = 0 }: { d: string; active: boolean; delay?: number; }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      className="text-achave-yellow"
      strokeWidth={0.9}
      strokeDasharray="2 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity: 1,
        filter: active ? "url(#glow)" : "none",
        animation: active ? `dash var(--ps-dash-speed) ${delay}s ease-out forwards` : "none"
      }}
    />
  );
}
