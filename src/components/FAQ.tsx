// path: src/components/FAQ.tsx
import { useState } from "react";
import { ChevronDown, MessageSquare, Sparkles } from "lucide-react";

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const faqs = [
    { question: "Como a A Chave pode automatizar meu negócio?", answer: `Desenvolvemos agentes de IA personalizados e automações específicas para sua empresa. Isso inclui chatbots inteligentes para atendimento, sistemas de IA para eliminar processos manuais, integração completa para unificar operações e agentes de vendas que trabalham 24/7. Cada solução é criada sob medida para suas necessidades específicas.` },
    { question: "Quanto tempo leva para implementar uma solução de IA?", answer: `O tempo varia conforme a complexidade da solução. Projetos simples como chatbots podem estar funcionando em 1-2 semanas. Automações mais complexas e integrações completas podem levar de 4-8 semanas. Durante a consultoria gratuita, definimos um cronograma personalizado para seu projeto específico.` },
    { question: "Qual o investimento necessário para começar?", answer: `O investimento varia conforme o escopo do projeto e as necessidades da sua empresa. Temos soluções para diferentes tamanhos de negócio, desde startups até grandes empresas. Na consultoria gratuita, apresentamos opções que se adequam ao seu orçamento atual e objetivos de crescimento.` },
    { question: "Como vocês criam as automações?", answer: `Utilizamos as melhores ferramentas de IA do mercado como ChatGPT, Claude, Gemini, combinadas com plataformas de automação como Make e Zapier. Primeiro mapeamos seus processos atuais, identificamos oportunidades de melhoria e então desenvolvemos soluções personalizadas que se integram perfeitamente ao seu negócio.` },
    { question: "Como nos comunicamos durante o projeto?", answer: `Mantemos comunicação constante através de reuniões semanais, relatórios de progresso e um canal direto via WhatsApp. Você terá acesso a um gerente de projeto dedicado que acompanha todo o desenvolvimento e tira suas dúvidas em tempo real.` },
    { question: "E se algo der errado com a automação?", answer: `Oferecemos suporte técnico completo e monitoramento contínuo das automações. Caso ocorra algum problema, nossa equipe técnica resolve rapidamente. Além disso, todas as soluções passam por testes rigorosos antes da implementação final.` },
    { question: "Preciso de conhecimentos técnicos para usar os sistemas?", answer: `Não! Desenvolvemos interfaces simples e intuitivas para que qualquer pessoa da sua equipe possa usar. Além disso, fornecemos treinamento completo e materiais de apoio para garantir que todos saibam utilizar as automações de forma eficiente.` },
  ];

  return (
    <section className="relative py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="font-sora text-xs tracking-[0.25em] uppercase text-white/40 mb-3">Perguntas Frequentes</p>
          <h2 className="font-morganite text-4xl md:text-5xl font-bold text-white">
            Perguntas Frequentes sobre <span className="bg-gradient-primary bg-clip-text text-transparent">IA</span>
          </h2>
          <p className="font-sora text-base md:text-lg text-white/60 mt-4">
            Tudo o que você precisa saber para ir do plano à execução com previsibilidade e segurança.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openQuestion === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border bg-white/[0.03] transition-all duration-300
                ${isOpen ? "border-achave-yellow/40 ring-1 ring-achave-yellow/20" : "border-white/10 hover:border-achave-yellow/30"}`}
              >
                <button
                  className="w-full px-5 sm:px-6 py-4 flex items-center gap-4 text-left"
                  onClick={() => setOpenQuestion(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="inline-grid h-8 w-8 place-items-center rounded-full text-xs font-semibold bg-gradient-to-br from-pink-500 to-orange-400 text-white shadow-[0_0_20px_rgba(255,214,0,.15)]">
                    {index + 1}
                  </span>

                  <h3 className="flex-1 font-sora text-sm md:text-base text-white/90">{faq.question}</h3>

                  <ChevronDown className={`h-5 w-5 shrink-0 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} className="px-5 sm:px-6 pb-5 pt-0">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />
                    <p className="font-sora text-sm md:text-[15px] leading-relaxed text-white/70 whitespace-pre-line">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-14">
          <div className="surface rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="mx-auto mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-orange-400 grid place-items-center ring-1 ring-white/10">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-morganite text-2xl md:text-3xl text-white mb-2">Ainda ficou com dúvidas?</h3>
            <p className="font-sora text-white/70 mb-5">Fale com um especialista e receba um diagnóstico rápido do seu cenário.</p>
            <a href="#lead-form" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 font-sora text-sm text-white/90 shadow-inner backdrop-blur transition hover:border-achave-yellow/40 hover:shadow-[0_0_30px_rgba(255,214,0,.15)]">
              <MessageSquare className="h-4 w-4 text-achave-yellow" />
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
