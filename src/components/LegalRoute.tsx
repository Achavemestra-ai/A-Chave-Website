// src/components/LegalRoute.tsx
import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useHash } from "../hooks/useHash";
import TermosPage from "../pages/TermosPage";
import PrivacidadePage from "../pages/PrivacidadePage";
import CookiesPage from "../pages/CookiesPage";

function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

function TopBar({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0D0D0D]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          <img src="/lovable-uploads/logo-chave.png" alt="A Chave" className="h-5 w-5" />
          <span className="text-white/60">/</span>
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text font-semibold text-transparent">
            {title}
          </span>
        </div>
        <button
          onClick={() => {
            history.pushState(null, "", window.location.pathname);
            window.dispatchEvent(new HashChangeEvent("hashchange"));
            window.scrollTo({ top: 0 });
          }}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10"
          aria-label="Fechar"
        >
          Fechar
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  useEffect(() => {
    const prev = document.title;
    document.title = `${title} — A Chave`;
    return () => { document.title = prev; };
  }, [title]);

  useLockBody(true);

  return (
    <motion.div
      className="fixed inset-0 z-[999999] overflow-y-auto bg-[#0D0D0D]"
      role="document"
      aria-label={title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-10 bg-[linear-gradient(90deg,rgba(242,5,135,.25),rgba(246,199,5,.25))]" />
      <TopBar title={title} />

      <main className="mx-auto max-w-5xl px-4 py-8 md:py-12">
        <article className="rounded-lg border border-white/10 bg-[#0F1117] p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
          <div className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-h2:text-white prose-p:text-white/85 prose-li:text-white/85 prose-strong:text-white">
            {children}
          </div>
        </article>
        <div className="h-16" />
      </main>
    </motion.div>
  );
}

export default function LegalRoute() {
  const hash = useHash();
  const open =
    hash === "#termos-de-uso" ||
    hash === "#privacidade" ||
    hash === "#cookies";

  return (
    <AnimatePresence>
      {open && (
        <>
          {hash === "#termos-de-uso" && (
            <PageShell title="Termos de Uso">
              <TermosPage />
            </PageShell>
          )}
          {hash === "#privacidade" && (
            <PageShell title="Política de Privacidade">
              <PrivacidadePage />
            </PageShell>
          )}
          {hash === "#cookies" && (
            <PageShell title="Política de Cookies">
              <CookiesPage />
            </PageShell>
          )}
        </>
      )}
    </AnimatePresence>
  );
}
