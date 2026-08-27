import { Link, createFileRoute } from "@tanstack/react-router";
import { Camera, CheckCircle2, KeyRound, Signal, Timer, Wifi } from "lucide-react";
import { useEffect, useState } from "react";

import { PageHead, PortalLayout } from "@/components/layout/PortalLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/lobby")({
  head: () => ({
    meta: [
      { title: "Ruang Tunggu Ujian — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Cek perangkat, masukkan token sesi, dan tunggu hitung mundur sebelum ujian CBT dimulai.",
      },
      { property: "og:title", content: "Ruang Tunggu Ujian — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Device check dan validasi token sesi sebelum memasuki lembar ujian CBT.",
      },
    ],
  }),
  component: LobbyPage,
});

const CHECKS = [
  { icon: Wifi, l: "Koneksi Internet", v: "Stabil · 42 Mbps", ok: true },
  { icon: Camera, l: "Webcam", v: "Terdeteksi · HD 720p", ok: true },
  { icon: Signal, l: "Latensi Server", v: "38 ms", ok: true },
  { icon: Timer, l: "Sinkronisasi Waktu", v: "WIB · akurat", ok: true },
];

function useCountdown(initial: number) {
  const [left, setLeft] = useState(initial);
  useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  return left;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function LobbyPage() {
  const left = useCountdown(614);
  const [token, setToken] = useState("");
  const valid = token.trim().length >= 6;

  return (
    <PortalLayout>
      <PageHead
        eyebrow="Sesi 2 · Penyisihan CBT"
        title="Ruang Tunggu Ujian"
        description="Tetap berada di halaman ini. Sistem akan membuka akses ujian secara otomatis."
      />

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <div className="hero-cyber grid-dot rounded-2xl border border-cyan-500/30 p-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Ujian dimulai dalam</p>
            <p className="mt-4 font-display text-6xl font-extrabold tabular-nums text-white sm:text-7xl">
              {pad(Math.floor(left / 60))}
              <span className="text-cyan-400">:</span>
              {pad(left % 60)}
            </p>
            <p className="mt-4 text-sm text-slate-400">
              Jadwal resmi 09:00–10:30 WIB · 80 soal · 90 menit
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-card p-6">
            <h2 className="text-lg font-bold text-white">Pemeriksaan Perangkat</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {CHECKS.map((c) => (
                <div
                  key={c.l}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <c.icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">{c.l}</p>
                    <p className="truncate text-xs text-slate-400">{c.v}</p>
                  </div>
                  {c.ok && <CheckCircle2 className="ml-auto size-4 shrink-0 text-emerald-400" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-white/10 bg-card p-6">
            <div className="flex items-center gap-2">
              <KeyRound className="size-4 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Token Sesi</h2>
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Token dirilis pengawas 10 menit sebelum ujian dimulai.
            </p>
            <Input
              value={token}
              onChange={(e) => setToken(e.target.value.toUpperCase())}
              maxLength={8}
              placeholder="XXXXXX"
              className="mt-4 border-white/10 bg-white/5 text-center font-display text-2xl font-bold tracking-[0.4em] text-white placeholder:text-slate-700"
            />
            <Button asChild size="lg" disabled={!valid} className="mt-4 w-full glow-cyan">
              <Link to="/ujian">Mulai Ujian</Link>
            </Button>
            <p className="mt-3 text-center text-xs text-slate-500">
              Tombol aktif setelah token 6 karakter dimasukkan.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-card p-6">
            <p className="text-sm font-semibold text-white">Pengingat Pengawas</p>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li>• Duduk menghadap cahaya, wajah terlihat jelas di webcam.</li>
              <li>• Tutup seluruh aplikasi selain browser ujian.</li>
              <li>• Jangan me-refresh halaman setelah ujian dimulai.</li>
              <li>• Laporkan kendala via tombol bantuan di lembar ujian.</li>
            </ul>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
