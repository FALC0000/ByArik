"use client";
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ease } from '@/lib/motion';

export default function SocialMediaService() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: ease.out } }
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
          <motion.use href="#brand-flower" fill="var(--color-bubblegum)" className="opacity-40" initial={{ scale: 0.8 }} animate={{ rotate: -360, x: [1200, 1150, 1200], y: [600, 650, 600] }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} />
          <motion.use href="#brand-flower" fill="var(--color-hot-berry)" className="opacity-20" initial={{ scale: 0.4 }} animate={{ rotate: 360, x: [300, 320, 300], y: [800, 780, 800] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }} />
        </motion.svg>
      </div>

      {/* Sticky Nav Back */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50">
        <a href="/" className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-white/50 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-[var(--color-hot-berry)] hover:bg-[var(--color-hot-berry)] hover:text-white shadow-lg transition-all duration-300 group">
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
              Social<br/>
              <span className="text-[var(--color-hot-berry)]">Media</span><br/>
              Management
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-gray-700 max-w-lg leading-relaxed font-light">
              El dolor no es no publicar; es el <span className="font-bold text-[var(--color-hot-berry)]">costo de oportunidad</span> de no estar presente con estrategia.
            </motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, ease: ease.out }} className="relative h-[500px] w-full hidden lg:block">
            {/* Abstract Decorative Element for Hero */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-petal)] to-[var(--color-bubblegum)] rounded-[4rem] rotate-3 opacity-20 blur-2xl"></div>
            <div className="absolute inset-4 bg-white/40 backdrop-blur-xl border border-white/60 rounded-[3rem] shadow-2xl p-8 flex flex-col justify-between overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-hot-berry)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
               <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[var(--color-apricoat)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
               <h3 className="text-3xl font-bold text-[var(--color-foreground)] relative z-10 leading-tight">
                 "Sabes que tu producto es increíble, pero miras tus redes y sientes frustración."
               </h3>
               <div className="relative z-10 flex gap-4 mt-auto">
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-hot-berry)] shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div>
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-bubblegum)] shadow-sm"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg></div>
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
              ¿No te da la vida para llevar<br/> <span className="text-[var(--color-hot-berry)]">tus redes sociales?</span>
            </motion.h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Falta de tiempo", desc: "Pasar horas pensando qué publicar sin ver resultados tangibles.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "bg-white", text: "text-gray-800", translate: "lg:translate-y-0" },
              { title: "Inconsistencia", desc: "Publicar por cumplir, sin un hilo conductor ni una estrategia clara.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "bg-[var(--color-petal)]", text: "text-gray-900", translate: "lg:translate-y-12" },
              { title: "Cero conversación", desc: "Tener seguidores que no interactúan ni se convierten en clientes.", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", color: "bg-white", text: "text-gray-800", translate: "lg:translate-y-4" },
              { title: "Estancamiento", desc: "Ver cómo tu competencia avanza mientras tu marca se queda en el mismo lugar.", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "bg-[var(--color-apricoat)]", text: "text-gray-900", translate: "lg:translate-y-16" }
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
                Hacemos que tus redes trabajen.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-white/80 leading-relaxed">
                No se trata solo de subir fotos bonitas; se trata de construir un ecosistema digital sólido que convierta visitantes en clientes fieles.
              </motion.p>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="space-y-6">
              {[
                { title: "Estrategia a medida", desc: "Plan de acción alineado con metas reales." },
                { title: "Pilares de contenido", desc: "Ejes temáticos que comunican tu valor único." },
                { title: "Alineación constante", desc: "Guiamos cada post directo hacia las ventas." }
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
               Elige tu Plan Ideal
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
            
            {/* Paquete Básico */}
            <div className="bg-[var(--color-petal)] rounded-[3rem] p-10 border-2 border-white flex flex-col shadow-xl shadow-pink-100/50 hover:-translate-y-4 transition-transform duration-500 relative">
              <h3 className="text-3xl font-black mb-3 text-[var(--color-foreground)]">Impulso</h3>
              <p className="text-sm text-gray-700 mb-8 min-h-[3.5rem] leading-relaxed">Para marcas que están comenzando y necesitan presencia constante de calidad.</p>
              <div className="text-5xl font-black mb-10 text-[var(--color-hot-berry)] tracking-tight">$90 <span className="text-lg text-gray-600 font-medium">/ mes</span></div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Estrategia</h4>
                  <ul className="space-y-3 text-sm text-gray-800 font-medium">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Grilla mensual.</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Informe básico.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-hot-berry)] uppercase tracking-widest mb-4">Contenido</h4>
                  <ul className="space-y-3 text-sm text-gray-800 font-bold">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 8 Posts o Carruseles</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 4 Reels sencillos</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 12 Historias</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20me%20interesa%20el%20plan%20Impulso%20Digital%20del%20servicio%20de%20Social%20Media%20Management." target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center py-4 rounded-full bg-white text-[var(--color-hot-berry)] font-black hover:shadow-lg transition-all border border-white">Quiero Impulso</a>
            </div>

            {/* Paquete Medio (Destacado) */}
            <div className="bg-white rounded-[3rem] p-10 border-4 border-[var(--color-hot-berry)] flex flex-col relative transform md:-translate-y-8 shadow-2xl shadow-pink-200 z-20">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--color-hot-berry)] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">Más Popular</div>
              <h3 className="text-3xl font-black mb-3 text-[var(--color-foreground)] mt-4">Crecimiento</h3>
              <p className="text-sm text-gray-600 mb-8 min-h-[3.5rem] leading-relaxed">Para negocios en expansión que buscan aumentar su comunidad estratégicamente.</p>
              <div className="text-6xl font-black mb-10 text-[var(--color-hot-berry)] tracking-tight">$160 <span className="text-lg text-gray-400 font-medium">/ mes</span></div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Estrategia</h4>
                  <ul className="space-y-3 text-sm text-gray-800 font-medium">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Pilares de contenido.</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Grilla quincenal.</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Reporte y optimización.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-hot-berry)] uppercase tracking-widest mb-4">Contenido</h4>
                  <ul className="space-y-3 text-sm text-gray-900 font-black">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> 12 Posts o Carruseles</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> 8 Reels estratégicos</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-[var(--color-hot-berry)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg> 24 Historias</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20me%20interesa%20el%20plan%20Crecimiento%20Activo%20del%20servicio%20de%20Social%20Media%20Management." target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center py-4 rounded-full bg-[var(--color-hot-berry)] text-white font-black hover:opacity-90 shadow-xl shadow-pink-500/40 transition-all hover:scale-105">Quiero Crecimiento</a>
            </div>

            {/* Paquete Fuerte */}
            <div className="bg-[var(--color-apricoat)] rounded-[3rem] p-10 border-2 border-white flex flex-col shadow-xl shadow-orange-100/50 hover:-translate-y-4 transition-transform duration-500 relative">
              <h3 className="text-3xl font-black mb-3 text-[var(--color-foreground)]">Posicionamiento</h3>
              <p className="text-sm text-gray-700 mb-8 min-h-[3.5rem] leading-relaxed">Para marcas que requieren presencia omnicanal, alta conversión y video constante.</p>
              <div className="text-5xl font-black mb-10 text-[var(--color-foreground)] tracking-tight">$300 <span className="text-lg text-gray-700 font-medium">/ mes</span></div>
              
              <div className="space-y-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-4">Estrategia</h4>
                  <ul className="space-y-3 text-sm text-gray-900 font-medium">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Estrategia integral.</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Grilla interactiva.</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> Informe analítico.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--color-foreground)] uppercase tracking-widest mb-4">Contenido</h4>
                  <ul className="space-y-3 text-sm text-gray-900 font-black">
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 16 Posts o Carruseles</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 12 Reels de alto impacto</li>
                    <li className="flex items-start gap-3"><svg className="w-5 h-5 text-gray-900 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg> 40 Historias</li>
                  </ul>
                </div>
              </div>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20me%20interesa%20el%20plan%20Posicionamiento%20Total%20del%20servicio%20de%20Social%20Media%20Management." target="_blank" rel="noopener noreferrer" className="mt-10 block w-full text-center py-4 rounded-full bg-white text-[var(--color-foreground)] font-black hover:shadow-lg transition-all border border-white">Quiero Posicionamiento</a>
            </div>

          </div>
        </div>
      </section>

      {/* Pack Plus (The Extra Package converted into a Full Width Card) */}
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
                 <p className="text-white/90 text-lg leading-relaxed">Potencia cualquiera de los paquetes anteriores según las necesidades puntuales de tu negocio.</p>
               </div>
               
               <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[
                   { icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", title: "Diseño & Portadas", desc: "Configuración visual e info clave." },
                   { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "Doc. Estratégicos", desc: "Guiones, plantillas y estilo." },
                   { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Campañas", desc: "Lanzamiento de nuevos productos." }
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
            <p className="text-gray-500 text-lg">Pasos simples y estructurados para trabajar juntos.</p>
          </div>
          
          <div className="relative border-l-4 border-[var(--color-petal)] ml-6 md:ml-12 space-y-16 py-8">
            {[
              { title: "Conversación previa", desc: "Nos reunimos para conocer a fondo tu marca, tus necesidades y tus objetivos reales." },
              { title: "Recepción del manual", desc: "Me compartes tu manual de marca o los lineamientos clave que quieres manejar." },
              { title: "Puesta a punto (2 sem)", desc: "Abrimos o adaptamos la cuenta e implementamos una fase de prueba con el primer bloque de contenido." },
              { title: "Planificación y grabación", desc: "Planeamos la grilla estratégica, preparamos y grabamos los contenidos de alto impacto." },
              { title: "Publicación y gestión", desc: "Programamos, publicamos y monitoreamos el rendimiento mes a mes." }
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
                  <span className="text-gray-600 leading-relaxed">Para dar inicio a la estrategia se requiere el 50% de anticipo y el 50% restante al finalizar el ciclo.</span>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-[var(--color-apricoat)] p-2 rounded-lg text-[var(--color-foreground)]"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>
                <div>
                  <strong className="block text-lg font-bold mb-1">Trato profesional</strong>
                  <span className="text-gray-600 leading-relaxed">Relación centrada en metas, respetando tiempos de entrega, vías oficiales y límites del contrato.</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            {/* Massive background text */}
            <span className="absolute left-1/2 -translate-x-1/2 -top-20 text-[100px] md:text-[160px] font-black text-[var(--color-floral)] whitespace-nowrap pointer-events-none drop-shadow-sm z-0">LET'S GROW</span>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-[var(--color-hot-berry)] tracking-tight">¿Listo para el<br/> siguiente nivel?</h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                No dejes que tu presencia digital siga en pausa. Agenda tu sesión inicial hoy y empecemos a construir la estrategia que tu negocio necesita.
              </p>
              <a href="https://wa.me/584242800817?text=Hola%20ARIK,%20quiero%20hablar%20sobre%20mi%20proyecto%20del%20servicio%20de%20Social%20Media%20Management." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[var(--color-foreground)] text-white px-12 py-5 rounded-full font-black text-xl hover:opacity-90 shadow-2xl shadow-black/20 transition-all hover:scale-110 hover:-translate-y-2">
                ¡Hablemos hoy mismo!
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
