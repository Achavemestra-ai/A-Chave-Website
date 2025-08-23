import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermosPage = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/legal/termos.md")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Erro ao carregar termos:", error));
  }, []);

  const formatMarkdown = (text: string) => {
    return text
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-6 text-foreground">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold mt-8 mb-4 text-foreground">$1</h2>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-muted-foreground">')
      .replace(/^(.+)$/gm, '<p class="mb-4 text-muted-foreground">$1</p>')
      .replace(/<p class="mb-4 text-muted-foreground"><h/g, '<h')
      .replace(/<\/h1><\/p>/g, '</h1>')
      .replace(/<\/h2><\/p>/g, '</h2>')
      .replace(/<p class="mb-4 text-muted-foreground"><li/g, '<ul><li')
      .replace(/<\/li><\/p>/g, '</li></ul>');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div 
          className="max-w-4xl mx-auto prose prose-lg"
          dangerouslySetInnerHTML={{ __html: formatMarkdown(content) }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default TermosPage;