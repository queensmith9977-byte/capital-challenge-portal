import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Building2, Download, Mail, Phone, QrCode, TrendingUp } from "lucide-react";

import { PageHead, PortalLayout } from "@/components/layout/PortalLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil & Kartu Peserta — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Kelola data diri, kontak, dan unduh kartu peserta digital ujian CBT Investment Competition 2026.",
      },
      { property: "og:title", content: "Profil & Kartu Peserta — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Data peserta terverifikasi dan kartu ujian digital ber-QR.",
      },
    ],
  }),
  component: ProfilPage,
});

const FIELDS = [
  { id: "nama", label: "Nama Lengkap", value: "Raka Adiyatma" },
  { id: "nim", label: "NIM / NISN", value: "1906345221" },
  { id: "institusi", label: "Institusi", value: "Universitas Indonesia" },
  { id: "email", label: "Email", value: "raka.adiyatma@ui.ac.id" },
  { id: "telepon", label: "No. WhatsApp", value: "+62 812-3456-7890" },
  { id: "kategori", label: "Kategori Lomba", value: "Mahasiswa (S1/D4)" },
];

function ProfilPage() {
  return (
    <PortalLayout>
      <PageHead
        eyebrow="Data Peserta"
        title="Profil & Kartu Peserta"
        description="Pastikan seluruh data sesuai identitas resmi. Data terkunci 24 jam sebelum ujian."
        action={
          <Button size="lg" className="glow-cyan">
            <Download className="size-4" /> Unduh Kartu (PDF)
          </Button>
        }
      />

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_380px]">
        <div className="rounded-xl border border-white/10 bg-card p-6">
          <h2 className="text-lg font-bold text-white">Data Diri</h2>
          <p className="mt-1 text-sm text-slate-400">
            Perubahan data memerlukan verifikasi ulang oleh panitia.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.id} className="space-y-2">
                <Label htmlFor={f.id} className="text-slate-300">
                  {f.label}
                </Label>
                <Input
                  id={f.id}
                  defaultValue={f.value}
                  className="border-white/10 bg-white/5 text-white"
                />
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button className="glow-cyan">Simpan Perubahan</Button>
            <Button variant="outline" className="border-white/10 bg-transparent text-slate-200 hover:bg-white/5">
              Ajukan Koreksi Data
            </Button>
          </div>

          <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            {[
              { icon: BadgeCheck, l: "Status Verifikasi", v: "Terverifikasi" },
              { icon: Building2, l: "Koordinator", v: "KSPM UI" },
              { icon: Mail, l: "Email Panitia", v: "helpdesk@investcomp2026.id" },
            ].map((i) => (
              <div key={i.l} className="rounded-lg border border-white/10 bg-white/5 p-4">
                <i.icon className="size-4 text-cyan-400" />
                <p className="mt-2 text-[11px] uppercase tracking-wide text-slate-500">{i.l}</p>
                <p className="text-sm font-semibold text-white">{i.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="hero-cyber grid-dot overflow-hidden rounded-2xl border border-cyan-500/30 p-6 shadow-[0_24px_60px_-30px_rgba(6,182,212,0.6)]">
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-lg bg-cyan-500 text-slate-950">
                <TrendingUp className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-extrabold text-white">
                  Kartu Peserta Digital
                </p>
                <p className="text-[11px] text-slate-400">Investment Competition 2026</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="grid size-20 place-items-center rounded-xl border border-white/10 bg-white/5 font-display text-2xl font-extrabold text-cyan-400">
                RA
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">Raka Adiyatma</p>
                <p className="text-xs text-slate-400">Universitas Indonesia</p>
                <p className="mt-1 inline-block rounded-full bg-cyan-500/10 px-2 py-0.5 text-[11px] font-semibold text-cyan-400">
                  Mahasiswa
                </p>
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              {[
                ["No. Peserta", "IC2026-000123"],
                ["Sesi", "Sesi 2 · 09:00"],
                ["Ruang", "CBT-Online 12"],
                ["Tahap", "Penyisihan"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] uppercase tracking-wide text-slate-500">{k}</dt>
                  <dd className="font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-center gap-4 rounded-xl border border-white/10 bg-black/30 p-4">
              <QrCode className="size-14 text-cyan-400" />
              <p className="text-xs text-slate-400">
                Tunjukkan QR ini saat verifikasi identitas oleh pengawas sebelum ujian dimulai.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-card p-5">
            <p className="text-sm font-semibold text-white">Butuh bantuan?</p>
            <p className="mt-1 text-xs text-slate-400">
              Hubungi helpdesk peserta pada jam operasional 08.00–20.00 WIB.
            </p>
            <div className="mt-3 flex items-center gap-2 text-sm text-cyan-400">
              <Phone className="size-4" /> +62 21 5000 2026
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
