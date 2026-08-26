import { Link } from "@tanstack/react-router";
import {
  BarChart3,
  CalendarClock,
  ClipboardList,
  Database,
  FileSpreadsheet,
  Menu,
  MonitorPlay,
  ShieldAlert,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

const ADMIN_NAV = [
  { to: "/admin", label: "Statistik", icon: BarChart3 },
  { to: "/admin/bank-soal", label: "Bank Soal", icon: Database },
  { to: "/admin/jadwal", label: "Jadwal & Token", icon: CalendarClock },
  { to: "/admin/peserta", label: "Data Peserta", icon: Users },
  { to: "/admin/rekap", label: "Rekap & Export", icon: FileSpreadsheet },
] as const;

const PROCTOR_NAV = [
  { to: "/pengawas", label: "Live Monitoring", icon: MonitorPlay },
  { to: "/pengawas/log", label: "Log & Pelanggaran", icon: ShieldAlert },
] as const;

export function ConsoleLayout({
  role,
  title,
  subtitle,
  actions,
  children,
}: {
  role: "admin" | "proctor";
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const nav = role === "admin" ? ADMIN_NAV : PROCTOR_NAV;

  return (
    <div className="min-h-screen bg-background lg:flex">
      <aside
        className={`${open ? "block" : "hidden"} border-r border-white/10 bg-card text-sidebar-foreground lg:block lg:w-72 lg:shrink-0`}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-white/10 px-5">
          <span className="grid size-9 place-items-center rounded-lg bg-cyan-500 text-slate-950 shadow-[0_0_12px_rgba(6,182,212,0.4)]">
            <TrendingUp className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-sm font-extrabold text-white">
              {role === "admin" ? "Admin Console" : "Proctor Room"}
            </p>
            <p className="text-[11px] text-slate-500">Investment Competition 2026</p>
          </div>
        </div>
        <nav className="space-y-1 p-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/admin" || item.to === "/pengawas" }}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-400"
              activeProps={{ className: "bg-white/5 text-cyan-400" }}
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mx-4 mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-xs text-slate-500">Gelombang aktif</p>
          <p className="mt-1 font-display text-lg font-bold text-white">
            Penyisihan CBT · Sesi 2
          </p>
          <p className="mt-1 text-xs text-cyan-400">Berlangsung · 09:00–10:30 WIB</p>
        </div>
        <div className="p-4">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-500 hover:text-cyan-400"
          >
            <ClipboardList className="size-4" /> Kembali ke situs publik
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-3 border-b border-white/10 bg-card px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Buka menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-white">{title}</h1>
              {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
            </div>
          </div>
          {actions && <div className="flex flex-wrap items-center gap-2">{actions}</div>}
        </header>
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
