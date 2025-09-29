// path: src/components/Process.tsx
import * as React from "react";

export const Process = () => {
  const steps = [
    { num: 1, title: "Diagnóstico Rápido",  desc: "Consultoria com um especialista para mapear contexto, metas e gargalos. Sem burocracia, só o que importa." },
    { num: 2, title: "Plano e Proposta",    desc: "Desenhamos a arquitetura, definimos escopo e cronograma. Você recebe um plano claro com custos e prazos." },
    { num: 3, title: "Kickoff & Execução",  desc: "Apresentamos a equipe, alinhamos sprints e iniciamos a implementação. Você acompanha cada entrega." },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6">Como Funciona</h2>
          <p className="font-sora text-xl text-muted-foreground max-w-3xl mx-auto">
            Automação não precisa ser complexa. Guiamos tudo em{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">3 passos claros</span>{" "}
            para dar a você previsibilidade, velocidade e resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-card border border-border rounded-3xl p-8 text-center transition-all duration-300 hover:border-achave-yellow/50 hover:shadow-brand"
            >
              <div className="w-12 h-12 bg-gradient-secondary rounded-full mx-auto mb-6 ring-1 ring-white/10 flex items-center justify-center">
                <span className="font-sora font-semibold text-white">{s.num}</span>
              </div>
              <h3 className="font-morganite text-2xl md:text-3xl font-bold text-white mb-3">{s.title}</h3>
              <p className="font-sora text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full px-5 py-2 font-sora text-sm font-semibold text-white bg-gradient-primary hover:opacity-90 shadow-brand"
              >
                Fazer aplicação
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
