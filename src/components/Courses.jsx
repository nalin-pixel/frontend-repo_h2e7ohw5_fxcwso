import React from 'react';
import { Code, Paintbrush, Brain, Globe } from 'lucide-react';

const CourseCard = ({ icon: Icon, title, level, desc, tag }) => (
  <div className="group p-5 rounded-xl border border-slate-200 bg-white/60 backdrop-blur hover:bg-white transition shadow-sm hover:shadow-md">
    <div className="flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 rounded-xl bg-sky-100 text-sky-700 grid place-content-center">
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700">{level}</span>
        </div>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          {tag?.split(',').map((t) => (
            <span key={t} className="px-2 py-1 rounded bg-slate-100 text-slate-700">{t}</span>
          ))}
        </div>
        <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-700 hover:text-sky-800">
          Lihat Detail →
        </button>
      </div>
    </div>
  </div>
);

const Courses = () => {
  const list = [
    {
      icon: Code,
      title: 'Pemrograman Web Dasar',
      level: 'Beginner',
      desc: 'HTML, CSS, dan JavaScript dari nol hingga bisa membuat website sederhana.',
      tag: 'HTML,CSS,JavaScript',
    },
    {
      icon: Brain,
      title: 'Data Science & AI',
      level: 'Intermediate',
      desc: 'Belajar analisis data, visualisasi, dan pengenalan machine learning.',
      tag: 'Python,Pandas,ML',
    },
    {
      icon: Paintbrush,
      title: 'Desain UI/UX Modern',
      level: 'Beginner',
      desc: 'Prinsip desain, wireframing, dan pembuatan prototipe interaktif.',
      tag: 'Figma,Design System,Prototyping',
    },
    {
      icon: Globe,
      title: 'Flutter untuk Pemula',
      level: 'Beginner',
      desc: 'Membangun aplikasi mobile lintas platform dengan Dart & Flutter.',
      tag: 'Dart,Flutter,Mobile',
    },
  ];

  return (
    <section id="courses" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Kelas Populer</h2>
            <p className="text-slate-600 mt-1">Pilih jalur belajar sesuai tujuanmu</p>
          </div>
          <a href="#" className="text-sky-700 hover:text-sky-800 text-sm font-medium">Lihat semua</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => (
            <CourseCard key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
