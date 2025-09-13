import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const CTA = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("lead-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{
              background: "linear-gradient(-45deg, #ffffff, #f8f8f8, #ffffff)",
              backgroundSize: "400% 400%",
              animation: "gradientShift 8s ease-in-out infinite",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pronto para transformar seus dados em resultados?
          </h2>

          <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed">
            Agende uma consultoria com nossos especialistas e descubra
            como a Chave pode revolucionar a gestão da sua empresa através do
            Business Intelligence.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Consultoria inicial gratuita</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Análise personalizada</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
              <span>Proposta sob medida</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="
                w-full sm:w-auto max-w-[420px] min-w-[240px]
                px-6 sm:px-8 py-4 sm:py-5
                text-lg font-semibold
                whitespace-normal text-center leading-snug
                text-pink-600
                rounded-xl
                ring-1 ring-white/30
                shadow-lg shadow-pink-500/30
                relative overflow-hidden
              "
              style={{
                background:
                  "linear-gradient(45deg, #ffffff, #f8f8f8, #ffffff)",
                backgroundSize: "400% 400%",
                animation: "gradientShift 8s ease-in-out infinite",
                boxShadow: "0 8px 30px rgba(236, 72, 153, 0.35)",
              }}
            >
              Agendar Consultoria
              <ArrowRight className="ml-2 hidden sm:inline" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                w-full sm:w-auto max-w-[420px] min-w-[240px]
                px-6 sm:px-8 py-4 sm:py-5
                text-lg font-semibold
                border-2 border-white
                text-white
                hover:bg-white hover:text-pink-500
                rounded-xl
                leading-snug whitespace-normal text-center
              "
              style={{
                boxShadow: "0 8px 30px rgba(236, 72, 153, 0.35)",
              }}
            >
              (11) 9999-9999
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>
              Sem compromisso • Resposta em até 24h • Especialistas certificados
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};
