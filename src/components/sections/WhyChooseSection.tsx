import { Button } from "@/components/ui/button";
import { Check, X, Crown, Zap, Target, Shield } from "lucide-react";

export const WhyChooseSection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const comparison = [
    {
      feature: "Expertise em IA e Automação",
      achave: true,
      others: false
    },
    {
      feature: "Dashboards em Tempo Real",
      achave: true,
      others: false
    },
    {
      feature: "Suporte 24/7",
      achave: true,
      others: true
    },
    {
      feature: "ROI Garantido",
      achave: true,
      others: false
    },
    {
      feature: "Integração Completa",
      achave: true,
      others: false
    },
    {
      feature: "Consultoria Estratégica",
      achave: true,
      others: true
    },
    {
      feature: "Equipe Especializada",
      achave: true,
      others: false
    },
    {
      feature: "Resultados Mensuráveis",
      achave: true,
      others: false
    }
  ];

  const advantages = [
    {
      icon: Crown,
      title: "Liderança em IA",
      description: "Pioneiros em soluções de inteligência artificial para marketing digital",
      color: "text-achave-yellow"
    },
    {
      icon: Zap,
      title: "Automação Avançada",
      description: "Processos automatizados que funcionam 24/7 para seu negócio",
      color: "text-achave-pink"
    },
    {
      icon: Target,
      title: "Precisão Cirúrgica",
      description: "Targeting avançado com algoritmos proprietários de alta conversão",
      color: "text-achave-orange"
    },
    {
      icon: Shield,
      title: "Garantia de Resultados",
      description: "Comprometimento real com o sucesso do seu negócio",
      color: "text-achave-orange-dark"
    }
  ];

  return (
    <section className="py-20 bg-achave-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6 text-white">
              Por que escolher{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                A Chave?
              </span>
            </h2>
            <p className="font-sora text-xl text-gray-300 max-w-3xl mx-auto">
              Compare e veja por que somos a escolha certa para transformar seu negócio
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow">
                  <advantage.icon className={`w-10 h-10 text-white`} />
                </div>
                <h3 className="font-morganite text-xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="font-sora text-gray-300 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-background rounded-3xl p-8 mb-12 border border-border">
            <h3 className="font-morganite text-3xl font-bold text-center mb-8">
              A Chave vs. Concorrência
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="font-sora font-semibold text-left py-4">Recursos</th>
                    <th className="font-morganite font-bold text-center py-4 text-achave-pink">
                      A Chave
                    </th>
                    <th className="font-sora font-semibold text-center py-4 text-muted-foreground">
                      Outras Agências
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="font-sora py-4">{item.feature}</td>
                      <td className="py-4 text-center">
                        {item.achave ? (
                          <Check className="w-6 h-6 text-achave-yellow mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 text-center">
                        {item.others ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-bold px-12 py-4 rounded-xl shadow-glow"
            >
              Escolher A Chave Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};