import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Bot, Zap, Clock } from "lucide-react";

export const CallToActionHeader = () => {
  const scrollToBooking = () => {
    const bookingElement = document.getElementById('lead-form');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-achave-yellow rounded-full"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-achave-pink rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-achave-orange rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-achave-yellow-gold rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-morganite text-5xl md:text-7xl font-bold mb-6 text-achave-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Automatize seu negócio com{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              IA personalizada
            </span>
          </motion.h1>

          <motion.p
            className="font-sora text-xl md:text-2xl mb-12 text-gray-600 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Agentes de IA sob medida para sua empresa - gerando resultados, trabalhando 24/7 sem pausas
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="font-sora font-semibold text-achave-black">Agentes Inteligentes</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="font-sora font-semibold text-achave-black">Automação Total</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="font-sora font-semibold text-achave-black">Resultados 24/7</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            <Button 
              onClick={scrollToBooking}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white font-bold px-12 py-4 rounded-xl shadow-brand text-lg"
            >
              Agendar uma chamada
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};