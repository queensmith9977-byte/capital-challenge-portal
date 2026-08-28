import { Link, createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Flag,
  LogOut,
  Timer,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/ujian")({
  head: () => ({
    meta: [
      { title: "Lembar Ujian CBT — Investment Competition 2026" },
      {
        name: "description",
        content:
          "Lembar ujian CBT dengan navigasi soal, penanda ragu-ragu, dan timer pengawasan waktu real-time.",
      },
      { property: "og:title", content: "Lembar Ujian CBT — Investment Competition 2026" },
      {
        property: "og:description",
        content: "Antarmuka ujian berbasis komputer untuk babak penyisihan pasar modal.",
      },
    ],
  }),
  component: ExamPage,
});

const TOTAL = 80;

const QUESTIONS = Array.from({ length: TOTAL }, (_, i) => ({
  no: i + 1,
  text:
    i % 3 === 0
      ? "Seorang investor membeli 10 lot saham ABCD pada harga Rp1.250 dan menjualnya pada Rp1.475. Berapa capital gain kotor yang diperoleh investor tersebut?"
      : i % 3 === 1
        ? "Instrumen berikut yang termasuk efek bersifat utang dan diperdagangkan di Bursa Efek Indonesia adalah…"
        : "Dalam analisis fundamental, rasio Price to Book Value (PBV) yang berada di bawah 1 umumnya mengindikasikan…",
  options:
    i % 3 === 0
      ? ["Rp225.000", "Rp2.250.000", "Rp22.500", "Rp1.475.000", "Rp250.000"]
      : i % 3 === 1
        ? ["Waran", "Obligasi Korporasi", "Right Issue", "Saham Preferen", "Reksa Dana Saham"]
        : [
            "Saham diperdagangkan di bawah nilai bukunya",
            "Perusahaan memiliki utang yang sangat rendah",
            "Laba per saham sedang tumbuh pesat",
            "Dividend payout ratio sangat tinggi",
            "Likuiditas saham sangat tinggi",
          ],
}));

const LETTERS = ["A", "B", "C", "D", "E"];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function ExamPage() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({ 1: 0, 2: 3, 3: 1, 5: 2 });
  const [flags, setFlags] = useState<Record<number, boolean>>({ 4: true, 7: true });
  const [left, setLeft] = useState(72 * 60 + 41);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const q = QUESTIONS[idx];
  const answered = Object.keys(answers).length;
  const flagged = Object.values(flags).filter(Boolean).length;
  const danger = left < 5 * 60;

  const progress = useMemo(() => Math.round((answered / TOTAL) * 100), [answered]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-card/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6">
          <div className="min-w-0">
            <p className="truncate font-display text-sm font-bold text-white">
              Penyisihan CBT · Sesi 2
            </p>
            <p className="truncate text-xs text-slate-500">
              Raka Adiyatma · IC26-0451 · SMA Negeri 3 Surabaya
            </p>
          </div>
          <div
            className={`flex items-center gap-2 rounded-xl border px-4 py-2 font-display text-xl font-extrabold tabular-nums ${
              danger
                ? "border-red-500/40 bg-red-500/10 text-red-400"
                : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
            }`}
          >
            <Timer className="size-4" />
            {pad(Math.floor(left / 3600))}:{pad(Math.floor((left % 3600) / 60))}:{pad(left % 60)}
          </div>
          <Button
            variant="outline"
            className="hidden border-red-500/30 bg-transparent text-red-400 hover:bg-red-500/10 hover:text-red-300 sm:inline-flex"
            onClick={() => setConfirm(true)}
          >
            <LogOut /> Selesai & Kumpulkan
          </Button>
        </div>
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full bg-cyan-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1600px] flex-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-card p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
                Soal {q.no} dari {TOTAL}
              </span>
              <button
                onClick={() => setFlags((f) => ({ ...f, [q.no]: !f[q.no] }))}
                className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  flags[q.no]
                    ? "border-amber-500/40 bg-amber-500/15 text-amber-300"
                    : "border-white/10 text-slate-400 hover:text-amber-300"
                }`}
              >
                <Flag className="size-3.5" />
                {flags[q.no] ? "Ditandai" : "Ragu-ragu"}
              </button>
            </div>

            <p className="mt-5 text-base leading-relaxed text-slate-200 sm:text-lg">{q.text}</p>

            <div className="mt-6 space-y-3">
              {q.options.map((opt, i) => {
                const active = answers[q.no] === i;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers((a) => ({ ...a, [q.no]: i }))}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-colors ${
                      active
                        ? "border-cyan-500/60 bg-cyan-500/10"
                        : "border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-lg text-sm font-bold ${
                        active ? "bg-cyan-500 text-slate-950" : "bg-white/5 text-slate-400"
                      }`}
                    >
                      {LETTERS[i]}
                    </span>
                    <span className={active ? "text-white" : "text-slate-300"}>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
              disabled={idx === 0}
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
            >
              <ChevronLeft /> Sebelumnya
            </Button>
            <p className="text-xs text-slate-500">
              Jawaban tersimpan otomatis setiap 5 detik
            </p>
            <Button
              className="glow-cyan"
              disabled={idx === TOTAL - 1}
              onClick={() => setIdx((v) => Math.min(TOTAL - 1, v + 1))}
            >
              Berikutnya <ChevronRight />
            </Button>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-card p-5">
            <p className="font-display text-sm font-bold text-white">Navigasi Soal</p>
            <div className="mt-4 grid grid-cols-8 gap-1.5 lg:grid-cols-6">
              {QUESTIONS.map((item, i) => {
                const isAnswered = answers[item.no] !== undefined;
                const isFlagged = flags[item.no];
                const isCurrent = i === idx;
                return (
                  <button
                    key={item.no}
                    onClick={() => setIdx(i)}
                    className={`grid aspect-square place-items-center rounded-md text-xs font-semibold transition-colors ${
                      isCurrent
                        ? "bg-cyan-500 text-slate-950"
                        : isFlagged
                          ? "bg-amber-500/20 text-amber-300"
                          : isAnswered
                            ? "bg-emerald-500/20 text-emerald-300"
                            : "bg-white/5 text-slate-500 hover:bg-white/10"
                    }`}
                  >
                    {item.no}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-400">
              <p className="flex items-center gap-2">
                <span className="size-3 rounded bg-emerald-500/40" /> Terjawab · {answered}
              </p>
              <p className="flex items-center gap-2">
                <span className="size-3 rounded bg-amber-500/40" /> Ragu-ragu · {flagged}
              </p>
              <p className="flex items-center gap-2">
                <span className="size-3 rounded bg-white/10" /> Belum dijawab ·{" "}
                {TOTAL - answered}
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-red-500/30 bg-transparent text-red-400 hover:bg-red-500/10 hover:text-red-300"
            onClick={() => setConfirm(true)}
          >
            <LogOut /> Selesai & Kumpulkan
          </Button>
        </aside>
      </div>

      {confirm && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-card p-6">
            <span className="grid size-11 place-items-center rounded-xl bg-amber-500/10 text-amber-400">
              <AlertTriangle className="size-5" />
            </span>
            <h2 className="mt-4 font-display text-lg font-bold text-white">
              Kumpulkan lembar jawaban?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Kamu telah menjawab {answered} dari {TOTAL} soal dan menandai {flagged} soal
              sebagai ragu-ragu. Jawaban tidak dapat diubah setelah dikumpulkan.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setConfirm(false)}
              >
                Periksa Lagi
              </Button>
              <Button asChild className="flex-1 glow-cyan">
                <Link to="/hasil">Ya, Kumpulkan</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
