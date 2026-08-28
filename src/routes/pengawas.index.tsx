import { createFileRoute } from "@tanstack/react-router";
import { Activity, Camera, RefreshCcw, Send, ShieldAlert, Users } from "lucide-react";

import { ConsoleLayout } from "@/components/layout/ConsoleLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pengawas/")({
  head: () => ({
    meta: [
      { title: "Live Monitoring Ujian — Proctor Room" },
      {
        name: "description",
        content:
          "Pantau peserta CBT secara real-time: status koneksi, aktivitas mencurigakan, dan kontrol sesi ujian.",
      },
      { property: "og:title", content: "Live Monitoring Ujian — Proctor Room" },
      {
        property: "og:description",
        content: "Panel pengawas untuk memantau seluruh peserta ujian secara langsung.",
      },
    ],
  }),
  component: ProctorLivePage,
});

const STATS = [
  { icon: Users, l: "Peserta Online", v: "486", s: "dari 512 terdaftar" },
  { icon: Activity, l: "Rata-rata Progres", v: "43%", s: "≈ 34 soal terjawab" },
  { icon: ShieldAlert, l: "Pelanggaran Aktif", v: "7", s: "butuh tinjauan" },
  { icon: Camera, l: "Webcam Bermasalah", v: "3", s: "peserta terputus" },
];

const PARTICIPANTS = Array.from({ length: 12 }, (_, i) => {
  const names = [
    "Raka Adiyatma",
    "Nadia Prameswari",
    "Bagas Wicaksono",
    "Salsabila Rahma",
    "Dimas Prasetyo",
    "Kirana Ayu",
    "Fajar Nugroho",
    "Alya Zahira",
    "Rendra Mahendra",
    "Citra Larasati",
    "Yoga Pratama",
    "Maura Anindya",
  ];
  const statuses = ["normal", "normal", "warning", "normal", "danger", "normal"] as const;
  return {
    id: `IC26-0${400 + i}`,
    name: names[i],
    progress: 25 + ((i * 7) % 60),
    status: statuses[i % statuses.length],
  };
});

const STATUS_STYLE = {
  normal: { ring: "border-white/10", dot: "bg-emerald-400", label: "Normal" },
  warning: { ring: "border-amber-500/40", dot: "bg-amber-400", label: "Tab keluar 2x" },
  danger: { ring: "border-red-500/50", dot: "bg-red-400", label: "Wajah tak terdeteksi" },
} as const;

function ProctorLivePage() {
  return (
    <ConsoleLayout
      role="proctor"
      title="Live Monitoring Ujian"
      subtitle="Sesi 2 · Penyisihan CBT · 09:00–10:30 WIB"
      actions={
        <>
          <Button
            variant="outline"
            className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <RefreshCcw /> Refresh
          </Button>
          <Button className="glow-cyan">
            <Send /> Broadcast Pesan
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="rounded-xl border border-white/10 bg-card p-5">
            <span className="grid size-9 place-items-center rounded-lg bg-cyan-500/10 text-cyan-400">
              <s.icon className="size-4" />
            </span>
            <p className="mt-4 font-display text-3xl font-extrabold text-white">{s.v}</p>
            <p className="text-sm font-medium text-slate-300">{s.l}</p>
            <p className="text-xs text-slate-500">{s.s}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-lg font-bold text-white">Grid Pengawasan Peserta</h2>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400" /> Normal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-amber-400" /> Peringatan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-400" /> Pelanggaran
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PARTICIPANTS.map((p) => {
            const st = STATUS_STYLE[p.status];
            return (
              <div
                key={p.id}
                className={`overflow-hidden rounded-xl border bg-white/[0.02] ${st.ring}`}
              >
                <div className="grid-dot relative aspect-video place-items-center bg-slate-950/60">
                  <Camera className="absolute inset-0 m-auto size-7 text-slate-700" />
                  <span className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-slate-950/80 px-2 py-1 text-[10px] font-semibold text-slate-300">
                    <span className={`size-1.5 rounded-full ${st.dot}`} /> LIVE
                  </span>
                </div>
                <div className="p-3">
                  <p className="truncate text-sm font-semibold text-white">{p.name}</p>
                  <p className="text-[11px] text-slate-500">{p.id}</p>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-cyan-500"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                  <p className="mt-2 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500">{p.progress}% selesai</span>
                    <span
                      className={
                        p.status === "danger"
                          ? "text-red-400"
                          : p.status === "warning"
                            ? "text-amber-400"
                            : "text-emerald-400"
                      }
                    >
                      {st.label}
                    </span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ConsoleLayout>
  );
}
