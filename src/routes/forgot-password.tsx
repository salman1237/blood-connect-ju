import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — Blood Connect JU" },
      { name: "description", content: "Request a password reset link for your Blood Connect JU account." },
      { property: "og:title", content: "Forgot Password — Blood Connect JU" },
      { property: "og:description", content: "Reset access to your campus donor account." },
    ],
  }),
  component: ForgotPassword,
});

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Forgot your password?"
      subtitle="Enter your university email and we'll send a reset link."
      footer={
        <Link to="/login" className="font-medium text-primary underline">
          Back to login
        </Link>
      }
    >
      <div className="space-y-1.5">
        <Label className="text-xs font-medium text-muted-foreground">University email</Label>
        <Input type="email" placeholder="name@juniv.edu" defaultValue="rifat@juniv.edu" />
      </div>
      <Button className="w-full" size="lg" onClick={() => navigate({ to: "/reset-password" })}>
        Send reset link
      </Button>
    </AuthShell>
  );
}
