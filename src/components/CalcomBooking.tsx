// src/components/CalcomBooking.tsx
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type React from "react";

type FormState = {
  nome: string;
  email: string;
  whatsapp: string;
  instagram: string;
  faturamento: string;   // Investimento mensal em inovação
  modelo: string;
  tempoDigital: string;  // Tempo de empresa
  objetivo: string;
  dificuldade: string;
};

const CHECKOUT_URL = "https://www.asaas.com/c/dxd7c09hom84pgxa";
const WHATSAPP_NUMBER_E164 = "5527992859103"; // +55 27 99285-9103
type Step = 0 | 1;

export const CalcomBooking = () => {
  const [step, setStep] = useState<Step>(0);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<"ok" | null>(null);

  const [confirmaMinimo, setConfirmaMinimo] = useState(false);

  const [data, setData] = useState<FormState>({
    nome: "",
    email: "",
    whatsapp: "",
    instagram: "",
    faturamento: "",
    modelo: "",
    tempoDigital: "",
    objetivo: "",
    dificuldade: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((s) => ({ ...s, [name]: value }));
    if (sent) setSent(null);
  };

  const validStep0 = useMemo(
    () => data.nome && data.email && data.whatsapp && data.instagram,
    [data]
  );

  const validStep1 = useMemo(() => {
    const base = data.faturamento && data.modelo && data.tempoDigital;
    return !!base && confirmaMinimo;
  }, [data, confirmaMinimo]);

  const handleNext = () => { if (validStep0) setStep(1); };
  const handleBack = () => setStep(0);

  /** Mensagem completa para o WhatsApp, com quebra de linha legível */
  function buildWhatsappMessage(d: FormState) {
    return [
      "Olá! Vim através do site e acabei de enviar minha aplicação.",
      "",
      "Meus dados:",
      `• Nome: ${d.nome}`,
      `• E-mail: ${d.email}`,
      `• Whatsapp: ${d.whatsapp}`,
      `• Instagram: ${d.instagram}`,
      `• Investimento mensal em inovação: ${d.faturamento || "—"}`,
      `• Modelo de negócio: ${d.modelo || "—"}`,
      `• Tempo de empresa: ${d.tempoDigital || "—"}`,
      `• Objetivo principal: ${d.objetivo || "—"}`,
      `• Maior dificuldade: ${d.dificuldade || "—"}`,
      "",
      "Podemos avançar?"
    ].join("\n");
  }

  /** Abre URL em nova aba usando âncora (melhor taxa de sucesso contra popup blockers) */
  function openInNewTab(url: string) {
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validStep1) return;

    setLoading(true);
    setSent("ok");

    // monta o link do Whats com os dados do lead
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
      buildWhatsappMessage(data)
    )}`;

    // abre checkout e WhatsApp em novas abas a partir do mesmo clique
    try {
      openInNewTab(CHECKOUT_URL);
      // pequeno atraso ajuda alguns navegadores a não bloquear o 2º open
      setTimeout(() => openInNewTab(waUrl), 80);
    } catch {
      /* ignore */
    }

    setTimeout(() => setLoading(false), 200);
  };

  const progress = step === 0 ? 50 : 100;

  // Botão da tela de obrigado também usa a mensagem completa
  const waDeepLink = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
    buildWhatsappMessage(data)
  )}`;

  return (
    <>
      <span id="contato" className="block h-0 w-0 overflow-hidden scroll-mt-28" />

      <section id="lead-form" className="relative overflow-hidden py-16 md:py-20 scroll-mt-28">
        {/* BG */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-primary opacity-90"
            style={{ backgroundSize: "400% 400%", animation: "gradientShift 8s ease-in-out infinite" }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          {/* título */}
          <div className="mx-auto mb-8 max-w-5xl text-center text-white">
            <motion.h2
              className="font-morganite text-3xl md:text-4xl font-bold leading-tight"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9 }}
            >
              Agende sua Consultoria
            </motion.h2>
            <motion.p
              className="font-sora mt-2 text-base md:text-lg opacity-90"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.05 }}
            >
              Descubra como a IA pode transformar seu negócio em uma conversa de 45 minutos
            </motion.p>
          </div>

          {/* Tela de obrigado / impacto */}
          {sent === "ok" ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5"
            >
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                ✓
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-neutral-900">
                Aplicação recebida — bem-vindo ao próximo nível.
              </h3>
              <p className="mx-auto max-w-xl text-neutral-600">
                <strong>Finalize o pagamento no checkout</strong> e, em seguida,{" "}
                <strong>encaminhe o comprovante pelo WhatsApp</strong> para agilizar a validação da sua aplicação.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-pink-500/30"
                  style={{
                    background: "linear-gradient(45deg,#f97316,#a855f7,#ec4899)",
                    backgroundSize: "180% 180%",
                    animation: "achaveGradient 10s ease infinite",
                  }}
                >
                  Ir para o checkout
                </a>
                <a
                  href={waDeepLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-pink-500/30"
                  style={{
                    background: "linear-gradient(45deg,#22c55e,#06b6d4,#8b5cf6)",
                    backgroundSize: "180% 180%",
                    animation: "achaveGradient 10s ease infinite",
                  }}
                >
                  Enviar comprovante no WhatsApp
                </a>
              </div>

              <div className="mt-6 rounded-lg bg-neutral-50 p-4 text-left text-sm text-neutral-700">
                <p className="mb-2 font-medium text-neutral-800">Resumo do que você nos enviou</p>
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  <li><b>Nome:</b> {data.nome}</li>
                  <li><b>Instagram:</b> {data.instagram}</li>
                  <li><b>E-mail:</b> {data.email}</li>
                  <li><b>Whatsapp:</b> {data.whatsapp}</li>
                  <li><b>Invest. inovação:</b> {data.faturamento}</li>
                  <li><b>Modelo:</b> {data.modelo}</li>
                  <li><b>Tempo de empresa:</b> {data.tempoDigital}</li>
                  <li className="sm:col-span-2"><b>Objetivo:</b> {data.objetivo || "—"}</li>
                  <li className="sm:col-span-2"><b>Dificuldade:</b> {data.dificuldade || "—"}</li>
                </ul>
              </div>
            </motion.div>
          ) : (
            <FormUI
              step={step}
              progress={progress}
              data={data}
              confirmaMinimo={confirmaMinimo}
              setConfirmaMinimo={setConfirmaMinimo}
              handleChange={handleChange}
              validStep0={validStep0}
              validStep1={validStep1}
              handleNext={handleNext}
              handleBack={handleBack}
              handleSubmit={handleSubmit}
              loading={loading}
            />
          )}
        </div>

        {/* estilos */}
        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
          @keyframes achaveGradient {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
          }
          input, textarea, select {
            background-color: #fff !important;
            color: #111827 !important;
            caret-color: #111827;
          }
          input::placeholder, textarea::placeholder {
            color: #9CA3AF; opacity: 1;
          }
          input:-webkit-autofill,
          textarea:-webkit-autofill,
          select:-webkit-autofill {
            -webkit-text-fill-color: #111827 !important;
            transition: background-color 9999s ease-in-out 0s;
            box-shadow: 0 0 0px 1000px #fff inset !important;
          }
        `}</style>
      </section>
    </>
  );
};

/* ======= subcomponentes ======= */

function FormUI({
  step,
  progress,
  data,
  confirmaMinimo,
  setConfirmaMinimo,
  handleChange,
  validStep0,
  validStep1,
  handleNext,
  handleBack,
  handleSubmit,
  loading,
}: any) {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_320px]">
      <motion.div
        className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="border-b border-neutral-100 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StepDot active={step === 0} done={step > 0} label="Seus dados" />
              <div className="h-0.5 w-12 bg-neutral-200">
                <div
                  className="h-0.5 bg-gradient-to-r from-orange-400 via-fuchsia-500 to-pink-500 transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <StepDot active={step === 1} done={false} label="Negócio & objetivos" />
            </div>
            <span className="text-xs text-neutral-500">{progress}%</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6">
          <div className="mb-5 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-[13px] font-medium text-neutral-800">Antes de prosseguir:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-neutral-700">
              <li>Investimento mínimo para implementar o framework: <strong>R$ 5.000</strong>.</li>
              <li>
                Garantia de resultado: até <strong>2 meses</strong> (ou devolvemos 100% <strong>mediante a contrato</strong>).
              </li>
              <li>
                A consultoria tem <strong>custo de R$ 333,33</strong>; ao enviar, você será <strong>direcionado ao checkout</strong> (em nova aba).
              </li>
            </ul>
          </div>

          {step === 0 ? (
            <Fieldset title="Seus dados">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Input label="Nome completo*" name="nome" value={data.nome} onChange={handleChange} placeholder="Digite seu nome" required className="sm:col-span-2" />
                <Input label="Melhor e-mail*" name="email" type="email" value={data.email} onChange={handleChange} placeholder="seu@email.com" required />
                <Input label="Whatsapp*" name="whatsapp" value={data.whatsapp} onChange={handleChange} placeholder="DDD + número" required />
                <Input label="Instagram* (ex.: @seudominio)" name="instagram" value={data.instagram} onChange={handleChange} placeholder="@seuinstagram" required className="sm:col-span-2" />
              </div>
            </Fieldset>
          ) : (
            <>
              <Fieldset title="Negócio">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Select
                    label="Investimento mensal em inovação*"
                    name="faturamento"
                    value={data.faturamento}
                    onChange={handleChange}
                    required
                    options={["R$ 20–50 mil/mês", "R$ 50–100 mil/mês", "R$ 100–300 mil/mês", "Acima de R$ 300 mil/mês"]}
                  />
                  <Select
                    label="Modelo de negócio*"
                    name="modelo"
                    value={data.modelo}
                    onChange={handleChange}
                    required
                    options={[
                      "Sou expert/Especialista",
                      "Sou Co-produtor(a)/Bastidor",
                      "Sou prestador(a) de serviço (Copy, Tráfego, Design, etc.)",
                      "Tenho uma marca/Produto físico",
                      "Profissional Liberal (Médico, Advogado, Dentista...)",
                      "Influenciador/Criador de conteúdo",
                      "Negócio local",
                    ]}
                  />
                  <Select
                    label="Tempo de empresa*"
                    name="tempoDigital"
                    value={data.tempoDigital}
                    onChange={handleChange}
                    required
                    options={["Começando agora", "Até 6 meses", "6–12 meses", "1–3 anos", "+3 anos"]}
                  />
                </div>
              </Fieldset>

              <Fieldset title="Objetivos">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Select
                    label="Objetivo principal"
                    name="objetivo"
                    value={data.objetivo}
                    onChange={handleChange}
                    options={[
                      "Vender mais sem brigar por preço",
                      "Aumentar fluxo na loja",
                      "Melhorar fidelização",
                      "Escalar investimento em mídia",
                      "Estruturar time/operacional",
                    ]}
                    placeholder="Selecione (opcional)"
                  />
                  <Textarea
                    label="Maior dificuldade"
                    name="dificuldade"
                    value={data.dificuldade}
                    onChange={handleChange}
                    placeholder="Conte em poucas palavras…"
                    rows={3}
                    className="sm:col-span-2"
                  />
                </div>
              </Fieldset>

              <Fieldset title="Confirmação">
                <Checkbox
                  checked={confirmaMinimo}
                  onChange={setConfirmaMinimo}
                  label={<>Confirmo que tenho <strong>pelo menos R$ 5.000</strong> para iniciar a implementação.</>}
                  required
                />
              </Fieldset>
            </>
          )}

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={handleBack}
              className={`rounded-full px-4 py-2 text-[13px] font-medium text-neutral-700 ring-1 ring-neutral-300 transition ${step === 0 ? "pointer-events-none opacity-40" : "hover:bg-neutral-50"}`}
            >
              Voltar
            </button>

            {step === 0 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!validStep0}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all disabled:opacity-60 hover:shadow-pink-500/30"
                style={{ background: "linear-gradient(45deg,#f97316,#a855f7,#ec4899)", backgroundSize: "180% 180%", animation: "achaveGradient 10s ease infinite" }}
              >
                Próximo
              </button>
            ) : (
              <button
                type="submit"
                disabled={!validStep1 || loading}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold text-white shadow-lg transition-all disabled:opacity-60 hover:shadow-pink-500/30"
                style={{ background: "linear-gradient(45deg,#f97316,#a855f7,#ec4899)", backgroundSize: "180% 180%", animation: "achaveGradient 10s ease infinite" }}
              >
                {loading ? "Processando..." : "Fazer aplicação"}
              </button>
            )}
          </div>
        </form>
      </motion.div>

      {/* resumo lateral */}
      <aside className="hidden md:block">
        <div className="sticky top-24 space-y-4">
          <div className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
            <div className="mb-4 flex items-center gap-3">
              <img src="/achave-logo-white.png" alt="A Chave" className="h-9 w-9" />
              <div>
                <p className="text-sm font-semibold">A Chave</p>
                <p className="text-xs text-white/80">Consultoria & Automação com IA</p>
              </div>
            </div>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between gap-3"><span className="text-white/70">Nome</span><span className="font-medium">{data.nome || "—"}</span></li>
              <li className="flex justify-between gap-3"><span className="text-white/70">Instagram</span><span className="font-medium">{data.instagram || "—"}</span></li>
              <li className="flex justify-between gap-3"><span className="text-white/70">Invest. Inovação</span><span className="font-medium">{data.faturamento || "—"}</span></li>
              <li className="flex justify-between gap-3"><span className="text-white/70">Modelo</span><span className="font-medium">{data.modelo || "—"}</span></li>
            </ul>

            <p className="mt-4 text-xs text-white/75">
              * Garantia: resultado em até 2 meses (ou devolvemos 100% mediante a contrato).
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function StepDot({ active, done, label }: { active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={[
          "grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold",
          active ? "bg-gradient-to-r from-orange-400 via-fuchsia-500 to-pink-500 text-white" : "bg-neutral-200 text-neutral-700",
        ].join(" ")}
      >
        {done ? "✓" : active ? "•" : ""}
      </span>
      <span className={`text-xs ${active ? "text-neutral-900 font-semibold" : "text-neutral-500"}`}>
        {label}
      </span>
    </div>
  );
}

function Fieldset({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5 rounded-xl border border-neutral-200">
      <div className="border-b border-neutral-200 px-4 py-2.5">
        <h5 className="text-sm font-semibold text-neutral-800">{title}</h5>
      </div>
      <div className="px-4 py-4">{children}</div>
    </div>
  );
}

function Input({
  label,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="mb-1 block text-xs font-medium text-neutral-700">{label}</span>
      <input
        {...props}
        className="w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-[13px] outline-none focus:ring-2 focus:ring-pink-400/50 text-neutral-800 placeholder-neutral-400"
      />
    </label>
  );
}

function Select({
  label,
  options,
  placeholder,
  className,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="mb-1 block text-xs font-medium text-neutral-700">{label}</span>
      <select
        {...props}
        className="w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-[13px] outline-none focus:ring-2 focus:ring-pink-400/50 text-neutral-800"
      >
        {placeholder !== undefined ? (
          <option value="">{placeholder}</option>
        ) : (
          <option value="" disabled>Selecione</option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  className,
  rows = 3,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className={`block ${className || ""}`}>
      <span className="mb-1 block text-xs font-medium text-neutral-700">{label}</span>
      <textarea
        rows={rows}
        {...props}
        className="w-full rounded-md border border-neutral-200 bg-white px-3.5 py-2.5 text-[13px] outline-none focus:ring-2 focus:ring-pink-400/50 text-neutral-800 placeholder-neutral-400"
      />
    </label>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
  required,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-2.5 text-[13px] text-neutral-700">
      <input
        type="checkbox"
        className="mt-0.5 h-4 w-4 rounded border-neutral-300 text-fuchsia-600 focus:ring-fuchsia-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        required={required}
      />
      <span>{label}</span>
    </label>
  );
}
