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
      <section className="hero-teal grid-noise">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/80">
            Panduan Akademik
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold text-primary-foreground sm:text-5xl">
            Silabus &amp; Kisi-Kisi Ujian CBT
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-primary-foreground/75">
            50 butir soal pilihan ganda (A–E) dikerjakan dalam 90 menit. Tidak ada pengurangan nilai
            untuk jawaban salah; skor akhir dihitung dari bobot tiap sub-tes.
          </p>
          <Button variant="gold" size="xl" className="mt-8">
            <Download /> Buku Panduan Teknis (PDF)
          </Button>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-extrabold text-teal-deepest">Materi Ujian</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MATERI.map((m) => (
            <Card key={m.title} className="card-accent shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <span className="grid size-10 place-items-center rounded-lg bg-secondary text-teal-deep">
                  <m.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-teal-deepest">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-extrabold text-teal-deepest">Komposisi Soal &amp; Bobot Nilai</h2>
          <div className="mt-6 overflow-hidden rounded-xl border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary hover:bg-secondary">
                  <TableHead className="text-teal-deepest">Sub-Tes Materi</TableHead>
                  <TableHead className="text-teal-deepest">Jumlah Soal</TableHead>
                  <TableHead className="text-teal-deepest">Bobot Nilai</TableHead>
                  <TableHead className="text-teal-deepest">Tingkat Kesulitan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {KOMPOSISI.map((k) => (
                  <TableRow key={k.materi}>
                    <TableCell className="font-medium text-foreground">{k.materi}</TableCell>
                    <TableCell>{k.jumlah} soal</TableCell>
                    <TableCell className="font-semibold text-teal-medium">{k.bobot}</TableCell>
                    <TableCell className="text-muted-foreground">{k.level}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-background font-semibold">
                  <TableCell>Total</TableCell>
                  <TableCell>50 soal</TableCell>
                  <TableCell className="text-teal-deep">100%</TableCell>
                  <TableCell>90 menit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
