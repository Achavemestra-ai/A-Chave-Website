import { Button } from "@/components/ui/button";
import { Building2, Briefcase, ShoppingCart, Laptop } from "lucide-react";

export const Hero = () => {
  const scrollToBenefits = () => {
    const benefitsElement = document.querySelector('#benefits');
    if (benefitsElement) {
      benefitsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Orbital Animation Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central triangle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent"
            style={{ borderBottomColor: '#ec4899' }}
          />
        </div>

        {/* Orbital rings - increased size */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-80 h-80 border border-pink-500/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
            <div className="w-3 h-3 bg-pink-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-orange-400/15 rounded-full animate-spin" style={{ animationDuration: '30s' }}>
            <div className="w-2.5 h-2.5 bg-orange-400 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[28rem] h-[28rem] border border-pink-300/10 rounded-full animate-spin" style={{ animationDuration: '40s' }}>
            <div className="w-2 h-2 bg-pink-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[32rem] h-[32rem] border border-orange-200/8 rounded-full animate-spin" style={{ animationDuration: '50s' }}>
            <div className="w-1.5 h-1.5 bg-orange-200 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            Tenha um time feito{" "}
            <span
              className="font-bold"
              style={{
                background: 'linear-gradient(-45deg, #ec4899, #a855f7, #f97316)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              sob medida
            </span>{" "}
            para atender seu negócio
          </h1>

          <div className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70 mb-6">
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                <Laptop className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-gray-300 text-base md:text-lg mb-8">
              Chegou o momento de virar A Chave da sua empresa para novos horizontes
            </p>

            {/* CTA otimizado para mobile: largura total, padding/fonte confortáveis, quebra de linha */}
            <Button
              onClick={scrollToForm}
              size="lg"
              className="
                w-full sm:w-auto max-w-[420px] mx-auto
                px-6 sm:px-12 py-4 sm:py-6
                text-lg sm:text-xl font-bold
                whitespace-normal text-center leading-snug
                rounded-xl
                ring-1 ring-pink-300/60
                shadow-lg shadow-pink-500/30
                relative overflow-hidden
              "
              style={{
                background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite',
                color: '#ffffff',
                boxShadow: '0 8px 30px rgba(236, 72, 153, 0.35)',
              }}
            >
              QUERO MAIS INFORMAÇÕES
            </Button>
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
