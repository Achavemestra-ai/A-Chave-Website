
import { Button } from "@/components/ui/button";
import { Megaphone, Handshake, BarChart, RefreshCw } from "lucide-react";

export const MarketingFunnel = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Existe um método científico para que sua empresa nunca pare de vender
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Se você não segui-lo, ela não vai sair do lugar
          </p>
          <p className="text-2xl font-bold text-pink-500 mb-16">
            Metodologia Chave Mestra
          </p>

          <div className="relative mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 8s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                  }}
                >
                  <Megaphone className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Capturar</h3>
                <p className="text-gray-300">Atrair a atenção do público.</p>
              </div>

              <div className="text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 8s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                  }}
                >
                  <Handshake className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Aquecer</h3>
                <p className="text-gray-300">Construir confiança e interesse.</p>
              </div>

              <div className="text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 8s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                  }}
                >
                  <BarChart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Vender</h3>
                <p className="text-gray-300">Realizar vendas.</p>
              </div>

              <div className="text-center">
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                    backgroundSize: '400% 400%',
                    animation: 'gradientShift 8s ease-in-out infinite',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                  }}
                >
                  <RefreshCw className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fidelizar</h3>
                <p className="text-gray-300">Manter os clientes comprando.</p>
              </div>
            </div>
          </div>

          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="text-white px-8 py-6 text-lg"
            style={{
              background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 8s ease-in-out infinite',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
            }}
          >
            Quero ver isso na prática
          </Button>
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
