// src/pages/CookiesPage.tsx
export default function CookiesPage() {
  return (
    <article className="space-y-6 text-sm leading-relaxed">
      <p className="text-gray-400">
        Última atualização: 23 de agosto de 2024
      </p>

      <h2 className="text-xl font-semibold text-white">1. O que são cookies?</h2>
      <p className="text-gray-300">
        Cookies são pequenos arquivos de texto armazenados no seu navegador que
        nos ajudam a oferecer uma experiência melhor (ex.: manter sessão, lembrar
        preferências, medir desempenho).
      </p>

      <h2 className="text-xl font-semibold text-white">2. Tipos de cookies que utilizamos</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        <li>
          <strong>Essenciais:</strong> necessários para o funcionamento do site.
        </li>
        <li>
          <strong>Funcionais:</strong> lembram suas preferências (idioma, tema).
        </li>
        <li>
          <strong>Analíticos:</strong> ajudam a entender uso e melhorar a experiência.
        </li>
        <li>
          <strong>Marketing (quando habilitado):</strong> mensuram campanhas e conversões.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-white">3. Como gerenciar cookies</h2>
      <p className="text-gray-300">
        Você pode gerenciar e excluir cookies nas configurações do seu navegador.
        Desabilitar alguns cookies pode afetar partes do site.
      </p>

      <h2 className="text-xl font-semibold text-white">4. Bases legais</h2>
      <p className="text-gray-300">
        Tratamos dados via cookies com base nas hipóteses da LGPD, como execução
        de contrato, legítimo interesse e consentimento quando aplicável.
      </p>

      <h2 className="text-xl font-semibold text-white">5. Período de retenção</h2>
      <p className="text-gray-300">
        O tempo de retenção varia por tipo de cookie (sessão expira ao fechar o
        navegador; persistentes possuem prazo definido).
      </p>

      <h2 className="text-xl font-semibold text-white">6. Contato</h2>
      <p className="text-gray-300">
        Em caso de dúvidas sobre esta Política de Cookies, fale conosco pelo
        e-mail <a className="underline" href="mailto:contato@achave-ia.com.br">contato@achave-ia.com.br</a>.
      </p>
    </article>
  );
}
