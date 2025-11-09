import React, { useState } from 'react';
import { Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ThreeDScene from './ThreeDScene.jsx';
import LoginModal from './LoginModal.jsx';

const AnimatedHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium"
            >
              <Star className="w-4 h-4" />
              Belajar dengan kurikulum terbaru
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Jelajahi Belajar 3D Interaktif
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-slate-600 text-lg leading-relaxed"
            >
              Nikmati pengalaman belajar dengan adegan 3D yang bisa kamu putar dan eksplor. Semuanya ringan dan responsif.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a href="#courses" className="px-5 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-medium inline-flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Mulai Belajar
              </a>
              <button onClick={() => setOpen(true)} className="px-5 py-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium">
                Masuk / Daftar
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <ThreeDScene />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-lg bg-white/70 backdrop-blur border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">120+</div>
                <div className="text-xs text-slate-500">Kursus</div>
              </div>
              <div className="p-3 rounded-lg bg-white/70 backdrop-blur border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">30k</div>
                <div className="text-xs text-slate-500">Siswa Aktif</div>
              </div>
              <div className="p-3 rounded-lg bg-white/70 backdrop-blur border border-slate-200">
                <div className="text-2xl font-bold text-slate-900">4.9/5</div>
                <div className="text-xs text-slate-500">Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <LoginModal open={open} onClose={() => setOpen(false)} onSuccess={() => setOpen(false)} />
    </section>
  );
};

export default AnimatedHero;
