import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplet, HeartHandshake, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo, LanguageToggle, BloodDrop, UrgencyBadge, VerifiedBadge } from "@/components/brand";
import { requests } from "@/lib/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blood Connect JU — Campus Blood Donation Network" },
      {
        name: "description",
        content:
          "Blood Connect JU links Jahangirnagar University students, faculty and staff with verified emergency blood requests on and around campus.",
      },
      { property: "og:title", content: "Blood Connect JU — Campus Blood Donation Network" },
      {
        property: "og:description",
        content: "Verified emergency blood requests, campus donor directory and hall leaderboards for JU.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  const live = requests.filter((r) => r.status !== "fulfilled").slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Logo />
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                <Droplet className="size-3.5" /> 1,344 registered campus donors
              </span>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl">
                When someone on campus needs blood, minutes matter.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Blood Connect JU is a coordination platform for Jahangirnagar University students,
                faculty and staff. Post a verified emergency request, find eligible donors by blood
                group and hall, and track every request to fulfilment.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/signup">Sign up as a donor</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/login">Login</Link>
                </Button>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
                {[
                  { k: "Requests fulfilled", v: "612" },
                  { k: "Avg. response time", v: "27 min" },
                  { k: "Halls & depts", v: "34" },
                ].map((s) => (
                  <div key={s.k}>
                    <dt className="text-xs text-muted-foreground">{s.k}</dt>
                    <dd className="text-2xl font-semibold tabular-nums">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="surface-panel p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold">Live requests right now</h2>
                  <p className="text-xs text-muted-foreground">Updated a moment ago</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-primary">
                  <span className="size-2 animate-pulse rounded-full bg-primary" /> Live
                </span>
              </div>
              <ul className="space-y-3">
                {live.map((r) => (
                  <li key={r.id} className="rounded-xl border border-border p-3">
                    <div className="flex items-start gap-3">
                      <BloodDrop group={r.bloodGroup} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold">{r.units} units needed</span>
                          <UrgencyBadge urgency={r.urgency} />
                          {r.verified && <VerifiedBadge />}
                        </div>
                        <p className="mt-1 flex items-center gap-1 truncate text-xs text-muted-foreground">
                          <MapPin className="size-3" /> {r.hospital}
                        </p>
                        <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="size-3" /> {r.postedAgo}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link to="/login">See all active requests</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                t: "Verified requests only",
                d: "Student volunteers verify hospital details before a request is broadcast campus-wide.",
              },
              {
                icon: HeartHandshake,
                t: "Matched by group & hall",
                d: "Donors get alerts only for compatible blood groups near their hall or department.",
              },
              {
                icon: Clock,
                t: "Eligibility built in",
                d: "The platform tracks the 120-day gap so nobody is asked to donate too early.",
              },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="surface-panel p-5">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-2xl font-semibold">Ready to be someone's lifeline?</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Register with your university email. It takes under two minutes.
          </p>
          <Button asChild size="lg" className="mt-6">
            <Link to="/signup">Create your donor profile</Link>
          </Button>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        Blood Connect JU · A student-run initiative · Savar, Dhaka
      </footer>
    </div>
  );
}
