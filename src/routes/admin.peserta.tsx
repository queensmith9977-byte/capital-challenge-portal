import { createFileRoute } from "@tanstack/react-router";
import { Search, UserCog, UserPlus } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/admin/peserta")({
  head: () => ({
    meta: [
      { title: "Data Peserta & Kontrol Akun — Admin Console" },
      {
        name: "description",
        content:
          "Kelola data peserta, verifikasi berkas, reset password, dan buka blokir sesi ujian peserta.",
      },
      { property: "og:title", content: "Data Peserta & Kontrol Akun — Admin Console" },
      {
        property: "og:description",
        content: "Administrasi akun peserta Investment Competition 2026.",
      },
    ],
  }),
  component: PesertaPage,
});

const ROWS = [
  { id: "IC26-0451", n: "Raka Adiyatma", s: "SMA Negeri 3 Surabaya", p: "Jawa Timur", v: "Terverifikasi", a: "Aktif" },
  { id: "IC26-0433", n: "Nadia Prameswari", s: "SMA Labschool Jakarta", p: "DKI Jakarta", v: "Terverifikasi", a: "Aktif" },
  { id: "IC26-0407", n: "Bagas Wicaksono", s: "SMK Telkom Malang", p: "Jawa Timur", v: "Terverifikasi", a: "Dibekukan" },
  { id: "IC26-0412", n: "Kirana Ayu", s: "SMA Negeri 1 Denpasar", p: "Bali", v: "Menunggu", a: "Aktif" },
  { id: "IC26-0419", n: "Fajar Nugroho", s: "SMA Negeri 5 Semarang", p: "Jawa Tengah", v: "Terverifikasi", a: "Aktif" },
  { id: "IC26-0425", n: "Citra Larasati", s: "SMA Santa Ursula", p: "DKI Jakarta", v: "Ditolak", a: "Nonaktif" },
];

const VER = {
  Terverifikasi: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Menunggu: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Ditolak: "border-red-500/30 bg-red-500/10 text-red-300",
} as const;

function PesertaPage() {
  return (
    <ConsoleLayout
      role="admin"
      title="Data Peserta & Kontrol Akun"
      subtitle="2.418 akun terdaftar · 186 menunggu verifikasi"
      actions={
        <Button className="glow-cyan">
          <UserPlus /> Tambah Peserta
        </Button>
      }
    >
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { l: "Terverifikasi", v: "2.184" },
          { l: "Menunggu", v: "186" },
          { l: "Ditolak", v: "48" },
          { l: "Akun Dibekukan", v: "12" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-card p-5">
            <p className="text-sm text-slate-400">{s.l}</p>
            <p className="mt-1 font-display text-2xl font-extrabold text-white">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 p-5">
          <div className="flex items-center gap-2">
            <UserCog className="size-4 text-cyan-400" />
            <h2 className="font-display text-lg font-bold text-white">Daftar Peserta</h2>
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
            <Input
              placeholder="Cari nama, nomor, atau sekolah"
              className="border-white/10 bg-white/5 pl-9 text-white placeholder:text-slate-600"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[960px] text-sm">
            <thead>
              <tr className="border-b border-white/10 text-left text-xs uppercase tracking-wider text-slate-500">
                <th className="p-4 font-semibold">No. Peserta</th>
                <th className="p-4 font-semibold">Nama</th>
                <th className="p-4 font-semibold">Asal Sekolah</th>
                <th className="p-4 font-semibold">Provinsi</th>
                <th className="p-4 font-semibold">Verifikasi</th>
                <th className="p-4 font-semibold">Akun</th>
                <th className="p-4 font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.id} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03]">
                  <td className="p-4 font-mono text-xs text-cyan-300">{r.id}</td>
                  <td className="p-4 font-medium text-white">{r.n}</td>
                  <td className="p-4 text-slate-300">{r.s}</td>
                  <td className="p-4 text-slate-400">{r.p}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${VER[r.v as keyof typeof VER]}`}
                    >
                      {r.v}
                    </span>
                  </td>
                  <td
                    className={`p-4 text-xs font-semibold ${
                      r.a === "Aktif"
                        ? "text-emerald-400"
                        : r.a === "Dibekukan"
                          ? "text-amber-400"
                          : "text-slate-500"
                    }`}
                  >
                    {r.a}
                  </td>
                  <td className="p-4">
                    <button className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                      Reset Password
                    </button>
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
