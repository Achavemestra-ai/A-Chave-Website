export default function PrivacidadePage() {
  return (
    <article className="space-y-6 text-sm leading-relaxed">
      <p className="text-white/60">Última atualização: 23 de agosto de 2024</p>

      <h2 className="text-xl font-semibold text-white">1. Coleta de dados</h2>
      <p className="text-white/85">
        Coletamos dados pessoais fornecidos voluntariamente (ex.: nome, e-mail, telefone) e dados
        técnicos coletados automaticamente (ex.: IP, navegação, cookies).
      </p>

      <h2 className="text-xl font-semibold text-white">2. Uso dos dados</h2>
      <p className="text-white/85">
        Utilizamos os dados para atendimento, comunicação, análise de uso, melhoria de serviços e
        cumprimento de obrigações legais.
      </p>

      <h2 className="text-xl font-semibold text-white">3. Compartilhamento</h2>
      <p className="text-white/85">
        Podemos compartilhar dados com fornecedores/terceiros estritamente necessários para a operação
        do serviço, respeitando a LGPD.
      </p>

      <h2 className="text-xl font-semibold text-white">4. Direitos do titular</h2>
      <ul className="list-disc pl-5 space-y-2 text-white/85">
        <li>Acesso, correção, exclusão e portabilidade;</li>
        <li>Revogação de consentimento e oposição;</li>
        <li>Reclamação à ANPD.</li>
      </ul>

      <h2 className="text-xl font-semibold text-white">5. Segurança</h2>
      <p className="text-white/85">
        Adotamos medidas técnicas e administrativas para proteger seus dados contra acessos não
        autorizados, perda ou alteração indevida.
      </p>

      <h2 className="text-xl font-semibold text-white">6. Retenção</h2>
      <p className="text-white/85">
        Mantemos os dados pelo tempo necessário ao atendimento das finalidades e exigências legais.
      </p>

      <h2 className="text-xl font-semibold text-white">7. Contato</h2>
      <p className="text-white/85">
        Para exercer seus direitos, fale com nosso DPO pelo e-mail{" "}
        <a className="underline" href="mailto:contato@achave-ia.com.br">
          contato@achave-ia.com.br
        </a>.
      </p>
    </article>
  );
}
