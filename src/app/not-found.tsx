"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ease } from '@/lib/motion';

function BrandFlowerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="-170 -170 340 340" className={className} fill="currentColor" aria-hidden="true">
      <ellipse cx="0" cy="0" rx="45" ry="160" />
      <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="45" ry="160" transform="rotate(120)" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-floral)] text-[var(--color-foreground)] flex items-center justify-center px-6 relative overflow-hidden font-sans">
      
      {/* Flores botánicas flotantes en el fondo */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, y: [0, -15, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 40, ease: ease.linear }, y: { repeat: Infinity, duration: 8, ease: ease.inOut } }}
          className="absolute -top-10 -left-10 w-60 h-60 text-[var(--color-petal)] opacity-40"
        >
          <BrandFlowerSVG className="w-full h-full" />
        </motion.div>
        
        <motion.div
          animate={{ rotate: -360, x: [0, 15, 0] }}
          transition={{ rotate: { repeat: Infinity, duration: 45, ease: ease.linear }, x: { repeat: Infinity, duration: 9, ease: ease.inOut } }}
          className="absolute -bottom-12 -right-12 w-72 h-72 text-[var(--color-bubblegum)] opacity-35"
        >
          <BrandFlowerSVG className="w-full h-full" />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 35, ease: ease.linear }}
          className="absolute top-1/4 right-[10%] w-36 h-36 text-[var(--color-apricoat)] opacity-30"
        >
          <BrandFlowerSVG className="w-full h-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
        
        {/* Logo de ByArik */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <a href="/">
            <img
              src="/arik-logo-transparent.png"
              alt="ARIK Content Studio"
              className="w-40 md:w-52 h-auto object-contain mx-auto drop-shadow-sm hover:scale-105 transition-transform"
            />
          </a>
        </motion.div>

        {/* Flor animada de marca con pulso suave */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: ease.linear }}
          className="w-28 h-28 md:w-36 md:h-36 text-[var(--color-hot-berry)] mb-4"
        >
          <BrandFlowerSVG className="w-full h-full" />
        </motion.div>

        {/* Número 404 estético */}
        <span className="text-6xl md:text-8xl font-black text-[var(--color-hot-berry)] tracking-tighter opacity-90 block leading-none">
          404
        </span>

        {/* Titular poético */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-3 tracking-tight">
          Esta flor aún no ha brotado.
        </h1>

        <p className="text-base text-gray-600 max-w-md mx-auto mb-8 leading-relaxed">
          La página que buscas no existe o floreció en otro rincón del jardín. Volvamos al camino principal.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-full bg-[var(--color-hot-berry)] text-white font-bold text-sm shadow-lg shadow-pink-600/25 hover:bg-[#a5265a] transition-all"
          >
            ← Volver al Inicio
          </motion.a>

          <a
            href="https://wa.me/584242800817?text=Hola%20ARIK,%20estoy%20en%20la%20pagina%20web%20y%20tengo%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-white border border-rose-200 text-gray-800 font-bold text-sm shadow-sm hover:bg-rose-50 transition-all flex items-center gap-2"
          >
            <span>Consultar por WhatsApp</span>
            <span>↗</span>
          </a>
        </div>

      </div>
    </main>
  );
}
