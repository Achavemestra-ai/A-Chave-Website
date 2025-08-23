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
      title: "Tráfego Pago",
      subtitle: "Mídia Paga",
      description: "Gestão dos seus anúncios online no Google e Meta",
      features: [
        "Atraia seus clientes para seu funil de vendas.",
        "Abasteça seu atendimento com oportunidades de venda",
        "Tenha mais previsibilidade e mensure o retorno do seu investimento"
      ],
      socialIcons: [
        { icon: Hash, className: "bg-black" },
        { icon: Linkedin, className: "bg-blue-600" },
        { icon: Instagram, className: "bg-gradient-to-r from-purple-500 to-pink-500" },
        { icon: Facebook, className: "bg-blue-600" },
        { icon: Youtube, className: "bg-red-600" },
        { icon: X, className: "bg-black" }
      ]
    },
    {
      icon: Palette,
      title: "Criativos",
      subtitle: "",
      description: "Seus anúncios criados pelos copywriters e designers da Chave",
      features: [
        "Mais foco em conversão, não apenas em estética",
        "Criados com base na experiência de 50 empresas atendidas",
        "Feitos por profissionais que recebem treinamento constantemente"
      ]
    },
    {
      icon: FileText,
      title: "Páginas",
      subtitle: "Ambientes",
      description: "Landing pages projetadas para trazer oportunidades de vendas",
      features: [
        "Feitas com as melhores práticas do mercado digital",
        "Fácil de implementar e editar",
        "Projetadas com as melhores ferramentas do mercado"
      ]
    },
    {
      icon: LifeBuoy,
      title: "CRM",
      subtitle: "",
      description: "Gerencie o relacionamento com seu cliente em um só lugar",
      features: [
        "Visualize todo o seu funil de vendas",
        "Mantenha conexão com seus clientes e venda mais",
        "Faça upsell, downsell, crossel e campanhas promocionais"
      ]
    },
    {
      icon: LifeBuoy,
      title: "Gestão e Atendimento",
      subtitle: "",
      description: "O seu marketing gerenciado por especialistas em growth",
      features: [
        "Especialistas treinados, geridos e desenvolvidos por nós.",
        "Atendimento ágil e eficaz",
        "A expertise da Chave na sua empresa"
      ]
    },
    {
      icon: BarChart3,
      title: "Dashboards",
      subtitle: "",
      description: "Gerenciador das principais métricas do seu negócio",
      features: [
        "Tenha controle sobre os principais indicadores da sua empresa",
        "Transforme dados em insights e insights em boas decisões",
        "Acesse os dados a qualquer momento, em qualquer dispositivo"
      ]
    },
    {
      icon: DollarSign,
      title: "Time de Vendas",
      subtitle: "ISaaS",
      description: "Nossos executivos de vendas trabalhando para você.",
      features: [
        "Qualificamos as oportunidades e fechamos a venda para você",
        "Executivos de vendas treinados semanalmente",
        "Seu processo comercial sendo analisado e otimizado por nós"
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              {" "}Chave{" "}
            </span>
            estrutura o marketing da sua empresa
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            com soluções feitas{" "}
            <span className="text-pink-500">sob medida</span>
          </h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça todos os serviços que oferecemos para que sua empresa tenha mais resultados
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
                  <div className="bg-card border border-border rounded-3xl p-8 min-h-[500px] mx-4">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                      {service.subtitle && (
                        <p className="text-muted-foreground text-lg">{service.subtitle}</p>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {service.socialIcons && (
                      <div className="mt-8 flex gap-4">
                        {service.socialIcons.map((social, idx) => (
                          <div key={idx} className={`w-12 h-12 rounded-xl ${social.className} flex items-center justify-center`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                        ))}
                      </div>
                    )}
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
                    index === currentSlide ? 'bg-pink-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <Button 
            onClick={scrollToForm}
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-8 py-6 text-lg"
          >
            Quero um marketing sob medida
          </Button>
        </div>
      </div>
    </section>
  );
};
