
export const Certifications = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Reconhecimento de Mercado
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://pages.greatpages.com.br/lp.v4company.com-assessoria-bi-modular/1734034059/imagens/desktop/381993_1_17011148396564f3d795ff6316885457.svg" 
                  alt="Google Partner Premier"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Google Partner Premier</h3>
              <p className="text-gray-300 leading-relaxed">
                O Google Partner Premier é o nível mais alto de parceria com o Google. As empresas 
                que alcançam esse status demonstram excelência no uso das ferramentas de marketing 
                e publicidade do Google. Apenas 3% das empresas brasileiras são Google Partner Premier. 
                Nossa empresa é uma delas.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://pages.greatpages.com.br/lp.v4company.com-assessoria-bi-modular/1734034059/imagens/desktop/381993_1_17011148396564f3d795c9c563326200.svg" 
                  alt="Meta Business Partner"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Meta Business Partner</h3>
              <p className="text-gray-300 leading-relaxed">
                O Meta Business Partner Certified Company é um selo de qualidade que garante que 
                as empresas que o possuem são especialistas em marketing digital da Meta e estão 
                altamente capacitadas para ajudar as empresas a alcançar seus objetivos. De acordo 
                com dados da Meta, apenas 1% das empresas possuem esse certificado. Estamos nessa lista.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
