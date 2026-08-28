import { createFileRoute } from "@tanstack/react-router";
import { Download, Search, ShieldAlert } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/pengawas/log")({
  head: () => ({
    meta: [
      { title: "Log Aktivitas & Pelanggaran — Proctor Room" },
      {
        name: "description",
        content:
          "Riwayat lengkap aktivitas peserta, pelanggaran tab-switch, dan tindakan pengawas selama ujian CBT.",
      },
      { property: "og:title", content: "Log Aktivitas & Pelanggaran — Proctor Room" },
      {
        property: "og:description",
        content: "Audit trail pengawasan ujian dengan tingkat keparahan dan status tindak lanjut.",
      },
    ],
  }),
  component: ProctorLogPage,
});

const LOGS = [
  { t: "09:42:11", id: "IC26-0451", n: "Raka Adiyatma", e: "Berpindah tab browser", s: "Sedang", a: "Peringatan dikirim" },
  { t: "09:40:58", id: "IC26-0408", n: "Dimas Prasetyo", e: "Wajah tidak terdeteksi 45 detik", s: "Berat", a: "Menunggu tinjauan" },
  { t: "09:38:02", id: "IC26-0412", n: "Kirana Ayu", e: "Koneksi terputus 12 detik", s: "Ringan", a: "Pulih otomatis" },
  { t: "09:35:47", id: "IC26-0433", n: "Nadia Prameswari", e: "Percobaan copy-paste", s: "Sedang", a: "Diblokir sistem" },
  { t: "09:31:20", id: "IC26-0407", n: "Bagas Wicaksono", e: "Terdeteksi dua wajah di kamera", s: "Berat", a: "Sesi dibekukan" },
  { t: "09:28:14", id: "IC26-0460", n: "Alya Zahira", e: "Keluar dari mode layar penuh", s: "Ringan", a: "Peringatan dikirim" },
  { t: "09:22:39", id: "IC26-0419", n: "Fajar Nugroho", e: "Login dari perangkat berbeda", s: "Berat", a: "Diverifikasi pengawas" },
  { t: "09:15:03", id: "IC26-0425", n: "Citra Larasati", e: "Refresh halaman ujian", s: "Ringan", a: "Sesi dipulihkan" },
];

const SEV = {
  Ringan: "border-slate-500/30 bg-white/5 text-slate-300",
  Sedang: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Berat: "border-red-500/30 bg-red-500/10 text-red-300",
} as const;

function ProctorLogPage() {
  return (
    <ConsoleLayout
      role="proctor"
      title="Log Aktivitas & Pelanggaran"
      subtitle="Audit trail seluruh kejadian pada sesi ujian berjalan"
      actions={
        <Button
          variant="outline"
          className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
        >
          <Download /> Export CSV
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { l: "Pelanggaran Ringan", v: "24", c: "text-slate-200" },
          { l: "Pelanggaran Sedang", v: "9", c: "text-amber-400" },
          { l: "Pelanggaran Berat", v: "3", c: "text-red-400" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-card p-5">
            <p className="text-sm text-slate-400">{s.l}</p>
            <p className={`mt-1 font-display text-3xl font-extrabold ${s.c}`}>{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5">
          <div className="flex items-center gap-2">
            <ShieldAlert className="size-4 text-cyan-400" />
            <h2 className="font-display text-lg font-bold text-white">Riwayat Kejadian</h2>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              placeholder="Cari nama atau nomor peserta"
              className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-semibold">Waktu</th>
                <th className="p-4 font-semibold">Peserta</th>
                <th className="p-4 font-semibold">Kejadian</th>
                <th className="p-4 font-semibold">Keparahan</th>
                <th className="p-4 font-semibold">Tindakan</th>
              </tr>
            </thead>
            <tbody>
              {LOGS.map((l) => (
                <tr key={l.t} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="p-4 font-mono text-xs text-cyan-300">{l.t}</td>
                  <td className="p-4">
                    <p className="font-medium text-white">{l.n}</p>
                    <p className="text-xs text-slate-500">{l.id}</p>
                  </td>
                  <td className="p-4 text-slate-300">{l.e}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${SEV[l.s as keyof typeof SEV]}`}
                    >
                      {l.s}
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">{l.a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ConsoleLayout>
  );
}
