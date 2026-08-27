import { Link, createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, LockKeyhole, ShieldCheck, TrendingUp, User } from "lucide-react";
import { useState } from "react";

import { Brand } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login Peserta — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Masuk ke portal ujian CBT Investment Competition 2026 menggunakan nomor peserta dan kata sandi resmi.",
      },
      { property: "og:title", content: "Login Peserta — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Akses ruang ujian CBT nasional pasar modal dengan akun peserta Anda.",
      },
    ],
  }),
  component: LoginPage,
});

const HIGHLIGHTS = [
  "Enkripsi sesi ujian end-to-end",
  "Anti-cheat & proctoring realtime",
  "Auto-save jawaban tiap 5 detik",
];

function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <aside className="hero-cyber grid-dot relative hidden flex-col justify-between p-10 lg:flex">
        <Brand />
        <div>
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
            Portal Ujian Nasional
          </span>
          <h2 className="mt-5 max-w-md text-4xl font-extrabold leading-tight text-white">
            Uji kemampuanmu di <span className="text-gradient-cyber">pasar modal</span> Indonesia.
          </h2>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Lebih dari 12.400 peserta dari 480 institusi bersaing di Kompetisi Pasar Modal &
            Investasi Nasional 2026.
          </p>
          <ul className="mt-8 space-y-3">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-slate-300">
                <ShieldCheck className="size-4 text-cyan-400" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-slate-600">
          © 2026 Panitia Investment Competition. Seluruh hak cipta dilindungi.
        </p>
      </aside>

      <main className="flex items-center justify-center bg-background px-4 py-12 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Brand />
          </div>
          <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-[0_24px_60px_-30px_rgba(6,182,212,0.5)] sm:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
              <TrendingUp className="size-5" />
            </span>
            <h1 className="mt-5 text-2xl font-extrabold text-white">Masuk ke Portal Ujian</h1>
            <p className="mt-2 text-sm text-slate-400">
              Gunakan nomor peserta dan kata sandi yang dikirim ke email terdaftar.
            </p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="peserta" className="text-slate-300">
                  Nomor Peserta / Email
                </Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                  <Input
                    id="peserta"
                    placeholder="IC2026-000123"
                    className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sandi" className="text-slate-300">
                  Kata Sandi
                </Label>
                <div className="relative">
                  <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                  <Input
                    id="sandi"
                    type={show ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-white/10 bg-white/5 pl-9 pr-10 text-white placeholder:text-slate-600"
                  />
                  <button
                    type="button"
                    aria-label={show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                    onClick={() => setShow((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400"
                  >
                    {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-400">
                  <Checkbox id="ingat" className="border-white/20" />
                  <span>Ingat saya</span>
                </label>
                <Link to="/lupa-password" className="font-medium text-cyan-400 hover:underline">
                  Lupa kata sandi?
                </Link>
              </div>

              <Button type="submit" size="lg" className="w-full glow-cyan">
                Masuk Sekarang
              </Button>
            </form>

            <p className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-500">
              Belum menerima akun? Hubungi koordinator institusi Anda atau panitia di{" "}
              <span className="text-cyan-400">helpdesk@investcomp2026.id</span>.
            </p>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            <Link to="/" className="hover:text-cyan-400">
              ← Kembali ke situs publik
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
