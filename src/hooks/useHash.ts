import { useEffect, useLayoutEffect, useState } from "react";

/**
 * Lê o hash atual e reage a mudanças.
 * Garante leitura logo no mount (SSR/CSR) e em hashchange.
 */
export function useHash() {
  const get = () => (typeof window !== "undefined" ? window.location.hash : "");

  // evita "piscar" na hidratação
  const [hash, setHash] = useState<string>("");

  useLayoutEffect(() => {
    setHash(get());
  }, []);

  useEffect(() => {
    const onHashChange = () => setHash(get());
    window.addEventListener("hashchange", onHashChange, false);

    // fallback: se alguém setou o hash antes do listener
    if (!hash && get()) setHash(get());

    return () => window.removeEventListener("hashchange", onHashChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return hash?.trim();
}
