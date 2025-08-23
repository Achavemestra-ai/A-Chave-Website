import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { motion } from "framer-motion";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    priority: '',
    math: '',
    companyAge: '',
    revenue: '',
    segment: '',
    digitalMarketing: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Vim através do site e gostaria de receber uma consultoria gratuita.

Meus dados:
• Nome: ${formData.name}
• Email: ${formData.email}
• Telefone: ${formData.phone}
• Empresa: ${formData.company}
• Maior prioridade para impulsionar a empresa: ${formData.priority}
• Anos de empresa: ${formData.companyAge}
• Faturamento mensal: ${formData.revenue}
• Ramo/Segmento: ${formData.segment}
• Já investiu em Marketing Digital: ${formData.digitalMarketing}`;

    const whatsappUrl = `https://wa.me/5527988527452?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id="lead-form" className="py-20 relative overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 opacity-90">
        <div
          className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400"
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
        <div className="max-w-2xl mx-auto text-white text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Transforme sua Empresa com Tecnologia + Estratégia
          </motion.h2>

          <motion.p
            className="text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            Preencha o formulário abaixo e receba uma consultoria gratuita personalizada para seu negócio.
          </motion.p>
        </div>

        <motion.div
          className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome e Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Nome Completo *</Label>
                <Input id="name" name="name" required value={formData.name} onChange={handleChange}
                  className="bg-gray-900 text-white" />
              </div>
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                  className="bg-gray-900 text-white" />
              </div>
            </div>

            {/* Telefone e Empresa */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">WhatsApp *</Label>
                <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange}
                  className="bg-gray-900 text-white" />
              </div>
              <div>
                <Label htmlFor="company">Nome da Empresa</Label>
                <Input id="company" name="company" value={formData.company} onChange={handleChange}
                  className="bg-gray-900 text-white" />
              </div>
            </div>

            {/* Prioridade */}
            <div>
              <Label htmlFor="priority">Maior prioridade da sua empresa nos próximos 7 dias?</Label>
              <Textarea id="priority" name="priority" value={formData.priority} onChange={handleChange}
                className="bg-gray-900 text-white" />
            </div>

            {/* Matemática */}
            <div>
              <Label htmlFor="math">4+3 = ? *</Label>
              <Input id="math" name="math" required value={formData.math} onChange={handleChange}
                className="bg-gray-900 text-white" />
            </div>

            {/* Anos de empresa */}
            <div>
              <Label>Quantos anos de empresa?</Label>
              <RadioGroup value={formData.companyAge} onValueChange={(val) => handleRadioChange('companyAge', val)} className="mt-2 text-gray-900">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="menos-1-ano" id="menos-1-ano" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="menos-1-ano">Menos de 1 ano</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-3-anos" id="1-3-anos" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="1-3-anos">1 a 3 anos</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mais-5-anos" id="mais-5-anos" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="mais-5-anos">Mais de 5 anos</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Faturamento */}
            <div>
              <Label>Faturamento mensal?</Label>
              <RadioGroup value={formData.revenue} onValueChange={(val) => handleRadioChange('revenue', val)} className="mt-2 text-gray-900">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="menos-5mil" id="menos-5mil" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="menos-5mil">Menos de 5 mil reais</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5-10mil" id="5-10mil" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="5-10mil">5 a 10 mil reais</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mais-10mil" id="mais-10mil" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="mais-10mil">Mais de 10 mil reais</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Segmento */}
            <div>
              <Label htmlFor="segment">Segmento da empresa</Label>
              <Input id="segment" name="segment" value={formData.segment} onChange={handleChange}
                className="bg-gray-900 text-white" />
            </div>

            {/* Investimento em marketing */}
            <div>
              <Label>Já investiu em Marketing Digital?</Label>
              <RadioGroup value={formData.digitalMarketing} onValueChange={(val) => handleRadioChange('digitalMarketing', val)} className="mt-2 text-gray-900">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sim" id="marketing-sim" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="marketing-sim">Sim</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="nao" id="marketing-nao" className="bg-gray-800 border-gray-600 text-purple-500 checked:bg-purple-600 focus:ring-0" />
                  <Label htmlFor="marketing-nao">Não</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Botão */}
            <Button type="submit" size="lg" className="w-full text-white px-8 py-6 text-lg font-semibold relative overflow-hidden"
              style={{
                background: 'linear-gradient(-45deg, #ec4899, #a855f7, #f97316)',
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite'
              }}>
              Receber Consultoria Gratuita Agora
            </Button>

            <p className="text-sm text-gray-600 text-center mt-4">
              Seus dados estão seguros conosco. Não enviamos spam.
            </p>
          </form>
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
