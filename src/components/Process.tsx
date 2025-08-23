
export const Process = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Como Funciona
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 8s ease-in-out infinite',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                }}
              >
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Envie suas informações de contato. Todos os seus dados estarão seguros, 
                vamos cuidar bem deles.
              </p>
            </div>
            
            <div className="text-center">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 8s ease-in-out infinite',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                }}
              >
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                No mesmo dia um de nossos especialistas retornará o contato para 
                agendar sua consultoria gratuita.
              </p>
            </div>
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
