import React from 'react';
import { BookOpen, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <BookOpen className="w-6 h-6 text-sky-600" />
          EduNusa
        </a>
        <div className="hidden md:flex items-center gap-3">
          <a href="#courses" className="px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Kelas</a>
          <a href="#benefits" className="px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Manfaat</a>
          <a href="#about" className="px-3 py-2 rounded-md hover:bg-slate-100 text-sm font-medium">Tentang</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 text-sm">
            <Search className="w-4 h-4" />
            Cari
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium">
            <User className="w-4 h-4" />
            Masuk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
