import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, Medal, Target, TrendingUp } from "lucide-react";

import { PageHead, PortalLayout } from "@/components/layout/PortalLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/hasil")({
  head: () => ({
    meta: [
      { title: "Hasil & Sertifikat — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Analisis skor per materi, peringkat nasional, dan unduhan sertifikat peserta ujian CBT 2026.",
      },
      { property: "og:title", content: "Hasil & Sertifikat — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Lihat skor, ranking nasional, dan unduh sertifikat digital Anda.",
      },
    ],
  }),
  component: HasilPage,
});

const SUMMARY = [
  { l: "Skor Akhir", v: "86,5", s: "dari 100", icon: Target, tone: "text-cyan-400" },
  { l: "Peringkat Nasional", v: "#42", s: "dari 12.480 peserta", icon: Medal, tone: "text-amber-400" },
  { l: "Jawaban Benar", v: "68", s: "dari 80 soal", icon: TrendingUp, tone: "text-emerald-400" },
  { l: "Status", v: "Lolos Semifinal", s: "Tahap berikutnya", icon: Award, tone: "text-cyan-400" },
];

const TOPICS = [
  { t: "Dasar Pasar Modal", score: 92 },
  { t: "Analisis Fundamental", score: 88 },
  { t: "Analisis Teknikal", score: 79 },
  { t: "Manajemen Portofolio", score: 84 },
  { t: "Instrumen Derivatif", score: 71 },
  { t: "Regulasi & Etika", score: 95 },
];

function HasilPage() {
  return (
    <PortalLayout>
      <PageHead
        eyebrow="Penyisihan CBT · Sesi 2"
        title="Hasil, Analisis Skor & Sertifikat"
        description="Hasil resmi dirilis panitia. Sertifikat digital tersedia untuk seluruh peserta yang menyelesaikan ujian."
        action={
          <Button size="lg" className="glow-cyan">
            <Download className="size-4" /> Unduh Sertifikat
          </Button>
        }
      />

      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {SUMMARY.map((s) => (
            <div key={s.l} className="card-accent rounded-xl border border-white/10 bg-card p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-wide text-slate-500">{s.l}</p>
                <s.icon className={`size-4 ${s.tone}`} />
              </div>
              <p className="mt-3 font-display text-3xl font-extrabold text-white">{s.v}</p>
              <p className="text-xs text-slate-500">{s.s}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-card p-6 lg:col-span-2">
            <h2 className="text-lg font-bold text-white">Analisis per Materi</h2>
            <p className="mt-1 text-sm text-slate-400">
              Perbandingan penguasaan Anda terhadap rata-rata nasional (74,2).
            </p>
            <div className="mt-6 space-y-5">
              {TOPICS.map((t) => (
                <div key={t.t}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-200">{t.t}</span>
                    <span className="font-semibold text-cyan-400">{t.score}</span>
                  </div>
                  <Progress value={t.score} className="mt-2 h-2 bg-white/10" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="hero-cyber grid-dot rounded-2xl border border-cyan-500/30 p-6 text-center">
              <Award className="mx-auto size-10 text-amber-400" />
              <p className="mt-4 font-display text-lg font-bold text-white">
                Sertifikat Peserta Nasional
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Nomor: IC2026/CERT/000123 · Terverifikasi blockchain-less signature
              </p>
              <Button className="mt-5 w-full glow-cyan">
                <Download className="size-4" /> Unduh PDF
              </Button>
              <Button
                variant="outline"
                className="mt-2 w-full border-white/10 bg-transparent text-slate-200 hover:bg-white/5"
              >
                Verifikasi Keaslian
              </Button>
            </div>

            <div className="rounded-xl border border-white/10 bg-card p-6">
              <p className="text-sm font-semibold text-white">Rekomendasi Belajar</p>
              <ul className="mt-3 space-y-2 text-xs text-slate-400">
                <li>• Perdalam instrumen derivatif (opsi & futures).</li>
                <li>• Latih pembacaan pola candlestick lanjutan.</li>
                <li>• Tinjau ulang studi kasus portofolio multi-aset.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
