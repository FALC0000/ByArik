"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, Variants } from 'framer-motion';

export default function Home() {
  const footerRef = useRef<HTMLElement>(null);
  const footerInView = useInView(footerRef, { margin: "0px" });
  const { scrollYProgress } = useScroll();
  const scrollFade = useTransform(scrollYProgress, [0, 0], [1, 1]); // kept for potential future use

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-floral)] text-[var(--color-foreground)] overflow-hidden font-sans relative">
      {/* Abstract Brand Flowers (SVG) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <svg viewBox="0 0 1400 900" className="absolute top-0 right-0 w-full h-full object-cover min-w-[1200px]" preserveAspectRatio="xMaxYMax slice">
          <defs>
            <g id="brand-flower">
              <ellipse cx="0" cy="0" rx="45" ry="160" />
              <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(60)" />
              <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(120)" />
            </g>
          </defs>
          
          <motion.use href="#brand-flower" x="1200" y="150" fill="var(--color-petal)" 
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1.5, rotate: 15 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.use href="#brand-flower" x="900" y="700" fill="var(--color-hot-berry)" className="opacity-95"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 2.2, rotate: -20 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
          <motion.use href="#brand-flower" x="650" y="450" fill="var(--color-bubblegum)" className="opacity-90"
            initial={{ scale: 0, rotate: 15 }}
            animate={{ scale: 1.3, rotate: 45 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          />
        </svg>
      </div>

      {/* Full-Screen Cinematic Visual Hero */}
      <section id="home" className="relative w-full h-screen min-h-[850px] flex items-center justify-center overflow-hidden perspective-[2000px] bg-[var(--color-floral)]">
        
        {/* Massive Logo (Left side) Perfectly Centered in Negative Space */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute left-[20%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <img 
            src="/arik-logo-transparent.png" 
            alt="ARIK Logo" 
            className="w-[350px] md:w-[550px] lg:w-[700px] h-auto object-contain drop-shadow-md" 
          />
        </motion.div>
        
        {/* 2. Three Rotating Brand Flowers (Deep Background) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg viewBox="0 0 1400 900" className="w-full h-full object-cover opacity-80">
            <defs>
              <g id="brand-flower">
                <ellipse cx="0" cy="0" rx="45" ry="160" />
                <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(60)" />
                <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(120)" />
              </g>
            </defs>
            {/* 16 Small Safe-Zone Flowers (No Overlaps) */}
            {/* Left Edge (Near Logo/Photo) */}
            <motion.use href="#brand-flower" fill="var(--color-petal)" className="opacity-50" initial={{ scale: 0.25 }} animate={{ rotate: 360, x: [100, 120, 100], y: [200, 180, 200] }} transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-40" initial={{ scale: 0.35 }} animate={{ rotate: -360, x: [150, 130, 150], y: [450, 470, 450] }} transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-30" initial={{ scale: 0.28 }} animate={{ rotate: 360, x: [100, 110, 100], y: [700, 680, 700] }} transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }} />

            {/* Right Edge (Near iPhone/Photo) */}
            <motion.use href="#brand-flower" fill="var(--color-petal)" className="opacity-40" initial={{ scale: 0.3 }} animate={{ rotate: -360, x: [1250, 1230, 1250], y: [200, 220, 200] }} transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-30" initial={{ scale: 0.4 }} animate={{ rotate: 360, x: [1200, 1220, 1200], y: [500, 480, 500] }} transition={{ repeat: Infinity, duration: 22, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-50" initial={{ scale: 0.25 }} animate={{ rotate: -360, x: [1250, 1270, 1250], y: [800, 780, 800] }} transition={{ repeat: Infinity, duration: 26, ease: "easeInOut" }} />

            {/* Top Edge (Directly above photo) */}
            <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-40" initial={{ scale: 0.3 }} animate={{ rotate: 360, x: [400, 380, 400], y: [50, 70, 50] }} transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-petal)" className="opacity-60" initial={{ scale: 0.45 }} animate={{ rotate: -360, x: [700, 720, 700], y: [40, 20, 40] }} transition={{ repeat: Infinity, duration: 29, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-30" initial={{ scale: 0.35 }} animate={{ rotate: 360, x: [1000, 980, 1000], y: [60, 80, 60] }} transition={{ repeat: Infinity, duration: 21, ease: "easeInOut" }} />

            {/* Bottom Edge (Directly below photo) */}
            <motion.use href="#brand-flower" fill="var(--color-petal)" className="opacity-40" initial={{ scale: 0.35 }} animate={{ rotate: -360, x: [400, 420, 400], y: [850, 830, 850] }} transition={{ repeat: Infinity, duration: 27, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-50" initial={{ scale: 0.4 }} animate={{ rotate: 360, x: [700, 680, 700], y: [900, 880, 900] }} transition={{ repeat: Infinity, duration: 23, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-40" initial={{ scale: 0.28 }} animate={{ rotate: -360, x: [1000, 1020, 1000], y: [850, 870, 850] }} transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }} />

            {/* Far Corners (Kept Small) */}
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-30" initial={{ scale: 0.11 }} animate={{ rotate: 360, x: [30, 10, 30], y: [30, 50, 30] }} transition={{ repeat: Infinity, duration: 32, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-petal)" className="opacity-30" initial={{ scale: 0.13 }} animate={{ rotate: -360, x: [30, 50, 30], y: [880, 860, 880] }} transition={{ repeat: Infinity, duration: 35, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-30" initial={{ scale: 0.14 }} animate={{ rotate: 360, x: [1380, 1360, 1380], y: [30, 10, 30] }} transition={{ repeat: Infinity, duration: 31, ease: "easeInOut" }} />
            <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-30" initial={{ scale: 0.12 }} animate={{ rotate: -360, x: [1380, 1400, 1380], y: [880, 900, 880] }} transition={{ repeat: Infinity, duration: 33, ease: "easeInOut" }} />
          </svg>
        </div>

        {/* 1. Center Arik Photo (Un-zoomed, high quality, faded edges) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div 
            className="relative w-full max-w-[800px] h-[80vh] max-h-[900px] mt-12 opacity-90"
            style={{
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 75%)',
              maskImage: 'radial-gradient(ellipse at 50% 50%, black 40%, transparent 75%)'
            }}
          >
            <img 
              src="/arik-hero.jpg" 
              alt="Arik Background" 
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* 3. Devices Container (Explicit Positioning) */}
        <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* 3D Floating MacBook (Bottom Left Centered) */}
          <div className="absolute left-[20%] bottom-8 lg:bottom-12 -translate-x-1/2 z-30 pointer-events-none" style={{ perspective: '2000px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -50, rotateY: 20 }} 
              animate={{ opacity: 1, x: 0, rotateY: 15, y: [0, -10, 0] }} 
              transition={{ opacity: { duration: 1, delay: 0.4 }, x: { duration: 1, delay: 0.4 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
              className="w-[340px] lg:w-[480px] h-[260px] lg:h-[340px] bg-[#1a1a1a] rounded-xl shadow-[30px_30px_60px_rgba(0,0,0,0.4)] border-[3px] border-[#333] flex flex-col overflow-hidden pointer-events-auto relative"
              style={{ transform: "translateZ(100px) rotateY(15deg) rotateX(5deg)" }}
            >
              {/* Mac Title Bar */}
              <div className="h-6 bg-[#2a2a2a] flex items-center px-3 gap-1.5 border-b border-[#333]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-[10px] text-gray-400 font-mono ml-4">CapCut Pro - Reels_Arik.mp4</span>
              </div>
              
              {/* CapCut Interface Mockup */}
              <div className="flex-1 bg-[#141414] flex flex-col p-2 gap-2">
                <div className="flex gap-2 h-1/2">
                  <div className="flex-1 bg-[#1f1f1f] rounded border border-[#2a2a2a] p-2 flex gap-2">
                     <div className="w-12 h-12 bg-gray-700 rounded-sm" />
                     <div className="w-12 h-12 bg-[var(--color-petal)] rounded-sm" />
                     <div className="w-12 h-12 bg-[var(--color-hot-berry)] rounded-sm opacity-50" />
                  </div>
                  <div className="w-[45%] bg-black rounded border border-[#2a2a2a] flex items-center justify-center relative overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Preview" />
                     <div className="absolute inset-0 border-[2px] border-cyan-500/50" />
                  </div>
                </div>
                
                <div className="flex-1 bg-[#1f1f1f] rounded border border-[#2a2a2a] p-2 flex flex-col gap-1 relative overflow-hidden">
                  <div className="h-4 border-b border-[#333] flex gap-8 text-[8px] text-gray-500 font-mono">
                    <span>00:00</span><span>00:05</span><span>00:10</span><span>00:15</span>
                  </div>
                  <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-red-500 z-10">
                    <div className="w-2 h-2 -ml-[3.5px] bg-red-500 rounded-full" />
                  </div>
                  <div className="h-5 mt-1 w-[80%] bg-blue-500/30 rounded flex items-center px-1 border border-blue-500/50">
                    <span className="text-[8px] text-blue-200">Video_01.mp4</span>
                  </div>
                  <div className="h-5 w-[40%] bg-pink-500/30 rounded flex items-center px-1 border border-pink-500/50 ml-[10%]">
                    <span className="text-[8px] text-pink-200">B-Roll_Arik</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3D Floating iPhone (Centered Right) */}
          <div className="absolute right-[20%] top-1/2 translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none" style={{ perspective: '2000px' }}>
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: -20 }} 
              animate={{ opacity: 1, x: 0, rotateY: -15, y: [0, -15, 0] }} 
              transition={{ opacity: { duration: 1, delay: 0.6 }, x: { duration: 1, delay: 0.6 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
              className="w-[240px] lg:w-[280px] h-[500px] lg:h-[580px] bg-white rounded-[2.5rem] lg:rounded-[3rem] shadow-[[-30px_30px_60px_rgba(0,0,0,0.4)]] border-[8px] border-[#222] overflow-hidden pointer-events-auto relative"
              style={{ transform: "translateZ(150px) rotateY(-15deg) rotateX(5deg)" }}
            >
            <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-40">
              <div className="w-24 h-5 bg-[#222] rounded-b-xl" />
            </div>
            
            <div className="pt-8 px-4 pb-4 h-full bg-white overflow-hidden">
              <div className="flex items-center justify-between mb-4 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px]">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                      <img src="/arik-hero.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <span className="font-bold text-[12px] block leading-tight">arik.studio</span>
                    <span className="text-[10px] text-gray-500 font-medium">Content Studio & Strategy</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] mb-4 leading-snug text-gray-800">
                <strong>ARIK</strong><br/>
                🌻 Florecimiento con Cercanía<br/>
                Tu mano derecha creativa y estratégica<br/>
                <span className="text-blue-600 font-medium">linktr.ee/arikstudio</span>
              </div>

              <div className="flex gap-2 mb-4">
                <div className="flex-1 bg-gray-100 rounded-md py-1.5 text-center text-[11px] font-bold">Follow</div>
                <div className="flex-1 bg-gray-100 rounded-md py-1.5 text-center text-[11px] font-bold">Message</div>
              </div>
              
              <div className="grid grid-cols-3 gap-0.5">
                <div className="aspect-square bg-[var(--color-petal)]" />
                <div className="aspect-square bg-[var(--color-apricoat)]" />
                <div className="aspect-square bg-[var(--color-hot-berry)] opacity-90" />
                <div className="aspect-square bg-gray-200" />
                <div className="aspect-square bg-[var(--color-bubblegum)]" />
                <div className="aspect-square bg-gray-300" />
                <div className="aspect-square bg-gray-400" />
                <div className="aspect-square bg-[var(--color-hot-berry)]" />
                <div className="aspect-square bg-[var(--color-petal)]" />
              </div>
            </div>
            
            <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-gray-200 flex justify-around items-center z-40">
              <div className="w-6 h-6 rounded-md border-2 border-black" />
              <div className="w-6 h-6 rounded-full border-2 border-gray-400" />
              <div className="w-6 h-6 bg-black rounded-full" />
            </div>
          </motion.div>
          </div>
          
        </div>
      </section>

      {/* Global Persistent Scroll Indicator — hidden when footer is visible */}
      <motion.div 
        animate={{ opacity: footerInView ? 0 : 1, y: footerInView ? 10 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none drop-shadow-md"
      >
        <span className="text-xs lg:text-sm font-mono uppercase tracking-widest text-[var(--color-foreground)] font-bold bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Continúa</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <svg className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--color-foreground)] drop-shadow-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Main Copy & Intro Section */}
      <section className="relative z-10 bg-[var(--color-floral)] py-24 pb-32">
        <div className="container mx-auto px-6">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="flex flex-col items-center text-center gap-6 max-w-4xl mx-auto">
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-[var(--color-hot-berry)]">
              Tu mano derecha, para florecer.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-6 max-w-3xl leading-relaxed">
              Gestión de contenido con mirada creativa, acompañamiento cercano en cada etapa de crecimiento.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24 bg-white rounded-t-[3rem] shadow-sm">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={fadeUp} className="font-mono text-[var(--color-bubblegum)] uppercase tracking-widest font-bold text-sm">
              Servicios
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-bold mt-4 text-[var(--color-foreground)]">
              Estrategia y Creatividad que Florecen.
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-petal)] rounded-[2rem] p-8 transition-transform hover:-translate-y-2 duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-hot-berry)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Management + Community Manager</h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Gestión integral de tus perfiles. Construimos comunidades activas, interacción auténtica y crecimiento constante.
              </p>
              <a href="/social-media" className="inline-block px-6 py-2.5 bg-white text-[var(--color-hot-berry)] rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all mt-auto">
                Más Información
              </a>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-floral)] border-2 border-[var(--color-petal)] rounded-[2rem] p-8 transition-transform hover:-translate-y-2 duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-hot-berry)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Creación de Contenido y Edición de Videos</h3>
              <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                Desde la dirección de arte hasta la producción y edición de Reels, TikToks y material estético que detiene el scroll.
              </p>
              <a href="/content-creation" className="inline-block px-6 py-2.5 bg-white text-[var(--color-hot-berry)] border border-gray-100 rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all mt-auto">
                Más Información
              </a>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeUp} className="bg-[var(--color-apricoat)] rounded-[2rem] p-8 transition-transform hover:-translate-y-2 duration-300 flex flex-col items-start text-left">
              <div className="w-12 h-12 rounded-full bg-[var(--color-hot-berry)] flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Modelo y Creadora de Contenido</h3>
              <p className="text-gray-800 leading-relaxed mb-6 flex-grow">
                Representación visual en cámara (UGC y campañas) aportando un rostro auténtico, fresco y estético que conecta directo con tu audiencia.
              </p>
              <a href="/creator-model" className="inline-block px-6 py-2.5 bg-white text-[var(--color-foreground)] rounded-full font-bold text-sm shadow-sm hover:shadow-md transition-all mt-auto">
                Más Información
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies / Portfolio Preview */}
      <section id="cases" className="py-24 bg-[var(--color-floral)]">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold text-[var(--color-foreground)]">Trabajos Recientes</motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-gray-700 max-w-md">Marcas que han florecido con nuestra dirección creativa y estratégica.</motion.p>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.a href="https://www.instagram.com/ingenieria_ivss/" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="aspect-[16/9] bg-[var(--color-petal)] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-pink-100 block">
              <img src="/portfolio/ivss.png" alt="Obras Seguro Social" className="absolute inset-0 w-full h-full object-cover object-[0%_35%] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[var(--color-foreground)] text-sm md:text-base">Obras (Seguro Social)</h4>
                    <p className="text-xs md:text-sm text-gray-600">Contenido Corporativo</p>
                  </div>
                  <svg className="w-5 h-5 text-[var(--color-hot-berry)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
              </div>
            </motion.a>
            
            <motion.a href="https://www.instagram.com/inmovita_ve/" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="aspect-[16/9] bg-[var(--color-apricoat)] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-orange-50 block">
              <img src="/portfolio/inmovita.png" alt="Inmobiliarias" className="absolute inset-0 w-full h-full object-cover object-[0%_30%] group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[var(--color-foreground)] text-sm md:text-base">Inmobiliarias</h4>
                    <p className="text-xs md:text-sm text-gray-600">Social Media & Video</p>
                  </div>
                  <svg className="w-5 h-5 text-[var(--color-hot-berry)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
              </div>
            </motion.a>
            
            <motion.a href="https://www.instagram.com/epz_inmovita/" target="_blank" rel="noopener noreferrer" variants={fadeUp} className="aspect-[16/9] bg-[var(--color-bubblegum)] rounded-[2rem] overflow-hidden relative group cursor-pointer border border-pink-200 block">
              <img src="/portfolio/epz.png" alt="Asesores Inmobiliarios" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <div className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-[var(--color-foreground)] text-sm md:text-base">Asesores Inmobiliarios</h4>
                    <p className="text-xs md:text-sm text-gray-600">Marca Personal & Creadora</p>
                  </div>
                  <svg className="w-5 h-5 text-[var(--color-hot-berry)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Quote/Contact Form Section */}
      <section id="contact" className="py-24 bg-white rounded-t-[3rem] shadow-[-0_10px_40px_rgba(0,0,0,0.02)]">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[var(--color-petal)] rounded-[3rem] p-8 md:p-16 relative overflow-hidden"
          >
            <motion.svg 
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              viewBox="0 0 200 200" className="absolute -top-20 -right-20 w-64 h-64 opacity-50 text-[var(--color-bubblegum)] pointer-events-none"
            >
              <use href="#brand-flower" x="100" y="100" transform="scale(0.5)" fill="currentColor" />
            </motion.svg>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Cultivemos tu marca.</h2>
              <p className="text-lg text-gray-800 mb-10 max-w-lg">
                Cuéntanos sobre tu proyecto y descubramos cómo podemos ayudarte a florecer en digital.
              </p>

              <a 
                href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20contarles%20sobre%20mi%20proyecto." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-full md:w-auto gap-3 bg-[var(--color-hot-berry)] text-white font-bold rounded-full px-12 py-4 hover:bg-[#a72b5e] hover:scale-105 active:scale-95 transition-all mt-2 shadow-lg shadow-[#c43670]/20"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Cuéntame tu proyecto
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-[var(--color-hot-berry)] text-white py-12 rounded-t-[3rem] relative z-20">
        <div className="container mx-auto px-6 flex justify-center items-center">
          <div className="text-4xl font-bold tracking-widest text-white">ARIK</div>
        </div>
      </footer>
    </div>
  );
}
