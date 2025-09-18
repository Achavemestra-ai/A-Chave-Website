import { motion } from "framer-motion";

export const CalcomBooking = () => {
  return (
    <section id="lead-form" className="py-20 relative overflow-hidden">
      {/* Fundo animado com gradiente da A Chave */}
      <div className="absolute inset-0 opacity-90">
        <div
          className="absolute inset-0 bg-gradient-primary"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease-in-out infinite',
            filter: 'url(#noise)'
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <filter id="noise">
              <feTurbulence baseFrequency="0.9" numOctaves="3" seed="1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feComposite in2="SourceGraphic" operator="multiply" />
            </filter>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-white text-center mb-12">
          <motion.h2
            className="font-morganite text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Agende sua Consultoria Gratuita
          </motion.h2>

          <motion.p
            className="font-sora text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Descubra como a IA pode transformar seu negócio em uma conversa de 30 minutos
          </motion.p>
        </div>

        <motion.div
          className="bg-white rounded-2xl shadow-2xl max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          {/* Cal.com Embed */}
          <div className="relative" style={{ minHeight: '600px' }}>
            <iframe
              src="https://cal.com/embed/achave-discovery-call?theme=light"
              width="100%"
              height="600"
              frameBorder="0"
              title="Agende sua Consultoria com A Chave"
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};