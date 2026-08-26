import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Megaphone } from "lucide-react";

import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/berita")({
  head: () => ({
    meta: [
      { title: "Berita & Pengumuman Resmi — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Pengumuman resmi panitia, jadwal technical meeting, dan berita terbaru Kompetisi Pasar Modal & Investasi Nasional 2026.",
      },
      { property: "og:title", content: "Berita & Pengumuman — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Ikuti informasi terbaru seputar penyisihan CBT dan technical meeting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeritaPage,
});

const HIGHLIGHT = {
  tag: "Pengumuman Resmi",
  date: "24 Februari 2026",
  title: "Jadwal Technical Meeting Nasional & Pembagian Sesi Penyisihan CBT",
  excerpt:
    "Seluruh peserta wajib mengikuti technical meeting daring pada 2 Maret 2026 pukul 19.00 WIB. Pada sesi ini panitia menjelaskan mekanisme login portal, penggunaan token ujian, aturan proctoring, serta simulasi antarmuka lembar ujian CBT.",
};

const NEWS = [
  {
    tag: "Pengumuman",
    date: "20 Februari 2026",
    title: "Pendaftaran Ditutup: 12.480 Peserta dari 312 Institusi",
    excerpt: "Panitia menutup pendaftaran gelombang akhir. Verifikasi berkas dilakukan maksimal 3 hari kerja.",
  },
  {
    tag: "Teknis",
    date: "18 Februari 2026",
    title: "Spesifikasi Perangkat Minimum untuk Ujian CBT",
    excerpt: "Gunakan laptop/PC dengan browser Chrome versi terbaru, RAM 4GB, dan koneksi minimal 5 Mbps.",
  },
  {
    tag: "Berita",
    date: "12 Februari 2026",
    title: "Bursa Efek Resmi Menjadi Mitra Strategis Kompetisi",
    excerpt: "Kerja sama mencakup penyediaan data pasar untuk soal analisis dan kunjungan pemenang ke gedung bursa.",
  },
  {
    tag: "Pengumuman",
    date: "5 Februari 2026",
    title: "Rilis Kisi-Kisi Resmi dan Buku Panduan Teknis",
    excerpt: "Silabus final memuat enam sub-tes materi beserta bobot nilai dan contoh soal analisis kasus.",
  },
  {
    tag: "Teknis",
    date: "28 Januari 2026",
    title: "Simulasi Ujian Dibuka: Percobaan Bebas 30 Menit",
    excerpt: "Peserta dapat mengakses trial exam kapan saja untuk membiasakan diri dengan palet soal dan timer.",
  },
  {
    tag: "Berita",
    date: "15 Januari 2026",
    title: "Total Hadiah Naik Menjadi Rp 250 Juta",
    excerpt: "Penambahan hadiah berasal dari sponsor baru, termasuk beasiswa sertifikasi analis efek.",
  },
];

function BeritaPage() {
  return (
    <PublicLayout>
      <section className="hero-cyber grid-dot">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
            <Megaphone className="size-3.5 text-gold" /> Informasi Resmi
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">Berita &amp; Pengumuman</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-400">
            Seluruh informasi resmi hanya diumumkan melalui kanal ini dan email terdaftar peserta.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <article className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[var(--shadow-card)]">
          <div className="grid gap-0 md:grid-cols-[1fr_1.4fr]">
            <div className="hero-cyber grid-dot min-h-48 p-8">
              <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-slate-950">
                {HIGHLIGHT.tag}
              </span>
              <p className="mt-6 flex items-center gap-2 text-xs text-slate-400">
                <CalendarDays className="size-4" /> {HIGHLIGHT.date}
              </p>
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-extrabold text-white">{HIGHLIGHT.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{HIGHLIGHT.excerpt}</p>
              <Button className="mt-6" variant="cyber">
                Baca Selengkapnya <ArrowRight />
              </Button>
            </div>
          </div>
        </article>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((n) => (
            <article
              key={n.title}
              className="card-accent flex flex-col rounded-xl border border-white/10 bg-card p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-400">
                  {n.tag}
                </span>
                <span className="text-xs text-slate-500">{n.date}</span>
              </div>
              <h3 className="mt-4 text-lg font-bold leading-snug text-white">{n.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{n.excerpt}</p>
              <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300">
                Baca artikel <ArrowRight className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
