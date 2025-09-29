// path: src/components/Testimonials.tsx
import * as React from "react";
import { Star } from "lucide-react";

type Depo = { name: string; role: string; content: string; avatar: string; rating?: number; };

export const Testimonials: React.FC = () => {
  const testimonials: Depo[] = [
    { name: "Maria Silva", role: "CEO", content: "A Chave transformou completamente nossa visão sobre dados. Em 3 meses, conseguimos identificar oportunidades que resultaram em 40% de aumento nas vendas.", avatar: "MS", rating: 5 },
    { name: "João Santos", role: "Diretor Comercial", content: "O dashboard criado pela Agência Chave nos permite tomar decisões estratégicas com muito mais agilidade e precisão. Recomendo fortemente!", avatar: "JS", rating: 5 },
    { name: "Ana Costa", role: "Gerente de Marketing", content: "Antes da Chave, tomávamos decisões baseadas em intuição. Agora, cada estratégia é respaldada por dados concretos. O ROI foi impressionante!", avatar: "AC", rating: 5 },
    { name: "Pedro Oliveira", role: "CTO", content: "A metodologia da Chave é excepcional. Eles não apenas entregaram as soluções, mas também capacitaram nossa equipe para ser autônoma.", avatar: "PO", rating: 5 },
    { name: "Carlos Mendes", role: "Dono de Restaurante", content: "Antes de conhecer a Chave, meu restaurante estava patinando. Agora meu delivery triplicou e as campanhas trazem cliente todo dia! Top demais!", avatar: "CM", rating: 5 },
    { name: "Dra. Fernanda Lima", role: "Médica Dermatologista", content: "Como profissional da saúde, precisava de uma abordagem séria para marketing. A Chave entendeu perfeitamente meu público e aumentou em 200% meus agendamentos.", avatar: "FL", rating: 5 },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-4">
            O que nossos <span className="bg-gradient-primary bg-clip-text text-transparent">clientes</span> dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <article key={idx} className="group relative rounded-3xl border border-border bg-card p-6 md:p-7 transition-all duration-300 hover:border-achave-yellow/50 hover:shadow-brand">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-achave-yellow text-achave-yellow" />
                ))}
              </div>
              <p className="font-sora text-[15px] leading-relaxed text-muted-foreground italic">“{t.content}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-white text-xs font-bold">{t.avatar}</div>
                <div>
                  <div className="font-sora font-semibold text-white">{t.name}</div>
                  <div className="font-sora text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 blur transition-opacity duration-300 group-hover:opacity-40" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(255,214,0,0.12), rgba(255,0,98,0.05) 60%, transparent)" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
