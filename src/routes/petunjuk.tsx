import { Link, createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Ban, Laptop, ListChecks, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { PageHead, PortalLayout } from "@/components/layout/PortalLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/petunjuk")({
  head: () => ({
    meta: [
      { title: "Petunjuk & Tata Tertib Ujian — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Aturan pelaksanaan, spesifikasi perangkat, dan larangan selama ujian CBT Investment Competition 2026.",
      },
      { property: "og:title", content: "Petunjuk & Tata Tertib Ujian" },
      {
        property: "og:description",
        content: "Baca aturan resmi ujian CBT sebelum memasuki ruang ujian.",
      },
    ],
  }),
  component: PetunjukPage,
});

const SPECS = [
  "Laptop/PC dengan browser Chrome/Edge versi terbaru",
  "Koneksi internet stabil minimal 5 Mbps",
  "Webcam aktif selama ujian berlangsung",
  "Daya baterai penuh atau tersambung listrik",
];

const BANS = [
  "Membuka tab/aplikasi lain selama ujian",
  "Menggunakan alat komunikasi apa pun",
  "Merekam atau menyebarkan soal ujian",
  "Digantikan orang lain (perjokian)",
];

const RULES = [
  {
    q: "Pelaksanaan & durasi",
    a: "Ujian penyisihan berlangsung 90 menit dengan 80 soal pilihan ganda. Timer berjalan otomatis sejak tombol Mulai Ujian ditekan dan tidak dapat dijeda.",
  },
  {
    q: "Sistem penilaian",
    a: "Jawaban benar +2, salah -0,5, dan kosong 0. Nilai akhir dinormalisasi ke skala 100 dengan pembobotan tingkat kesulitan soal.",
  },
  {
    q: "Auto-save & koneksi terputus",
    a: "Jawaban tersimpan otomatis setiap 5 detik. Jika koneksi terputus, login kembali dalam 10 menit dan ujian dilanjutkan dari sisa waktu terakhir.",
  },
  {
    q: "Sanksi pelanggaran",
    a: "Tiga kali peringatan pindah tab menyebabkan sesi dikunci otomatis. Pelanggaran berat berujung diskualifikasi tanpa pengembalian biaya.",
  },
];

function PetunjukPage() {
  const [agree, setAgree] = useState(false);

  return (
    <PortalLayout>
      <PageHead
        eyebrow="Wajib Dibaca"
        title="Petunjuk & Tata Tertib Ujian"
        description="Peserta dianggap menyetujui seluruh aturan berikut saat memasuki ruang ujian."
      />

      <div className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-5">
          <div className="flex gap-3">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-display font-bold text-amber-300">Perhatian penting</p>
              <p className="mt-1 text-sm text-slate-300">
                Sistem proctoring merekam aktivitas layar dan perpindahan tab. Pastikan seluruh
                aplikasi lain ditutup sebelum ujian dimulai.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-card p-6">
            <div className="flex items-center gap-2">
              <Laptop className="size-4 text-cyan-400" />
              <h2 className="text-lg font-bold text-white">Spesifikasi Perangkat</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {SPECS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-card p-6">
            <div className="flex items-center gap-2">
              <Ban className="size-4 text-rose-400" />
              <h2 className="text-lg font-bold text-white">Larangan Selama Ujian</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {BANS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                  <Ban className="mt-0.5 size-4 shrink-0 text-rose-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-card p-6">
          <div className="flex items-center gap-2">
            <ListChecks className="size-4 text-cyan-400" />
            <h2 className="text-lg font-bold text-white">Aturan Rinci</h2>
          </div>
          <Accordion type="single" collapsible className="mt-4">
            {RULES.map((r) => (
              <AccordionItem key={r.q} value={r.q} className="border-white/10">
                <AccordionTrigger className="text-left text-sm font-semibold text-white hover:text-cyan-400">
                  {r.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-400">{r.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <label className="flex items-start gap-3 text-sm text-slate-300">
            <Checkbox
              checked={agree}
              onCheckedChange={(v) => setAgree(v === true)}
              className="mt-0.5 border-white/20"
            />
            Saya telah membaca dan menyetujui seluruh tata tertib ujian CBT Investment Competition
            2026.
          </label>
          <Button asChild size="lg" disabled={!agree} className="glow-cyan shrink-0">
            <Link to="/lobby">
              Lanjut ke Ruang Tunggu <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PortalLayout>
  );
}
