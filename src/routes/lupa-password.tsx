import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, KeyRound, Mail, ShieldQuestion } from "lucide-react";
import { useState } from "react";

import { Brand } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/lupa-password")({
  head: () => ({
    meta: [
      { title: "Reset Akun Peserta — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Pulihkan akses akun ujian CBT Investment Competition 2026 melalui email terdaftar peserta.",
      },
      { property: "og:title", content: "Reset Akun Peserta — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Kirim tautan pemulihan kata sandi ke email peserta terdaftar.",
      },
    ],
  }),
  component: ResetPage,
});

const STEPS = [
  { n: 1, t: "Masukkan email", d: "Gunakan email yang terdaftar saat registrasi." },
  { n: 2, t: "Cek kotak masuk", d: "Tautan reset berlaku 15 menit sejak dikirim." },
  { n: 3, t: "Buat sandi baru", d: "Minimal 8 karakter, kombinasi huruf & angka." },
];

function ResetPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="hero-cyber grid-dot flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="mb-8">
        <Brand />
      </div>

      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-card p-6 shadow-[0_24px_60px_-30px_rgba(6,182,212,0.5)] sm:p-8">
        <span className="grid size-11 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
          <KeyRound className="size-5" />
        </span>
        <h1 className="mt-5 text-2xl font-extrabold text-white">Reset Akun Peserta</h1>
        <p className="mt-2 text-sm text-slate-400">
          Kami akan mengirim tautan pemulihan ke email resmi yang terdaftar pada data peserta.
        </p>

        {sent ? (
          <div className="mt-7 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
            <p className="font-display text-sm font-bold text-emerald-400">
              Tautan pemulihan terkirim
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Periksa kotak masuk maupun folder spam Anda. Belum menerima email?{" "}
              <button
                onClick={() => setSent(false)}
                className="font-medium text-cyan-400 hover:underline"
              >
                Kirim ulang
              </button>
            </p>
          </div>
        ) : (
          <form
            className="mt-7 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email Terdaftar
              </Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="nama@kampus.ac.id"
                  className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
                />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full glow-cyan">
              Kirim Tautan Pemulihan
            </Button>
          </form>
        )}

        <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-3">
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-400">
                {s.n}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{s.t}</p>
                <p className="text-xs text-slate-500">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-slate-500">
          <ShieldQuestion className="mt-0.5 size-4 shrink-0 text-slate-500" />
          Email tidak terdaftar? Hubungi panitia di helpdesk@investcomp2026.id dengan melampirkan
          bukti registrasi.
        </p>
      </div>

      <Link to="/login" className="mt-6 flex items-center gap-2 text-xs text-slate-500 hover:text-cyan-400">
        <ArrowLeft className="size-4" /> Kembali ke halaman login
      </Link>
    </div>
  );
}
