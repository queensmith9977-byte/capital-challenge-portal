import { createFileRoute } from "@tanstack/react-router";
import { Building2, CheckCircle2, Download, TrendingUp, Users } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Dashboard Statistik — Admin Console" },
      {
        name: "description",
        content:
          "Ringkasan statistik pendaftaran, partisipasi ujian, dan distribusi nilai Investment Competition 2026.",
      },
      { property: "og:title", content: "Dashboard Statistik — Admin Console" },
      {
        property: "og:description",
        content: "Panel kontrol admin dengan metrik peserta, sesi, dan performa ujian.",
      },
    ],
  }),
  component: AdminDashboardPage,
});

const KPI = [
  { icon: Users, l: "Total Pendaftar", v: "2.418", d: "+186 minggu ini" },
  { icon: CheckCircle2, l: "Sudah Ujian", v: "1.874", d: "77,5% partisipasi" },
  { icon: Building2, l: "Sekolah Terlibat", v: "312", d: "28 provinsi" },
  { icon: TrendingUp, l: "Rata-rata Skor", v: "72,4", d: "+3,1 dari 2025" },
];

const BARS = [
  { l: "0–20", v: 3 },
  { l: "21–40", v: 9 },
  { l: "41–60", v: 24 },
  { l: "61–80", v: 41 },
  { l: "81–100", v: 23 },
];

const PROVINCES = [
  { l: "DKI Jakarta", v: 428 },
  { l: "Jawa Timur", v: 391 },
  { l: "Jawa Barat", v: 356 },
  { l: "Jawa Tengah", v: 289 },
  { l: "Sumatera Utara", v: 174 },
  { l: "Bali", v: 132 },
];

function AdminDashboardPage() {
  const max = Math.max(...PROVINCES.map((p) => p.v));

  return (
    <ConsoleLayout
      role="admin"
      title="Dashboard Statistik"
      subtitle="Ringkasan performa Investment Competition 2026"
      actions={
        <Button
          variant="outline"
          className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
        >
          <Download /> Unduh Laporan
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPI.map((k) => (
          <div key={k.l} className="rounded-xl border border-white/10 bg-card p-5">
            <span className="grid size-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400">
              <k.icon className="size-4" />
            </span>
            <p className="mt-4 font-display text-3xl font-extrabold text-white">{k.v}</p>
            <p className="text-sm font-medium text-slate-300">{k.l}</p>
            <p className="text-xs text-cyan-400">{k.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-card p-6">
          <h2 className="font-display text-lg font-bold text-white">Distribusi Nilai</h2>
          <p className="text-xs text-slate-500">Persentase peserta per rentang skor</p>
          <div className="mt-6 flex h-56 items-end gap-4">
            {BARS.map((b) => (
              <div key={b.l} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-cyan-300">{b.v}%</span>
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-cyan-500/20 to-cyan-500"
                  style={{ height: `${(b.v / 45) * 100}%` }}
                />
                <span className="text-[11px] text-slate-500">{b.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-card p-6">
          <h2 className="font-display text-lg font-bold text-white">Sebaran Provinsi</h2>
          <p className="text-xs text-slate-500">Enam provinsi dengan peserta terbanyak</p>
          <div className="mt-6 space-y-4">
            {PROVINCES.map((p) => (
              <div key={p.l}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{p.l}</span>
                  <span className="font-semibold text-white">{p.v}</span>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-cyan-500"
                    style={{ width: `${(p.v / max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card p-6">
        <h2 className="font-display text-lg font-bold text-white">Status Sesi Hari Ini</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { l: "Sesi 1 · 07:00–08:30", s: "Selesai", c: "text-emerald-400", n: "512 peserta" },
            { l: "Sesi 2 · 09:00–10:30", s: "Berlangsung", c: "text-cyan-400", n: "486 peserta online" },
            { l: "Sesi 3 · 13:00–14:30", s: "Terjadwal", c: "text-slate-400", n: "498 peserta" },
          ].map((s) => (
            <div key={s.l} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">{s.l}</p>
              <p className={`mt-1 text-xs font-semibold ${s.c}`}>{s.s}</p>
              <p className="mt-2 text-xs text-slate-500">{s.n}</p>
            </div>
          ))}
        </div>
      </div>
    </ConsoleLayout>
  );
}
