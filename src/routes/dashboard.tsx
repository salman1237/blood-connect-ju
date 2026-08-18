import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Plus, Inbox } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BloodDrop, UrgencyBadge, VerifiedBadge, StatusPill } from "@/components/brand";
import { requests, bloodGroups, halls } from "@/lib/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Live Requests — Blood Connect JU" },
      { name: "description", content: "Live feed of verified emergency blood requests across Jahangirnagar University." },
      { property: "og:title", content: "Live Requests — Blood Connect JU" },
      { property: "og:description", content: "Filter active campus blood requests by group and hall." },
    ],
  }),
  component: Dashboard,
});

type View = "live" | "empty" | "loading";

function Dashboard() {
  const [group, setGroup] = useState("All");
  const [hall, setHall] = useState("All halls");
  const [view, setView] = useState<View>("live");

  const filtered = requests.filter(
    (r) => (group === "All" || r.bloodGroup === group) && (hall === "All halls" || r.hall === hall),
  );

  return (
    <AppShell title="Live requests" subtitle="Savar & Dhaka · updated a moment ago">
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        {[
          { k: "Active now", v: "4", note: "2 critical" },
          { k: "Donors online", v: "213", note: "of 1,344" },
          { k: "Fulfilled today", v: "6", note: "avg 27 min" },
        ].map((s) => (
          <div key={s.k} className="surface-panel p-4">
            <p className="text-xs text-muted-foreground">{s.k}</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">{s.v}</p>
            <p className="text-xs text-muted-foreground">{s.note}</p>
          </div>
        ))}
      </div>

      <Button asChild size="lg" className="mb-5 w-full sm:w-auto">
        <Link to="/post-request">
          <Plus className="size-4" /> Post emergency request
        </Link>
      </Button>

      <div className="mb-4 space-y-3">
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {["All", ...bloodGroups].map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                group === g
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground",
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {["All halls", ...halls.slice(0, 4)].map((h) => (
            <button
              key={h}
              onClick={() => setHall(h)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1.5 text-xs transition-colors",
                hall === h ? "border-foreground bg-secondary font-medium" : "border-border bg-card text-muted-foreground",
              )}
            >
              {h}
            </button>
          ))}
        </div>
        <div className="flex gap-2 text-[11px] text-muted-foreground">
          <span>Preview states:</span>
          {(["live", "empty", "loading"] as View[]).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={cn("underline-offset-2 hover:underline", view === v && "font-semibold text-foreground")}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === "loading" && (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="surface-panel flex gap-4 p-4">
              <Skeleton className="size-12 rounded-xl" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-2/5" />
                <Skeleton className="h-3 w-3/5" />
                <Skeleton className="h-3 w-1/4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "empty" && (
        <div className="surface-panel flex flex-col items-center px-6 py-14 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-surface text-muted-foreground">
            <Inbox className="size-6" />
          </span>
          <h3 className="mt-4 text-base font-semibold">No active requests right now</h3>
          <p className="mt-1.5 max-w-sm text-sm text-muted-foreground">
            That's good news. We'll notify you the moment someone near your hall needs O- blood.
          </p>
          <Button asChild variant="outline" className="mt-5">
            <Link to="/donors">Browse donor directory</Link>
          </Button>
        </div>
      )}

      {view === "live" && (
        <ul className="space-y-3">
          {filtered.map((r) => (
            <li key={r.id}>
              <Link
                to="/request/$requestId"
                params={{ requestId: r.id }}
                className="surface-panel block p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex gap-4">
                  <BloodDrop group={r.bloodGroup} />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold">{r.units} units needed</span>
                      <UrgencyBadge urgency={r.urgency} />
                      {r.verified && <VerifiedBadge />}
                      <StatusPill status={r.status} />
                    </div>
                    <p className="mt-1.5 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 shrink-0" /> {r.hospital}, {r.area}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="size-3" /> {r.postedAgo}
                      </span>
                      <span>
                        {r.requester} · {r.hall}
                      </span>
                      <span>{r.responders.length} responded</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="surface-panel px-6 py-12 text-center text-sm text-muted-foreground">
              No requests match these filters.
            </li>
          )}
        </ul>
      )}
    </AppShell>
  );
}
