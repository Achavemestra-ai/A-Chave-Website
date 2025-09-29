// path: src/components/sections/SuccessCasesSection.tsx
import React from "react";

export const SuccessCasesSection = () => {
  const logos = [
    { name: "Pearson",        src: "/Person.png" },
    { name: "CBF Academy",    src: "/CBF.png" },
    { name: "Casas Bahia",    src: "/casasbahia.png" },
    { name: "Mecuniversal",   src: "/Mecuniversal.png" },
    { name: "Volia Cosmético",src: "/Voliacosmetico.png" },
    { name: "Trapgame",       src: "/trapgame.png" },
  ];

  return (
    <section id="cases" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-morganite text-5xl md:text-7xl font-bold leading-none">
              Marcas que{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">confiam</span>
            </h2>
            <p className="font-sora text-base md:text-lg text-muted-foreground mt-4">
              Já implementamos IA, automações e crescimento para <strong>empresas de diferentes segmentos</strong>.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-8 place-items-center">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group relative flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                title={logo.name}
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  loading="lazy"
                  decoding="async"
                  className="w-auto max-h-20 sm:max-h-24 md:max-h-28 lg:max-h-32 object-contain select-none pointer-events-none transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
