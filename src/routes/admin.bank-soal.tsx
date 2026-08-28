import { createFileRoute } from "@tanstack/react-router";
import { Filter, Plus, Search, Upload } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/bank-soal")({
  head: () => ({
    meta: [
      { title: "Manajemen Bank Soal — Admin Console" },
      {
        name: "description",
        content:
          "Kelola bank soal ujian pasar modal: tambah, impor, filter kategori, dan atur tingkat kesulitan.",
      },
      { property: "og:title", content: "Manajemen Bank Soal — Admin Console" },
      {
        property: "og:description",
        content: "Repositori soal CBT dengan kategori materi dan kontrol tingkat kesulitan.",
      },
    ],
  }),
  component: BankSoalPage,
});

const CATEGORIES = [
  { l: "Dasar Pasar Modal", n: 412 },
  { l: "Analisis Fundamental", n: 356 },
  { l: "Analisis Teknikal", n: 298 },
  { l: "Manajemen Portofolio", n: 241 },
  { l: "Regulasi & Etika", n: 187 },
];

const QUESTIONS = [
  { id: "SL-1042", q: "Instrumen berikut yang termasuk efek bersifat utang adalah…", c: "Dasar Pasar Modal", d: "Mudah", s: "Aktif" },
  { id: "SL-1043", q: "PBV di bawah 1 umumnya mengindikasikan bahwa saham…", c: "Analisis Fundamental", d: "Sedang", s: "Aktif" },
  { id: "SL-1044", q: "Pola candlestick bullish engulfing terbentuk ketika…", c: "Analisis Teknikal", d: "Sedang", s: "Aktif" },
  { id: "SL-1045", q: "Diversifikasi optimal menurut teori Markowitz tercapai saat…", c: "Manajemen Portofolio", d: "Sulit", s: "Draft" },
  { id: "SL-1046", q: "Sanksi administratif OJK terhadap insider trading berupa…", c: "Regulasi & Etika", d: "Sulit", s: "Aktif" },
  { id: "SL-1047", q: "Hitung capital gain dari pembelian 10 lot saham pada Rp1.250…", c: "Dasar Pasar Modal", d: "Mudah", s: "Arsip" },
];

const DIFF = {
  Mudah: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Sedang: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Sulit: "border-red-500/30 bg-red-500/10 text-red-300",
} as const;

function BankSoalPage() {
  return (
    <ConsoleLayout
      role="admin"
      title="Manajemen Bank Soal"
      subtitle="1.494 soal tersimpan · 1.286 aktif"
      actions={
        <>
          <Button
            variant="outline"
            className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <Upload /> Impor Excel
          </Button>
          <Button className="glow-cyan">
            <Plus /> Tambah Soal
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {CATEGORIES.map((c) => (
          <div key={c.l} className="rounded-xl border border-white/10 bg-card p-4">
            <p className="text-xs text-slate-400">{c.l}</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-white">{c.n}</p>
            <p className="text-[11px] text-cyan-400">soal tersedia</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5">
          <h2 className="font-display text-lg font-bold text-white">Daftar Soal</h2>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
              <Input
                placeholder="Cari soal atau kode"
                className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
              />
            </div>
            <Button
              variant="outline"
              className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
            >
              <Filter /> Filter
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-semibold">Kode</th>
                <th className="p-4 font-semibold">Pertanyaan</th>
                <th className="p-4 font-semibold">Kategori</th>
                <th className="p-4 font-semibold">Kesulitan</th>
                <th className="p-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((q) => (
                <tr key={q.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="p-4 font-mono text-xs text-cyan-300">{q.id}</td>
                  <td className="max-w-md p-4 text-slate-300">{q.q}</td>
                  <td className="p-4 text-slate-400">{q.c}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${DIFF[q.d as keyof typeof DIFF]}`}
                    >
                      {q.d}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">{q.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ConsoleLayout>
  );
}
