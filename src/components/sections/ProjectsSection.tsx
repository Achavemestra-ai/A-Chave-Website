import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, Zap } from "lucide-react";

export const ProjectsSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-commerce B2B",
      category: "Automação & CRM",
      description: "Sistema completo de automação de vendas com integração de múltiplos canais",
      metrics: [
        { label: "Vendas", value: "+340%" },
        { label: "Leads", value: "+280%" },
        { label: "ROI", value: "12x" }
      ],
      icon: TrendingUp,
      gradient: "from-achave-yellow to-achave-orange"
    },
    {
      title: "Marketplace Digital",
      category: "Tráfego Pago & BI",
      description: "Estratégia de crescimento com dashboards inteligentes e campanhas otimizadas",
      metrics: [
        { label: "CTR", value: "+450%" },
        { label: "Conversão", value: "+200%" },
        { label: "CAC", value: "-60%" }
      ],
      icon: Zap,
      gradient: "from-achave-pink to-achave-orange-dark"
    },
    {
      title: "SaaS B2B",
      category: "Growth & Automação",
      description: "Funil completo de aquisição com nurturing automatizado e upsell inteligente",
      metrics: [
        { label: "MRR", value: "+380%" },
        { label: "Churn", value: "-70%" },
        { label: "LTV", value: "+500%" }
      ],
      icon: Users,
      gradient: "from-achave-orange to-achave-yellow"
    }
  ];

  return (
    <section className="py-20 bg-achave-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6 text-white">
              Projetos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Realizados
              </span>
            </h2>
            <p className="font-sora text-xl text-gray-300 max-w-3xl mx-auto">
              Cases reais de empresas que transformaram seus resultados com nossas soluções
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-3xl p-8 hover:border-achave-pink/50 transition-all duration-300 hover:shadow-glow group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6`}>
                  <project.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-achave-yellow mb-2">
                    {project.category}
                  </div>
                  <h3 className="font-morganite text-2xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="font-sora text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-morganite text-2xl font-bold text-achave-yellow">
                        {metric.value}
                      </div>
                      <div className="font-sora text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-achave-pink/50 text-achave-pink hover:bg-achave-pink/10 hover:border-achave-pink group-hover:shadow-brand"
                >
                  Ver Detalhes <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-bold px-12 py-4 rounded-xl shadow-glow"
            >
              Quero Resultados Similares
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};