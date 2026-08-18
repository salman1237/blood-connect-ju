import { Link } from "@tanstack/react-router";
import { Droplet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Urgency, RequestStatus } from "@/lib/mock";
import { urgencyLabel } from "@/lib/mock";

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Droplet className="size-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-tight">Blood Connect JU</span>
        <span className="block text-[11px] text-muted-foreground">Jahangirnagar University</span>
      </span>
    </Link>
  );
}

export function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "bn">("en");
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-medium">
      {(["en", "bn"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-3 py-1 transition-colors",
            lang === l ? "bg-secondary text-secondary-foreground" : "text-muted-foreground",
          )}
        >
          {l === "en" ? "English" : "বাংলা"}
        </button>
      ))}
    </div>
  );
}

export function BloodDrop({ group, size = "md" }: { group: string; size?: "sm" | "md" | "lg" }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl bg-accent font-semibold text-accent-foreground tabular-nums",
        size === "sm" && "size-9 text-xs",
        size === "md" && "size-12 text-sm",
        size === "lg" && "size-16 text-lg",
      )}
    >
      {group}
    </span>
  );
}

export function UrgencyBadge({ urgency }: { urgency: Urgency }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
        urgency === "critical" && "bg-primary text-primary-foreground",
        urgency === "24h" && "bg-warning/20 text-warning-foreground",
        urgency === "planned" && "bg-secondary text-secondary-foreground",
      )}
    >
      {urgency === "critical" && <span className="size-1.5 animate-pulse rounded-full bg-primary-foreground" />}
      {urgencyLabel[urgency]}
    </span>
  );
}

export function StatusPill({ status }: { status: RequestStatus }) {
  const map: Record<RequestStatus, string> = {
    open: "Open",
    donor_found: "Donor found",
    fulfilled: "Fulfilled",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        status === "fulfilled"
          ? "border-transparent bg-success/15 text-success"
          : status === "donor_found"
            ? "border-transparent bg-info/15 text-info"
            : "border-border text-muted-foreground",
      )}
    >
      {map[status]}
    </span>
  );
}

export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-info/12 px-2 py-0.5 text-[11px] font-medium text-info">
      ✓ Verified
    </span>
  );
}

export function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
