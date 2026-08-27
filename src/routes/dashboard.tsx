import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BellRing,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  FileText,
  Timer,
  Trophy,
} from "lucide-react";

import { PageHead, PortalLayout } from "@/components/layout/PortalLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard Peserta — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Pantau status ujian, jadwal sesi, kelengkapan berkas, dan pengumuman terbaru peserta CBT 2026.",
      },
      { property: "og:title", content: "Dashboard Peserta — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Ringkasan status ujian dan jadwal sesi peserta kompetisi pasar modal nasional.",
      },
    ],
  }),
  component: DashboardPage,
});

const STATS = [
  { label: "Status Peserta", value: "Terverifikasi", icon: CheckCircle2, tone: "text-emerald-400" },
  { label: "Sesi Ujian", value: "Sesi 2 · 09:00 WIB", icon: CalendarClock, tone: "text-cyan-400" },
  { label: "Tahap Saat Ini", value: "Penyisihan CBT", icon: Trophy, tone: "text-amber-400" },
  { label: "Sisa Waktu Mulai", value: "01 : 24 : 36", icon: Timer, tone: "text-rose-400" },
];

const CHECKLIST = [
  { t: "Verifikasi data diri", done: true },
  { t: "Unggah pas foto & kartu identitas", done: true },
  { t: "Membaca tata tertib ujian", done: true },
  { t: "Uji coba perangkat (device check)", done: false },
  { t: "Masuk ruang tunggu 15 menit sebelum ujian", done: false },
];

const ANNOUNCEMENTS = [
  {
    d: "26 Agu 2026",
    t: "Token sesi 2 dirilis 10 menit sebelum ujian",
    s: "Token akan tampil otomatis pada halaman Ruang Tunggu.",
  },
  {
    d: "24 Agu 2026",
    t: "Simulasi CBT nasional dibuka",
    s: "Gunakan akun yang sama untuk mencoba antarmuka ujian.",
  },
  {
    d: "20 Agu 2026",
    t: "Pembaruan kisi-kisi materi derivatif",
    s: "Silakan tinjau kembali halaman Silabus & Kisi-Kisi.",
  },
];

function DashboardPage() {
  return (
    <PortalLayout>
      <PageHead
        eyebrow="Portal Peserta"
        title="Halo, Raka Adiyatma 👋"
        description="Nomor Peserta IC2026-000123 · Universitas Indonesia · Kategori Mahasiswa"
        action={
          <Button asChild size="lg" className="glow-cyan">
            <Link to="/lobby">
              Masuk Ruang Tunggu <ArrowRight className="size-4" />
            </Link>
          </Button>
        }
      />

      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card-accent rounded-xl border border-white/10 bg-card p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-slate-500">{s.label}</p>
                <s.icon className={`size-4 ${s.tone}`} />
              </div>
              <p className="mt-3 font-display text-lg font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-card p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Kesiapan Ujian</h2>
              <span className="text-sm font-semibold text-cyan-400">60%</span>
            </div>
            <Progress value={60} className="mt-4 h-2 bg-white/10" />
            <ul className="mt-6 space-y-3">
              {CHECKLIST.map((c) => (
                <li
                  key={c.t}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                >
                  {c.done ? (
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                  ) : (
                    <CircleDot className="size-4 shrink-0 text-slate-500" />
                  )}
                  <span
                    className={`text-sm ${c.done ? "text-slate-400 line-through" : "text-slate-200"}`}
                  >
                    {c.t}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild variant="outline" className="border-white/10 bg-transparent text-slate-200 hover:bg-white/5">
                <Link to="/petunjuk">
                  <FileText className="size-4" /> Baca Tata Tertib
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white/10 bg-transparent text-slate-200 hover:bg-white/5">
                <Link to="/profil">Lihat Kartu Peserta</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-card p-6">
            <div className="flex items-center gap-2">
              <BellRing className="size-4 text-amber-400" />
              <h2 className="text-lg font-bold text-white">Pengumuman</h2>
            </div>
            <div className="mt-5 space-y-4">
              {ANNOUNCEMENTS.map((a) => (
                <div key={a.t} className="border-l-2 border-cyan-500/40 pl-4">
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">{a.d}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{a.t}</p>
                  <p className="mt-1 text-xs text-slate-400">{a.s}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" className="mt-5 w-full text-cyan-400 hover:bg-white/5">
              <Link to="/berita">Lihat semua berita</Link>
            </Button>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
