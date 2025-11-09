import React from 'react';
import { CheckCircle, Shield, Sparkles } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm">
    <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-slate-900 font-semibold">{title}</h3>
    <p className="text-sm text-slate-600 mt-1">{desc}</p>
  </div>
);

const Benefits = () => {
  const list = [
    {
      icon: Sparkles,
      title: 'Kurikulum Up-to-date',
      desc: 'Materi praktis yang mengikuti tren industri terbaru.',
    },
    {
      icon: CheckCircle,
      title: 'Belajar Berbasis Proyek',
      desc: 'Bangun portfolio nyata dari tugas dan studi kasus.',
    },
    {
      icon: Shield,
      title: 'Sertifikat Resmi',
      desc: 'Dapatkan sertifikat setelah menyelesaikan kelas.',
    },
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Mengapa EduNusa?</h2>
          <p className="text-slate-600 mt-1">Fitur yang membantu kamu belajar lebih efektif</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((i) => (
            <Item key={i.title} {...i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
