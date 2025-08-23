
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-90">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease-in-out infinite',
            filter: 'url(#noise-final)'
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <filter id="noise-final">
              <feTurbulence baseFrequency="0.9" numOctaves="3" seed="2" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feComposite in2="SourceGraphic" operator="multiply" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto para Acelerar seu Crescimento?
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Converse com um de nossos consultores. Analisaremos melhor o seu caso e 
            explicaremos como poderemos te atender da melhor forma possível.
          </p>

          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="px-12 py-6 text-xl font-bold text-white relative overflow-hidden"
            style={{
              background: 'linear-gradient(45deg, #ffffff, #f8f8f8, #ffffff)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 8s ease-in-out infinite',
              color: '#ec4899',
              boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
            }}
          >
            Agendar Consultoria Gratuita Agora
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
