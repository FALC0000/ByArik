"use client";
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export default function ContentCreationService() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-[var(--color-floral)] text-[var(--color-foreground)] font-sans relative overflow-hidden">
      
      {/* Brand Flower SVG Definition */}
      <svg className="hidden">
        <defs>
          <g id="brand-flower">
            <ellipse cx="0" cy="0" rx="45" ry="160" />
            <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(60)" />
            <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(120)" />
          </g>
        </defs>
      </svg>

      {/* Floating Animated Background Flowers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.svg viewBox="0 0 1400 900" className="w-full h-full object-cover opacity-30" style={{ y: yBg }}>
          <motion.use href="#brand-flower" fill="var(--color-petal)" initial={{ scale: 0.5 }} animate={{ rotate: 360, x: [100, 120, 100], y: [100, 80, 100] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} />
          <motion.use href="#brand-flower" fill="var(--color-apricoat)" className="opacity-40" initial={{ scale: 0.8 }} animate={{ rotate: -360, x: [1200, 1150, 1200], y: [600, 650, 600] }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} />
          <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-20" initial={{ scale: 0.4 }} animate={{ rotate: 360, x: [300, 320, 300], y: [800, 780, 800] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} />
        </motion.svg>
      </div>

      {/* Sticky Nav Back */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50">
        <a href="/" className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[var(--color-petal)] px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-[var(--color-hot-berry)] hover:bg-[var(--color-hot-berry)] hover:text-white shadow-sm hover:shadow-lg transition-all duration-300 group">
          <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Volver
        </a>
      </div>

      {/* Hero Section (Creative Split Layout) */}
      <section className="relative z-10 min-h-[90vh] flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-[var(--color-petal)] text-[var(--color-hot-berry)] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--color-hot-berry)] animate-pulse"></span>
              Servicio Estrella
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mb-8 text-[var(--color-foreground)]">
              Creación &<br/>
              <span className="text-[var(--color-hot-berry)]">Edición</span><br/>
              de Video
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-gray-700 max-w-lg leading-relaxed font-light">
              El verdadero dolor no es no subir videos; es <span className="font-bold text-[var(--color-hot-berry)]">perder clientes todos los días</span> porque tu marca no se ve profesional.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: 5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="relative h-[500px] w-full hidden lg:block">
            {/* Abstract Decorative Element for Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-apricoat)] to-[var(--color-bubblegum)] rounded-[4rem] -rotate-3 opacity-20 blur-2xl"></div>
            <div className="absolute inset-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-hot-berry)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[var(--color-apricoat)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
               <h3 className="text-3xl font-bold text-[var(--color-foreground)] relative z-10 leading-tight">
                 "Sabes que el video es el formato rey, pero al intentarlo te encuentras con grandes obstáculos."
               </h3>
               <div className="relative z-10 flex gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-hot-berry)] shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-bubblegum)] shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg></div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dolor del Cliente (Empatía) - Masonry/Staggered Style */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 relative">
            <span className="absolute left-1/2 -translate-x-1/2 -top-6 md:-top-12 text-5xl md:text-[120px] font-black text-[var(--color-hot-berry)] opacity-5 whitespace-nowrap pointer-events-none">THE PROBLEM</span>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl md:text-5xl font-bold text-[var(--color-foreground)] relative z-10">
              ¿Imaginas un video perfecto y<br/> <span className="text-[var(--color-hot-berry)]">cuando lo empiezas no te sale?</span>
            </motion.h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Falta de tiempo", desc: "Grabar te toma horas, no sabes cómo encuadrar ni cómo iluminar.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-white", text: "text-gray-800", translate: "lg:translate-y-0" },
              { title: "Videos aburridos", desc: "Tu contenido no engancha en los primeros 3 segundos y la gente pasa de largo.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "bg-[var(--color-petal)]", text: "text-gray-900", translate: "lg:translate-y-12" },
              { title: "Edición compleja", desc: "Perder días intentando cortar, añadir subtítulos, música y efectos sin éxito.", icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z", color: "bg-white", text: "text-gray-800", translate: "lg:translate-y-4" },
              { title: "Falta de guion", desc: "Ponértelo a grabar sin saber exactamente qué decir ni cómo vender.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "bg-[var(--color-apricoat)]", text: "text-gray-900", translate: "lg:translate-y-16" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className={`${item.color} ${item.translate} p-8 rounded-[2.5rem] border border-white/50 shadow-xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group`}>
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-[var(--color-hot-berry)] shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${item.text}`}>{item.title}</h3>
                <p className={`${item.text} opacity-80 leading-relaxed`}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* La Solución - Giant Typography & Overlap */}
      <section className="relative z-10 py-32 bg-[var(--color-hot-berry)] text-white overflow-hidden rounded-[4rem] mx-4 lg:mx-8 shadow-2xl">
        <div className="absolute inset-0 opacity-10">
           <svg viewBox="0 0 1400 900" className="w-full h-full object-cover"><use href="#brand-flower" x="700" y="450" fill="white" transform="scale(3) translate(-350, -225)" /></svg>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.span variants={fadeUp} className="font-mono tracking-widest uppercase text-[var(--color-apricoat)] mb-4 block">La Solución BYARIK</motion.span>
              <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                Hacemos que tus videos enganchen y vendan.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                Nos encargamos de todo el proceso de producción audiovisual para que tú solo te preocupes por hacer crecer tu negocio.
              </motion.p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-6">
              {[
                { title: "Concepto y Guion", desc: "Estructura narrativa para garantizar retención." },
                { title: "Producción", desc: "Grabaciones eficientes para optimizar tu tiempo." },
                { title: "Edición de Alto Impacto", desc: "Cortes, subtítulos y ritmo adaptado a tendencias." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeUp} className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex gap-6 items-center hover:bg-white/20 transition-colors">
                  <div className="text-5xl font-black text-[var(--color-apricoat)] opacity-50">0{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paquetes de Servicios (Pricing Cards) */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 relative">
             <span className="absolute left-1/2 -translate-x-1/2 -top-12 text-[100px] md:text-[140px] font-black text-white opacity-60 whitespace-nowrap pointer-events-none drop-shadow-sm">INVESTMENT</span>
             <h2 className="text-4xl md:text-6xl font-bold text-[var(--color-foreground)] relative z-10">
               Soluciones en Video
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-end">
            
            {/* Paquete A */}
            <div className="bg-[var(--color-petal)] rounded-[3rem] p-10 border-2 border-white flex flex-col shadow-xl shadow-pink-100/50 hover:-translate-y-4 transition-transform duration-500 relative">
              <h3 className="text-3xl font-black mb-3 text-[var(--color-foreground)]">Paquete A</h3>
              <p className="text-sm text-gray-700 mb-8 min-h-[3.5rem] leading-relaxed">Edición profesional y estructuración para potenciar tus grabaciones.</p>
              <div className="text-5xl font-black mb-10 text-[var(--color-hot-berry)] tracking-tight">$15 <span className="text-lg text-gray-600 font-medium">/ video</span></div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-hot-berry)] uppercase tracking-widest mb-4">Incluye</h4>
                  <ul className="space-y-3 text-sm text-gray-800 font-bold">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Edición con guion proporcionado</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Subtítulos dinámicos y color</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Diseño de portada y redacción de copy</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 1 Ronda de cambios</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20me%20interesa%20el%20Paquete%20A%20del%20servicio%20de%20Creación%20y%20Edición%20de%20Videos." target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center py-4 rounded-full bg-white text-[var(--color-hot-berry)] font-black hover:shadow-lg transition-all border border-white">Quiero el Paquete A</a>
            </div>

            {/* Paquete B (Destacado) */}
            <div className="bg-white rounded-[3rem] p-10 border-4 border-[var(--color-hot-berry)] flex flex-col relative transform md:-translate-y-8 shadow-2xl shadow-pink-200 z-20">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-hot-berry)] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Más Popular</div>
              <h3 className="text-3xl font-black mb-3 text-[var(--color-foreground)] mt-4">Paquete B</h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[3.5rem] leading-relaxed">El flujo completo: desde la conceptualización y grabación hasta la edición premium.</p>
              <div className="text-6xl font-black mb-10 text-[var(--color-hot-berry)] tracking-tight">$30 <span className="text-lg text-gray-400 font-medium">/ video</span></div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-hot-berry)] uppercase tracking-widest mb-4">Incluye</h4>
                  <ul className="space-y-3 text-sm text-gray-900 font-black">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> Jornada de grabación en locación (2-4h)</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> Estructuración de guion y copy</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> Diseño de portada y tendencias</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> Revisión y entrega multiplataforma</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> Imágenes generadas con IA</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20me%20interesa%20el%20Paquete%20B%20del%20servicio%20de%20Creación%20y%20Edición%20de%20Videos." target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center py-4 rounded-full bg-[var(--color-hot-berry)] text-white font-black hover:opacity-90 shadow-xl shadow-pink-500/40 transition-all hover:scale-105">Quiero el Paquete B</a>
            </div>

          </div>
        </div>
      </section>

      {/* Pack Plus (The Extra Package) */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-to-r from-[var(--color-bubblegum)] to-[var(--color-hot-berry)] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
             {/* Decorative overlay */}
             <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
               <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full"><path d="M0,100 C30,50 70,150 100,0 L100,100 Z" fill="white" /></svg>
             </div>
             
             <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
               <div className="md:w-1/3">
                 <span className="inline-block bg-white text-[var(--color-hot-berry)] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4 shadow-sm">Módulo Extra</span>
                 <h3 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Pack Plus (+)</h3>
                 <p className="text-white/90 text-lg leading-relaxed">Servicios adicionales para potenciar tus producciones audiovisuales.</p>
               </div>
               
               <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[
                   { icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", title: "Eventos Especiales", desc: "Cobertura tras bambalinas en tiempo real." },
                   { icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12", title: "Adaptación Multiplataforma", desc: "Edición para Shorts, TikTok, Reels o Ads." },
                   { icon: "M12 6v6m0 0v6m0-6h6m-6 0H6", title: "Sesión Extra", desc: "Jornadas adicionales de rodaje a medida." }
                 ].map((extra, idx) => (
                   <div key={idx} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors flex flex-col gap-3 items-start">
                     <div className="bg-white text-[var(--color-hot-berry)] p-2 rounded-xl shrink-0 shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={extra.icon}></path></svg></div>
                     <div>
                       <h4 className="font-bold text-base mb-1">{extra.title}</h4>
                       <p className="text-xs text-white/80">{extra.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Proceso de Trabajo - Vertical Aesthetic Timeline */}
      <section className="relative z-10 py-24 bg-white px-6 rounded-t-[4rem] border-t-8 border-[var(--color-petal)]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-foreground)] mb-4">¿Cómo empezamos?</h2>
            <p className="text-gray-500 text-lg">El paso a paso para crear tus videos.</p>
          </div>
          
          <div className="relative border-l-4 border-[var(--color-petal)] ml-6 md:ml-12 space-y-16 py-8">
            {[
              { title: "Día de Pauta", desc: "Fijamos la fecha de producción y definimos los objetivos de la entrega." },
              { title: "Envío de Guiones", desc: "Te envío los guiones estructurados con los ganchos y llamadas a la acción." },
              { title: "Jornada de Grabación", desc: "Nos reunimos para grabar todo el contenido en una sesión ágil de 2 a 4 horas." },
              { title: "Edición Base (2-4 días)", desc: "Proceso el material y te entrego la primera versión editada en un lapso breve." },
              { title: "Revisión y Ajustes", desc: "Revisas el material, aplicamos los cambios necesarios y te entrego la versión final." }
            ].map((step, idx) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} key={idx} className="relative pl-10 md:pl-16">
                <div className="absolute -left-[22px] top-0 w-10 h-10 rounded-full bg-[var(--color-hot-berry)] border-4 border-white flex items-center justify-center text-white font-black shadow-md z-10">
                  {idx + 1}
                </div>
                <div className="bg-[var(--color-floral)] p-8 rounded-3xl border border-[var(--color-petal)] shadow-sm hover:shadow-lg transition-shadow">
                  <h4 className="font-black text-2xl text-[var(--color-foreground)] mb-2">{step.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Condiciones & CTA */}
      <section className="relative z-10 py-32 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="bg-gray-50 rounded-[3rem] p-10 md:p-16 mb-24 border border-gray-200 text-left max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-black text-[var(--color-foreground)] leading-tight">Condiciones<br/> del Servicio</h3>
            </div>
            <div className="md:w-2/3 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-petal)] p-2 rounded-lg text-[var(--color-hot-berry)]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <div>
                  <strong className="block text-lg font-bold mb-1">Esquema de pago</strong>
                  <span className="text-gray-600 leading-relaxed">Se requiere el 50% de anticipo para agendar la pauta y el 50% restante al entregar el material final.</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-apricoat)] p-2 rounded-lg text-[var(--color-foreground)]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                <div>
                  <strong className="block text-lg font-bold mb-1">Trato profesional</strong>
                  <span className="text-gray-600 leading-relaxed">Garantizamos el respeto de los horarios de rodaje, tiempos de entrega y vías oficiales de revisión.</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            {/* Massive background text */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-20 text-[100px] md:text-[160px] font-black text-[var(--color-floral)] whitespace-nowrap pointer-events-none drop-shadow-sm z-0">LET'S GROW</span>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-[var(--color-hot-berry)] tracking-tight">¿Listo para<br/> destacar en video?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                Deja de posponer tus grabaciones. Agenda tu pauta hoy y empecemos a crear el contenido audiovisual que impulsará tu negocio.
              </p>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20hablar%20sobre%20mi%20proyecto%20del%20servicio%20de%20Creación%20y%20Edición%20de%20Videos." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[var(--color-foreground)] text-white px-12 py-5 rounded-full font-black text-xl hover:opacity-90 shadow-2xl shadow-black/20 transition-all hover:scale-110 hover:-translate-y-2">
                ¡Agenda tu pauta hoy!
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
