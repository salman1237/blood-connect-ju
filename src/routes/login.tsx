import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Blood Connect JU" },
      { name: "description", content: "Log in to Blood Connect JU to view and respond to campus blood requests." },
      { property: "og:title", content: "Login — Blood Connect JU" },
      { property: "og:description", content: "Access the JU campus blood donation network." },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to see active requests near your hall."
      footer={
        <>
          New here?{" "}
          <Link to="/signup" className="font-medium text-primary underline">
            Create an account
          </Link>
        </>
      }
    >
      <div className="space-y-1.5">
        <Label className="text-xs font-medium text-muted-foreground">University email</Label>
        <Input type="email" defaultValue="rifat@juniv.edu" />
      </div>
      <div className="space-y-1.5">
        <Label className="text-xs font-medium text-muted-foreground">Password</Label>
        <Input type="password" defaultValue="password123" />
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <Checkbox defaultChecked /> Keep me signed in
        </label>
        <Link to="/forgot-password" className="font-medium text-primary hover:underline">
          Forgot password?
        </Link>
      </div>
      <Button className="w-full" size="lg" onClick={() => navigate({ to: "/dashboard" })}>
        Login
      </Button>
    </AuthShell>
  );
}
