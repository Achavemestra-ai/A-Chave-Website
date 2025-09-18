import { Bot, Zap, Settings, CheckCircle } from "lucide-react";

export const AIAgencyAbout = () => {
  // Lista de logos de IA para o anel girante
  const aiLogos = [
    { name: "ChatGPT", color: "bg-green-500" },
    { name: "Claude", color: "bg-orange-500" },
    { name: "Gemini", color: "bg-blue-500" },
    { name: "Make", color: "bg-purple-500" },
    { name: "Zapier", color: "bg-orange-400" },
    { name: "OpenAI", color: "bg-black" },
    { name: "Anthropic", color: "bg-red-500" },
    { name: "Google AI", color: "bg-yellow-500" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-achave-yellow rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-achave-pink rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-achave-orange rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Conteúdo à esquerda */}
            <div>
              <div className="mb-6">
                <span className="font-sora text-sm font-semibold text-achave-orange uppercase tracking-wider bg-achave-orange/10 px-4 py-2 rounded-full">
                  A empresa
                </span>
              </div>
              
              <h2 className="font-morganite text-4xl md:text-5xl font-bold mb-8 text-achave-black leading-tight">
                Agência de IA Desenvolvendo{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Soluções que Escalam
                </span>{" "}
                Negócios
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-achave-yellow mt-1 flex-shrink-0" />
                  <span className="font-sora text-lg text-gray-700">
                    <strong>Agentes de IA Personalizados</strong> Para Automatizar Vendas
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-achave-yellow mt-1 flex-shrink-0" />
                  <span className="font-sora text-lg text-gray-700">
                    <strong>Sistemas Inteligentes</strong> Para Eliminar Processos Manuais
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-achave-yellow mt-1 flex-shrink-0" />
                  <span className="font-sora text-lg text-gray-700">
                    <strong>Integração Completa</strong> Para Unificar Operações
                  </span>
                </div>
              </div>

              <p className="font-sora text-lg text-gray-600 leading-relaxed">
                A A Chave é um estúdio especializado em IA empresarial. Desenvolvemos agentes inteligentes, automações personalizadas e integrações estratégicas que eliminam processos manuais e escalam operações. Nosso foco é criar soluções sob medida que reduzem custos operacionais, aumentam conversões e permitem crescimento acelerado sem expandir equipes.
              </p>
            </div>

            {/* Anel de logos girando à direita */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96">
                {/* Anel central */}
                <div className="absolute inset-8 bg-gradient-primary rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <Bot className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-morganite text-2xl font-bold">IA</h3>
                    <p className="font-sora text-sm">Empresarial</p>
                  </div>
                </div>

                {/* Logos girando ao redor */}
                {aiLogos.map((logo, index) => {
                  const angle = (index * 360) / aiLogos.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={logo.name}
                      className={`absolute w-12 h-12 ${logo.color} rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        animation: `rotate-around 20s linear infinite`,
                        animationDelay: `${-index * 2.5}s`
                      }}
                    >
                      {logo.name.slice(0, 2)}
                    </div>
                  );
                })}

                {/* Pontos de conexão */}
                <div className="absolute inset-0 opacity-20">
                  {aiLogos.map((_, index) => {
                    const angle = (index * 360) / aiLogos.length;
                    const startRadius = 140;
                    const endRadius = 180;
                    const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
                    const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
                    const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
                    const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
                    
                    return (
                      <div
                        key={index}
                        className="absolute w-px bg-gradient-primary"
                        style={{
                          left: `calc(50% + ${startX}px)`,
                          top: `calc(50% + ${startY}px)`,
                          height: `${endRadius - startRadius}px`,
                          transform: `rotate(${angle}deg)`,
                          transformOrigin: 'top'
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotate-around {
          from {
            transform: rotate(0deg) translateX(180px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(180px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};