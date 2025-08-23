import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/logo-chave.png" 
              alt="A Chave Logo" 
              className="h-12 w-12 object-contain"
            />
            <span 
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(-45deg, #ec4899, #a855f7, #f97316)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              A Chave
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <Button 
              onClick={scrollToForm}
              style={{
                background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite',
                color: 'white',
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
              }}
            >
              Solicitar Consultoria
            </Button>
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#servicos" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
              <Button 
                onClick={scrollToForm}
                className="w-full text-white"
                style={{
                  background: 'linear-gradient(45deg, #f97316, #a855f7, #ec4899)',
                  backgroundSize: '400% 400%',
                  animation: 'gradientShift 8s ease-in-out infinite',
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.66)'
                }}
              >
                Solicitar Consultoria
              </Button>
            </div>
          </nav>
        )}
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </header>
  );
};
