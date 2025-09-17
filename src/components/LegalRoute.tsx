// src/components/LegalRoute.tsx
import { X } from "lucide-react";
import { useEffect } from "react";
import { useHash } from "@/hooks/useHash";
import TermosPage from "../pages/TermosPage";
import PrivacidadePage from "../pages/PrivacidadePage";
import CookiesPage from "../pages/CookiesPage";

function Wrapper({ title, children }: { title: string; children: React.ReactNode }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} — A Chave`;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.title = prev;
      document.body.style.overflow = prevOverflow;
    };
  }, [title]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0D0D0D] text-white overflow-y-auto"
      role="document"
      aria-label={title}
    >
      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
          <button
            onClick={() => {
              history.pushState(null, "", window.location.pathname);
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }}
            className="p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Fechar"
            title="Fechar"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="prose prose-invert prose-headings:mt-8 prose-p:leading-relaxed max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function LegalRoute() {
  const hash = useHash();

  if (hash === "#termos-de-uso") {
    return (
      <Wrapper title="Termos de Uso">
        <TermosPage />
      </Wrapper>
    );
  }

  if (hash === "#privacidade") {
    return (
      <Wrapper title="Política de Privacidade">
        <PrivacidadePage />
      </Wrapper>
    );
  }

  if (hash === "#cookies") { // << NOVO
    return (
      <Wrapper title="Política de Cookies">
        <CookiesPage />
      </Wrapper>
    );
  }

  return null;
}
