import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Logo, LanguageToggle } from "@/components/brand";

export function AuthShell({
  title,
  subtitle,
  children,
  footer,
  step,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  step?: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="flex items-center justify-between px-4 py-4 sm:px-8">
        <Logo />
        <LanguageToggle />
      </header>
      <main className="mx-auto w-full max-w-md px-4 pb-16 pt-4">
        <div className="surface-panel p-6">
          {step && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">{step}</p>
          )}
          <h1 className="text-2xl font-semibold">{title}</h1>
          {subtitle && <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>}
          <div className="mt-6 space-y-4">{children}</div>
        </div>
        {footer && <div className="mt-5 text-center text-sm text-muted-foreground">{footer}</div>}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Prototype preview ·{" "}
          <Link to="/" className="underline">
            back to landing
          </Link>
        </p>
      </main>
    </div>
  );
}
