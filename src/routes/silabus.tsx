import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, PieChart, Scale, TrendingUp, Landmark, LineChart } from "lucide-react";

import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Route = createFileRoute("/silabus")({
  head: () => ({
    meta: [
      { title: "Silabus & Kisi-Kisi Ujian — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Rincian materi ujian pasar modal: analisis fundamental, teknikal, makroekonomi, regulasi OJK/BEI, dan manajemen portofolio saham.",
      },
      { property: "og:title", content: "Silabus & Kisi-Kisi Ujian CBT 2026" },
      {
        property: "og:description",
        content: "Komposisi soal, bobot nilai, dan buku panduan teknis kompetisi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SilabusPage,
});

const MATERI = [
  {
    icon: PieChart,
    title: "Analisis Fundamental",
    desc: "Laporan keuangan, rasio valuasi (PER, PBV, ROE), analisis industri, dan intrinsic value.",
  },
  {
    icon: LineChart,
    title: "Analisis Teknikal",
    desc: "Pola candlestick, support–resistance, indikator MA, RSI, MACD, dan volume profile.",
  },
  {
    icon: TrendingUp,
    title: "Makroekonomi",
    desc: "Suku bunga acuan, inflasi, nilai tukar, siklus ekonomi, dan dampaknya pada IHSG.",
  },
  {
    icon: Scale,
    title: "Regulasi OJK & BEI",
    desc: "UU Pasar Modal, keterbukaan informasi, auto rejection, papan pencatatan, dan sanksi bursa.",
  },
  {
    icon: Landmark,
    title: "Instrumen & Produk",
    desc: "Saham, obligasi, reksa dana, ETF, derivatif, dan efek syariah.",
  },
  {
    icon: BookOpen,
    title: "Manajemen Portofolio",
    desc: "Diversifikasi, risk–return, Sharpe ratio, rebalancing, dan money management.",
  },
];

const KOMPOSISI = [
  { materi: "Analisis Fundamental", jumlah: 12, bobot: "24%", level: "Sedang – Sulit" },
  { materi: "Analisis Teknikal", jumlah: 10, bobot: "20%", level: "Sedang" },
  { materi: "Makroekonomi", jumlah: 8, bobot: "16%", level: "Sedang" },
  { materi: "Regulasi OJK & BEI", jumlah: 8, bobot: "16%", level: "Mudah – Sedang" },
  { materi: "Instrumen & Produk Investasi", jumlah: 7, bobot: "14%", level: "Mudah" },
  { materi: "Manajemen Portofolio", jumlah: 5, bobot: "10%", level: "Sulit" },
];

function SilabusPage() {
  return (
    <PublicLayout>
      <section className="hero-cyber grid-dot">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
            Panduan Akademik
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
            Silabus &amp; Kisi-Kisi Ujian CBT
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-400">
            50 butir soal pilihan ganda (A–E) dikerjakan dalam 90 menit. Tidak ada pengurangan nilai
            untuk jawaban salah; skor akhir dihitung dari bobot tiap sub-tes.
          </p>
          <Button variant="gold" size="xl" className="mt-8">
            <Download /> Buku Panduan Teknis (PDF)
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-extrabold text-white">Materi Ujian</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MATERI.map((m) => (
            <Card key={m.title} className="card-accent border-white/10 bg-card">
              <CardContent className="p-6">
                <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-cyan-400">
                  <m.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-card py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-white">Komposisi Soal &amp; Bobot Nilai</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 bg-white/5 hover:bg-white/5">
                  <TableHead className="text-white">Sub-Tes Materi</TableHead>
                  <TableHead className="text-white">Jumlah Soal</TableHead>
                  <TableHead className="text-white">Bobot Nilai</TableHead>
                  <TableHead className="text-white">Tingkat Kesulitan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {KOMPOSISI.map((k) => (
                  <TableRow key={k.materi} className="border-white/10">
                    <TableCell className="font-medium text-slate-200">{k.materi}</TableCell>
                    <TableCell className="text-slate-400">{k.jumlah} soal</TableCell>
                    <TableCell className="font-semibold text-cyan-400">{k.bobot}</TableCell>
                    <TableCell className="text-slate-400">{k.level}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="border-t border-white/10 bg-background font-semibold">
                  <TableCell className="text-white">Total</TableCell>
                  <TableCell className="text-slate-200">50 soal</TableCell>
                  <TableCell className="text-cyan-400">100%</TableCell>
                  <TableCell className="text-slate-400">90 menit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
