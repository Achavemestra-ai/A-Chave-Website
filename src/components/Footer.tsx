// path: src/components/Footer.tsx
import {
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="relative bg-background text-white">
      {/* Decor: halos suaves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-yellow-300/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-br from-yellow-300/5 via-orange-400/10 to-pink-500/10 blur-3xl"
      />

      <div className="container mx-auto px-4">
        {/* Mini-CTA */}
        <div className="relative z-10 -mt-2 mb-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-inner backdrop-blur">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 ring-1 ring-white/10">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-morganite text-2xl md:text-3xl">
                    Pronto para destravar resultados?
                  </h3>
                  <p className="font-sora text-white/70 text-sm md:text-[15px]">
                    Fale com um especialista e receba um diagnóstico rápido do
                    seu cenário atual.
                  </p>
                </div>
              </div>

              <a
                href="#lead-form"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 font-sora text-sm text-white/90 shadow-inner backdrop-blur transition hover:border-achave-yellow/40 hover:shadow-[0_0_30px_rgba(255,214,0,.15)]"
              >
                Agendar uma chamada
                <ArrowRight className="h-4 w-4 text-achave-yellow" />
              </a>
            </div>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 grid gap-12 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/logo-chave.png"
                alt="A Chave Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-morganite text-2xl md:text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                A Chave
              </span>
            </div>

            <p className="font-sora text-white/70 leading-relaxed text-[15px]">
              Transformamos dados em decisões estratégicas. Desbloqueie o
              potencial do seu negócio com soluções sob medida de IA, automação
              e Business Intelligence.
            </p>

            <div className="flex items-center gap-3">
              {[
                {
                  href: "https://www.linkedin.com/company/a-chave-ia/",
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
                {
                  href: "https://www.instagram.com/achavemestra.ia/",
                  label: "Instagram",
                  Icon: Instagram,
                },
                {
                  href: "https://www.youtube.com/@achavemestra-ia",
                  label: "YouTube",
                  Icon: Youtube,
                },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="group grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 ring-1 ring-white/10 transition-transform hover:scale-110"
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-4 font-morganite text-xl text-white/90">
              Navegação
            </h4>
            <ul className="space-y-3 font-sora text-white/70 text-[15px]">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-white transition-colors">
                  Cases
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="mb-4 font-morganite text-xl text-white/90">
              Soluções
            </h4>
            <ul className="space-y-3 font-sora text-white/70 text-[15px]">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Agentes de IA
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Integrações (n8n / Make / Zapier)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  BI & Dashboards
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="mb-4 font-morganite text-xl text-white/90">
              Contato
            </h4>
            <ul className="space-y-3 font-sora text-white/70 text-[15px]">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-achave-yellow" />
                <a
                  href="mailto:contato@achave-ia.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@achave-ia.com.br
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-achave-yellow" />
                <a
                  href="tel:+5527988527452"
                  className="hover:text-white transition-colors"
                >
                  +55 (27) 98852-7452
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-achave-yellow" />
                <span>Espirito Santo • Atendimento em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha e legal */}
        <div className="relative z-10 border-t border-white/10 pt-6 pb-12">
          <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/60 md:flex-row md:items-center">
            <p className="font-sora">
              © {new Date().getFullYear()} Agência Chave. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#termos-de-uso"
                className="hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <a
                href="#privacidade"
                className="hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
