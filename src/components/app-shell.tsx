import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Search,
  Bell,
  Trophy,
  User,
  Settings,
  ShieldCheck,
  BarChart3,
  Plus,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Logo, LanguageToggle } from "@/components/brand";
import { Button } from "@/components/ui/button";

const primaryNav = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/donors", label: "Donors", icon: Search },
  { to: "/notifications", label: "Alerts", icon: Bell },
  { to: "/leaderboard", label: "Ranks", icon: Trophy },
  { to: "/profile", label: "Profile", icon: User },
] as const;

const secondaryNav = [
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/verifier", label: "Verifier queue", icon: ShieldCheck },
  { to: "/admin", label: "Admin dashboard", icon: BarChart3 },
] as const;

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-sidebar-border bg-sidebar p-4 lg:flex">
        <Logo className="px-2 py-2" />
        <nav className="mt-6 flex flex-1 flex-col gap-1">
          {primaryNav.map((item) => (
            <NavItem key={item.to} {...item} active={pathname === item.to} />
          ))}
          <div className="my-3 border-t border-sidebar-border" />
          {secondaryNav.map((item) => (
            <NavItem key={item.to} {...item} active={pathname === item.to} />
          ))}
          <div className="mt-auto space-y-3">
            <Button asChild className="w-full">
              <Link to="/post-request">
                <Plus className="size-4" /> Post request
              </Link>
            </Button>
            <Link
              to="/login"
              className="block rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-sidebar-accent"
            >
              Sign out
            </Link>
          </div>
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold sm:text-lg">{title}</h1>
              {subtitle && (
                <p className="truncate text-xs text-muted-foreground sm:text-sm">{subtitle}</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <span className="hidden size-9 items-center justify-center rounded-full bg-secondary text-xs font-semibold sm:inline-flex">
                RA
              </span>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 pb-28 pt-5 lg:pb-12">{children}</main>
      </div>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-lg items-stretch justify-between px-2 py-1.5">
          {primaryNav.map(({ to, label, icon: Icon }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={cn(
                  "flex flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[10px] font-medium transition-colors",
                  active ? "text-primary" : "text-muted-foreground",
                )}
              >
                <Icon className="size-5" />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

function NavItem({
  to,
  label,
  icon: Icon,
  active,
}: {
  to: string;
  label: string;
  icon: typeof Home;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/60",
      )}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}
