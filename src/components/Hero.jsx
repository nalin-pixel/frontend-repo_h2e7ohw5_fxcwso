import React from 'react';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-4 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-medium">
              <Star className="w-4 h-4" />
              Belajar dengan kurikulum terbaru
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Tingkatkan Skill-mu dengan Platform Edukasi Modern
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Kelas interaktif, materi terstruktur, dan proyek nyata untuk membantu kamu siap kerja lebih cepat.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#courses" className="px-5 py-3 rounded-md bg-sky-600 hover:bg-sky-700 text-white font-medium inline-flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Mulai Belajar
              </a>
              <a href="#about" className="px-5 py-3 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium">
                Lihat Cara Kerja
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Gratis akses materi dasar. Upgrade kapan saja untuk fitur premium.
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-200 via-white to-purple-200 border border-slate-200 shadow-inner overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop"
                alt="Belajar Online"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
