"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

type Phase = 0 | 1 | 2;

function escapeSelector(id: string) {
  return id.replace(/([ #.;?%&,+*~':"!^$[\]()=>|/@])/g, "\\$1");
}

export function Header() {
  const [phase, setPhase] = useState<Phase>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);

  const T0to1 = 40;
  const T1to0 = 16;
  const T1to2 = 220;
  const T2to1 = 160;

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const methods = {
            pageYOffset: window.pageYOffset,
            documentElement: document.documentElement.scrollTop,
            body: document.body?.scrollTop || 0,
            visualViewport: window.visualViewport?.pageTop || 0,
          };
          const y = Math.max(...Object.values(methods));

          setPhase((prev) => {
            let next = prev;
            if (prev === 0 && y > T0to1) next = 1;
            else if (prev === 1) {
              if (y > T1to2) next = 2;
              else if (y < T1to0) next = 0;
            } else if (prev === 2 && y < T2to1) next = 1;
            return next;
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    const targets = [window, document, document.documentElement, document.body].filter(Boolean);
    targets.forEach((t: any) => t.addEventListener?.("scroll", onScroll, { passive: true }));
    setTimeout(onScroll, 100);

    return () => targets.forEach((t: any) => t.removeEventListener?.("scroll", onScroll));
  }, []);

  const scrollToBooking = () => {
    const el =
      document.getElementById("lead-form") ||
      document.getElementById("booking") ||
      document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollTo = (id: string) => {
    let el = document.getElementById(id) as HTMLElement | null;
    if (!el) {
      el = document.querySelector<HTMLElement>(`#${escapeSelector(id)}`);
    }
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const showFullHeader = isHeaderHovered || phase !== 2;
  const actualPhase: Phase = showFullHeader ? (phase === 2 ? 1 : phase) : 2;

  const pillBase =
    "mx-auto pointer-events-auto rounded-2xl sm:rounded-3xl border transition-all duration-500 ease-out";
  const pillStyle =
    actualPhase === 0
      ? "bg-black/25 border-white/10 backdrop-blur-md shadow-[0_6px_22px_-10px_rgba(236,72,153,0.25)] scale-100"
      : "bg-black/40 border-white/15 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(236,72,153,0.35)] scale-[0.92]";

  const pillTransform = showFullHeader ? "translateY(0)" : "translateY(-100%)";
  const pillOpacity = showFullHeader ? "opacity-100" : "opacity-0";
  const padY = actualPhase === 0 ? "py-3" : "py-2";

  const brandOpacity = showFullHeader ? "opacity-100" : "opacity-0";
  const navOpacity = showFullHeader ? (actualPhase === 1 ? "opacity-40" : "opacity-100") : "opacity-0";
  const searchCtaOpacity = showFullHeader ? "opacity-100" : "opacity-0";
  const logoSize = actualPhase === 0 ? 48 : 44;

  return (
    <>
      <div
        className={[
          "fixed top-0 left-1/2 -translate-x-1/2 z-30 transition-all duration-300",
          "w-[min(1120px,calc(100vw-24px))] h-24",
          phase === 2 && !showFullHeader ? "" : "pointer-events-none",
        ].join(" ")}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      />

      <div
        className={[
          "fixed top-2 sm:top-4 z-40",
          "left-1/2 -translate-x-1/2",
          "w-[min(1120px,calc(100vw-24px))]",
          showFullHeader ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <header
          className={[
            pillBase,
            pillStyle,
            pillOpacity,
            "w-full pointer-events-auto",
          ].join(" ")}
          style={{ transform: pillTransform }}
          role="navigation"
        >
          <div className={["flex items-center justify-between px-4 sm:px-5 md:px-6", padY].join(" ")}>
            {/* Brand */}
            <button
              className="flex items-center gap-3 select-none cursor-pointer transition-all duration-300"
              onClick={() => scrollTo("inicio")}
              aria-label="Ir para o início"
            >
              <img
                src="/favicon.ico"
                alt="A Chave"
                width={logoSize}
                height={logoSize}
                className="transition-all duration-300"
                style={{ imageRendering: "auto" }}
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899'%3E%3Cpath d='M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z'/%3E%3C/svg%3E";
                }}
              />
              <span
                className={[
                  "font-semibold transition-all duration-500",
                  brandOpacity,
                  "text-lg",
                ].join(" ")}
                style={{
                  display: "inline-block",
                  backgroundImage:
                    "linear-gradient(45deg, hsl(var(--achave-yellow-gold)), #a855f7, #ec4899)",
                  backgroundSize: "200% 200%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  WebkitTextFillColor: "transparent",
                  animation: "achaveBrand 8s ease infinite",
                  lineHeight: 1,
                }}
              >
                A Chave
              </span>
            </button>

            {/* Nav */}
            <nav
              className={[
                "hidden lg:flex items-center space-x-6 transition-all duration-500",
                navOpacity,
              ].join(" ")}
            >
              {[
                { label: "Soluções", id: "solucoes" },
                { label: "Sobre nós", id: "sobre" },
                { label: "Diagrama", id: "diagrama" },
                { label: "Contato", id: "lead-form" },
              ].map((it) => (
                <button
                  key={it.id}
                  onClick={() => scrollTo(it.id)}
                  className="relative py-2 text-white/75 hover:text-white transition-colors group"
                >
                  {it.label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-orange-400 transition-all duration-300 group-hover:w-full rounded-full" />
                </button>
              ))}
            </nav>

            {/* Search + CTA */}
            <div
              className={[
                "hidden lg:flex items-center gap-4 transition-all duration-500",
                searchCtaOpacity,
              ].join(" ")}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 w-4 h-4 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="header-search w-40 rounded-lg pl-10 pr-4 py-1.5 text-sm text-white/90 placeholder:text-white/60 outline-none transition-all duration-300"
                />
              </div>

              <Button
                onClick={scrollToBooking}
                className="px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all duration-300 hover:shadow-pink-500/30 hover:scale-[1.02] text-sm"
                style={{
                  background: "linear-gradient(45deg, #f97316, #a855f7, #ec4899)",
                  backgroundSize: "180% 180%",
                  animation: "achaveBrand 10s ease infinite",
                }}
              >
                Começar Agora
              </Button>
            </div>

            {/* Menu mobile */}
            <button
              aria-label="Abrir menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              className={[
                "lg:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1.5 transition-all duration-300",
                navOpacity,
              ].join(" ")}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </header>
      </div>

      {/* Mini pill recolhido */}
      <div
        className={[
          "fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-30 transition-all duration-300",
          phase === 2 && !showFullHeader ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <button
          onMouseEnter={() => setIsHeaderHovered(true)}
          className="rounded-full bg-black/35 backdrop-blur-xl border border-white/15 p-4 shadow-[0_10px_30px_-12px_rgba(236,72,153,0.45)] hover:scale-105 transition-transform duration-200"
          aria-label="Expandir menu"
        >
          <img
            src="/favicon.ico"
            alt="A Chave"
            width={48}
            height={48}
            className="select-none"
            draggable={false}
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ec4899'%3E%3Cpath d='M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z'/%3E%3C/svg%3E";
            }}
          />
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div
          className={`absolute top-24 right-6 w-72 bg-card rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="p-8 space-y-4">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar..."
                className="header-search w-full rounded-lg pl-10 pr-4 py-3 text-sm outline-none transition-all duration-300"
              />
            </div>

            {[
              { label: "Soluções", id: "solucoes" },
              { label: "Sobre nós", id: "sobre" },
              { label: "Diagrama", id: "diagrama" },
              { label: "Contato", id: "lead-form" },
            ].map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="w-full text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-lg transition-all duration-300 font-medium"
              >
                {it.label}
              </button>
            ))}

            <div className="pt-4 border-t border-border">
              <Button
                onClick={scrollToBooking}
                className="w-full rounded-xl text-white font-semibold py-3 transition-all duration-300"
                style={{
                  background: "linear-gradient(45deg, #f97316, #a855f7, #ec4899)",
                  backgroundSize: "180% 180%",
                  animation: "achaveBrand 10s ease infinite",
                }}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes achaveBrand {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }

        /* Aparência do campo de busca do header (força translúcido) */
        .header-search {
          background: rgba(0,0,0,.22) !important;
          border: 1px solid rgba(255,255,255,.12) !important;
          color: rgba(255,255,255,.92) !important;
          caret-color: #fff;
          backdrop-filter: blur(6px);
        }
        .header-search::placeholder { color: rgba(255,255,255,.65); }
        .header-search:hover { background: rgba(0,0,0,.28) !important; }
        .header-search:focus {
          background: rgba(0,0,0,.30) !important;
          box-shadow: 0 0 0 2px rgba(236,72,153,.35);
          border-color: transparent !important;
        }

        /* Corrige o autofill do Chrome que forçava branco */
        input.header-search:-webkit-autofill {
          -webkit-text-fill-color: #fff !important;
          box-shadow: 0 0 0px 1000px rgba(0,0,0,.22) inset !important;
          transition: background-color 9999s ease-in-out 0s;
        }
      `}</style>
    </>
  );
}
