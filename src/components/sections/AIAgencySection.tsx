"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Workflow,
  Brain,
  Palette,
  Clapperboard,
  Code2,
  Database,
  BarChart3,
  BadgeCheck,
  Target,
  Users,
  Zap,
  Award
} from "lucide-react";

const Chip = ({ icon: Icon, label, variant = "default" }: { 
  icon: React.ElementType; 
  label: string;
  variant?: "default" | "highlight";
}) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
      variant === "highlight" 
        ? "bg-orange-500/15 text-orange-300 border border-orange-500/30" 
        : "bg-white/8 text-white/80 border border-white/10 hover:bg-white/12"
    }`}
  >
    <Icon className="h-3.5 w-3.5" />
    {label}
  </motion.div>
);

const FounderCard = ({
  name,
  role,
  description,
  imageFile,
  skills,
  delay = 0,
  isLeader = false
}: {
  name: string;
  role: string;
  description: string;
  imageFile: string;
  skills: { icon: React.ElementType; label: string }[];
  delay?: number;
  isLeader?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -8 }}
    className={`group relative rounded-3xl p-6 backdrop-blur-sm transition-all duration-500 ${
      isLeader 
        ? "bg-gradient-to-br from-orange-500/10 via-black/50 to-black/70 border border-orange-500/25 shadow-2xl shadow-orange-500/10" 
        : "bg-black/50 border border-white/10 hover:border-white/20"
    }`}
  >
    {isLeader && (
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400/30 to-pink-500/30 rounded-full blur-xl" />
    )}
    
    <div className="relative z-10">
      {isLeader && (
        <div className="flex items-center gap-2 mb-4 text-orange-400">
          <Crown className="h-4 w-4" />
          <span className="text-xs font-semibold">CEO & Founder</span>
        </div>
      )}

      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <img
          src={`/${encodeURI(imageFile)}`}
          alt={`${name} - ${role}`}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
      </div>

      <div className="space-y-3">
        <h3 className={`font-bold ${isLeader ? 'text-xl text-white' : 'text-lg text-white'}`}>
          {name}
        </h3>
        <p className={`font-medium leading-relaxed ${isLeader ? 'text-orange-200/90' : 'text-white/70'} text-sm`}>
          {role}
        </p>
        <p className="text-white/75 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.1 + (index * 0.05) }}
            >
              <Chip {...skill} variant={isLeader ? "highlight" : "default"} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const StatCard = ({ number, label, delay = 0 }: { number: string; label: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.05 }}
    className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
  >
    <div className="text-2xl font-bold text-orange-400 mb-1">{number}</div>
    <div className="text-white/70 text-xs font-medium">{label}</div>
  </motion.div>
);

export const AIAgencySection = () => {
  return (
    <section
      id="sobre"              // <-- ID VAI NO SECTION
      className="scroll-mt-28 relative py-20 md:py-28 overflow-hidden bg-[#0b0b0d]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6"
          >
            <Users className="h-4 w-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">Sobre Nós</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-morganite text-5xl md:text-6xl font-bold leading-[0.95] tracking-[0.01em] text-white mb-6"
          >
            Conheça a{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              A Chave
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed"
          >
            Transformamos empresas em legados através da união perfeita entre tecnologia avançada e ciências humanas
          </motion.p>
        </div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/60 border border-white/10 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-morganite text-3xl md:text-4xl font-bold leading-tight text-white">
                Nossa <span className="text-orange-400">Missão</span>
              </h2>
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p className="text-lg">
                  A <strong className="text-orange-300">CHAVE</strong> é uma assessoria empresarial que vai além do convencional. 
                  Combinamos <strong>Inteligência Artificial</strong>, <strong>automação avançada</strong> e <strong>análise de dados</strong>{" "}
                  com <strong>neuromarketing</strong> e <strong>design estratégico</strong>.
                </p>
                
                <p>
                  Nosso objetivo é criar marcas que geram <em className="text-orange-300">pertencimento genuíno</em>. 
                  Clientes que escolhem sua empresa por identificação, não por preço. 
                  Isso é construir um verdadeiro legado.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Chip icon={BadgeCheck} label="IA Estratégica" variant="highlight" />
                <Chip icon={Brain} label="Neuromarketing" variant="highlight" />
                <Chip icon={Target} label="Performance" variant="highlight" />
                <Chip icon={Award} label="Branding Premium" variant="highlight" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <StatCard number="3" label="Fundadores" delay={0.4} />
              <StatCard number="5+" label="Especialidades" delay={0.5} />
              <StatCard number="360°" label="Abordagem" delay={0.6} />
              <StatCard number="100%" label="Dedicação" delay={0.7} />
            </div>
          </div>
        </motion.div>

        {/* Founders Section */}
        <div className="space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-morganite text-3xl md:text-4xl font-bold leading-tight text-white text-center"
          >
            Nossos Fundadores
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FounderCard
              name="Gabriel Dias"
              role="Design Director & Co-fundador"
              description="Criativo estratégico que materializa identidades visuais impactantes. Especialista em branding e motion design que conectam emocionalmente e geram resultados."
              imageFile="Gabriel Dias.png"
              skills={[
                { icon: Palette, label: "Branding" },
                { icon: Clapperboard, label: "Motion Design" },
                { icon: Target, label: "UX Strategy" },
                { icon: Zap, label: "Creative Direction" }
              ]}
              delay={0.1}
            />
            
            <FounderCard
              name="Marcos Lacerda"
              role="CEO & Fundador"
              description="Visionário estratégico que orquestra tecnologia e psicologia do consumidor. Especialista em automações complexas e neuromarketing para transformar empresas em legados."
              imageFile="Marcos Lacerda.jpeg"
              skills={[
                { icon: Crown, label: "Liderança" },
                { icon: Workflow, label: "Automação" },
                { icon: Brain, label: "Neuromarketing" },
                { icon: Target, label: "Estratégia" }
              ]}
              delay={0.2}
              isLeader={true}
            />
            
            <FounderCard
              name="Gabriel Bazilio"
              role="CTO & Co-fundador"
              description="Arquiteto de soluções que transforma complexidade em simplicidade. Expert em desenvolvimento full-stack e criação de sistemas inteligentes de análise de dados."
              imageFile="Bazilio.jpeg"
              skills={[
                { icon: Code2, label: "Full-Stack" },
                { icon: Database, label: "Big Data" },
                { icon: BarChart3, label: "Analytics" },
                { icon: Zap, label: "Performance" }
              ]}
              delay={0.3}
            />
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-white/60 text-lg">
            Juntos, construímos o futuro da sua marca
          </p>
        </motion.div>
      </div>
    </section>
  );
};
