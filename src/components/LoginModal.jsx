import React, { useState } from 'react';
import { X, Mail, Lock, LogIn } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-300 bg-white/80 pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-sky-200"
      required
    />
  </div>
);

const LoginModal = ({ open, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulasi login - diintegrasikan ke backend nanti
    setTimeout(() => {
      setLoading(false);
      onSuccess?.({ email });
      onClose?.();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md mx-4 rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
        <button
          aria-label="Tutup"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-500 hover:bg-slate-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6">
          <div className="mb-4 text-center">
            <div className="mx-auto mb-2 h-10 w-10 grid place-content-center rounded-xl bg-sky-100 text-sky-700">
              <LogIn className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Masuk ke EduNusa</h3>
            <p className="text-sm text-slate-500">Akses kemajuan belajar dan sertifikatmu</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              icon={Mail}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-slate-900 text-white py-2.5 text-sm font-medium hover:bg-slate-800 disabled:opacity-60"
            >
              {loading ? 'Memproses…' : 'Masuk'}
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-slate-500">
            Dengan masuk, kamu menyetujui Ketentuan Layanan dan Kebijakan Privasi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
