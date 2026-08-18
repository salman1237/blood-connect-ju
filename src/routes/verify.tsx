import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { MailCheck } from "lucide-react";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verify your email — Blood Connect JU" },
      { name: "description", content: "Enter the 6-digit code sent to your university email to verify your account." },
      { property: "og:title", content: "Verify your email — Blood Connect JU" },
      { property: "og:description", content: "Confirm your JU email address to activate your donor profile." },
    ],
  }),
  component: Verify,
});

function Verify() {
  const navigate = useNavigate();
  return (
    <AuthShell
      step="Step 2 of 3"
      title="Verify your email"
      subtitle="We sent a 6-digit code to rifat@juniv.edu. It expires in 10 minutes."
    >
      <div className="flex justify-center rounded-xl bg-surface py-6">
        <InputOTP maxLength={6} defaultValue="482">
          <InputOTPGroup>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button className="w-full" size="lg" onClick={() => navigate({ to: "/onboarding" })}>
        Verify and continue
      </Button>
      <p className="flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <MailCheck className="size-4" /> Didn't get it?{" "}
        <button className="font-medium text-primary hover:underline">Resend code</button>
      </p>
    </AuthShell>
  );
}
