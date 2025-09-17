import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from "@/components/ui/button";

// Componente do triângulo/logo 3D
const TriangleLogo = ({ phase, progress }: { phase: 'triangle' | 'particles' | 'globe' | 'solid'; progress: number }) => {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (particlesRef.current && phase === 'particles') {
      particlesRef.current.rotation.y += 0.01;
    }
  });

  // Geometria do triângulo vazado
  const triangleGeometry = () => {
    const shape = new THREE.Shape();
    const size = 2;
    
    // Triângulo externo
    shape.moveTo(0, size);
    shape.lineTo(-size * Math.cos(Math.PI / 6), -size * 0.5);
    shape.lineTo(size * Math.cos(Math.PI / 6), -size * 0.5);
    shape.lineTo(0, size);
    
    // Buraco da fechadura no centro
    const keyhole = new THREE.Path();
    keyhole.arc(0, 0, 0.3, 0, Math.PI * 2);
    
    const keyholeRect = new THREE.Path();
    keyholeRect.moveTo(-0.1, -0.2);
    keyholeRect.lineTo(0.1, -0.2);
    keyholeRect.lineTo(0.1, -0.6);
    keyholeRect.lineTo(-0.1, -0.6);
    keyholeRect.lineTo(-0.1, -0.2);
    
    shape.holes.push(keyhole);
    shape.holes.push(keyholeRect);
    
    return new THREE.ExtrudeGeometry(shape, { depth: 0.1, bevelEnabled: false });
  };

  // Sistema de partículas
  const particleCount = 200;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    
    if (phase === 'particles') {
      // Partículas explodindo
      const radius = 1 + Math.random() * 3;
      positions[i3] = (Math.random() - 0.5) * radius;
      positions[i3 + 1] = (Math.random() - 0.5) * radius;
      positions[i3 + 2] = (Math.random() - 0.5) * radius;
    } else if (phase === 'globe') {
      // Partículas formando globo
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 1.5;
      
      positions[i3] = radius * Math.cos(theta) * Math.sin(phi);
      positions[i3 + 1] = radius * Math.cos(phi);
      positions[i3 + 2] = radius * Math.sin(theta) * Math.sin(phi);
    }
    
    // Cores do gradiente A Chave
    const t = Math.random();
    if (t < 0.5) {
      // Rosa #F20587
      colors[i3] = 0.95;
      colors[i3 + 1] = 0.02;
      colors[i3 + 2] = 0.53;
    } else {
      // Amarelo #F6C705
      colors[i3] = 0.96;
      colors[i3 + 1] = 0.78;
      colors[i3 + 2] = 0.02;
    }
  }

  if (phase === 'triangle' || phase === 'solid') {
    return (
      <group ref={meshRef}>
        <mesh geometry={triangleGeometry()}>
          <meshStandardMaterial
            color={phase === 'solid' ? '#F20587' : '#F6C705'}
            emissive={phase === 'solid' ? '#F20587' : '#F6C705'}
            emissiveIntensity={0.2}
            transparent
            opacity={phase === 'triangle' ? 0.8 : 1}
          />
        </mesh>
      </group>
    );
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} />
    </points>
  );
};

// Fundo com malha de pontos
const DotGrid = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#F20587" transparent opacity={0.1} />
    </points>
  );
};

// Cena 3D
const Scene3D = ({ scrollY }: { scrollY: number }) => {
  const { camera } = useThree();
  
  // Determinar fase baseada no scroll
  let phase: 'triangle' | 'particles' | 'globe' | 'solid' = 'triangle';
  let progress = 0;
  
  if (scrollY > 100 && scrollY < 300) {
    phase = 'particles';
    progress = (scrollY - 100) / 200;
  } else if (scrollY >= 300 && scrollY < 500) {
    phase = 'globe';
    progress = (scrollY - 300) / 200;
  } else if (scrollY >= 500) {
    phase = 'solid';
    progress = 1;
  }

  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#F6C705" intensity={0.5} />
      
      <DotGrid />
      <TriangleLogo phase={phase} progress={progress} />
    </>
  );
};

// Componente principal do Hero
export const HeroChave3D = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('lead-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-chave-black text-white relative overflow-hidden">
      {/* Canvas 3D */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Suspense fallback={null}>
            <Scene3D scrollY={scrollY} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradiente hero sobreposto */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, hsla(342, 96%, 48%, 0.1), transparent 70%)'
        }}
      />

      {/* Conteúdo sobreposto */}
      <div className="container mx-auto px-4 py-20 relative z-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-morganite mb-8 leading-tight">
            Abra o Potencial do{" "}
            <span 
              className="font-morganite bg-gradient-primary bg-clip-text text-transparent"
              style={{
                backgroundSize: '400% 400%',
                animation: 'gradientShift 8s ease-in-out infinite',
              }}
            >
              Seu Negócio Local
            </span>
          </h1>

          <p className="text-lg md:text-xl font-sora opacity-90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Estratégia, tráfego e Business Intelligence para você escalar seu supermercado com dados precisos e resultados reais.
          </p>

          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="
              w-full sm:w-auto max-w-[420px] min-w-[280px] mx-auto
              px-8 sm:px-12 py-6 sm:py-8
              text-lg sm:text-xl font-morganite
              whitespace-normal text-center leading-snug
              rounded-2xl
              ring-2 ring-chave-pink/40
              shadow-2xl shadow-chave-pink/30
              relative overflow-hidden
              transition-all duration-300
              hover:scale-105 hover:shadow-chave-pink/50
            "
            style={{
              background: 'linear-gradient(45deg, #F20587, #F6C705)',
              backgroundSize: '400% 400%',
              animation: 'gradientShift 8s ease-in-out infinite',
              color: '#ffffff',
            }}
          >
            QUERO MAIS INFORMAÇÕES
          </Button>
        </div>
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