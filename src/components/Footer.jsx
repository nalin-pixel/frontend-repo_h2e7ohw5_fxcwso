import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="mt-16 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="text-slate-900 font-semibold">EduNusa</div>
          <p className="mt-2">Platform belajar online berbahasa Indonesia dengan fokus pada keterampilan kerja nyata.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-slate-900 font-semibold">Produk</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-slate-900" href="#">Katalog</a></li>
              <li><a className="hover:text-slate-900" href="#">Langganan</a></li>
              <li><a className="hover:text-slate-900" href="#">Sertifikasi</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-900 font-semibold">Perusahaan</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:text-slate-900" href="#">Tentang</a></li>
              <li><a className="hover:text-slate-900" href="#">Karier</a></li>
              <li><a className="hover:text-slate-900" href="#">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-slate-900 font-semibold">Newsletter</div>
          <p className="mt-2">Dapatkan update kelas terbaru langsung ke email kamu.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="Email kamu" className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-200" />
            <button className="px-4 py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Daftar</button>
          </form>
          <p className="mt-3 text-xs">© {new Date().getFullYear()} EduNusa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
