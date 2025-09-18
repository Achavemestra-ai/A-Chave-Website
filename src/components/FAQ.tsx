
import { useState } from "react";

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como a A Chave pode automatizar meu negócio?",
      answer: `Desenvolvemos agentes de IA personalizados e automações específicas para sua empresa. Isso inclui chatbots inteligentes para atendimento, sistemas de IA para eliminar processos manuais, integração completa para unificar operações e agentes de vendas que trabalham 24/7. Cada solução é criada sob medida para suas necessidades específicas.`
    },
    {
      question: "Quanto tempo leva para implementar uma solução de IA?",
      answer: `O tempo varia conforme a complexidade da solução. Projetos simples como chatbots podem estar funcionando em 1-2 semanas. Automações mais complexas e integrações completas podem levar de 4-8 semanas. Durante a consultoria gratuita, definimos um cronograma personalizado para seu projeto específico.`
    },
    {
      question: "Qual o investimento necessário para começar?",
      answer: `O investimento varia conforme o escopo do projeto e as necessidades da sua empresa. Temos soluções para diferentes tamanhos de negócio, desde startups até grandes empresas. Na consultoria gratuita, apresentamos opções que se adequam ao seu orçamento atual e objetivos de crescimento.`
    },
    {
      question: "Como vocês criam as automações?",
      answer: `Utilizamos as melhores ferramentas de IA do mercado como ChatGPT, Claude, Gemini, combinadas com plataformas de automação como Make e Zapier. Primeiro mapeamos seus processos atuais, identificamos oportunidades de melhoria e então desenvolvemos soluções personalizadas que se integram perfeitamente ao seu negócio.`
    },
    {
      question: "Como nos comunicamos durante o projeto?",
      answer: `Mantemos comunicação constante através de reuniões semanais, relatórios de progresso e um canal direto via WhatsApp. Você terá acesso a um gerente de projeto dedicado que acompanha todo o desenvolvimento e tira suas dúvidas em tempo real.`
    },
    {
      question: "E se algo der errado com a automação?",
      answer: `Oferecemos suporte técnico completo e monitoramento contínuo das automações. Caso ocorra algum problema, nossa equipe técnica resolve rapidamente. Além disso, todas as soluções passam por testes rigorosos antes da implementação final.`
    },
    {
      question: "Preciso de conhecimentos técnicos para usar os sistemas?",
      answer: `Não! Desenvolvemos interfaces simples e intuitivas para que qualquer pessoa da sua equipe possa usar. Além disso, fornecemos treinamento completo e materiais de apoio para garantir que todos saibam utilizar as automações de forma eficiente.`
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-morganite text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Perguntas Frequentes sobre{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">IA</span>
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
