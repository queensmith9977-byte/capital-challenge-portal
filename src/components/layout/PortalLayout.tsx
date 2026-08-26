import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Brand } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profil", label: "Profil & Kartu" },
  { to: "/petunjuk", label: "Petunjuk" },
  { to: "/lobby", label: "Ruang Tunggu" },
  { to: "/hasil", label: "Hasil & Sertifikat" },
] as const;

export function PortalLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-400"
                activeProps={{ className: "bg-white/5 text-cyan-400" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-card py-1.5 pl-1.5 pr-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-500 sm:flex">
              <span className="grid size-7 place-items-center rounded-full bg-cyan-500 text-xs font-bold text-slate-950">
                RA
              </span>
              <span className="leading-tight">Raka Adiyatma</span>
              <ChevronDown className="size-4 text-slate-500" />
            </button>
            <Button
              variant="outline"
              size="icon"
              className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Buka menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu />
            </Button>
          </div>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-card px-4 py-3 lg:hidden">
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
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/10 bg-card py-6 text-center text-xs text-slate-500">
        Portal Peserta · Investment Competition 2026
      </footer>
    </div>
  );
}

export function PageHead({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="hero-cyber grid-dot">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && (
            <span className="inline-block rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-2xl text-sm text-slate-400">{description}</p>
          )}
        </div>
        {action}
      </div>
    </div>
  );
}
