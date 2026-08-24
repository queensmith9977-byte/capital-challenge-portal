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
      <header className="sticky top-0 z-40 border-b border-border bg-card">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
          <Brand />
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-teal-deep"
                activeProps={{ className: "bg-secondary text-teal-medium" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-full border border-border bg-card py-1.5 pl-1.5 pr-3 text-sm font-medium transition-colors hover:border-cyan-teal sm:flex">
              <span className="grid size-7 place-items-center rounded-full bg-teal-deep text-xs font-bold text-primary-foreground">
                RA
              </span>
              <span className="leading-tight">Raka Adiyatma</span>
              <ChevronDown className="size-4 text-muted-foreground" />
            </button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Buka menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu />
            </Button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border bg-card px-4 py-3 lg:hidden">
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
          </div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-card py-6 text-center text-xs text-muted-foreground">
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
    <div className="hero-teal grid-noise">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          {eyebrow && (
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/80">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 text-2xl font-extrabold text-primary-foreground sm:text-3xl">
            {title}
          </h1>
          {description && (
            <p className="mt-2 max-w-2xl text-sm text-primary-foreground/70">{description}</p>
          )}
        </div>
        {action}
      </div>
    </div>
  );
}
