import { Button } from "@/components/ui/button";
import { Check, Bot, Zap, Target, TrendingUp } from "lucide-react";

export const AIAgencySection = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Bot,
      title: "Automação de Processos",
      color: "text-achave-yellow"
    },
    {
      icon: Zap,
      title: "Chatbots Inteligentes", 
      color: "text-achave-pink"
    },
    {
      icon: Target,
      title: "Análise de Dados",
      color: "text-achave-orange"
    },
    {
      icon: TrendingUp,
      title: "Integração de Sistemas",
      color: "text-achave-orange-dark"
    }
  ];

  const benefits = [
    "Equipe especializada em IA e marketing digital",
    "Soluções personalizadas para seu negócio",
    "Resultados mensuráveis e transparentes",
    "Suporte contínuo e atualizações constantes",
    "Integração completa com seus sistemas atuais",
    "ROI comprovado em mais de 50 empresas atendidas"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6">
              Agência de{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                IA Especializada
              </span>
            </h2>
            <p className="font-sora text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos dados em estratégias inteligentes para acelerar o crescimento do seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Services Grid */}
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 hover:border-achave-pink/50 transition-all duration-300 hover:shadow-brand"
                  >
                    <service.icon className={`w-8 h-8 ${service.color} mb-4`} />
                    <h3 className="font-sora font-semibold text-lg">{service.title}</h3>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={scrollToForm}
                className="w-full bg-gradient-primary hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-brand"
              >
                Solicitar Consultoria
              </Button>
            </div>

            {/* Benefits List */}
            <div className="bg-card border border-border rounded-3xl p-8">
              <h3 className="font-morganite text-2xl font-bold mb-8 text-center">
                Por que escolher a A Chave?
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-achave-yellow rounded-full p-1 mt-1">
                      <Check className="w-4 h-4 text-achave-black" />
                    </div>
                    <span className="font-sora text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>  
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};