import { motion } from "framer-motion";

export const Differential = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Assessoria <span className="text-pink-500">vs</span> Agência: Entenda a Diferença
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            A Chave não é uma agência tradicional. Somos uma{" "}
            <span className="text-white font-semibold">
              <span className="text-pink-500">Assessoria Empresarial</span> baseada em{" "}
              <span className="text-pink-500">Business Intelligence</span> e{" "}
              <span className="text-pink-500">Marketing Ideológico</span>
            </span>
            , com foco total nos resultados reais do seu negócio e não apenas em campanhas criativas.
          </motion.p>
        </div>

        <div className="mt-12 space-y-10">
          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-pink-500 mb-3">O que faz uma agência?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Uma agência de marketing foca em entregar campanhas criativas que promovem sua própria marca. Seu sucesso geralmente não está diretamente atrelado ao seu.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-800 border border-gray-700 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-pink-500 mb-3">Como funciona uma assessoria?</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              A Assessoria da Chave trabalha com dados, estratégia e resultados reais. Cada ação é planejada para gerar conversão, crescimento e faturamento — com foco 100% no seu sucesso.
            </p>
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-xl font-semibold text-pink-400">
              É uma via de mão dupla: o negócio da Chave é vender o seu negócio. <br className="hidden md:inline" />
              <span className="text-white">Crescemos com o seu crescimento.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
