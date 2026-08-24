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
      <span className="grid size-9 place-items-center rounded-lg bg-teal-deep text-primary-foreground">
        <TrendingUp className="size-5" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-[15px] font-extrabold tracking-tight ${
            tone === "light" ? "text-primary-foreground" : "text-teal-deepest"
          }`}
        >
          Investment Competition
        </span>
        <span
          className={`block text-[11px] font-medium ${
            tone === "light" ? "text-primary-foreground/70" : "text-muted-foreground"
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
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-teal-deep"
                activeProps={{ className: "bg-secondary text-teal-medium" }}
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
            className="md:hidden"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu />
          </Button>
        </div>
        {open && (
          <div className="border-t border-border bg-card px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground"
                activeProps={{ className: "bg-secondary text-teal-deep" }}
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

      <footer className="mt-20 bg-teal-deepest text-primary-foreground">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <Brand tone="light" />
            <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
              Portal ujian CBT resmi Kompetisi Pasar Modal &amp; Investasi Nasional 2026.
              Diselenggarakan untuk mahasiswa dan pelajar SMA/SMK se-Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Navigasi</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-cyan-teal">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="hover:text-cyan-teal">
                  Login Peserta
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Sekretariat</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
              <li>panitia@investcomp2026.id</li>
              <li>+62 21 5000 2026</li>
              <li>Gedung Bursa, Jakarta Selatan</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
          © 2026 Investment Competition. Seluruh hak cipta dilindungi.
        </div>
      </footer>
    </div>
  );
}
