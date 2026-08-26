import { Link } from "@tanstack/react-router";
import { Menu, TrendingUp } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Beranda" },
  { to: "/silabus", label: "Silabus & Kisi-Kisi" },
  { to: "/berita", label: "Berita" },
] as const;

export function Brand({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-lg bg-cyan-500 text-primary-foreground shadow-[0_0_12px_rgba(6,182,212,0.4)]">
        <TrendingUp className="size-5" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-tight ${
            tone === "light" ? "text-slate-950" : "text-white"
          }`}
        >
          Investment Competition
        </span>
        <span
          className={`block text-[11px] font-medium ${
            tone === "light" ? "text-slate-600" : "text-slate-400"
          }`}
        >
          National Capital Market Exam 2026
        </span>
      </span>
    </Link>
  );
}

export function PublicLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-400"
                activeProps={{ className: "bg-white/5 text-cyan-400" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="ml-3">
              <Link to="/login">Masuk Portal Ujian</Link>
            </Button>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white md:hidden"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </Button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-card px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-400"
                activeProps={{ className: "bg-white/5 text-cyan-400" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link to="/login">Masuk Portal Ujian</Link>
            </Button>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-20 border-t border-white/10 bg-card">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <Brand tone="light" />
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Portal ujian CBT resmi Kompetisi Pasar Modal &amp; Investasi Nasional 2026.
              Diselenggarakan untuk mahasiswa dan pelajar SMA/SMK se-Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Navigasi</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-cyan-400">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="hover:text-cyan-400">
                  Login Peserta
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Sekretariat</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>panitia@investcomp2026.id</li>
              <li>+62 21 5000 2026</li>
              <li>Gedung Bursa, Jakarta Selatan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
          © 2026 Investment Competition. Seluruh hak cipta dilindungi.
        </div>
      </footer>
    </div>
  );
}
