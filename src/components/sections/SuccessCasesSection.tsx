import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Building2, ShoppingCart, Laptop } from "lucide-react";

export const SuccessCasesSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cases = [
    {
      company: "TechCorp Solutions",
      industry: "SaaS B2B",
      challenge: "Baixa conversão e alto CAC",
      solution: "Funil automatizado + BI avançado",
      results: [
        "340% aumento em leads qualificados",
        "60% redução no CAC",
        "ROI de 12x em 6 meses"
      ],
      icon: Laptop,
      rating: 5
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Vendas estagnadas",
      solution: "Tráfego pago + CRM integrado",
      results: [
        "280% crescimento em vendas",
        "450% melhora no CTR",
        "Automação de 90% dos processos"
      ],
      icon: ShoppingCart,
      rating: 5
    },
    {
      company: "Construtora Alpha",
      industry: "Construção Civil",
      challenge: "Geração de leads qualificados",
      solution: "Marketing digital + Automação",
      results: [
        "500% aumento em leads",
        "200% melhora na conversão",
        "Pipeline de vendas previsível"
      ],
      icon: Building2,
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6">
              Cases de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sucesso
              </span>
            </h2>
            <p className="font-sora text-xl text-muted-foreground max-w-3xl mx-auto">
              Empresas que confiaram na A Chave e alcançaram resultados extraordinários
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {cases.map((case_item, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-3xl p-8 hover:border-achave-yellow/50 transition-all duration-300 hover:shadow-brand"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                    <case_item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-morganite text-xl font-bold">
                      {case_item.company}
                    </h3>
                    <p className="font-sora text-sm text-achave-orange">
                      {case_item.industry}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(case_item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-achave-yellow text-achave-yellow" />
                  ))}
                </div>

                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="font-sora font-semibold text-sm text-achave-pink mb-2">
                      DESAFIO
                    </h4>
                    <p className="font-sora text-muted-foreground text-sm">
                      {case_item.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-sora font-semibold text-sm text-achave-pink mb-2">
                      SOLUÇÃO
                    </h4>
                    <p className="font-sora text-muted-foreground text-sm">
                      {case_item.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-sora font-semibold text-sm text-achave-yellow mb-3">
                    RESULTADOS
                  </h4>
                  <ul className="space-y-2">
                    {case_item.results.map((result, idx) => (
                      <li key={idx} className="font-sora text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-achave-yellow rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};