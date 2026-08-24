import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Timer,
  Trophy,
  Users,
} from "lucide-react";

import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Investment Competition 2026 — Kompetisi Pasar Modal Nasional" },
      {
        name: "description",
        content:
          "Kompetisi Pasar Modal & Investasi Nasional 2026: pendaftaran, penyisihan CBT, semifinal, dan grand final untuk mahasiswa & pelajar SMA.",
      },
      { property: "og:title", content: "Investment Competition 2026" },
      {
        property: "og:description",
        content: "Ikuti kompetisi investasi nasional dengan ujian CBT terstandar dan skor otomatis.",
      },
    ],
  }),
  component: LandingPage,
});

const STATS = [
  { value: "12.480", label: "Peserta Terdaftar", icon: Users },
  { value: "312", label: "Institusi Peserta", icon: GraduationCap },
  { value: "Rp 250 Jt", label: "Total Hadiah", icon: Trophy },
  { value: "34", label: "Provinsi", icon: LineChart },
];

const TIMELINE = [
  {
    phase: "Tahap 01",
    title: "Pendaftaran Peserta",
    date: "5 Jan – 20 Feb 2026",
    status: "Selesai",
  },
  {
    phase: "Tahap 02",
    title: "Penyisihan CBT Nasional",
    date: "8 Maret 2026",
    status: "Berlangsung",
  },
  { phase: "Tahap 03", title: "Semifinal Analisis Kasus", date: "12 April 2026", status: "Akan Datang" },
  { phase: "Tahap 04", title: "Grand Final & Awarding", date: "17 Mei 2026", status: "Akan Datang" },
];

const CATEGORIES = [
  {
    title: "Kategori Mahasiswa",
    desc: "Diploma & Sarjana aktif seluruh Indonesia. Fokus analisis fundamental, valuasi, dan manajemen portofolio.",
    points: ["Tim 1–3 orang", "50 soal · 90 menit", "Hadiah utama Rp 75 Juta"],
  },
  {
    title: "Kategori Pelajar SMA/SMK",
    desc: "Siswa aktif SMA/SMK/MA sederajat. Fokus literasi pasar modal, instrumen investasi, dan regulasi dasar.",
    points: ["Individu / tim 2 orang", "50 soal · 90 menit", "Hadiah utama Rp 50 Juta"],
  },
];

const JURY = [
  { name: "Dr. Anindya Kusuma", role: "Ekonom Pasar Modal, Universitas Indonesia" },
  { name: "Bagas Prawira, CFA", role: "Head of Equity Research, Sekuritas Nasional" },
  { name: "Siti Rahmawati, CSA", role: "Analis Senior & Praktisi Bursa Efek" },
  { name: "Prof. Hendra Wijaya", role: "Guru Besar Manajemen Keuangan" },
];

const FAQ = [
  {
    q: "Siapa saja yang boleh mengikuti kompetisi ini?",
    a: "Mahasiswa aktif D3/D4/S1 dan pelajar SMA/SMK/MA sederajat di seluruh Indonesia dengan bukti kartu identitas pelajar/mahasiswa yang masih berlaku.",
  },
  {
    q: "Apakah ujian penyisihan dilakukan secara daring?",
    a: "Ya. Penyisihan menggunakan sistem CBT daring dengan pengawasan proctoring, deteksi perpindahan tab, dan token ujian yang dibagikan pengawas sesaat sebelum sesi dimulai.",
  },
  {
    q: "Berapa kali kesempatan mengerjakan ujian utama?",
    a: "Ujian utama hanya dapat dikerjakan satu kali. Namun peserta bebas mencoba simulasi ujian 30 menit sebanyak yang diinginkan sebelum jadwal resmi.",
  },
  {
    q: "Bagaimana jika koneksi internet terputus saat ujian?",
    a: "Jawaban tersimpan otomatis setiap 10 detik. Peserta dapat login kembali dan melanjutkan pada soal terakhir, dengan timer tetap berjalan sesuai waktu server.",
  },
];

export default function LandingPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-teal grid-noise">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/85">
              <Trophy className="size-3.5 text-gold" /> Kompetisi Pasar Modal &amp; Investasi 2026
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Uji Kemampuan Analisis Investasimu di Panggung Nasional
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">
              Investment Competition 2026 adalah ajang kompetisi pasar modal tingkat nasional dengan
              sistem ujian CBT terstandar, penilaian otomatis, dan pengawasan live proctoring.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/login">Masuk Portal Ujian →</Link>
              </Button>
              <Button asChild variant="onteal" size="xl">
                <Link to="/silabus">Lihat Silabus Ujian</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <s.icon className="size-4 text-cyan-teal" />
                  <p className="mt-2 font-display text-xl font-extrabold text-primary-foreground">
                    {s.value}
                  </p>
                  <p className="text-[11px] text-primary-foreground/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-teal">
              Sesi Berlangsung
            </p>
            <h3 className="mt-2 text-xl font-bold text-primary-foreground">
              Penyisihan CBT — Gelombang 2
            </h3>
            <div className="mt-6 space-y-4">
              {[
                { icon: Timer, label: "Durasi Ujian", value: "90 Menit · 50 Soal" },
                { icon: ShieldCheck, label: "Pengawasan", value: "Live Proctoring + Token" },
                { icon: Award, label: "Kelulusan", value: "Skor minimum 70 ke semifinal" },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3 border-b border-white/10 pb-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-white/10 text-cyan-teal">
                    <row.icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-primary-foreground/55">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-primary-foreground">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="gold" className="mt-6 w-full">
              <Link to="/lobby">Ruang Tunggu Ujian</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow="Jadwal Tahapan"
          title="Empat Tahapan Menuju Grand Final"
          desc="Ikuti setiap tahapan tepat waktu. Keterlambatan lebih dari 15 menit menyebabkan sesi dinyatakan gugur."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TIMELINE.map((t) => (
            <Card key={t.title} className="card-accent shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-secondary px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-teal-medium">
                    {t.phase}
                  </span>
                  <StatusPill status={t.status} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-teal-deepest">{t.title}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="size-4" /> {t.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-card py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="Kategori Peserta"
            title="Dua Kategori, Satu Panggung Nasional"
            desc="Total hadiah Rp 250 juta, trofi bergilir, dan kesempatan magang di perusahaan sekuritas mitra."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {CATEGORIES.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-[var(--shadow-card)]"
              >
                <span className="inline-block rounded-full bg-teal-medium px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                  Kategori
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-teal-deepest">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="size-4 text-emerald" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jury */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="Dewan Juri" title="Dinilai Langsung oleh Praktisi & Akademisi" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {JURY.map((j) => (
            <div key={j.name} className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mx-auto grid size-16 place-items-center rounded-full bg-teal-deep font-display text-xl font-extrabold text-primary-foreground">
                {j.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </div>
              <h4 className="mt-4 text-base font-bold text-teal-deepest">{j.name}</h4>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{j.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-card py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Didukung oleh
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {[
              "Bursa Efek",
              "OJK Institute",
              "Sekuritas Nusantara",
              "Danareksa Edu",
              "Fintech Forum",
              "Kampus Merdeka",
            ].map((s) => (
              <div
                key={s}
                className="grid h-16 place-items-center rounded-lg border border-border bg-background text-sm font-semibold text-muted-foreground"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-4xl px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`i${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-teal-deepest">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6">
        <div className="hero-teal grid-noise rounded-3xl px-8 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">
            Siap Menghadapi Penyisihan CBT?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/70">
            Masuk ke portal peserta, pelajari tata tertib, dan coba simulasi ujian 30 menit sebelum
            hari-H.
          </p>
          <Button asChild variant="gold" size="xl" className="mt-8">
            <Link to="/login">Masuk Portal Ujian →</Link>
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-teal">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold text-teal-deepest sm:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>}
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const tone =
    status === "Berlangsung"
      ? "bg-emerald/10 text-emerald"
      : status === "Selesai"
        ? "bg-muted text-muted-foreground"
        : "bg-gold/10 text-gold";
  return (
    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${tone}`}>{status}</span>
  );
}
