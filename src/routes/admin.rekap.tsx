import { createFileRoute } from "@tanstack/react-router";
import { Download, FileSpreadsheet, Medal, Search } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/rekap")({
  head: () => ({
    meta: [
      { title: "Rekap Nilai, Ranking & Export — Admin Console" },
      {
        name: "description",
        content:
          "Peringkat nasional peserta, rekap nilai per sesi, dan ekspor data hasil ujian ke Excel atau PDF.",
      },
      { property: "og:title", content: "Rekap Nilai, Ranking & Export — Admin Console" },
      {
        property: "og:description",
        content: "Leaderboard dan ekspor hasil Investment Competition 2026.",
      },
    ],
  }),
  component: RekapPage,
});

const RANKS = [
  { r: 1, n: "Nadia Prameswari", s: "SMA Labschool Jakarta", sc: 96.5, t: "68 mnt", st: "Lolos Semifinal" },
  { r: 2, n: "Raka Adiyatma", s: "SMA Negeri 3 Surabaya", sc: 94.0, t: "71 mnt", st: "Lolos Semifinal" },
  { r: 3, n: "Fajar Nugroho", s: "SMA Negeri 5 Semarang", sc: 92.5, t: "74 mnt", st: "Lolos Semifinal" },
  { r: 4, n: "Alya Zahira", s: "SMA Negeri 1 Bandung", sc: 91.0, t: "69 mnt", st: "Lolos Semifinal" },
  { r: 5, n: "Kirana Ayu", s: "SMA Negeri 1 Denpasar", sc: 89.5, t: "77 mnt", st: "Lolos Semifinal" },
  { r: 6, n: "Dimas Prasetyo", s: "SMK Telkom Malang", sc: 87.0, t: "82 mnt", st: "Cadangan" },
  { r: 7, n: "Citra Larasati", s: "SMA Santa Ursula", sc: 85.5, t: "80 mnt", st: "Cadangan" },
  { r: 8, n: "Yoga Pratama", s: "SMA Negeri 2 Medan", sc: 84.0, t: "85 mnt", st: "Cadangan" },
];

function RekapPage() {
  return (
    <ConsoleLayout
      role="admin"
      title="Rekap Nilai, Ranking & Export"
      subtitle="Peringkat nasional babak penyisihan · 1.874 peserta dinilai"
      actions={
        <>
          <Button
            variant="outline"
            className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <FileSpreadsheet /> Export Excel
          </Button>
          <Button className="glow-cyan">
            <Download /> Export PDF
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { l: "Nilai Tertinggi", v: "96,5" },
          { l: "Nilai Rata-rata", v: "72,4" },
          { l: "Nilai Terendah", v: "18,0" },
          { l: "Ambang Semifinal", v: "88,0" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-card p-5">
            <p className="text-sm text-slate-400">{s.l}</p>
            <p className="mt-1 font-display text-3xl font-extrabold text-white">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5">
          <div className="flex items-center gap-2">
            <Medal className="size-4 text-amber-400" />
            <h2 className="font-display text-lg font-bold text-white">Papan Peringkat Nasional</h2>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              placeholder="Cari peserta atau sekolah"
              className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-semibold">Peringkat</th>
                <th className="p-4 font-semibold">Nama</th>
                <th className="p-4 font-semibold">Asal Sekolah</th>
                <th className="p-4 font-semibold">Skor</th>
                <th className="p-4 font-semibold">Waktu</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {RANKS.map((r) => (
                <tr key={r.r} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="p-4">
                    <span
                      className={`grid size-8 place-items-center rounded-lg text-sm font-bold ${
                        r.r <= 3 ? "bg-amber-500/15 text-amber-300" : "bg-white/5 text-slate-400"
                      }`}
                    >
                      {r.r}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-white">{r.n}</td>
                  <td className="p-4 text-slate-300">{r.s}</td>
                  <td className="p-4 font-display text-lg font-bold text-cyan-300">{r.sc}</td>
                  <td className="p-4 text-slate-400">{r.t}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${
                        r.st === "Lolos Semifinal"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-slate-500/30 bg-white/5 text-slate-300"
                      }`}
                    >
                      {r.st}
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
