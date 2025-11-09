import React from 'react';
import Spline from '@splinetool/react-spline';

const ThreeDScene = () => {
  // Menggunakan adegan Spline publik contoh agar langsung tampil
  // Anda bisa mengganti URL ini dengan scene Spline Anda sendiri
  return (
    <div className="relative h-[420px] w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
      <Spline
        scene="https://prod.spline.design/6Z7g0WcKsuuh5jPc/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      {/* Overlay gradien tipis agar tetap kontras dengan teks di atas jika diperlukan */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10" />
    </div>
  );
};

export default ThreeDScene;
