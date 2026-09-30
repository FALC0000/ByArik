"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useInView, Variants } from 'framer-motion';
import { ease } from '@/lib/motion';

/* ─── Shared brand flower SVG ─── */
function BrandFlowerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="-170 -170 340 340" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="0" cy="0" rx="45" ry="160" />
      <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(120)" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA: Servicios & Planes Oficiales ByArik (Opción A: Atelier Tabs)
// ─────────────────────────────────────────────────────────────────────────────
const servicesData = [
  {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "& Community Manager",
    tagline: "Estrategia integral, acompañamiento cercano y crecimiento constante de tu comunidad digital.",
    bgGradient: "from-[var(--color-petal)] to-[#fce4ec]",
    borderClass: "rounded-tl-[3.5rem] rounded-tr-[1.5rem] rounded-br-[3.5rem] rounded-bl-[1.5rem]",
    plans: [
      {
        name: "Impulso",
        price: "$90",
        period: "/ mes",
        desc: "Ideal para marcas que inician y requieren presencia constante y estética.",
        features: [
          "8 Posts o Carruseles diseñados",
          "4 Reels estratégicos",
          "12 Historias mensuales",
          "Grilla mensual & Reporte básico"
        ],
        waMsg: "Hola ARIK, me interesa el Plan Impulso ($90/mes) de Social Media."
      },
      {
        name: "Crecimiento",
        price: "$160",
        period: "/ mes",
        popular: true,
        desc: "Para marcas en expansión que buscan aumentar alcance y comunidad activa.",
        features: [
          "12 Posts o Carruseles de alto valor",
          "8 Reels estratégicos con hook",
          "24 Historias mensuales",
          "Pilares de contenido & Grilla quincenal",
          "Reporte y optimización continua"
        ],
        waMsg: "Hola ARIK, me interesa el Plan Crecimiento ($160/mes) de Social Media."
      },
      {
        name: "Posicionamiento",
        price: "$300",
        period: "/ mes",
        desc: "Presencia omnicanal de alta conversión y volumen constante.",
        features: [
          "16 Posts o Carruseles prémium",
          "12 Reels de alto impacto",
          "40 Historias mensuales",
          "Estrategia integral & Grilla interactiva",
          "Informe analítico avanzado"
        ],
        waMsg: "Hola ARIK, me interesa el Plan Posicionamiento ($300/mes) de Social Media."
      }
    ]
  },
  {
    id: "content-creation",
    title: "Creación de Contenido",
    subtitle: "& Edición de Videos",
    tagline: "Videos que detienen el scroll, desde la dirección de arte hasta la edición final de alta retención.",
    bgGradient: "from-[#C43670] to-[#9e2555]",
    isDark: true,
    borderClass: "rounded-tl-[1.8rem] rounded-tr-[3.5rem] rounded-br-[1.8rem] rounded-bl-[3.5rem]",
    plans: [
      {
        name: "Paquete A",
        price: "$15",
        period: "/ video",
        desc: "Edición dinámica con guion proporcionado para elevar tus grabaciones.",
        features: [
          "Edición con guion proporcionado",
          "Subtítulos dinámicos & Corrección de color",
          "Diseño de portada atractiva",
          "Redacción de copy optimizado",
          "1 Ronda de cambios incluida"
        ],
        waMsg: "Hola ARIK, me interesa el Paquete A ($15/video) de Edición."
      },
      {
        name: "Paquete B",
        price: "$30",
        period: "/ video",
        popular: true,
        desc: "El flujo total: conceptualización, rodaje en locación y edición prémium.",
        features: [
          "Jornada de grabación en locación (2-4h)",
          "Estructuración de guiones & copys",
          "Edición prémium & Efectos visuales",
          "Diseño de portadas en tendencia",
          "Imágenes & elementos de apoyo con IA",
          "Entrega adaptada multiplataforma"
        ],
        waMsg: "Hola ARIK, me interesa el Paquete B ($30/video) de Producción Completa."
      }
    ]
  },
  {
    id: "creator-model",
    title: "Modelo & UGC",
    subtitle: "& Creadora de Contenido",
    tagline: "Un rostro auténtico, fresco y estético que representa tu marca en cámara y genera confianza real.",
    bgGradient: "from-[var(--color-apricoat)] to-[#f3bd7b]",
    borderClass: "rounded-tl-[3.5rem] rounded-tr-[2rem] rounded-br-[1.5rem] rounded-bl-[3rem]",
    plans: [
      {
        name: "Creadora UGC",
        price: "$20",
        period: "/ video",
        popular: true,
        desc: "Reseñas, unboxings y videos orgánicos diseñados para conectar y convertir.",
        features: [
          "Briefing inicial (estética y objetivos)",
          "Estrategia, guion y gancho visual",
          "Grabación en set con locución natural",
          "Edición final lista para Ads o Reels",
          "Firma de derechos de uso"
        ],
        waMsg: "Hola ARIK, me interesa el servicio de Creadora UGC ($20/video)."
      },
      {
        name: "Modelo / Promotora",
        price: "$10",
        period: "/ hora",
        desc: "Presencia visual para campañas fotográficas, eventos o rodajes comerciales.",
        features: [
          "Alineación de concepto con la marca",
          "Definición de look, posado y vestuario",
          "Ejecución en pauta o evento presencial",
          "Mención en redes y firma de cesión de imagen"
        ],
        waMsg: "Hola ARIK, me interesa el servicio de Modelo/Promotora ($10/hora)."
      }
    ]
  }
];

export default function Home() {
  const footerRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const casesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { margin: "0px" });

  const { scrollYProgress } = useScroll();
  const continuaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0]);

  // Estados interactivos para los selectores de planes en cada servicio
  const [selectedPlanS1, setSelectedPlanS1] = useState(1); // Crecimiento ($160)
  const [selectedPlanS2, setSelectedPlanS2] = useState(1); // Paquete B ($30)
  const [selectedPlanS3, setSelectedPlanS3] = useState(0); // Creadora UGC ($20)

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.out } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  function scrollToSection(ref: React.RefObject<HTMLElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-[var(--color-floral)] text-[var(--color-foreground)] overflow-hidden font-sans relative">

      {/* ══════════════════════════════════════════════
          STICKY HEADER NAVBAR (GLASSMORPHISM)
      ══════════════════════════════════════════════ */}
      <header className="hidden md:flex fixed top-4 inset-x-0 mx-auto max-w-4xl z-50 px-5 md:px-7 py-2.5 items-center justify-between bg-white/80 backdrop-blur-md rounded-full border border-white/60 shadow-lg shadow-black/5 transition-all">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <img src="/arik-logo-transparent.png" alt="ARIK" className="h-7 w-auto object-contain group-hover:scale-105 transition-transform" />
        </a>

        {/* Links de navegación (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-gray-700">
          <button onClick={() => scrollToSection(servicesRef)} className="hover:text-[var(--color-hot-berry)] transition-colors">
            Servicios &amp; Precios
          </button>
          <button onClick={() => scrollToSection(casesRef)} className="hover:text-[var(--color-hot-berry)] transition-colors">
            Trabajos Recientes
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-[var(--color-hot-berry)] transition-colors">
            Contacto
          </button>
        </nav>

        {/* Botón WhatsApp compacto con anillo de pulso */}
        <div className="relative inline-block">
          
          <a
            href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20conversar%20sobre%20mi%20marca."
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-hot-berry)] text-white text-xs font-black shadow-md hover:bg-[#a5265a] active:scale-95 transition-all"
          >
            <span>Hablemos</span>
            <span>↗</span>
          </a>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
            <section id="home" className="relative w-full min-h-[100dvh] md:h-screen md:min-h-[900px] overflow-x-hidden md:overflow-hidden flex items-center justify-center bg-[var(--color-floral)] pb-12 md:pb-0">
        
        {/* FONDOS ABSTRACTOS (BLOBS Y FLORES DE LA MARCA) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Blob gigante rosa suave para dar profundidad */}
          <motion.div animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 40, ease: 'linear' }} className="absolute -left-[10%] top-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-petal)] to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-40 blur-[50px]" />
          
          {/* FLORES DE LA MARCA FLOTANTES - RESPONSIVE (Evitan sobreponerse a Arik en móvil) */}
          <motion.div animate={{ rotate: 360, y: [0, -15, 0] }} transition={{ rotate: { repeat: Infinity, duration: 40, ease: ease.linear }, y: { repeat: Infinity, duration: 10, ease: ease.inOut } }} className="absolute -left-[5%] md:left-[5%] top-[5%] md:top-[10%] w-24 md:w-32 h-24 md:h-32 text-[var(--color-bubblegum)] opacity-60">
            <BrandFlowerSVG className="w-full h-full" />
          </motion.div>
          <motion.div animate={{ rotate: -360, x: [0, 10, 0] }} transition={{ rotate: { repeat: Infinity, duration: 35, ease: ease.linear }, x: { repeat: Infinity, duration: 8, ease: ease.inOut } }} className="absolute -left-[10%] md:left-[15%] lg:left-[22%] top-[80%] md:top-[85%] w-32 md:w-40 h-32 md:h-40 text-[var(--color-apricoat)] opacity-50 z-0">
            <BrandFlowerSVG className="w-full h-full" />
          </motion.div>
          <motion.div animate={{ rotate: 360, y: [0, 10, 0] }} transition={{ rotate: { repeat: Infinity, duration: 45, ease: ease.linear }, y: { repeat: Infinity, duration: 12, ease: ease.inOut } }} className="absolute right-[2%] md:right-[5%] top-[15%] md:top-[20%] w-20 md:w-24 h-20 md:h-24 text-[var(--color-petal)] opacity-70">
            <BrandFlowerSVG className="w-full h-full" />
          </motion.div>
          <motion.div animate={{ rotate: -360, x: [0, -15, 0] }} transition={{ rotate: { repeat: Infinity, duration: 50, ease: ease.linear }, x: { repeat: Infinity, duration: 15, ease: ease.inOut } }} className="absolute -right-[15%] md:right-[5%] lg:right-[10%] bottom-[5%] md:bottom-[10%] w-40 md:w-48 h-40 md:h-48 text-[var(--color-bubblegum)] opacity-40 z-0">
            <BrandFlowerSVG className="w-full h-full" />
          </motion.div>
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: ease.linear }} className="absolute left-[40%] md:left-[45%] top-[2%] md:top-[5%] w-16 md:w-20 h-16 md:h-20 text-[var(--color-petal)] opacity-50">
            <BrandFlowerSVG className="w-full h-full" />
          </motion.div>
        </div>

        {/* CONTENEDOR PRINCIPAL: Ahora más ancho (max-w-[1600px]) para separar todo hacia los bordes */}
        <div className="relative z-10 w-full max-w-[1600px] h-auto md:h-full mx-auto flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between px-6 md:px-12 lg:px-20">
          
          
            {/* --- MOBILE ONLY: LOGO Y FOTO (EN EL FLUJO) --- */}
            <div className="w-full flex flex-col items-center md:hidden pt-8 z-30 relative">
              <motion.img 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                src="/arik-logo-transparent.png" 
                alt="ARIK Logo" 
                className="w-[200px] drop-shadow-md mb-0" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                className="w-full h-[50vh] flex justify-center items-end -mb-8 z-0"
              >
                <img 
                  src="/arik-hero-final.png" 
                  alt="ByArik" 
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                  style={{
                    mixBlendMode: 'multiply',
                    WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 50%, transparent 85%), linear-gradient(to bottom, black 80%, transparent 100%)',
                    maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 50%, transparent 85%), linear-gradient(to bottom, black 80%, transparent 100%)',
                    maskComposite: 'intersect',
                    WebkitMaskComposite: 'source-in',
                  }}
                />
              </motion.div>
            </div>

            {/* --- COLUMNA IZQUIERDA: TEXTO Y LOGO --- */}
          {/* Limitamos el ancho a 450px para que no invada el centro */}
          <div className="w-full md:w-[400px] lg:w-[450px] flex flex-col items-center md:items-start text-center md:text-left justify-start pt-0 z-30 order-2 lg:order-1 mt-0 relative">
            {/* Logo */}
            <motion.img 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              src="/arik-logo-transparent.png" 
              alt="ARIK Logo" 
              className="hidden md:block w-[380px] lg:w-[460px] mb-8 drop-shadow-md mx-0" 
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black leading-[1.05] mb-4 md:mb-6 whitespace-nowrap"
            >
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" style={{ WebkitTextStroke: '1px #d6d3d1' }}>Tu mano</span><br/>
              <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" style={{ WebkitTextStroke: '1px #d6d3d1' }}>derecha,</span><br/>
              <span className="text-[var(--color-hot-berry)] italic">para florecer.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-gray-800 text-base sm:text-lg md:text-xl max-w-[400px] mb-6 md:mb-8 font-medium leading-snug mx-auto md:mx-0"
            >
              Gestión de contenido con mirada creativa, acompañamiento cercano en cada etapa de crecimiento.
            </motion.p>

            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
              href="https://wa.me/584242800817" target="_blank"
              className="px-8 py-3.5 bg-gradient-to-r from-[var(--color-hot-berry)] to-[#ba205d] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(186,32,93,0.3)] hover:shadow-[0_10px_25px_rgba(186,32,93,0.5)] hover:-translate-y-1 transition-all text-sm md:text-base relative overflow-hidden group"
            >
              <span className="relative z-10">Cuéntame tu proyecto</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
              
            </motion.a>
          </div>

          {/* --- CENTRO: LA CHICA (ARIK) - IMAGEN LIMPIA Y MÁS GRANDE --- */}
          <div className="absolute inset-0 hidden md:flex justify-center items-end z-10 pointer-events-none">
            {/* 
              Usamos la nueva imagen limpia arik-hero-clean.png
              mix-blend-multiply hace que el fondo blanco de la foto desaparezca por completo
              mask-image: linear-gradient hace que el corte de abajo se difumine suavemente
            */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[850px] lg:max-w-[1050px] h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[92vh] flex items-end justify-center"
            >
              <img 
                src="/arik-hero-final.png" 
                alt="ByArik" 
                className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                style={{
                  mixBlendMode: 'multiply',
                  WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 50%, transparent 85%), linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 50%, transparent 85%), linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                  
                  
                }}
              />
            </motion.div>
          </div>

          {/* --- COLUMNA DERECHA: INTERFAZ Y MOCKUPS --- */}
          {/* Asignamos un ancho fijo y lo tiramos a la derecha para separarlo de la foto */}
          <div className="hidden lg:flex w-[450px] relative h-[600px] flex-col items-end justify-center z-30 order-3 pointer-events-none">
            
            {/* Mockup Laptop (Video Editor Mejorado) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
              className="absolute right-0 top-[15%] w-[400px] lg:w-[480px] h-[280px] bg-[#1e1e1e] rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-[5px] border-[#d1d5db] overflow-hidden flex flex-col rotate-[4deg]"
            >
              {/* Pantalla UI Superior (Barra de Mac) */}
              <div className="w-full h-5 bg-[#2d2d2d] flex gap-1.5 px-3 items-center border-b border-[#111]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              
              <div className="flex-1 p-2 flex gap-2">
                {/* Panel de Clips (Assets) */}
                <div className="w-[35%] bg-[#252525] rounded border border-[#333] grid grid-cols-2 gap-1 p-1.5 overflow-hidden">
                  <div className="bg-[#fadce6] rounded-sm shadow-inner relative"><span className="absolute bottom-0.5 right-0.5 text-[6px] text-gray-500">MP4</span></div>
                  <div className="bg-[#ba205d] rounded-sm shadow-inner relative"><span className="absolute bottom-0.5 right-0.5 text-[6px] text-white/50">PNG</span></div>
                  <div className="bg-gray-400 rounded-sm shadow-inner relative"></div>
                  <div className="bg-[var(--color-petal)] rounded-sm shadow-inner relative"></div>
                  <div className="bg-[#e76a91] rounded-sm shadow-inner relative"></div>
                  <div className="bg-white/20 rounded-sm shadow-inner relative"></div>
                </div>
                {/* Video Player Preview */}
                <div className="flex-1 bg-black rounded border border-[#333] flex items-center justify-center relative overflow-hidden group">
                  <img src="/arik-hero-final.png" className="w-full h-full object-cover object-top opacity-60 scale-125" style={{ filter: 'grayscale(30%)' }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-2 text-[7px] text-white/70 font-mono">00:01:24:12</div>
                </div>
              </div>

              {/* Timeline (Editor Multicanal) */}
              <div className="h-28 bg-[#1a1a1a] border-t border-[#111] p-2 flex flex-col relative gap-1">
                {/* Regla de tiempo */}
                <div className="w-full h-3 border-b border-[#333] flex justify-between px-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-[1px] h-2 bg-[#555] mt-1" />)}
                </div>
                {/* Track 1 (Video) */}
                <div className="w-full h-6 bg-[#252525] rounded-sm flex items-center px-1 relative">
                  <span className="text-[6px] text-gray-500 mr-2 w-4">V1</span>
                  <div className="w-[60%] h-4 bg-[#6366f1] rounded-sm opacity-80 border border-[#818cf8] flex items-center px-1 overflow-hidden">
                    <div className="w-2 h-2 bg-white/30 rounded-sm mr-1"></div>
                    <span className="text-[6px] text-white font-mono">Clip_01_final.mp4</span>
                  </div>
                </div>
                {/* Track 2 (Overlay/Text) */}
                <div className="w-full h-6 bg-[#252525] rounded-sm flex items-center px-1 relative">
                  <span className="text-[6px] text-gray-500 mr-2 w-4">V2</span>
                  <div className="absolute left-[30%] w-[25%] h-4 bg-[#e879f9] rounded-sm opacity-80 border border-[#f0abfc] flex items-center px-1">
                    <span className="text-[6px] text-white font-mono">Logo.png</span>
                  </div>
                </div>
                {/* Track 3 (Audio) */}
                <div className="w-full h-6 bg-[#252525] rounded-sm flex items-center px-1 relative">
                  <span className="text-[6px] text-gray-500 mr-2 w-4">A1</span>
                  <div className="w-[85%] h-4 bg-[#14b8a6] rounded-sm opacity-80 border border-[#2dd4bf] flex items-center px-1 overflow-hidden">
                    <div className="w-full h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNWwxIDItMSAzaDEtbDMgMmgzbDQtNGgxTDE1IDVsMSAzbDEtNGgxTDIwIDVMMjIgMmwxIDRsMS0yaDEiIHN0cm9rZT0id2hpdGUiIGZpbGw9Im5vbmUiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] opacity-50 bg-repeat-x"></div>
                  </div>
                </div>

                {/* Cabezal de reproducción (Playhead) */}
                <div className="absolute left-[40%] top-0 bottom-0 w-[1px] bg-red-500 z-10 shadow-[0_0_5px_rgba(239,68,68,0.8)]">
                  <div className="absolute -top-[1px] -left-[3.5px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-red-500"></div>
                </div>
              </div>
            </motion.div>

            {/* Mockup Teléfono (Instagram Profile) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="absolute right-[25%] lg:right-[30%] top-0 w-[220px] h-[450px] bg-white/40 backdrop-blur-xl rounded-[35px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[4px] border-[#f0f0f0] p-1.5 -rotate-2"
            >
              <div className="w-full h-full bg-[#fdfdfd] rounded-[26px] overflow-hidden flex flex-col relative shadow-inner">
                {/* Notch Dinámico */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10 flex items-center justify-end px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-gray-800"></div>
                </div>
                
                {/* IG Profile Header */}
                <div className="pt-10 px-4 pb-3 flex items-center gap-3 border-b border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[2px]">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden border border-white">
                      <img src="/arik-hero-clean.png" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-gray-900">arik.studio</div>
                    <div className="text-[8px] text-gray-500">Content Studio & Strategy</div>
                  </div>
                </div>
                {/* IG Bio */}
                <div className="px-4 py-2 text-[8px] text-gray-800 space-y-1">
                  <p><strong>ARIK</strong></p>
                  <p>🌷 From/Ornamis con Corcania</p>
                  <p>Tu mano derecha creativa y estratégica</p>
                  <p className="text-blue-600 font-semibold">linktr.ee/arikstudio</p>
                </div>
                {/* Buttons */}
                <div className="flex gap-1.5 px-4 py-2">
                  <div className="flex-1 bg-gray-200 text-gray-900 text-center py-1.5 rounded-md text-[9px] font-bold">Follow</div>
                  <div className="flex-1 bg-gray-200 text-gray-900 text-center py-1.5 rounded-md text-[9px] font-bold">Message</div>
                </div>
                {/* IG Grid */}
                <div className="grid grid-cols-3 gap-0.5 mt-1 px-0.5">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`aspect-square ${['bg-[#fadce6]','bg-[#f8eee9]','bg-[#ba205d]','bg-[#fdfaf6]','bg-[var(--color-petal)]','bg-gray-200','bg-gray-300','bg-[#e76a91]','bg-[#f395b4]','bg-rose-200','bg-orange-100','bg-pink-100'][i]} rounded-sm`} />
                  ))}
                </div>
                
                {/* Botón Home iOS */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full opacity-80" />
              </div>
            </motion.div>
          </div>

        </div>
      
        {/* BOTON CONTINUA (DESKTOP) - Para el Scroll a Servicios */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-30 pointer-events-auto hidden md:flex">
          <button
            onClick={() => {
              const el = document.getElementById('services');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex flex-col items-center gap-1 cursor-pointer focus:outline-none"
            aria-label="Continuar a los servicios"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-foreground)] font-bold bg-white/70 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm border border-white/80 group-hover:bg-white transition-colors">
              Continúa
            </span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
              <svg className="w-4 h-4 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </button>
        </div>
      </section>
      <section id="services" ref={servicesRef} className="relative z-10 pt-16 pb-24 md:py-28 bg-white rounded-t-[3.5rem] shadow-sm overflow-hidden">
        {/* Marca de agua botánica */}
        <div className="absolute top-0 right-0 w-80 h-80 opacity-5 text-[var(--color-hot-berry)] pointer-events-none -translate-y-1/4 translate-x-1/4">
          <BrandFlowerSVG className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="font-mono text-[var(--color-bubblegum)] uppercase tracking-widest font-bold text-sm">
              Servicios &amp; Precios Transparentes
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold mt-3 text-[var(--color-foreground)]">
              El jardín de especialidades.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 text-lg">
              Creatividad estratégica que florece con tu marca. Elige el plan ideal para tu momento.
            </motion.p>
          </motion.div>

          {/* Grid de 3 tarjetas orgánicas asimétricas con selectores de planes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ── CARD 1: Social Media Management ── */}
            {(() => {
              const s = servicesData[0];
              const currentPlan = s.plans[selectedPlanS1];
              return (
                <div className={`relative bg-gradient-to-br ${s.bgGradient} ${s.borderClass} p-7 flex flex-col shadow-sm border border-white/80 transition-all`}>
                  <div className="absolute top-4 right-4 w-16 h-16 text-[var(--color-hot-berry)] opacity-15 pointer-events-none">
                    <BrandFlowerSVG className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-black leading-tight text-gray-900 mb-1">
                    {s.title}<br/><span className="text-[var(--color-hot-berry)] text-base font-bold">{s.subtitle}</span>
                  </h3>
                  <p className="text-xs text-gray-600 mb-5 leading-relaxed">{s.tagline}</p>

                  {/* Selector interactivo de planes */}
                  <div className="bg-white/80 backdrop-blur-sm p-1 rounded-2xl flex gap-1 mb-5 border border-white/60">
                    {s.plans.map((p, idx) => (
                      <button
                        key={p.name}
                        onClick={() => setSelectedPlanS1(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-black transition-all ${
                          selectedPlanS1 === idx
                            ? 'bg-[var(--color-hot-berry)] text-white shadow-sm'
                            : 'text-gray-600 hover:text-black hover:bg-white/50'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>

                  {/* Panel dinámico */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPlan.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-3xl p-5 shadow-sm border border-white flex flex-col flex-1"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-3xl font-black text-[var(--color-hot-berry)]">{currentPlan.price}</span>
                        <span className="text-xs text-gray-500 font-bold">{currentPlan.period}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 mb-4 leading-normal">{currentPlan.desc}</p>
                      
                      <div className="space-y-2 mb-6 flex-1">
                        {currentPlan.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-hot-berry)] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href={`https://wa.me/584242800817?text=${encodeURIComponent(currentPlan.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full text-center py-3 px-4 rounded-full bg-[var(--color-hot-berry)] text-white text-xs font-black shadow-md shadow-pink-500/20 hover:bg-[#a5265a] transition-all flex items-center justify-center gap-2 min-h-[44px]"
                      >
                        <span>Elegir Plan {currentPlan.name}</span>
                        <span className="text-sm">→</span>
                      </motion.a>
                    </motion.div>
                  </AnimatePresence>
                    <div className="mt-4 flex justify-center">
                      <Link href={`/${s.id}`} className="w-full text-center py-3.5 px-4 rounded-xl bg-white border-2 border-[var(--color-hot-berry)] text-[var(--color-hot-berry)] text-sm font-black uppercase tracking-wider hover:bg-[var(--color-hot-berry)] hover:text-white transition-all shadow-sm">
                        Más detalles del servicio
                      </Link>
                    </div>
                </div>
              );
            })()}

            {/* ── CARD 2: Creación de Contenido & Video (FEATURED HOT BERRY) ── */}
            {(() => {
              const s = servicesData[1];
              const currentPlan = s.plans[selectedPlanS2];
              return (
                <div className={`relative bg-gradient-to-br ${s.bgGradient} ${s.borderClass} p-7 flex flex-col shadow-xl shadow-pink-900/20 text-white lg:-mt-4 lg:mb-4 transition-all`}>
                  <div className="absolute top-4 right-4 w-20 h-20 text-white opacity-10 pointer-events-none">
                    <BrandFlowerSVG className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-black leading-tight mb-1">
                    {s.title}<br/><span className="text-white/80 text-base font-bold">{s.subtitle}</span>
                  </h3>
                  <p className="text-xs text-white/80 mb-5 leading-relaxed">{s.tagline}</p>
                    
                  {/* Selector interactivo de planes */}
                  <div className="bg-black/30 backdrop-blur-sm p-1 rounded-2xl flex gap-1 mb-5 border border-white/20">
                    {s.plans.map((p, idx) => (
                      <button
                        key={p.name}
                        onClick={() => setSelectedPlanS2(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-black transition-all ${
                          selectedPlanS2 === idx
                            ? 'bg-white text-[var(--color-hot-berry)] shadow-sm'
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>

                  {/* Panel dinámico */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPlan.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="bg-black/30 backdrop-blur-md rounded-3xl p-5 border border-white/20 flex flex-col flex-1"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-3xl font-black text-white">{currentPlan.price}</span>
                        <span className="text-xs text-white/70 font-bold">{currentPlan.period}</span>
                      </div>
                      <p className="text-[11px] text-white/80 mb-4 leading-normal">{currentPlan.desc}</p>
                      
                      <div className="space-y-2 mb-6 flex-1">
                        {currentPlan.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bubblegum)] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href={`https://wa.me/584242800817?text=${encodeURIComponent(currentPlan.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full text-center py-3 px-4 rounded-full bg-white text-[var(--color-hot-berry)] text-xs font-black shadow-md hover:bg-rose-50 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                      >
                        <span>Elegir {currentPlan.name}</span>
                        <span className="text-sm">→</span>
                      </motion.a>
                    </motion.div>
                  </AnimatePresence>
                    <div className="mt-4 flex justify-center">
                      <Link href={`/${s.id}`} className="w-full text-center py-3.5 px-4 rounded-xl bg-transparent border-2 border-white text-white text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[var(--color-hot-berry)] transition-all shadow-sm">
                        Más detalles del servicio
                      </Link>
                    </div>
                </div>
              );
            })()}

            {/* ── CARD 3: Modelo & UGC ── */}
            {(() => {
              const s = servicesData[2];
              const currentPlan = s.plans[selectedPlanS3];
              return (
                <div className={`relative bg-gradient-to-br ${s.bgGradient} ${s.borderClass} p-7 flex flex-col shadow-sm border border-white/80 transition-all`}>
                  <div className="absolute top-4 right-4 w-16 h-16 text-amber-900 opacity-15 pointer-events-none">
                    <BrandFlowerSVG className="w-full h-full" />
                  </div>

                  <h3 className="text-xl font-black leading-tight text-gray-900 mb-1">
                    {s.title}<br/><span className="text-amber-900 text-base font-bold">{s.subtitle}</span>
                  </h3>
                  <p className="text-xs text-gray-700 mb-5 leading-relaxed">{s.tagline}</p>

                  {/* Selector interactivo de planes */}
                  <div className="bg-white/80 backdrop-blur-sm p-1 rounded-2xl flex gap-1 mb-5 border border-white/60">
                    {s.plans.map((p, idx) => (
                      <button
                        key={p.name}
                        onClick={() => setSelectedPlanS3(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-xl text-[11px] font-black transition-all ${
                          selectedPlanS3 === idx
                            ? 'bg-amber-800 text-white shadow-sm'
                            : 'text-gray-700 hover:text-black hover:bg-white/50'
                        }`}
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>

                  {/* Panel dinámico */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPlan.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white rounded-3xl p-5 shadow-sm border border-white flex flex-col flex-1"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-3xl font-black text-amber-800">{currentPlan.price}</span>
                        <span className="text-xs text-gray-500 font-bold">{currentPlan.period}</span>
                      </div>
                      <p className="text-[11px] text-gray-600 mb-4 leading-normal">{currentPlan.desc}</p>
                      
                      <div className="space-y-2 mb-6 flex-1">
                        {currentPlan.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      <motion.a
                        href={`https://wa.me/584242800817?text=${encodeURIComponent(currentPlan.waMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full text-center py-3 px-4 rounded-full bg-amber-800 text-white text-xs font-black shadow-md shadow-amber-900/20 hover:bg-amber-900 transition-all flex items-center justify-center gap-2 min-h-[44px]"
                      >
                        <span>Elegir {currentPlan.name}</span>
                        <span className="text-sm">→</span>
                      </motion.a>
                    </motion.div>
                  </AnimatePresence>
                    <div className="mt-4 flex justify-center">
                      <Link href={`/${s.id}`} className="w-full text-center py-3.5 px-4 rounded-xl bg-white border-2 border-amber-700 text-amber-700 text-sm font-black uppercase tracking-wider hover:bg-amber-700 hover:text-white transition-all shadow-sm">
                        Más detalles del servicio
                      </Link>
                    </div>
                </div>
              );
            })()}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRABAJOS RECIENTES — EDITORIAL PORTFOLIO
      ══════════════════════════════════════════════ */}
      <section id="cases" ref={casesRef} className="py-24 bg-[var(--color-floral)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 text-[var(--color-bubblegum)] opacity-10 pointer-events-none translate-y-1/4 -translate-x-1/4">
          <BrandFlowerSVG className="w-full h-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="mb-14">
            <motion.span variants={fadeUp} className="font-mono text-[var(--color-bubblegum)] uppercase tracking-widest font-bold text-sm block mb-3">
              Portafolio
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[var(--color-foreground)]">
              Trabajos Recientes.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-gray-600 max-w-md text-lg">
              Marcas que han florecido con nuestra dirección creativa y estratégica.
            </motion.p>
          </motion.div>

          {/* Grid de Portafolio — formato 16:9 sin distorsión */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Caso 1 — IVSS */}
            <motion.a
              href="https://www.instagram.com/ingenieria_ivss/"
              target="_blank" rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative block rounded-[2.5rem] overflow-hidden aspect-video shadow-md border border-white/60 cursor-pointer"
            >
              <img src="/portfolio/ivss.png" alt="Obras Seguro Social" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bubblegum)] font-bold">Corporativo</span>
                <h4 className="text-lg font-bold">Obras (Seguro Social)</h4>
                <span className="text-xs text-white/80 font-semibold flex items-center gap-1 mt-1">Ver en Instagram ↗</span>
              </div>
            </motion.a>

            {/* Caso 2 — Inmovita */}
            <motion.a
              href="https://www.instagram.com/inmovita_ve/"
              target="_blank" rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative block rounded-[2.5rem] overflow-hidden aspect-video shadow-md border border-white/60 cursor-pointer"
            >
              <img src="/portfolio/inmovita.png" alt="Inmovita Bienes Raíces" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bubblegum)] font-bold">Inmobiliario</span>
                <h4 className="text-lg font-bold">Inmovita Bienes Raíces</h4>
                <span className="text-xs text-white/80 font-semibold flex items-center gap-1 mt-1">Ver en Instagram ↗</span>
              </div>
            </motion.a>

            {/* Caso 3 — EPZ Inmovita */}
            <motion.a
              href="https://www.instagram.com/epz_inmovita/"
              target="_blank" rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative block rounded-[2.5rem] overflow-hidden aspect-video shadow-md border border-white/60 cursor-pointer"
            >
              <img src="/portfolio/epz.png" alt="EPZ Inmovita" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 inset-x-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-bubblegum)] font-bold">Personal Branding</span>
                <h4 className="text-lg font-bold">EPZ Inmovita</h4>
                <span className="text-xs text-white/80 font-semibold flex items-center gap-1 mt-1">Ver en Instagram ↗</span>
              </div>
            </motion.a>

          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT / CTA SECTION (CON PULSO EN WHATSAPP)
      ══════════════════════════════════════════════ */}
      <section id="contact" ref={contactRef} className="py-24 bg-white rounded-t-[3.5rem] shadow-[-0_10px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-petal)] rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: ease.linear }}
              className="absolute -top-12 -right-12 w-52 h-52 md:w-64 md:h-64 text-[var(--color-bubblegum)] opacity-40 pointer-events-none"
            >
              <BrandFlowerSVG className="w-full h-full" />
            </motion.div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Cultivemos tu marca.</h2>
              <p className="text-lg text-gray-800 mb-10 max-w-lg">
                Cuéntanos sobre tu proyecto y descubramos cómo podemos ayudarte a florecer en digital.
              </p>

              {/* Botón WhatsApp con anillo perimetral pulsante continuo */}
              <div className="relative inline-block">
                
                <a
                  href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20contarles%20sobre%20mi%20proyecto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center w-full md:w-auto gap-3 bg-[var(--color-hot-berry)] text-white font-bold rounded-full px-12 py-4 hover:bg-[#a72b5e] transition-colors shadow-xl shadow-[#c43670]/20"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Cuéntame tu proyecto</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER COMPLETO DE MARCA BYARIK
      ══════════════════════════════════════════════ */}
      <footer ref={footerRef} className="bg-[var(--color-hot-berry)] text-white pt-16 pb-12 rounded-t-[3.5rem] relative z-20">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Fila Principal */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/20">
            {/* Logo e identidad */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src="/arik-logo-transparent.png" alt="ARIK Logo" className="w-36 h-auto brightness-0 invert mb-3" />
              <p className="text-white/80 text-sm max-w-xs">
                Tu mano derecha, para florecer.
              </p>
            </div>

            {/* Enlaces y Redes Sociales */}
            <div className="flex items-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/byarik_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram @byarik_"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20conversar%20sobre%20mi%20marca."
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp ByArik"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
