import { createFileRoute } from "@tanstack/react-router";
import { CalendarPlus, KeyRound, RefreshCcw } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/jadwal")({
  head: () => ({
    meta: [
      { title: "Jadwal, Sesi & Token — Admin Console" },
      {
        name: "description",
        content:
          "Atur jadwal ujian, kapasitas sesi, dan rilis token akses CBT untuk setiap gelombang peserta.",
      },
      { property: "og:title", content: "Jadwal, Sesi & Token — Admin Console" },
      {
        property: "og:description",
        content: "Manajemen sesi ujian dan token akses peserta Investment Competition 2026.",
      },
    ],
  }),
  component: JadwalPage,
});

const SESSIONS = [
  { n: "Sesi 1", d: "12 Sep 2026", t: "07:00–08:30 WIB", cap: 512, reg: 512, token: "K7QX2M", s: "Selesai" },
  { n: "Sesi 2", d: "12 Sep 2026", t: "09:00–10:30 WIB", cap: 512, reg: 486, token: "R4ZP9C", s: "Berlangsung" },
  { n: "Sesi 3", d: "12 Sep 2026", t: "13:00–14:30 WIB", cap: 512, reg: 498, token: "—", s: "Terjadwal" },
  { n: "Sesi 4", d: "13 Sep 2026", t: "07:00–08:30 WIB", cap: 512, reg: 461, token: "—", s: "Terjadwal" },
  { n: "Sesi 5", d: "13 Sep 2026", t: "09:00–10:30 WIB", cap: 512, reg: 383, token: "—", s: "Terjadwal" },
];

const STATUS = {
  Selesai: "border-slate-500/30 bg-white/5 text-slate-300",
  Berlangsung: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  Terjadwal: "border-amber-500/30 bg-amber-500/10 text-amber-300",
} as const;

function JadwalPage() {
  return (
    <ConsoleLayout
      role="admin"
      title="Jadwal, Sesi & Token"
      subtitle="Kelola gelombang ujian dan rilis token akses"
      actions={
        <Button className="glow-cyan">
          <CalendarPlus /> Tambah Sesi
        </Button>
      }
    >
      <div className="rounded-xl border border-cyan-500/30 bg-card p-6 hero-cyber grid-dot">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Token sesi aktif</p>
            <p className="mt-3 font-display text-5xl font-extrabold tracking-[0.3em] text-white">
              R4ZP9C
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Sesi 2 · berlaku hingga 09:15 WIB · 486 peserta menggunakan token ini
            </p>
          </div>
          <Button
            variant="outline"
            className="border-cyan-500/40 bg-transparent text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200"
          >
            <RefreshCcw /> Generate Ulang
          </Button>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card">
        <div className="flex items-center gap-2 border-b border-white/10 p-5">
          <KeyRound className="size-4 text-cyan-400" />
          <h2 className="font-display text-lg font-bold text-white">Daftar Sesi Ujian</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-semibold">Sesi</th>
                <th className="p-4 font-semibold">Tanggal</th>
                <th className="p-4 font-semibold">Waktu</th>
                <th className="p-4 font-semibold">Kapasitas</th>
                <th className="p-4 font-semibold">Token</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {SESSIONS.map((s) => (
                <tr key={s.n} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="p-4 font-semibold text-white">{s.n}</td>
                  <td className="p-4 text-slate-300">{s.d}</td>
                  <td className="p-4 text-slate-300">{s.t}</td>
                  <td className="p-4">
                    <p className="text-slate-300">
                      {s.reg} / {s.cap}
                    </p>
                    <div className="mt-1.5 h-1.5 w-28 rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-cyan-500"
                        style={{ width: `${(s.reg / s.cap) * 100}%` }}
                      />
                    </div>
                  </td>
                  <td className="p-4 font-mono text-cyan-300">{s.token}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${STATUS[s.s as keyof typeof STATUS]}`}
                    >
                      {s.s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ConsoleLayout>
  );
}
