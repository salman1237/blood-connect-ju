import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bloodGroups, halls, departments } from "@/lib/mock";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Complete Your Profile — Blood Connect JU" },
      { name: "description", content: "Finish setting up your blood group, availability and hall or department." },
      { property: "og:title", content: "Complete Your Profile — Blood Connect JU" },
      { property: "og:description", content: "Three quick steps to finish your campus donor profile." },
    ],
  }),
  component: Onboarding,
});

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <AuthShell
      step={`Step ${step} of 3`}
      title={
        step === 1 ? "Your blood group" : step === 2 ? "Where you are on campus" : "Your availability"
      }
      subtitle={
        step === 1
          ? "Donors are matched to requests by compatible blood group."
          : step === 2
            ? "We use this to alert you about nearby requests first."
            : "You can change this any time from your profile."
      }
    >
      <div className="flex gap-1.5">
        {[1, 2, 3].map((s) => (
          <span
            key={s}
            className={cn("h-1.5 flex-1 rounded-full", s <= step ? "bg-primary" : "bg-secondary")}
          />
        ))}
      </div>

      {step === 1 && (
        <div className="grid grid-cols-4 gap-2 pt-2">
          {bloodGroups.map((g) => (
            <label
              key={g}
              className="flex cursor-pointer items-center justify-center rounded-lg border border-border py-3 text-sm font-medium has-[:checked]:border-primary has-[:checked]:bg-accent has-[:checked]:text-accent-foreground"
            >
              <input type="radio" name="bg" className="sr-only" defaultChecked={g === "O-"} />
              {g}
            </label>
          ))}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4 pt-2">
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Hall</Label>
            <Select defaultValue="Al-Beruni Hall">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {halls.map((h) => (
                  <SelectItem key={h} value={h}>
                    {h}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Department</Label>
            <Select defaultValue="Computer Science &amp; Engineering">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {departments.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <p className="text-sm font-medium">Available to donate</p>
              <p className="text-xs text-muted-foreground">Show me in donor search results</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs text-muted-foreground">Last donation date (optional)</Label>
            <Input type="date" defaultValue="2026-02-14" />
          </div>
          <div className="flex items-center justify-between rounded-xl border border-border p-4">
            <div>
              <p className="text-sm font-medium">Emergency SMS alerts</p>
              <p className="text-xs text-muted-foreground">Critical requests for my blood group</p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      )}

      <div className="flex gap-2">
        {step > 1 && (
          <Button variant="outline" className="flex-1" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        )}
        <Button
          className="flex-1"
          size="lg"
          onClick={() => (step < 3 ? setStep(step + 1) : navigate({ to: "/dashboard" }))}
        >
          {step < 3 ? "Continue" : "Finish setup"}
        </Button>
      </div>
    </AuthShell>
  );
}
