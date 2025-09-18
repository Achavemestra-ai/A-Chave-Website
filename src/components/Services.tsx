import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Palette, 
  FileText, 
  LifeBuoy, 
  BarChart3, 
  DollarSign,
  Hash,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

export const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Rocket,
      title: "Chatbots Inteligentes",
      subtitle: "Para Automatizar Atendimento",
      description: "Agentes de IA que atendem seus clientes 24/7 com conversas naturais e vendas automatizadas",
      features: [
        "Atendimento inteligente que converte visitantes em leads",
        "Integração com WhatsApp, Instagram e site",
        "Qualificação automática de prospects"
      ]
    },
    {
      icon: BarChart3,
      title: "Sistemas de IA",
      subtitle: "Para Eliminar Processos Manuais",
      description: "Automações personalizadas que executam tarefas repetitivas e otimizam operações",
      features: [
        "Automação de follow-ups e nutrição de leads",
        "Processamento inteligente de dados e relatórios",
        "Integração entre sistemas e plataformas"
      ]
    },
    {
      icon: DollarSign,
      title: "Integração Completa",
      subtitle: "Para Unificar Operações",
      description: "Conectamos todos os seus sistemas em uma operação única e automatizada",
      features: [
        "CRM integrado com automações inteligentes",
        "Unificação de dados de vendas e marketing",
        "Dashboard centralizado para controle total"
      ]
    },
    {
      icon: LifeBuoy,
      title: "Agentes de Vendas 24/7",
      subtitle: "Para Aumentar Receita",
      description: "IA especializada em vendas que trabalha continuamente para aumentar sua receita",
      features: [
        "Prospecção automatizada e qualificada",
        "Follow-up inteligente em múltiplos canais",
        "Conversão otimizada com base em dados"
      ]
    }
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-morganite text-4xl md:text-6xl font-bold mb-6">
            Produtos de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IA
            </span>{" "}
            que Transformam Negócios
          </h2>
          <p className="font-sora text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inteligentes feitas sob medida para escalar sua operação
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-achave-dark-bg border border-achave-yellow/20 rounded-3xl p-8 min-h-[500px] mx-4">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-morganite text-3xl font-bold mb-2 text-white">{service.title}</h3>
                      {service.subtitle && (
                        <p className="font-sora text-achave-yellow text-lg">{service.subtitle}</p>
                      )}
                    </div>
                    
                    <p className="font-sora text-gray-300 text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-achave-yellow rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-sora text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="text-center mt-16">
          <div className="flex justify-center mb-8">
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-achave-yellow' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Descrição da empresa */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <p className="font-sora text-lg text-muted-foreground leading-relaxed">
              A A Chave é uma agência especializada em IA empresarial. Desenvolvemos agentes inteligentes, automações personalizadas e integrações estratégicas que eliminam trabalho manual e escalam operações. Nosso foco é criar soluções sob medida que reduzem custos, aumentam conversões e permitem crescimento acelerado sem expandir equipes.
            </p>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-primary hover:opacity-90 text-white px-12 py-6 text-lg font-bold rounded-xl shadow-brand"
          >
            Solicitar Consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};
