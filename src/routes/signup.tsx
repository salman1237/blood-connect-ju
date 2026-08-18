import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { bloodGroups, halls } from "@/lib/mock";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Blood Connect JU" },
      { name: "description", content: "Create your Blood Connect JU donor profile with your university email." },
      { property: "og:title", content: "Sign Up — Blood Connect JU" },
      { property: "og:description", content: "Register as a campus blood donor at Jahangirnagar University." },
    ],
  }),
  component: SignUp,
});

function SignUp() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Create your account"
      subtitle="Use your Jahangirnagar University email so we can verify you belong to campus."
      footer={
        <>
          Already registered?{" "}
          <Link to="/login" className="font-medium text-primary underline">
            Login
          </Link>
        </>
      }
    >
      <Field label="Full name">
        <Input placeholder="Rifat Ahmed" defaultValue="Rifat Ahmed" />
      </Field>
      <Field label="University email">
        <Input type="email" placeholder="name@juniv.edu" defaultValue="rifat@juniv.edu" />
      </Field>
      <Field label="Password">
        <Input type="password" placeholder="At least 8 characters" defaultValue="password123" />
      </Field>
      <Field label="I am a">
        <div className="grid grid-cols-3 gap-2">
          {["Student", "Staff", "Faculty"].map((r, i) => (
            <label
              key={r}
              className="flex cursor-pointer items-center justify-center rounded-lg border border-border px-2 py-2 text-sm has-[:checked]:border-primary has-[:checked]:bg-accent has-[:checked]:font-medium has-[:checked]:text-accent-foreground"
            >
              <input type="radio" name="role" defaultChecked={i === 0} className="sr-only" />
              {r}
            </label>
          ))}
        </div>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Blood group">
          <Select defaultValue="O-">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {bloodGroups.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Phone">
          <Input placeholder="01XXXXXXXXX" defaultValue="01712-345678" />
        </Field>
      </div>
      <Field label="Hall / Department">
        <Select defaultValue={halls[0]}>
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
      </Field>
      <Button className="w-full" size="lg" onClick={() => navigate({ to: "/verify" })}>
        Create account
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By signing up you agree to donate only when medically eligible.
      </p>
    </AuthShell>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs font-medium text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
