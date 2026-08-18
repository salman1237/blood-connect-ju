import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset Password — Blood Connect JU" },
      { name: "description", content: "Choose a new password for your Blood Connect JU donor account." },
      { property: "og:title", content: "Reset Password — Blood Connect JU" },
      { property: "og:description", content: "Set a new password and get back to saving lives on campus." },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <AuthShell title="Set a new password" subtitle="Choose something you haven't used before.">
      <div className="space-y-1.5">
        <Label className="text-xs font-medium text-muted-foreground">New password</Label>
        <Input type="password" defaultValue="newpassword123" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs font-medium text-muted-foreground">Confirm new password</Label>
        <Input type="password" defaultValue="newpassword123" />
      </div>
      <ul className="space-y-1 rounded-lg bg-surface p-3 text-xs text-muted-foreground">
        <li>✓ At least 8 characters</li>
        <li>✓ Contains a number</li>
        <li>· Contains an uppercase letter</li>
      </ul>
      <Button className="w-full" size="lg" onClick={() => navigate({ to: "/login" })}>
        Update password
      </Button>
    </AuthShell>
  );
}
