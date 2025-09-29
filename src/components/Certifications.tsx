// src/components/Certifications.tsx
import React from "react";
import { motion } from "framer-motion";

type Badge = {
  src: string;
  alt: string;
  label: string;
  hint?: string;
};

const BADGES: Badge[] = [
  { src: "/metaads.png", alt: "Meta Business Partner", label: "Meta Business Partner", hint: "Parceria oficial para anúncios no ecossistema Meta" },
  { src: "/googlepartner.png", alt: "Google Premier Partner", label: "Google Premier Partner", hint: "Reconhecimento de performance e especializações" },
  { src: "/adobe.png", alt: "Adobe Certified Professional", label: "Adobe Certified Professional", hint: "Certificação de proficiência em ferramentas Adobe" },
  { src: "/coursera.png", alt: "Google Project Management (Coursera)", label: "Google Project Management", hint: "Certificado Profissional (Coursera)" },
];

const BadgeCard: React.FC<Badge & { i: number }> = ({ src, alt, label, hint, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }}
      whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-7 flex flex-col items-center justify-center overflow-hidden"
      style={{ boxShadow: "0 10px 30px rgba(168,85,247,0.12), inset 0 1px 0 rgba(255,255,255,0.06)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
        style={{ background: "radial-gradient(80% 60% at 50% 0%, hsl(var(--achave-pink,327 85% 56%) / .25), hsl(var(--achave-purple,267 85% 60%) / .18) 40%, transparent 70%)" }}
      />
      <div className="relative w-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="max-h-20 md:max-h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
          style={{ transform: "translateZ(0)" }}
        />
      </div>
      <div className="mt-4 text-center space-y-1">
        <p className="font-sora text-sm md:text-base text-white/90">{label}</p>
        {hint && <p className="text-[11px] md:text-xs text-white/60">{hint}</p>}
      </div>
      <div className="absolute inset-0 rounded-2xl transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]" />
    </motion.div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="certificacoes" className="py-20 md:py-28 bg-transparent">
      <div className="container mx-auto px-4">
        {/* HEADER responsivo (não corta no mobile) */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-morganite font-black tracking-[0.01em]
                       leading-[0.95] sm:leading-[0.95] md:leading-[0.95]
                       text-[clamp(34px,10vw,88px)]"
          >
            <span className="text-white block sm:inline">CERTIFICAÇÕES&nbsp;</span>
            <span
              className="bg-clip-text text-transparent block sm:inline"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--achave-yellow,39 100% 62%)), hsl(var(--achave-orange,26 96% 55%)), hsl(var(--achave-pink,327 85% 56%)))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                letterSpacing: "0.5px",
              }}
            >
              PARCERIAS
            </span>
          </h2>

          <p className="font-sora text-white/70 mt-3 sm:mt-4 max-w-2xl mx-auto text-[15px] sm:text-base">
            Reconhecimentos que validam nossa excelência técnica e de execução.
          </p>
        </div>

        {/* wrapper “glass” */}
        <div className="relative mx-auto w-full max-w-6xl rounded-3xl surface-strong border border-white/10 p-6 md:p-10 overflow-hidden">
          <div
            className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, hsl(var(--achave-pink,327 85% 56%)) 0%, transparent 70%)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 w-96 h-96 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, hsl(var(--achave-purple,267 85% 60%)) 0%, transparent 70%)" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10">
            {BADGES.map((b, i) => (
              <BadgeCard key={b.label} {...b} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
