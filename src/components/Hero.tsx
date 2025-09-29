import { Button } from "@/components/ui/button";
import { Zap, Cpu, Globe, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // leva para a seção de soluções (AIAgencySection)
  const scrollToSolucoes = () => {
    const el = document.getElementById("solucoes");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      className="min-h-[100vh] bg-black text-white relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(236, 72, 153, 0.08) 0%,
            rgba(168, 85, 247, 0.06) 25%,
            rgba(245, 158, 11, 0.04) 50%,
            rgba(0, 0, 0, 1) 70%
          )
        `,
      }}
    >
      {/* Grid de fundo */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-grid-pattern"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Partículas neon */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-500 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              boxShadow: "0 0 15px #ec4899",
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={i + 6}
            className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${30 + i * 20}%`,
              top: `${60 + i * 8}%`,
              animationDelay: `${i * 0.7}s`,
              boxShadow: "0 0 10px #a855f7",
            }}
          />
        ))}
        {[...Array(3)].map((_, i) => (
          <div
            key={i + 10}
            className="absolute w-1 h-1 bg-yellow-500 rounded-full animate-pulse"
            style={{
              left: `${70 + i * 10}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 1}s`,
              boxShadow: "0 0 8px #f59e0b",
            }}
          />
        ))}
      </div>

      {/* Linhas de energia */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60 animate-pulse" />
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-yellow-500 to-transparent opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Triângulo central + anéis */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div
            className="triangle relative"
            style={{
              width: 0,
              height: 0,
              borderLeft: "48px solid transparent",
              borderRight: "48px solid transparent",
              borderBottom: "72px solid #ec4899",
              filter: "drop-shadow(0 0 15px #ec4899)",
              animation: "trianglePulse 4s ease-in-out infinite",
            }}
          >
            <div
              className="absolute"
              style={{
                left: "-32px",
                top: "15px",
                width: 0,
                height: 0,
                borderLeft: "32px solid transparent",
                borderRight: "32px solid transparent",
                borderBottom: "48px solid #a855f7",
                filter: "drop-shadow(0 0 10px #a855f7)",
              }}
            />
            <div
              className="absolute"
              style={{
                left: "-20px",
                top: "25px",
                width: 0,
                height: 0,
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderBottom: "30px solid #f59e0b",
                filter: "drop-shadow(0 0 8px #f59e0b)",
              }}
            />
          </div>

          <div className="absolute inset-0 animate-spin" style={{ animationDuration: "15s" }}>
            <div
              className="w-48 h-48 border border-pink-500/20 rounded-full absolute -top-8 -left-8"
              style={{ boxShadow: "0 0 15px rgba(236, 72, 153, 0.2)" }}
            >
              <div
                className="w-2 h-2 bg-pink-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"
                style={{ boxShadow: "0 0 8px #ec4899" }}
              />
            </div>
          </div>

          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDuration: "20s", animationDirection: "reverse" }}
          >
            <div
              className="w-64 h-64 border border-purple-500/15 rounded-full absolute -top-16 -left-16"
              style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.15)" }}
            >
              <div
                className="w-1.5 h-1.5 bg-purple-500 rounded-full absolute -top-0.5 left-1/2 transform -translate-x-1/2"
                style={{ boxShadow: "0 0 6px #a855f7" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título principal */}
          <div
            className={`transform transition-all duration-2000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="font-morganite text-5xl md:text-8xl font-bold mb-8 leading-tight relative">
              <span className="relative inline-block">
                Tenha uma estrutura feita{" "}
                <span
                  className="neon-text relative"
                  style={{
                    color: "#ec4899",
                    textShadow:
                      "0 0 5px #ec4899, 0 0 10px #ec4899, 0 0 15px #ec4899, 0 0 20px #ec4899",
                  }}
                >
                  sob medida
                  <span
                    className="absolute inset-0 animate-pulse opacity-75"
                    style={{
                      color: "#a855f7",
                      textShadow: "0 0 20px #a855f7",
                      animationDelay: "0.5s",
                    }}
                  >
                    sob medida
                  </span>
                </span>{" "}
                para escalar seu negócio.
              </span>
            </h1>
          </div>

          {/* Ícones neon */}
          <div
            className={`mt-20 transform transition-all duration-2000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { Icon: Zap, color: "pink", delay: "0s" },
                { Icon: Cpu, color: "purple", delay: "0.2s" },
                { Icon: Globe, color: "yellow", delay: "0.4s" },
                { Icon: Rocket, color: "pink", delay: "0.6s" },
              ].map(({ Icon, color, delay }, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer transform transition-all duration-500 hover:scale-110"
                  style={{ animationDelay: delay }}
                >
                  <div
                    className={`
                      neon-icon bg-black border-2 rounded-xl p-6 w-20 h-20 mx-auto flex items-center justify-center
                      transition-all duration-300 group-hover:scale-110
                      ${
                        color === "pink"
                          ? "border-pink-500"
                          : color === "purple"
                          ? "border-purple-500"
                          : "border-yellow-500"
                      }
                    `}
                    style={{
                      boxShadow: `
                        inset 0 0 20px ${
                          color === "pink"
                            ? "rgba(236, 72, 153, 0.1)"
                            : color === "purple"
                            ? "rgba(168, 85, 247, 0.1)"
                            : "rgba(245, 158, 11, 0.1)"
                        },
                        0 0 30px ${
                          color === "pink"
                            ? "rgba(236, 72, 153, 0.3)"
                            : color === "purple"
                            ? "rgba(168, 85, 247, 0.3)"
                            : "rgba(245, 158, 11, 0.3)"
                        }
                      `,
                    }}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        color === "pink"
                          ? "text-pink-500"
                          : color === "purple"
                          ? "text-purple-500"
                          : "text-yellow-500"
                      }`}
                      style={{
                        filter: `drop-shadow(0 0 5px ${
                          color === "pink"
                            ? "#ec4899"
                            : color === "purple"
                            ? "#a855f7"
                            : "#f59e0b"
                        })`,
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                    style={{
                      background: `linear-gradient(45deg,
                        ${
                          color === "pink"
                            ? "rgba(236, 72, 153, 0.1)"
                            : color === "purple"
                            ? "rgba(168, 85, 247, 0.1)"
                            : "rgba(245, 158, 11, 0.1)"
                        },
                        transparent,
                        ${
                          color === "pink"
                            ? "rgba(236, 72, 153, 0.1)"
                            : color === "purple"
                            ? "rgba(168, 85, 247, 0.1)"
                            : "rgba(245, 158, 11, 0.1)"
                        }
                      )`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Parágrafo — mantém! */}
            <p className="font-sora text-gray-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Chegou o momento de virar{" "}
              <span
                className="font-bold"
                style={{ color: "#ec4899", textShadow: "0 0 10px #ec4899" }}
              >
                A Chave
              </span>{" "}
              da sua empresa para novos horizontes.
            </p>

            {/* CTA */}
            <Button
              onClick={scrollToSolucoes}
              className="
                relative group overflow-hidden
                w-full sm:w-auto max-w-[480px] min-w-[280px] mx-auto
                px-8 sm:px-16 py-6 sm:py-8
                text-xl sm:text-2xl font-bold
                rounded-2xl
                bg-black border-2 border-pink-500
                text-pink-500 hover:text-black
                transition-all duration-500
                transform hover:scale-105
                font-sora
              "
              style={{
                boxShadow:
                  "0 0 20px rgba(236, 72, 153, 0.3), inset 0 0 20px rgba(236, 72, 153, 0.05)",
                textShadow: "0 0 10px #ec4899",
              }}
            >
              <span className="relative z-10 tracking-wider">
                QUERO MAIS INFORMAÇÕES
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 1}s`,
                      animationDuration: "1s",
                    }}
                  />
                ))}
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Linha de escaneamento */}
      <div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-60"
        style={{ top: "50%", animation: "scanLine 4s linear infinite" }}
      />

      <style>{`
        @keyframes gridMove { 0%{transform:translate(0,0);} 100%{transform:translate(50px,50px);} }
        @keyframes trianglePulse {
          0%,100%{ transform:scale(1); filter:drop-shadow(0 0 15px #ec4899); }
          50%{ transform:scale(1.05); filter:drop-shadow(0 0 20px #ec4899) drop-shadow(0 0 30px #a855f7); }
        }
        @keyframes scanLine { 0%{ top:0%; opacity:.6; } 50%{ opacity:.8; } 100%{ top:100%; opacity:0; } }
        .neon-text { animation: textFlicker 3s ease-in-out infinite alternate; }
        @keyframes textFlicker {
          0%,100%{ text-shadow:0 0 5px #ec4899,0 0 10px #ec4899,0 0 15px #ec4899; }
          50%{ text-shadow:0 0 3px #ec4899,0 0 8px #ec4899,0 0 12px #ec4899; }
        }
      `}</style>
    </section>
  );
};
