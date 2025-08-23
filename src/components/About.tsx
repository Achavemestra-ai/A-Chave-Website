
import { Award, Clock, Users, Briefcase } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Empresas Atendidas" },
    { icon: Clock, value: "5+", label: "Anos de Experiência" },
    { icon: Award, value: "200%", label: "ROI Médio" },
    { icon: Briefcase, value: "100+", label: "Projetos Concluídos" }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-pink-50/20 to-orange-50/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Sobre a
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {" "}Chave
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos uma consultoria especializada em Business Intelligence que nasceu da necessidade 
                de democratizar o acesso a análises de dados avançadas para empresas de todos os tamanhos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é ser a chave que desbloqueará o potencial dos seus dados, transformando 
                informações em estratégias vencedoras. Com uma abordagem consultiva e personalizada, 
                ajudamos empresas a tomar decisões mais inteligentes e alcançar resultados extraordinários.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-pink-500/10 to-orange-400/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-pink-500/5 to-orange-400/5 p-8 rounded-2xl border border-pink-200/20">
              <h4 className="text-lg font-semibold mb-4">Nossos Valores</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <strong>Transparência:</strong> Comunicação clara e honesta em todos os projetos
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <strong>Inovação:</strong> Sempre buscando as melhores tecnologias e práticas
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <strong>Resultado:</strong> Foco em entregas que geram impacto real no negócio
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
