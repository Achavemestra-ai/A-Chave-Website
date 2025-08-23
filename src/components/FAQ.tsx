
import { useState } from "react";

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qual o tempo de retorno do investimento?",
      answer: `A verdade nua e crua é que o tempo de retorno varia conforme cada caso específico. Já passaram por A Chave clientes que conseguiram 10x o valor em menos de 2 meses. Por outro lado, já tivemos também clientes que estavam começando quase do zero e precisaram de mais alguns meses para começar a ver resultados.

A garantia mais objetiva que você pode ter é: o crescimento do seu negócio será acelerado.

É isso que realmente importa no fim das contas. Pode ser que você demore 6 meses com A Chave para ter resultados, o que, sem nossa Assessoria de Marketing, poderia levar o dobro do tempo ou até mais.`
    },
    {
      question: "Quanto custa o investimento?",
      answer: `Qual é o preço do seu sucesso? Quanto dinheiro você precisaria investir para fazer com que sua empresa se tornasse a maior do seu setor? O preço que você paga por adiar o seu crescimento pode ser absurdamente maior do que aquele que você deixou de investir no momento que a melhor oportunidade de crescer bateu na sua porta.

Outro ponto importante é que nosso plano de assessoria também pode se adaptar ao seu contexto atual, permitindo, portanto, que você invista a quantia exata que seu negócio suporta no momento atual.`
    },
    {
      question: "O que está incluído na consultoria gratuita?",
      answer: `A Consultoria Gratuita que você receberá ao preencher o formulário procura te mostrar como a Assessoria de Marketing da Chave se encaixa na sua empresa.

Uma vez implementada, na Assessoria de Marketing da Chave você terá uma equipe preparada para cuidar do marketing da sua empresa, enquanto dentro do squad que vai te atender, você pode solicitar consultorias estratégicas para que você mesmo consiga tomar decisões melhores dentro do seu negócio.`
    },
    {
      question: "Vocês fornecem ferramentas?",
      answer: `Não só uma, mas várias! Na Assessoria você recebe acesso a um pacote de ferramentas chamado 'stack digital'. Com ele, você tem as principais automações usadas no mercado de marketing sem precisar pagar por elas.`
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Confira algumas Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left bg-gray-800 hover:bg-gray-700 transition-colors"
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                </button>
                {openQuestion === index && (
                  <div className="px-6 py-4 bg-gray-800">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
