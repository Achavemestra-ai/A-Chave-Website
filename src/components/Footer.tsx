import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Footer = () => {
  const [termosContent, setTermosContent] = useState<string>("");
  const [privacidadeContent, setPrivacidadeContent] = useState<string>("");

  useEffect(() => {
    // Carregar conteúdo dos arquivos markdown
    fetch("/legal/termos.md")
      .then((response) => response.text())
      .then((text) => setTermosContent(text))
      .catch((error) => console.error("Erro ao carregar termos:", error));
    
    fetch("/legal/privacidade.md")
      .then((response) => response.text())
      .then((text) => setPrivacidadeContent(text))
      .catch((error) => console.error("Erro ao carregar política:", error));
  }, []);

  const formatMarkdown = (text: string) => {
    return text
      .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-lg font-semibold mt-6 mb-3 text-gray-200">$1</h2>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 mb-1 text-sm text-gray-300">$1</li>')
      .replace(/\n\n/g, '</p><p class="mb-3 text-sm text-gray-400">')
      .replace(/^(.+)$/gm, '<p class="mb-3 text-sm text-gray-400">$1</p>')
      .replace(/<p class="mb-3 text-sm text-gray-400"><h/g, '<h')
      .replace(/<\/h1><\/p>/g, '</h1>')
      .replace(/<\/h2><\/p>/g, '</h2>')
      .replace(/<p class="mb-3 text-sm text-gray-400"><li/g, '<ul><li')
      .replace(/<\/li><\/p>/g, '</li></ul>');
  };

  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-1">
              <img 
                src="/lovable-uploads/logo-chave.png" 
                alt="A Chave Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                A Chave
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Somos especialistas em transformar dados em decisões estratégicas. 
              Desbloqueie o potencial do seu negócio com nossas soluções de Business Intelligence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/a-chave-ia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/achavemestra.ia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@achavemestra-ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Os outros blocos de "Links úteis" e "Contato" continuam aqui normalmente */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm flex flex-col md:flex-row justify-between text-gray-500">
          <p>© 2024 Agência Chave. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-white transition-colors cursor-pointer">
                  Termos de Uso
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] bg-gray-900 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent text-xl">Termos de Uso</DialogTitle>
                </DialogHeader>
                <div 
                  className="max-h-[70vh] overflow-y-auto prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(termosContent) }}
                />
              </DialogContent>
            </Dialog>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="hover:text-white transition-colors cursor-pointer">
                  Política de Privacidade
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] bg-gray-900 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent text-xl">Política de Privacidade</DialogTitle>
                </DialogHeader>
                <div 
                  className="max-h-[70vh] overflow-y-auto prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(privacidadeContent) }}
                />
              </DialogContent>
            </Dialog>
            
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
